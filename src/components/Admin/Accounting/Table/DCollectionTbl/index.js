import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
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
import TotalCollection from './TotalCollection.js';
import moment from 'moment'
import { DialogContent } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import IconButton from '@material-ui/core/IconButton';

import Slide from '@material-ui/core/Slide';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';
import PrintIcon from '@material-ui/icons/Print';

import InfoTable from './../../Info';

class DCollectionTbl extends React.Component {
  componentDidMount(){
    let{accountingStore:{getOrder,getDistributors}}=this.props;
    getOrder();
    getDistributors()
  }
  render() {
    let{accountingStore:{listOfOrder,listOfUsers,order}}=this.props;

    function createData(orderInfo,orderNo,dispatcher, customerName,mname, lname, date, collection ) {
      return {orderInfo, orderNo,dispatcher, customerName,mname, lname, date, collection  };
    }
    

let rows = listOfOrder.map(order=> {

  return(createData(
    order,order.orderID,`${listOfUsers.filter(accs => accs.account_ID === order.dispatcher_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) }`,`${listOfUsers.filter(accs => accs.account_ID === order.account_ID).map((account)=> {return `${account.account_fName}`  } ) }`,`${listOfUsers.filter(accs => accs.account_ID === order.account_ID).map((account)=> {return `${account.account_mName}`  } ) }`,`${listOfUsers.filter(accs => accs.account_ID === order.account_ID).map((account)=> {return `${account.account_lName}`  } ) }`,order.orderDate,<span>&#8369;{order.orderTotalAmount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>

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
  { id: 'orderNo', numeric: false, disablePadding: false, label: 'Order #' },
  { id: 'dispatcher', numeric: true, disablePadding: false, label: 'Dispatcher' },
  { id: 'customerName', numeric: true, disablePadding: false, label: 'Customer' },
  { id: 'date', numeric: true, disablePadding: false, label: 'Date' },
  { id: 'collection', numeric: true, disablePadding: false, label: 'Collection' },
];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#208769",
    color: theme.palette.common.white,
  },

}))(TableCell);

function DCTableHead(props) {
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

DCTableHead.propTypes = {
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
  },excel:{
    backgroundColor:'#009688',
    padding:'4px',
    marginBottom:'8px',
    color:'white',
    borderRadius:'5px',
  
    
  }
}));


let getuname = JSON.parse(sessionStorage.getItem('userData'))

let rowss =  listOfOrder.map(product => {
  
  return (

    listOfOrder.filter((amount) => (amount.distributor_ID === getuname.distributor_ID ))
    .reduce((sum, record) => parseInt(sum) + parseInt(record.orderTotalAmount) , 0)



    );

 })

 let mysearch = props =>{
  return this.props.mysearch
}
let sdate = moment(this.props.startdate,'MMM/DD/YYYY');
let edate = moment(this.props.enddate,'MMM/DD/YYYY');
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
 function DCTable() {
  const classes = useStyles();
  const [orders, setOrders] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
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

  let print =()=>{
    window.print()
  }
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
                    filename="DeliveryCollection"
                    sheet="tablexls"
                   
                    buttonText="Export to Excel"/>
                     </div>

      <Grid container lg={12} sm={12} xs={12}>
      <Paper className={classes.paper}>
     
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
            id="table-to-xls"
          >
            <DCTableHead
              classes={classes}
              numSelected={selected.length}
              order={orders}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.orderNo);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  let mydate =moment(row.date,'MMM/DD/YYYY')
                  let strmydate =moment(mydate).format('MMM/DD/YYYY')
                  let strsdate = moment(sdate).format('MMM/DD/YYYY')
                  let stredate = moment(edate).format('MMM/DD/YYYY')
                  if( edate._isValid === true){
                    if(  mydate.isBetween(sdate,edate)  || strmydate == strsdate || strmydate == stredate){
                     
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
                     
                      <TableCell component="th" id={labelId} scope="row" >
                        {row.orderNo}
                      </TableCell>
                      <TableCell align="right">{row.dispatcher}</TableCell>
                      <TableCell align="right">{row.customerName} {row.mname} {row.lname}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                      <TableCell align="right">{row.collection}</TableCell>
                    </TableRow>
                  );

                }
                else{
                  return null
               
              }

                }
                else if (filter.length !== 0 ){
                  if(row.orderNo.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) || row.customerName.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) || row.mname.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) || row.lname.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) || row.date.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) 
                   
                    ){
                    return (
                      <TableRow
                        hover
                        // onClick={(event) => handleClick(event, row.referenceNo)}
                        onClick={()=>{handleClickOpen(row.orderInfo)}}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.referenceNo}
                        // selected={isItemSelected}
                      >
                        
                        <TableCell component="th" id={labelId} scope="row">
                          {row.referenceNo}
                        </TableCell>
                        <TableCell align="right">{row.custfname} {row.mname} {row.lname}</TableCell>
                        <TableCell align="right">&#8369;{row.amount}</TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                        <TableCell align="right">{row.status}</TableCell>
                      </TableRow>
                  );
                  
                  }  else{
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
                 
                  <TableCell component="th" id={labelId} scope="row" >
                    {row.orderNo}
                  </TableCell>
                  <TableCell align="right">{row.dispatcher}</TableCell>
                  <TableCell align="right">{row.customerName} {row.mname} {row.lname}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.collection}</TableCell>
                </TableRow>
                   );
  
                  })}
              
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}

<TableRow  colSpan={6}>
                 
                 <TableCell colSpan={5} ><Grid item xs={12} sm={12} style={{textAlign:"right",backgroundColor:"#208769"}}> 
  <TotalCollection amount={`${rowss.pop()}`} />
  </Grid></TableCell>
                </TableRow>
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

      
    {/* <Grid item xs={12} sm={12} style={{textAlign:"right",borderRadius:"5px",backgroundColor:"#208769"}}> 
    <TotalCollection amount={`${rowss.pop()}`} />
    </Grid> */}
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />


    </Grid>


    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <InfoIcon/>
            </IconButton>
            <Typography variant="h6" noWrap style={{fontWeight:"bold",color:"white",padding:'5px'}} className={classes.title} >
            <span style={{color:"orange"}}>TRADE</span>TECH
          </Typography>
            <Button autoFocus startIcon={<PrintIcon/>} onClick={()=>print()} variant='contained' style={{backgroundColor:'#208769',color:'white',marginRight:'12px'}}>
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
  <DCTable/>
)
}
}

export default inject('accountingStore')(observer(DCollectionTbl))

