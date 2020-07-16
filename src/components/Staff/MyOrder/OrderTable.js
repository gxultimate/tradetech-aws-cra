import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import {inject,observer} from 'mobx-react';
class orderTable extends React.Component {
  componentDidMount(){
    let {staffStore:{getProductsR,product}}=this.props;
    product.setProperty('distributor_ID',this.props.dis)
    getProductsR();
   
  }

    state = {  }

 
    render() {
      let {staffStore:{listofProducts,product}}= this.props;
   

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
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(name, qty, status) {
  return { name, qty, status };
}


let {staffStore:{listOfOrder,listOfCart}}=this.props;
let getMyId = JSON.parse(sessionStorage.getItem('userData'))

let filorder =listOfOrder.filter(order =>{

  if(  order.packer_ID === getMyId.account_ID && order.orderID === this.props.myOrder && order.orderStatus === 'Packing'){
    return order
  }else if( order.dispatcher_ID === getMyId.account_ID && order.orderID === this.props.myOrder && order.orderStatus === 'Dispatch'){
    return order
  }
 
  
  
  
  })
 
let rows = filorder.map(orders => {


  return (createData(
    orders.orderItems.map(item =>{
      
       return item
        
     }), orders.order_Quantity.map(item =>{
      
       return item
        
     })
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
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            {/* <StyledTableCell align="center">Status</StyledTableCell> */}

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

        
        <StyledTableCell align="left">{item}  </StyledTableCell>
       
  
        <StyledTableCell align="right">{qtys}</StyledTableCell>
            {/* <StyledTableCell align="center"><Checkbox/></StyledTableCell> */}
           
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



// import React from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import {inject,observer} from 'mobx-react'



// class OrderItems extends React.Component {

//   render() {
//  let orderId=this.props.orderid
//  let {customerStore:{listOfOrder}}=this.props;

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: "#208769",
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   }
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

// function createData(name, qty) {
//   return { name, qty };
// }
// let filorder =listOfOrder.filter(ord => ord.orderID === orderId)

// let rows = filorder.map(orders =>{
//   return (createData(
//    orders.orderItems.map(item =>{
     
//       return item
       
//     }), orders.order_Quantity.map(item =>{
     
//       return item
       
//     })
//     ))
// })



// const useStyles = makeStyles({
//   table: {
//     minWidth: '100%',
//   },
// });

//  function CompletedTable() {
//   const classes = useStyles();

//   return (
//     <React.Fragment>
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Item</StyledTableCell>
//             <StyledTableCell align="right">Quantity</StyledTableCell>
          
       
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => {
//           let names = row.name.map((itm,itmIndex) =>{return itm});
//           let qtys = row.qty.map(qties => {return (<React.Fragment> <span style={{width:'100%',padding:'5px'}}>{qties}</span><br/>   </React.Fragment>)});
       
//           let item = names.map( items =>{ return (<React.Fragment> <span style={{width:'100%',padding:'5px'}}>{items}</span><br/>   </React.Fragment>)})
//           let qty = qtys.map(itemqty => {return itemqty})
//      return(
 
//             <StyledTableRow key={item}>
//               <StyledTableCell component="th" align="left">
//               {item} 
//               </StyledTableCell>
                        
//               <StyledTableCell align="right">{qtys}</StyledTableCell>
           
           
//             </StyledTableRow> 
         
         

//            ) })}
//         </TableBody>
//       </Table>
//     </TableContainer>
//      </React.Fragment>
//   );
// }

// return (
//  <CompletedTable/>
// )
// }
// }

// export default inject('customerStore')(observer(OrderItems))



