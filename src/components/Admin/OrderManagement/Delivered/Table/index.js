
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
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

import PrintIcon from '@material-ui/icons/Print';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import InfoIcon from '@material-ui/icons/Info';
import { DialogContent } from '@material-ui/core';
import InfoTable from './../../Info';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


class Completed extends React.Component {

  componentDidMount(){
    let {orderStore:{getOrder,getAccounts}}=this.props;
    getOrder();
    getAccounts();
  } 
  
    render() {
      let {orderStore:{listOfOrder,listOfUsers,order}}=this.props;

function createData(orderInfo,ref,date, dateCompleted, paystat, cust, pack, dist, paymethod) {
  return { orderInfo,ref,date, dateCompleted, paystat, cust, pack, dist, paymethod };
}

let myId = JSON.parse(sessionStorage.getItem('userData'))

let filOrder = listOfOrder.filter(orders => orders.orderStatus ==='Delivered' && orders.distributor_ID === myId.distributor_ID)


let rows = filOrder.map(order=> {

  return(createData(
  
    order,order.orderID,order.orderDate,order.orderDateCompleted,order.paymentStatus,<span > {listOfUsers.filter(accs => accs.account_ID === order.account_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) }</span>,
      <span > {listOfUsers.filter(accs => accs.account_ID === order.packer_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) }</span>,<span > {listOfUsers.filter(accs => accs.account_ID === order.dispatcher_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) }</span>,order.modeOfPayment
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

function getComparator(orders, orderBy) {
  return orders === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const orders = comparator(a[0], b[0]);
    if (orders !== 0) return orders;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'ref', numeric: false, disablePadding: false, label: 'Ref' },
  { id: 'date', numeric: true, disablePadding: false, label: 'Order Date' },
  { id: 'dateCompleted', numeric: true, disablePadding: false, label: 'Date Completed' },
  { id: 'paystat', numeric: true, disablePadding: false, label: 'Payment Status' },
  { id: 'cust', numeric: true, disablePadding: false, label: 'Customer' },
  { id: 'pack', numeric: true, disablePadding: false, label: 'Packer' },
  { id: 'dist', numeric: true, disablePadding: false, label: 'Dispatcher' },
  { id: 'paymethod', numeric: true, disablePadding: false, label: 'Payment Method' },
 
  
];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor:'#208769',
    color: theme.palette.common.white,
  },

}))(TableCell);

function EnhancedTableHead(props) {
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

EnhancedTableHead.propTypes = {
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
    minWidth: 750,
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
  },appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    color:'white'
  },excel:{
    backgroundColor:'#009688',
    padding:'4px',
    marginBottom:'8px',
    color:'white',
    borderRadius:'5px',
    
  }
}));
let filter =this.props.mysearch;
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
 function CompletedTable() {
  const classes = useStyles();
  const [orders, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && orders === 'asc';
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


  const handleClickOpen = (orderinfo) => {
    order.setProperty('orderItems',orderinfo.orderItems)
    order.setProperty('orderPrice',orderinfo.orderPrice)
    order.setProperty('order_Quantity',orderinfo.order_Quantity)
    order.setProperty('orderID',orderinfo.orderID)
    order.setProperty('modeOfPayment',orderinfo.modeOfPayment)
    order.setProperty('orderDate',orderinfo.orderDate)
    order.setProperty('orderStatus',orderinfo.orderStatus)
    order.setProperty('paymentStatus',orderinfo.paymentStatus)
    order.setProperty('orderTotalAmount',orderinfo.orderTotalAmount)
    order.setProperty('account_ID',orderinfo.account_ID)
    order.setProperty('distributor_ID',orderinfo.distributor_ID)
    order.setProperty('packer_ID',orderinfo.packer_ID)
    order.setProperty('dispatcher_ID',orderinfo.dispatcher_ID)
    order.setProperty('order_addedInfo',orderinfo.order_addedInfo)
    order.setProperty('order_totalPayment',orderinfo.order_totalPayment)
    order.setProperty('orderReturnDate  ',orderinfo.orderReturnDate)
    order.setProperty('orderDateCompleted',orderinfo.orderDateCompleted)
    order.setProperty('orderCustomerBalance',orderinfo.orderCustomerBalance)
    order.setProperty('orderDueDate',orderinfo.orderDueDate)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
                    filename="CompletedOrders"
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
            <EnhancedTableHead
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
                  const isItemSelected = isSelected(row.ref);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  if(filter.length !== 0){
                    if( row.ref.startsWith(filter) || 
                    row.date.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) ||
                    row.dateCompleted.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) ||
                    row.paystat.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase())){
                  return (
                    <TableRow
                      hover
                      // onClick={(event) => handleClick(event, row.ref)}
                      onClick={()=>{handleClickOpen(row.orderInfo)}}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.ref}
                      // selected={isItemSelected}
                    >
                  
                      <TableCell component="th" id={labelId} scope="row" >
                        {row.ref}
                      </TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                      <TableCell align="right">{row.dateCompleted}</TableCell>
                      <TableCell align="right">{row.paystat}</TableCell>
                      <TableCell align="right">{row.cust}</TableCell>
                      <TableCell align="right">{row.pack}</TableCell>
                      <TableCell align="right">{row.dist}</TableCell>
                      <TableCell align="right">{row.paymethod}</TableCell>
                      
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
                    // onClick={(event) => handleClick(event, row.ref)}
                    onClick={()=>{handleClickOpen(row.orderInfo)}}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.ref}
                    // selected={isItemSelected}
                  >
                
                    <TableCell component="th" id={labelId} scope="row" >
                      {row.ref}
                    </TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">{row.dateCompleted}</TableCell>
                    <TableCell align="right">{row.paystat}</TableCell>
                    <TableCell align="right">{row.cust}</TableCell>
                    <TableCell align="right">{row.pack}</TableCell>
                    <TableCell align="right">{row.dist}</TableCell>
                    <TableCell align="right">{row.paymethod}</TableCell>
                    
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

<Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <InfoIcon/>
            </IconButton>
            <Typography variant="h6" noWrap style={{fontWeight:"bold",color:"white",padding:'5px'}} className={classes.title} >
            <span style={{color:"orange"}}>TRADE</span>TECH
          </Typography>
            <Button autoFocus startIcon={<PrintIcon/>}  onClick={handleClose} variant='contained' style={{backgroundColor:'#208769',color:'white',marginRight:'12px'}}>
              Print
            </Button>
            <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close" variant='contained'>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
     <DialogContent>
<InfoTable/>
     </DialogContent>
      </Dialog>
    </div>
  );
}


return (
  <CompletedTable/>
  )
  }
  }
  
  export default inject('orderStore')(observer(Completed))