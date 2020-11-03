import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {inject,observer} from 'mobx-react'
import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography,Badge } from '@material-ui/core';

class OrderInfo extends Component {
    render() {
let {orderStore:{order,listOfDistributors,listOfOrder,listOfUsers}}=this.props;
let vendor = JSON.parse(sessionStorage.getItem('userData'))


let distinfo = listOfDistributors.filter(dist=> dist.distributor_ID === vendor.distributor_ID)
let custinfo = listOfUsers.filter(dist=> dist.account_ID === order.account_ID)
console.log(custinfo,'asdsa')
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {        
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  table: {
    minWidth: 210,
    width:'100%'
  },
}));



  
  function createData(desc, qty,itmprice, price) {
    // const price = priceRow(qty, unit);
    return { desc, qty,itmprice, price };
  }
  

  
  let filorder =listOfOrder.filter(ord => ord.orderID === order.orderID)

  let rows = filorder.map(orders =>{
    return (createData(
     orders.orderItems.map(item =>{
       
        return item
         
      }), orders.order_Quantity.map(item =>{
       
        return item
         
      }), orders.orderPrice.map(itemprc =>{
       
        return itemprc
         
      }),orders.orderTotalPrice.map(prc=>{
        return prc
      })
      ))
  })
let tprice = rows.map(prc =>{
  
  return `${(prc.price).reduce((sum, i) => parseInt(sum) + parseInt(i), 0)}`

})

  const invoiceSubtotal = tprice.pop();

const invoiceTotal =invoiceSubtotal;

 function Purchased() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5} xs={12} sm={12}>
        <Grid item xs={12} sm={12} >
          <Grid container xs={12} sm={12}>
          <Grid item xs={10} sm={10} >
         
          <Typography variant="h6" noWrap style={{fontWeight:"bold",color:"white",padding:'5px'}}>
            <span style={{color:"orange"}}>Purchase Order</span>
          </Typography>
         
          </Grid>
          <Grid item xs={2} sm={2} >
  <Typography variant='subtitle2'><span style={{fontWeight:'bold'}}>DATE :</span>{order.orderDate}</Typography>
  <Typography variant='subtitle2'><span style={{fontWeight:'bold'}}>INVOICE # : </span>{order.orderID}</Typography>
  </Grid>
  </Grid>
        </Grid>
        <Grid item xs={6} sm={6}>
         <Grid container xs={12} sm={12}>
             <Grid item xs={12} sm={12} style={{backgroundColor:'#208769',padding:'3px',color:'white',fontWeight:'bold',paddingBottom:'5px'}}>Vendor </Grid>
             <Grid item xs={12} sm={12} >
  <span>{distinfo[0].distributor_fName} {distinfo[0].distributor_mName} {distinfo[0].distributor_lName}</span>
  
             </Grid>
             <Grid item xs={12} sm={12} >
  <span>{distinfo[0].distributor_warehouseName}</span>
  
             </Grid>
             <Grid item xs={12} sm={12} >
  <span>{distinfo[0].distributor_address}</span>
             </Grid>
             <Grid item xs={12} sm={12} >
  <span>{distinfo[0].distributor_contactNo}</span>
             </Grid>
             <Grid item xs={12} sm={12} >
  <span>{distinfo[0].distributor_emailAddress}</span>
             </Grid>
         
         </Grid>
        </Grid>


        <Grid item xs={6} sm={6}>
         <Grid container xs={12} sm={12}>
             <Grid item xs={12} sm={12} style={{backgroundColor:'#208769',padding:'3px',color:'white',fontWeight:'bold',paddingBottom:'5px'}}>Ship to </Grid>
             <Grid item xs={12} sm={12} >
  <span>{custinfo[0].account_fName} {custinfo[0].account_mName} {custinfo[0].account_lName}</span>
  
             </Grid>
             <Grid item xs={12} sm={12} >
  <span>{custinfo[0].account_storeName
}</span>
  
             </Grid>
             <Grid item xs={12} sm={12} >
  <span>{custinfo[0].account_storeAddress}</span>
             </Grid>
             <Grid item xs={12} sm={12} >
  <span>{custinfo[0].account_contactNo}</span>
             </Grid>
             <Grid item xs={12} sm={12} >
  <span>{custinfo[0].account_emailAddress}</span>
             </Grid>
         
         </Grid>
        </Grid>




        <Grid item xs={6} sm={6}>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          
          <TableRow style={{backgroundColor:'#208769',color:'white'}}>
            <TableCell style={{color:'white'}}>Item</TableCell>
            <TableCell align="right" style={{color:'white'}}>Qty.</TableCell>
            <TableCell align="right" style={{color:'white'}}>Unit Price</TableCell>
            <TableCell align="right" style={{color:'white'}}>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
             let names = row.desc.map((itm,itmIndex) =>{return itm});
             let qtys = row.qty.map(qties => {return (<React.Fragment> <span style={{width:'100%',padding:'5px'}}>{qties}</span><br/>   </React.Fragment>)});
             let itmprc = row.itmprice.map(prcs => {return (<React.Fragment> <span style={{width:'100%',padding:'5px'}}>&#8369;{prcs.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span><br/>   </React.Fragment>)});
             let prc = row.price.map(prcs => {return (<React.Fragment> <span style={{width:'100%',padding:'5px'}}>&#8369;{prcs.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span><br/>   </React.Fragment>)});
          
             let item = names.map( items =>{ return (<React.Fragment> <span style={{width:'100%',padding:'5px'}}>{items}</span><br/>   </React.Fragment>)})
             return(
            <TableRow key={item}>
              <TableCell>{item}</TableCell>
              <TableCell align="right">{qtys}</TableCell>
              <TableCell align="right">{itmprc}</TableCell>
              <TableCell align="right">{prc}</TableCell>
            </TableRow>
 )})}
       
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Other</TableCell>
            <TableCell align="right">-</TableCell>
          </TableRow>
      
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">&#8369;{invoiceTotal.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>

        <Grid item xs={6} sm={6}>
        <Grid container xs={12} sm={12}>
             <Grid item xs={12} sm={12} style={{backgroundColor:'#208769',padding:'3px',color:'white',fontWeight:'bold',paddingBottom:'5px'}}>Order Information</Grid>
             <Grid item xs={12} sm={12} >
  <span style={{fontWeight:'bold'}}>MOP :</span>{order.modeOfPayment}
  
             </Grid>
             <Grid item xs={12} sm={12} >
  <span style={{fontWeight:'bold'}}>Order Status :</span>{order.orderStatus

}
  
             </Grid>
             <Grid item xs={12} sm={12} >
  <span style={{fontWeight:'bold'}}>Payment Status:</span> {order.paymentStatus
}
             </Grid>
             <Grid item xs={12} sm={12} >
  <span style={{fontWeight:'bold'}}>Total Amount Due :</span>&#8369;{order.orderTotalAmount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
             </Grid>
             <Grid item xs={12} sm={12} >
  <span style={{fontWeight:'bold'}}>Total Payment :</span>&#8369;{order.order_totalPayment.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
             </Grid>
             <Grid item xs={12} sm={12} >
             <span style={{fontWeight:'bold'}}>Date Completed :</span> {order.orderDateCompleted}
             </Grid>
         
         </Grid>
        </Grid>

      </Grid>
    </div>
  );
}
return (
    <Purchased/>
)
}
}

export default inject('orderStore')(observer(OrderInfo))

