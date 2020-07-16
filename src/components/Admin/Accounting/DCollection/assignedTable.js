import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Grid,Typography,Paper} from '@material-ui/core/';
import {inject,observer} from 'mobx-react'

class Passign extends React.Component {
    state = {  }

    componentDidMount(){
      let {startingStore:{staffAssigned}}=this.props
      staffAssigned();
    
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

let filterorder = listOfOrder.filter((order =>order.distributor_ID === getId.distributor_ID && order.orderStatus === 'Dispatch' && order.dispatcher_ID === this.props.myId))


let rows = filterorder.map(orderss =>{
    return(createData(
    
    orderss.orderDate,orderss.orderID,<span>{listOfUsers.filter(accs => accs.account_ID === orderss.account_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) }</span>,orderss.paymentStatus,<span>&#8369;{orderss.orderTotalAmount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>

    
    
    
    
    ))
    
    
    
    })

    
let collect =  listOfOrder.map(product => {
  
  return (

    listOfOrder.filter((amount) => (amount.distributor_ID === getId.distributor_ID))
    .reduce((sum, record) => parseInt(sum) + parseInt(record.orderTotalAmount) , 0)



    );

 })

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

 function AssignedTable() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <Grid item sm={12} style ={{borderRadius:"5px",textAlign:"left"}}>
    <Typography>Total Collection : <span style={{color:"#208769"}}>{collect.pop()}</span></Typography>
          </Grid>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow>
          <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="left">Reference #</StyledTableCell>
            <StyledTableCell align="left">Customer </StyledTableCell>
            <StyledTableCell align="left">Payment Status</StyledTableCell>
            <StyledTableCell align="left">Collection</StyledTableCell>
         
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
            <StyledTableCell align="left">{row.date}</StyledTableCell>
            <StyledTableCell align="left">{row.schedule}</StyledTableCell>
           
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </React.Fragment>
  );
}

return ( 
    <AssignedTable/>
 );
}
}

export default inject("startingStore")(observer(Passign));