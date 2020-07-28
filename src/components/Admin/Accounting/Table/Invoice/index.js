
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import { makeStyles ,withStyles} from '@material-ui/core/styles';
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


import { DialogContent } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import IconButton from '@material-ui/core/IconButton';

import Slide from '@material-ui/core/Slide';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';
import PrintIcon from '@material-ui/icons/Print';

import InfoTable from './../../Info';
 class InvoiceReceipt extends React.Component {
  componentDidMount(){
    let{accountingStore:{getOrder,getDistributors}}=this.props;
    getOrder();
    getDistributors()
  }
  
    render() {
      let{accountingStore:{listOfOrder,listOfUsers,order}}=this.props;

      function createData(orderInfo,orderNo,Odate, customerName,mname,lname, invoice, receipt ) {
        return { orderInfo,orderNo,Odate, customerName,mname,lname, invoice, receipt  };
      }
      
      let rows = listOfOrder.map(order=> {
   
        return(createData(
          order,order.orderID,order.orderDate,`${listOfUsers.filter(accs => accs.account_ID === order.account_ID).map((account)=> {return `${account.account_fName}`  } ) }`,`${listOfUsers.filter(accs => accs.account_ID === order.account_ID).map((account)=> {return `${account.account_mName}`  } ) }`,`${listOfUsers.filter(accs => accs.account_ID === order.account_ID).map((account)=> {return `${account.account_lName}`  } ) }`,order.orderID,order.orderID
      
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
  { id: 'orderNo', numeric: false, disablePadding: false, label: 'Ref #' },
  { id: 'Odate', numeric:false, disablePadding: false, label: 'Date' },
  { id: 'customerName', numeric: false, disablePadding: false, label: 'Customer' },
  { id: 'invoice', numeric: true, disablePadding: false, label: 'Invoice' },
  { id: 'receipt', numeric: true, disablePadding: false, label: 'Receipt' },

];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#208769',
    color: theme.palette.common.white,
  },
  
}))(TableCell);

function InvoiceHead(props) {
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

InvoiceHead.propTypes = {
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
  },appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    color:'white'
  },
}));
let mysearch = props =>{
  return this.props.mysearch
}
let sdate = moment(this.props.startdate,'MMM/DD/YYYY');
let edate = moment(this.props.enddate,'MMM/DD/YYYY');
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
 function Invoice() {
  const classes = useStyles();
  const [orders, setOrders] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const filter = mysearch();
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && orders === 'asc';
    setOrders(isAsc ? 'desc' : 'asc');
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
      <Paper className={classes.paper}>
     
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <InvoiceHead
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
                  const isItemSelected = isSelected(row.orderNo);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  let mydate =moment(row.date,'MMM/DD/YYYY')
                  if(filter.length !== 0 || edate._isValid === true){
                    if(row.orderNo.startsWith(filter) || row.mname.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) || row.lname.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) || row.customerName.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase())|| row.Odate.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) || mydate.isBetween(sdate,edate)  || mydate == sdate || mydate == edate){
                  return (
                    <TableRow
                      hover
                      // onClick={(event) => handleClick(event, row.orderNo)}
                      onClick={()=>{handleClickOpen(row.orderInfo)}}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.orderNo}
                      // selected={isItemSelected}
                    >
                     
                      <TableCell component="th" id={labelId} scope="row">
                        {row.orderNo}
                      </TableCell>
                      <TableCell align="left">{row.Odate}</TableCell>
                  <TableCell align="left">{row.customerName} {row.mname} {row.lname}</TableCell>
                      <TableCell align="right">{row.invoice}</TableCell>
                      <TableCell align="right">{row.receipt}</TableCell>
                    
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
                  // onClick={(event) => handleClick(event, row.orderNo)}
                  onClick={()=>{handleClickOpen(row.orderInfo)}}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.orderNo}
                  // selected={isItemSelected}
                >
                 
                  <TableCell component="th" id={labelId} scope="row">
                    {row.orderNo}
                  </TableCell>
                  <TableCell align="left">{row.Odate}</TableCell>
              <TableCell align="left">{row.customerName} {row.mname} {row.lname}</TableCell>
                  <TableCell align="right">{row.invoice}</TableCell>
                  <TableCell align="right">{row.receipt}</TableCell>
                
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
  <Invoice/>
)
}
}

export default inject('accountingStore')(observer(InvoiceReceipt))
