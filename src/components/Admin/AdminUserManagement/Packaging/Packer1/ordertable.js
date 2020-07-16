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
import AssignmentReturnedOutlinedIcon from '@material-ui/icons/AssignmentReturnedOutlined';


class Ordertable extends React.Component {
  componentWillMount(){

    let {startingStore:{getOrder}}=this.props;
  
    getOrder();
  }
  constructor(props){

    
    super(props)
    this.state = {
      listOfOrder : [],
      // listOfProductImg : []
    }
  }
  render() { 
    console.log(this.props.get,'account_ID')
    const assign = (myorder) => {
      let {startingStore:{assignOrder,order}}=this.props;
    
 
      order.setProperty("order_ID", myorder.order_ID)
      order.setProperty("packer_ID",this.props.myId)
      order.setProperty("orderStatus",'Packing')
 
  assignOrder();
    };

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

let {startingStore:{listOfOrder,listOfUsers}}=this.props;
let getId = JSON.parse(sessionStorage.getItem('userData'))
let orders = listOfOrder.filter((order) => order.distributor_ID === getId.distributor_ID && order.orderStatus === 'Pending')
let rows = orders.map(orderss =>{
return(createData(

orderss.orderID,orderss.modeOfPayment,orderss.orderDate,orderss.paymentStatus,orderss.orderStatus,orderss.distributor_ID,
<div><IconButton  onClick={()=>{assign(orderss)}}  size="medium" style={{backgroundColor:"#31AF91"}} > <AssignmentReturnedOutlinedIcon /> </IconButton></div>




))



})
console.log(rows,"asdsad")
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

 function OrderTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell>Order no.</StyledTableCell>
            <StyledTableCell align="right">Payment Method</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="right">Payment Status</StyledTableCell>
            <StyledTableCell align="right">Order Status</StyledTableCell>
            <StyledTableCell align="center">Retail ID</StyledTableCell>
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
  );
}
return ( 
  <OrderTable/>
 );
}
}

export default inject("startingStore")(observer(Ordertable));
