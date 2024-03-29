
import { Button,Grid ,Slide } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import { makeStyles, ThemeProvider, withStyles } from '@material-ui/core/styles';
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
import theme from './../../../theme';

import Details from './Details';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

class FailedTable extends React.Component {


  componentDidMount(){
      let{managerStore:{getOrder,getReport}}=this.props;
      getOrder();
      getReport()
      // .then(resp => this.setState({"listOfReport": resp}))
  }
  state = { 
    listOfReport:[],
   }
  render() { 

function createData(ref, date, reason, moreinfo) {
  return { ref, date, reason, moreinfo };
}

let {managerStore:{listOfOrder,listOfReport,order}}=this.props;
let myId =JSON.parse(sessionStorage.getItem('userData'))
let filterComplete =listOfOrder.filter(order => {
   if(order.orderStatus === 'Failed'  && order.distributor_ID === myId.distributor_ID ) {
       return order
   }

} )
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(sorder, orderBy) {
  return sorder === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const sorder = comparator(a[0], b[0]);
    if (sorder !== 0) return sorder;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'ref', numeric: false, disablePadding: false, label: 'Reference #' },
  { id: 'date', numeric: true, disablePadding: false, label: 'Order Date' },
  { id: 'reason', numeric: true, disablePadding: false, label: 'Reason' },
  { id: 'moreinfo', numeric: true, disablePadding: false, label: 'More Info' },
 
];


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#208769',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function FailedHead(props) {
  const { classes, onSelectAllClick, sorder, orderBy, numSelected, rowCount, onRequestSort } = props;
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
            sortDirection={orderBy === headCell.id ? sorder : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? sorder : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {sorder === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

FailedHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  sorder: PropTypes.oneOf(['asc', 'desc']).isRequired,
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
  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Failed() {
  const classes = useStyles();
  const [sorder, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('date');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);


  
  const handleClickOpen = (ord) => {

    
    order.setProperty('orderID',ord.orderID)
    order.setProperty('orderItems',ord.orderItems)
    order.setProperty('order_Quantity',ord.order_Quantity)
    order.setProperty('modeOfPayment',ord.modeOfPayment)
    order.setProperty('orderDate',ord.orderDate)
    order.setProperty('orderStatus',ord.orderStatus)
    order.setProperty('paymentStatus',ord.paymentStatus)
    order.setProperty('account_ID',ord.account_ID)
    order.setProperty('orderDateCompleted',ord.orderDateCompleted)
    order.setProperty('distributor_ID',ord.distributor_ID)
    order.setProperty('packer_ID',ord.packer_ID)
    order.setProperty('dispatcher_ID',ord.dispatcher_ID)
    order.setProperty('order_addedInfo',ord.order_addedInfo)
    order.setProperty('orderTotalAmount',ord.orderTotalAmount)
    // getOrderD();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  let rows = filterComplete.map(orderss => {
return(createData(
    orderss.orderID,orderss.orderDate,`${listOfReport.filter(rpt => rpt.order_ID === orderss.orderID).map(ordrpt =>{
      return ordrpt.report_Detail

    })}`,<div><ThemeProvider theme={theme}> <Button size='small' variant="outlined" color="primary" 
  onClick={()=>{handleClickOpen(orderss)}}>
    Details
  </Button></ThemeProvider></div>
))
})


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && sorder === 'asc';
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
      <Paper className={classes.paper}>
      
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <FailedHead
              classes={classes}
              numSelected={selected.length}
              order={sorder}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(sorder, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.ref);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.ref)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.ref}
                      selected={isItemSelected}
                    >
            
                      <TableCell component="th" id={labelId} scope="row">
                        {row.ref}
                      </TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                      <TableCell align="right">{row.reason}</TableCell>
                      <TableCell align="right">{row.moreinfo}</TableCell>
                     
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


<Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth='sm'
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >

        <DialogContent  >
          <Grid style={{margin:'auto'}}>
         <Details />
         </Grid>
        </DialogContent>
        <DialogActions>
        
          <ThemeProvider theme={theme}>
          <Button onClick={handleClose} style={{backgroundColor:'#F7A31C',color:'white'}} variant="contained">
            Close
          </Button>
          </ThemeProvider>
        </DialogActions>
      </Dialog>

    </div>
  );
}

return ( 
  <Failed/>
);
}
}

export default inject('managerStore')(observer(FailedTable));

