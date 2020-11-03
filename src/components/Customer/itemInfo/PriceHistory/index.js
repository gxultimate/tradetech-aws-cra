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



class OrderItems extends React.Component {

  render() {
 let orderId=this.props.orderid
 let {customerStore:{listOfOrder,pricehist}}=this.props;

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#208769",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 12,
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(date, old,newP) {
  return { date, old,newP};
}


// let rows = this.props.data.map(dta=>{
//     return (createData(
//         dta.dateCreated,dta.priceFrom,dta.priceTo
//     ))
// })



const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
});

 function CompletedTable() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="right">Old</StyledTableCell>
            <StyledTableCell align="right">New</StyledTableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
     
 
            <StyledTableRow >
              <StyledTableCell component="th" align="left">
           {pricehist.dateCreated}
              </StyledTableCell>
                        
     <StyledTableCell align="right">{pricehist.priceFrom}</StyledTableCell>
     <StyledTableCell align="right">{pricehist.priceTo}</StyledTableCell>
           
            </StyledTableRow> 
         
         

        
        </TableBody>
      </Table>
    </TableContainer>
     </React.Fragment>
  );
}

return (
 <CompletedTable/>
)
}
}

export default inject('customerStore')(observer(OrderItems))