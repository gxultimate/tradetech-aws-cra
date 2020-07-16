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
let {managerStore:{order,listOfOrder}}=this.props;


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#208769',
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

function createData(item, qty) {
  return { item, qty };
}

// let rows = listOfOrder.map(orders =>{
// let itm = order.orderItems;
// let qty = order.order_Quantity;
// return (createData(
//     itm,qty
         
     
// ))

//   })


let rows = order.orderItems.map(ord =>{
    return(createData(
        ord
    ))
})


const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
});

function ItemTbl() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size='small'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Item</StyledTableCell>
            <StyledTableCell align="right">Qty</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            //    let qtys = row.qty.map(qties => {return (<React.Fragment> <span style={{width:'100%',padding:'5px'}}>{qties}</span><br/>   </React.Fragment>)});
               return(
            <StyledTableRow key={row.item}>
              <StyledTableCell component="th" scope="row">
                {row.item}
              </StyledTableCell>
              <StyledTableCell align="right">{row.qty}</StyledTableCell>
         
            </StyledTableRow>
               )
})}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


return (
   <ItemTbl/>
)
}
}

export default inject('managerStore')(observer(OrderItems))
