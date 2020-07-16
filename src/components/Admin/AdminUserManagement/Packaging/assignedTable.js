import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {inject,observer} from 'mobx-react'

class Passign extends React.Component {
    state = {  }

    componentDidMount(){
      let {startingStore:{staffAssigned,getOrder}}=this.props
      staffAssigned();
      getOrder();
     
  
    }
    render() { 

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

function createData(order, customer, address, date, schedule,action) {
    return { order, customer, address, date, schedule,action };
  }

let {startingStore:{listOfOrder,listOfUsers}}=this.props;
let getId = JSON.parse(sessionStorage.getItem('userData'))

let filterorder = listOfOrder.filter((order =>order.distributor_ID === getId.distributor_ID && order.orderStatus === 'Packing' && order.packer_ID === this.props.myId))


let rows = filterorder.map(orderss =>{
    return(createData(
    
    orderss.orderID,orderss.modeOfPayment,orderss.orderDate,orderss.paymentStatus,orderss.orderStatus,<span> {listOfUsers.filter(accs => accs.account_ID === orderss.account_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) }</span>

    
    
    
    
    ))
    
    
    
    })
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

 function AssignedTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow>
          <StyledTableCell>Reference #</StyledTableCell>
            <StyledTableCell align="left">Payment Method</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="left">Payment Status</StyledTableCell>
            <StyledTableCell align="left">Order Status</StyledTableCell>
            <StyledTableCell align="left">Customer</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.order} >
            <StyledTableCell component="th" scope="row">
              {row.order}
            </StyledTableCell>
            <StyledTableCell align="left">{row.customer}</StyledTableCell>
            <StyledTableCell align="left">{row.address}</StyledTableCell>
            <StyledTableCell align="center">{row.date}</StyledTableCell>
            <StyledTableCell align="left">{row.schedule}</StyledTableCell>
            <StyledTableCell align="left">{row.action}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

return ( 
    <AssignedTable/>
 );
}
}

export default inject("startingStore")(observer(Passign));