
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

class OrderInfo extends Component {
    render() {
let {customerStore:{order,listOfDistributors,listOfOrder}}=this.props;
let vendor = JSON.parse(sessionStorage.getItem('distData'))


let distinfo = listOfDistributors.filter(dist=> dist.distributor_ID === vendor.distributor_ID)

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
    width:'100%',
    
  },
}));



  
  function createData(desc, qty, price) {
    // const price = priceRow(qty, unit);
    return { desc, qty, price };
  }
  

  
  let filorder =listOfOrder.filter(ord => ord.orderID === order.orderID)

  let rows = filorder.map(orders =>{
    return (createData(
     orders.orderItems.map(item =>{
       
        return item
         
      }), orders.order_Quantity.map(item =>{
       
        return item
         
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
      <Grid container spacing={1} xs={12} sm={12}>
        <Grid item xs={12} sm={12}>
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


        <Grid item xs={12} sm={12}>
         <Grid container xs={12} sm={12}>
             <Grid item xs={12} sm={12} style={{backgroundColor:'#208769',padding:'3px',color:'white',fontWeight:'bold',paddingBottom:'5px'}}>Order Info</Grid>
             <Grid item xs={12} sm={12} >
  <span>MOP :{order.modeOfPayment}</span>
  
             </Grid>
             <Grid item xs={12} sm={12} >
  <span>Order Status :{order.orderStatus

}</span>
  
             </Grid>
             <Grid item xs={12} sm={12} >
  <span>Payment Status: {order.paymentStatus
}</span>
             </Grid>
             <Grid item xs={12} sm={12} >
  <span>Total Amount Due :&#8369;{order.orderTotalAmount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>
             </Grid>
             <Grid item xs={12} sm={12} >
  <span>Total Payment :&#8369;{order.order_totalPayment.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>
             </Grid>
             <Grid item xs={12} sm={12} >
             <span>Date Completed :{order.orderDateCompleted}</span> 
             </Grid>
         
         </Grid>
        </Grid>

        <Grid item xs={12} sm={12}>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          
          <TableRow style={{backgroundColor:'#208769',color:'white'}}>
            <TableCell style={{color:'white'}}>Item</TableCell>
            <TableCell align="right" style={{color:'white'}}>Qty.</TableCell>
           
            <TableCell align="right" style={{color:'white'}}>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
             let names = row.desc.map((itm,itmIndex) =>{return itm});
             let qtys = row.qty.map(qties => {return (<React.Fragment> <span style={{width:'100%',padding:'5px',fontSize:'11px'}}>{qties}</span><br/>   </React.Fragment>)});

             let prc = row.price.map(prcs => {return (<React.Fragment> <span style={{width:'100%',padding:'5px',fontSize:'11px'}}>&#8369;{prcs.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span><br/>   </React.Fragment>)});
          
             let item = names.map( items =>{ return (<React.Fragment> <span style={{width:'100%',padding:'5px',fontSize:'11px'}}>{items}</span><br/>   </React.Fragment>)})
             return(
            <TableRow key={item}>
              <TableCell>{item}</TableCell>
              <TableCell align="right">{qtys}</TableCell>
            
              <TableCell align="right">{prc}</TableCell>
            </TableRow>
 )})}

          <TableRow>
            <TableCell rowSpan={2} />
            <TableCell colSpan={1}>Other</TableCell>
            <TableCell align="right">-</TableCell>
          </TableRow>
      
          <TableRow>
            <TableCell colSpan={1}>Total</TableCell>
            <TableCell align="right">&#8369;{invoiceTotal.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
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

export default inject('customerStore')(observer(OrderInfo))

