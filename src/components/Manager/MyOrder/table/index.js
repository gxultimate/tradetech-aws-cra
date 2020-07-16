import { IconButton } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
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
import Typography from '@material-ui/core/Typography';
import AssignmentReturnedOutlinedIcon from '@material-ui/icons/AssignmentReturnedOutlined';
import CloseIcon from '@material-ui/icons/Close';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MuiAlert from '@material-ui/lab/Alert';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import React from 'react';
import Lists from './Stafflist';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Items from './Items'


 class MyOrders extends React.Component {

    componentDidMount(){

        let {managerStore:{getAccounts,getOrder}}=this.props;
        getAccounts();
        getOrder().then(res => this.setState({"listOfOrder": res}));
    
      }
      state={
        listOfUsers:[],
        listOfOrder:[],
       }
      render() { 
     
      
          let {managerStore:{order,listOfOrder,listOfUsers}}=this.props;
          let myId = JSON.parse(sessionStorage.getItem('userData'))
          let getId = JSON.parse(sessionStorage.getItem('userData'))


          function createData(ref, customer,mname,lname, date, orderStat,items,assign) {
            return { ref, customer,mname,lname, date, orderStat,items,assign };
          }

          let orders = this.state.listOfOrder.filter((order) => {
  
  
            // order.distributor_ID === getId.distributor_ID && order.orderStatus === 'Pending'
          
            if (order.distributor_ID === getId.distributor_ID && order.orderStatus === 'Pending' ){
              if( getId.staff_Role==='Packer Manager'){
                 return  order
               }
             } 
             else if (order.distributor_ID === getId.distributor_ID && order.orderStatus === 'Transfer' ){
               if( getId.staff_Role==='Dispatcher Manager'){
                  return  order
                }
              } 
          
          
          
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
  { id: 'ref', numeric: false, disablePadding: false, label: 'Ref#' },
  { id: 'customer', numeric: true, disablePadding: false, label: 'Customer' },
  { id: 'date', numeric: true, disablePadding: false, label: 'Date' },
  { id: 'orderStat', numeric: true, disablePadding: false, label: 'Status' },
  
  { id: 'items', numeric: true, disablePadding: false, label: 'Items' },
  { id: 'assign', numeric: true, disablePadding: false, label: 'Assign' },
];

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#208769',
      color: theme.palette.common.white,
    },
  
  }))(TableCell);

function OrderTableHead(props) {
  const { classes,  order, orderBy, numSelected,  onRequestSort } = props;
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

OrderTableHead.propTypes = {
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
  },
}));
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);



 function OrderTable() {
  const classes = useStyles();
  const [orderS, setOrderS] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const [openD, setOpenD] = React.useState(false);

  const [Iopen, IsetOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    setOpenD(false)
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    IsetOpen(false);
  };

  const assign = (myorder) => {
  setOpenD(true);

  order.setProperty("orderID", myorder.orderID)
    // console.log(getId.staff_Role,'sadsa')
// if(myorder != null){

//   order.setProperty("orderID", myorder.orderID)


 


//   notif.setProperty('notif_ID',`${getHash(date.getHours())}-${ Math.floor(1000 + Math.random() * 9000)}`)
//   notif.setProperty('account_ID',myorder.account_ID)
//   notif.setProperty('distributor_ID',myId.distributor_ID)
//   notif.setProperty('notif_subject','Order Process')
//   notif.setProperty('sender_ID',myId.account_ID)
//   notif.setProperty("order_ID", myorder.orderID)

//   notif.setProperty('notif_date',moment().format('MMM/DD/YYYY,h:mm:ssa'))
//   notif.setProperty('notif_status','unread')
  



if (myorder.distributor_ID === getId.distributor_ID && myorder.orderStatus === 'Pending' ){
  if( getId.staff_Role==='Packer Manager'){
   
      order.setProperty("orderStatus",'Packing')
        // notif.setProperty('notif_description',`Order ${myorder.orderID} is now on Packing`)
   }
 } 
 else if (myorder.distributor_ID === getId.distributor_ID && myorder.orderStatus === 'Transfer' ){
   if( getId.staff_Role==='Dispatcher Manager'){
  
    order.setProperty("orderStatus",'Dispatch')
      // notif.setProperty('notif_description',`Order ${myorder.orderID} is now on Deliver`)
    }
   
    // addNotif();
// assignOrder(); 
// setOpen(true);
}else{
  setOpens(false);
}


  } 

  let items =(itms)=>{
    order.setProperty('orderItems',itms.orderItems)
    order.setProperty('order_Quantity',itms.order_Quantity)
    IsetOpen(true)


  }

  let rows = orders.map(orderss =>{
    let count = orderss.orderItems.length;
    return(createData(
    
    orderss.orderID,`${listOfUsers.filter(accs => accs.account_ID === orderss.account_ID).map((account)=> {return `${account.account_fName}`  } ) }`,`${listOfUsers.filter(accs => accs.account_ID === orderss.account_ID).map((account)=> {return `${account.account_mName}`  } ) }`,`${listOfUsers.filter(accs => accs.account_ID === orderss.account_ID).map((account)=> {return `${account.account_lName}`  } ) }`,orderss.orderDate,orderss.orderStatus,<div><IconButton onClick={()=>items(orderss)}  size="medium" style={{backgroundColor:"#31AF91"}} > <Badge color="secondary" badgeContent={count} > <ListAltIcon /> </Badge></IconButton> </div>,
    <div><IconButton  onClick={()=>{assign(orderss)}}  size="medium" style={{backgroundColor:"#31AF91"}} > <AssignmentReturnedOutlinedIcon /> </IconButton></div>
    
    
    
    
    ))
    
    
    
    })



  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrderS(isAsc ? 'desc' : 'asc');
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
         <Snackbar open={open} autoHideDuration={2000}  anchorOrigin={{vertical:'center',horizontal:'center'}}>
        <Alert  severity="success">
        Order Assign Successfully!
        </Alert>
      </Snackbar>

      <Snackbar open={opens} autoHideDuration={2000}  anchorOrigin={{vertical:'center',horizontal:'center'}}>
        <Alert  severity="error">
         Order Assigning Error!
        </Alert>
      </Snackbar>
      <Paper className={classes.paper}>
      
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <OrderTableHead
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
                     
                      <TableCell component="th" id={labelId} scope="row" >
                        {row.ref}
                      </TableCell>
                  <TableCell align="right">{row.customer} {row.mname} {row.lname}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                      <TableCell align="right">{row.orderStat}</TableCell>
                     
                      <TableCell align="right">{row.items}</TableCell>
                      <TableCell align="right">{row.assign}</TableCell>
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



<Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={openD} maxWidth="md">
        <DialogTitle id="customized-dialog-title" onClose={handleClose} style={{backgroundColor:'#208769'}}>
       <span style={{color:'white'}}> Select staff</span> 
        </DialogTitle>
        <DialogContent dividers>
<Lists/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} style={{ backgroundColor:'#F7A31C',color:'white'}} variant='contained' size='small'>
           Close
          </Button>
        </DialogActions>
      </Dialog>


      <Dialog
        open={Iopen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle variant='subtitle2'>Items</DialogTitle>
        <DialogContent>
       <Items />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{backgroundColor:'#F7A31C',color:'white'}} variant='contained' size='small'>
            Close
          </Button>
         
        </DialogActions>
      </Dialog>

    </div>
  );
}
return (
    <OrderTable/>
 )
}
}

export default inject('managerStore')(observer(MyOrders))

