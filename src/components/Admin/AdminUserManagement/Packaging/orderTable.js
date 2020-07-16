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
     
    const assign = (myorder) => {
      let {startingStore:{assignOrder,order}}=this.props;
    
 
      order.setProperty("orderID", myorder.orderID)
      order.setProperty("packer_ID",this.props.id)
      order.setProperty("orderStatus",'Packing')
 
  assignOrder(); 
    }
    
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

orderss.orderID,orderss.modeOfPayment,orderss.orderDate,orderss.paymentStatus,orderss.orderStatus,<span> {listOfUsers.filter(accs => accs.account_ID === orderss.account_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) }</span>,
<div><IconButton  onClick={()=>{assign(orderss)}}  size="medium" style={{backgroundColor:"#31AF91"}} > <AssignmentReturnedOutlinedIcon /> </IconButton></div>




))



})

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
  );
}
return ( 
  <OrderTable/>
 );
}
}

export default inject("startingStore")(observer(Ordertable));
