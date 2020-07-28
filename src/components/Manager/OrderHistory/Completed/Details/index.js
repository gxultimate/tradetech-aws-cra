import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import {Grid,TableCell,Typography} from '@material-ui/core';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { inject, observer } from 'mobx-react';


 class Details extends React.Component {




  render() {

let {managerStore:{order,listOfOrder}}=this.props;
console.log(listOfOrder,'osadsa')
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

function createData(name, qty) {
  return { name, qty };
}



let rows = listOfOrder.filter( ord => ord.orderID === order.orderID).map(itms =>{

  return (createData(
    itms.orderItems.map(item =>{
      
       return item
        
     }), itms.order_Quantity.map(item =>{
      
       return item
        
     })
     ))






})

// const rows = [
//   createData('Coke', 159, 6.0, 24,`${order.orderID}`),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

function Detailtable() {
  const classes = useStyles();

  return (
    <React.Fragment>
<Grid container xs={12} sm={12}>
  <Grid item  xs={12} sm={12} style={{marginBottom:"16px"}}>
    <Grid container  xs={12} sm={12}>
  <Grid item xs={6} sm={6}>
    <Typography variant='subtitle2'><span style={{fontWeight:"bold"}}>Ref#: </span>{order.orderID}</Typography></Grid>
    <Grid item xs={6} sm={6}><span style={{fontWeight:"bold"}}>Order Date: </span>{order.orderDate}</Grid>
      <Grid item xs={6} sm={6}><span style={{fontWeight:"bold"}}>Payment Mode: </span>{order.modeOfPayment}</Grid>

      <Grid item xs={6} sm={6}><span style={{fontWeight:"bold"}}>Order Status: </span>{order.orderStatus}</Grid>

      <Grid item xs={6} sm={6}><span style={{fontWeight:"bold"}}>Payment Status: </span>{order.paymentStatus}</Grid>
      <Grid item xs={6} sm={6}><span style={{fontWeight:"bold"}}>Date Completed: </span>{order.orderDateCompleted}</Grid>
    </Grid>
  </Grid>

 <Grid item>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
          
        
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row) => {
          let names = row.name.map((itm,itmIndex) =>{return itm});
          let qtys = row.qty.map(qties => {return (<React.Fragment> <span style={{width:'100%',padding:'5px'}}>{qties}</span><br/>   </React.Fragment>)});
       
          let item = names.map( items =>{ return (<React.Fragment> <span style={{width:'100%',padding:'5px'}}>{items}</span><br/>   </React.Fragment>)})
          let qty = qtys.map(itemqty => {return itemqty})
          return(
            <StyledTableRow key={item}>
              <StyledTableCell component="th" scope="row">
                {item}
              </StyledTableCell>
              <StyledTableCell align="right">{qtys}</StyledTableCell>
            
           
            </StyledTableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </Grid>
    </React.Fragment>
  );
}


return (
  <Detailtable/>
)
}
}

export default inject('managerStore')(observer(Details))
