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
import moment from 'moment'



class Balance extends React.Component {

  
  render() {
 let {startingStore:{listOfOrder,listOfUsers}}=this.props;




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
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, amount, due, daysdue) {
  return { name, amount, due, daysdue };
}
let today = moment().format('MMM/DD/YYYY');
let rows = listOfOrder.filter(ord => ord.paymentStatus === 'Partially paid').map(bal =>{
  return (createData(
    <span> {listOfUsers.filter(accs => accs.account_ID === bal.account_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) } </span>,<span>&#8369;{bal.orderTotalAmount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>,bal.orderDueDate,moment(today).diff(bal.orderDueDate,'days')

  ))
})

const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
});

 function CustBalTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="CustBal table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Customer</StyledTableCell>
            <StyledTableCell align="right">Amount Due</StyledTableCell>
            <StyledTableCell align="right">Due Date</StyledTableCell>
            <StyledTableCell align="right">Days Overdue</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.amount}</StyledTableCell>
              <StyledTableCell align="right">{row.due}</StyledTableCell>
              <StyledTableCell align="right">{row.daysdue} days</StyledTableCell>
          
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

return (
<CustBalTable/>
)
}
}

export default inject('startingStore')(observer(Balance))

