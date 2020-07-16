import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { inject, observer } from 'mobx-react';
import React from 'react';
class orderTable extends React.Component {
  componentDidMount(){
    let {staffStore:{getProductsR,product}}=this.props;
    product.setProperty('distributor_ID',this.props.dis)
    getProductsR();
   
  }

    state = {  }

 
    render() {
      let {staffStore:{listOfOrder,listOfCart}}=this.props;
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#208769',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 12,
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

let getMyId = JSON.parse(sessionStorage.getItem('userData'))

let filorder =listOfOrder.filter(order => order.orderID === this.props.ordID)

let rows = filorder.map(orders => {


  return (createData(
    orders.orderItems.map(item =>{
      
       return item
        
     }), orders.order_Quantity.map(item =>{
      
       return item
        
     }), 

     ))


})

const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
});

function OrderTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Name</StyledTableCell>
          <StyledTableCell align="right">Quantity</StyledTableCell>
          {/* <StyledTableCell align="left">Total</StyledTableCell> */}
      
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
       ) })}
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

export default inject("staffStore")(observer(orderTable));