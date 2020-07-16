import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {IconButton} from '@material-ui/core';
import {inject,observer} from 'mobx-react'
import moment from 'moment'
import AssignmentReturnedOutlinedIcon from '@material-ui/icons/AssignmentReturnedOutlined';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
class Ordertable extends React.Component {

  render() { 
    function getHash(input){
      var hash = 0, len = input.length;
      for (var i = 0; i < len; i++) {
        hash  = ((hash << 5) - hash) + input.charCodeAt(i);
        hash |= 0; // to 32bit integer
      }
    
              
    
      return hash;
    }
  let date = new Date();
    let {managerStore:{assignOrder,order,listOfOrder,listOfUsers,notif,addNotif}}=this.props;
    let myId = JSON.parse(sessionStorage.getItem('userData'))


   
    
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#208769",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(order, customer, address, date, schedule,action,assign) {
  return { order, customer, address, date, schedule,action,assign };
}

let getId = JSON.parse(sessionStorage.getItem('userData'))


let orders = listOfOrder.filter((order) => {
  
  
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





const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
let myyyId=this.props.id;
 function OrderTable() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const assign = (myorder) => {
  
    // console.log(getId.staff_Role,'sadsa')
if(myorder != null){

  order.setProperty("orderID", myorder.orderID)


 


  notif.setProperty('notif_ID',`${getHash(date.getHours())}-${ Math.floor(1000 + Math.random() * 9000)}`)
  notif.setProperty('account_ID',myorder.account_ID)
  notif.setProperty('distributor_ID',myId.distributor_ID)
  notif.setProperty('notif_subject','Order Process')
  notif.setProperty('sender_ID',myId.account_ID)
  notif.setProperty("order_ID", myorder.orderID)

  notif.setProperty('notif_date',moment().format('MMM/DD/YYYY,h:mm:ssa'))
  notif.setProperty('notif_status','unread')
  



if (myorder.distributor_ID === getId.distributor_ID && myorder.orderStatus === 'Pending' ){
  if( getId.staff_Role==='Packer Manager'){
    order.setProperty("packer_ID",myyyId)
      order.setProperty("orderStatus",'Packing')
        notif.setProperty('notif_description',`Order ${myorder.orderID} is now on Packing`)
   }
 } 
 else if (myorder.distributor_ID === getId.distributor_ID && myorder.orderStatus === 'Transfer' ){
   if( getId.staff_Role==='Dispatcher Manager'){
    order.setProperty("dispatcher_ID",myyyId)
    order.setProperty("orderStatus",'Dispatch')
      notif.setProperty('notif_description',`Order ${myorder.orderID} is now on Deliver`)
    }
  } 
    addNotif();
assignOrder(); 
setOpen(true);
}else{
  setOpens(false);
}
  } 



  let rows = orders.map(orderss =>{
    return(createData(
    
    orderss.orderID,orderss.modeOfPayment,orderss.orderDate,orderss.paymentStatus,orderss.orderStatus,<span> {listOfUsers.filter(accs => accs.account_ID === orderss.account_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) }</span>,
    <div><IconButton  onClick={()=>{assign(orderss)}}  size="medium" style={{backgroundColor:"#31AF91"}} > <AssignmentReturnedOutlinedIcon /> </IconButton></div>
    
    
    
    
    ))
    
    
    
    })



  return (
    <React.Fragment>
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
   
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell>Reference #</StyledTableCell>
            <StyledTableCell align="right">Payment Method</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="right">Payment Status</StyledTableCell>
            <StyledTableCell align="right">Order Status</StyledTableCell>
            <StyledTableCell align="center">Customer</StyledTableCell>
            <StyledTableCell align="right">Assign</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.order} >
              <StyledTableCell component="th" scope="row">
                {row.order}
              </StyledTableCell>
              <StyledTableCell align="right">{row.customer}</StyledTableCell>
              <StyledTableCell align="right">{row.address}</StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
              <StyledTableCell align="center">{row.schedule}</StyledTableCell>
              <StyledTableCell align="center">{row.action}</StyledTableCell>
              <StyledTableCell align="right">{row.assign}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </React.Fragment>
  );
}
return ( 
  <OrderTable/>
 );
}
}

export default inject("managerStore")(observer(Ordertable));
