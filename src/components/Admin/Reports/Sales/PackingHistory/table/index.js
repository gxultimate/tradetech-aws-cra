import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
class PackerH extends React.Component {

  componentDidMount(){
    let {reportStore:{getOrder,getAccounts}}=this.props;
    getOrder()
    getAccounts()
  }

  render() {
let {reportStore:{listOfOrder,listOfUsers}}=this.props;

function createData(name, ref, cust, NOI, rdate, stat,amount, bal) {
  return { name, ref, cust, NOI, rdate, stat,amount, bal };
}

let rows = listOfOrder.map(order => {
  return (createData(
    order.orderDate,order.orderID,
     `${listOfUsers.filter( user => user.account_ID === order.account_ID).map(uname =>{
        return ( `${uname.account_fName} ${uname.account_mName} ${uname.account_lName}`)
      })}`,order.order_Quantity.length,order.orderReturnDate,order.orderStatus,`${order.orderTotalAmount}`,0
  ))
})


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Order Date' },
  { id: 'ref', numeric: true, disablePadding: false, label: 'Ref#' },
  { id: 'cust', numeric: true, disablePadding: false, label: 'Customer' },
  { id: 'NOI', numeric: true, disablePadding: false, label: 'No. of Items' },
  { id: 'rdate', numeric: true, disablePadding: false, label: 'Return Date' },
  { id: 'stat', numeric: true, disablePadding: false, label: 'Status' },
  { id: 'amount', numeric: true, disablePadding: false, label: 'Amount' },
  { id: 'bal', numeric: true, disablePadding: false, label: 'Balance' },
];


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#208769',
    color: theme.palette.common.white,
  },
 
}))(TableCell);


function PackingHTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
       
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

PackingHTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: '100%',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },excel:{
    backgroundColor:'#009688',
    padding:'4px',
    marginBottom:'8px',
    color:'white',
    borderRadius:'5px',
    
  }
}));

let filter = this.props.mysearch

let sdate = moment(this.props.startdate,'MMM/DD/YYYY');
let edate = moment(this.props.enddate,'MMM/DD/YYYY');
function PackingHTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <div style={{textAlign:'right'}}>
      <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className={classes.excel}
                    table="table-to-xls"
                    filename="PackingHistory"
                    sheet="tablexls"
                   
                    buttonText="Export to Excel"/>
                     </div>
      <Paper className={classes.paper}>
       
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
            id="table-to-xls"
          >
            <PackingHTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  let mydate =moment(row.name,'MMM/DD/YYYY')
                  if(filter.length !== 0 || edate._isValid === true){
                    if( row.ref.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) || row.cust.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) || row.stat.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) 
                   
                    ||  mydate.isBetween(sdate,edate)  || mydate == sdate || mydate == edate){
                     
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                     
                      <TableCell component="th" id={labelId} scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.ref}</TableCell>
                      <TableCell align="right">{row.cust}</TableCell>
                      <TableCell align="right">{row.NOI}</TableCell>
                      <TableCell align="right">{row.rdate}</TableCell>
                      <TableCell align="right">{row.stat}</TableCell>
                      <TableCell align="right">&#8369;{row.amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}.00</TableCell>
                      <TableCell align="right">&#8369;{row.bal.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}.00</TableCell>
                    </TableRow>
                     );

                    }
                    else{
                      return null
                   
                  }
    
                    }
                    return (
                      <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                     
                      <TableCell component="th" id={labelId} scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.ref}</TableCell>
                      <TableCell align="right">{row.cust}</TableCell>
                      <TableCell align="right">{row.NOI}</TableCell>
                      <TableCell align="right">{row.rdate}</TableCell>
                      <TableCell align="right">{row.stat}</TableCell>
                      <TableCell align="right">&#8369;{row.amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}.00</TableCell>
                      <TableCell align="right">&#8369;{row.bal.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}.00</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}

return (
  <PackingHTable/>
)
}
}

export default inject('reportStore')(observer(PackerH))
