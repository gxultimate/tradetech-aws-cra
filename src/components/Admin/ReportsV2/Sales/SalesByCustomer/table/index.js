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
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { Button } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
class SBC extends React.Component {
  componentDidMount(){
    let {reportStore:{getOrder,getAccounts}}=this.props;
    getOrder();
    getAccounts();
   
  }
  render() {
  let {reportStore:{listOfUsers,listOfOrder,account,getOrderD,order}}=this.props;

function createData(usrid,name,mname,lname, nvoice, total) {
  return {usrid, name,mname,lname, nvoice, total };
}

let rows =listOfUsers.filter(user => user.account_accessType ==='customer').map( usr=>{

  return(createData(
    usr.account_ID,`${usr.account_fName}`,`${usr.account_mName}`,`${usr.account_lName}`,Number(listOfOrder.filter(order => order.account_ID === usr.account_ID).length),Number(listOfOrder.filter((total) => total.account_ID === usr.account_ID)
         .reduce((sum, record) => Number(sum) + Number(record.orderTotalAmount)
         , 0))
  ))
}

)
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
  { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
  { id: 'nvoice', numeric: true, disablePadding: false, label: 'Invoice Count' },
  { id: 'total', numeric: true, disablePadding: false, label: 'Total' },

];


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#208769',
    color: theme.palette.common.white,
  },
 
}))(TableCell);


function SBCTablesHead(props) {
  const { classes, onSelectAllClick, orders, orderBy, numSelected, rowCount, onRequestSort } = props;
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
            sortDirection={orderBy === headCell.id ? orders : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? orders : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {orders === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

SBCTablesHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  orders: PropTypes.oneOf(['asc', 'desc']).isRequired,
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
    width: '100%',
    minWidth:950
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
  } , appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    color:'white'
  },excel:{
    backgroundColor:'#009688',
    padding:'5px',
    marginBottom:'8px',
    color:'white',
    borderRadius:'5px',
    
  }
}));
let filter = this.props.mysearch;
 

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function SBCTables() {
  const classes = useStyles();
  const [orders, setOrders] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [openI, setOpenI] = React.useState(false);
  
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && orders === 'asc';
    setOrders(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  const profile = custprof => {

    // account.setProperty('account_ID',custprof)
    // order.setProperty('account_ID',custprof)
    
    //    setOpenI(true);
     
      
     
     }
     const handleClose = () => {
  
      setOpenI(false);
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
                    filename="SalesByCustomer"
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
            <SBCTablesHead
              classes={classes}
              numSelected={selected.length}
              order={orders}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(orders, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.usrid);
                  const labelId = `enhanced-table-checkbox-${index}`;
                
                  
                  if(filter.length !== 0){
                                  if( row.name.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) || 
                                  row.mname.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) ||
                                  row.lname.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase())){


                                 
                                return (
                    <TableRow
                      hover
                      // onClick={(event) => handleClick(event, row.usrid)}
                       onClick={()=>{profile(row.usrid)}}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.usrid}
                      // selected={isItemSelected}
                    >
                     
                      <TableCell component="th" id={labelId} scope="row">
                        {row.name} {row.mname} {row.lname}
                      </TableCell>
                      <TableCell align="right">{row.nvoice}</TableCell>
                      <TableCell align="right">&#8369;{row.total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              
                    </TableRow>
                 )
                                            }
                                            else{
                                              return null
                                            }
                                          }
                                          return(

                                            <TableRow
                                            hover
                                            // onClick={(event) => handleClick(event, row.usrid)}
                                             onClick={()=>{profile(row.usrid)}}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.usrid}
                                            // selected={isItemSelected}
                                          >
                                           
                                            <TableCell component="th" id={labelId} scope="row">
                                            {row.name} {row.mname} {row.lname}
                                            </TableCell>
                                            <TableCell align="right">{row.nvoice}</TableCell>
                                            <TableCell align="right">&#8369;{row.total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
                                    
                                          </TableRow>

                                           )
                        } )}
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
  <SBCTables/>
 )
 }
 }
 
 export default inject('reportStore')(observer(SBC))
