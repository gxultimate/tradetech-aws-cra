import React from 'react';
import {ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Divider,Grid,Typography, IconButton, DialogContent,Button} from '@material-ui/core';

import {inject,observer} from 'mobx-react'


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import Table from './table'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import ViewModuleIcon from '@material-ui/icons/ViewModule';
import InfoIcon from '@material-ui/icons/Info';
import theme from './../../../theme'





import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Orderinfo from './../Ongoing/Info'

class OngoingOrder extends React.Component {
 

  render() { 
let {customerStore:{listOfOrder,listOfUsers,order}}=this.props;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }, appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    color:'white'
  },
}));



let filOrder = listOfOrder.filter(order => {
  if( order.orderStatus === 'Completed' ){
    return order
  }
})
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

 function Ongoing() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openI, setOpenI] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };



  let handleClickInfo = (orderinfo)=>{
    order.setProperty('orderItems',orderinfo.orderItems)
    order.setProperty('orderPrice',orderinfo.orderPrice)
    order.setProperty('order_Quantity',orderinfo.order_Quantity)
    order.setProperty('orderID',orderinfo.orderID)
    order.setProperty('modeOfPayment',orderinfo.modeOfPayment)
    order.setProperty('orderDate',orderinfo.orderDate)
    order.setProperty('orderStatus',orderinfo.orderStatus)
    order.setProperty('paymentStatus',orderinfo.paymentStatus)
    order.setProperty('orderTotalAmount',orderinfo.orderTotalAmount)
    order.setProperty('distributor_ID',orderinfo.distributor_ID)
    order.setProperty('packer_ID',orderinfo.packer_ID)
    order.setProperty('dispatcher_ID',orderinfo.dispatcher_ID)
    order.setProperty('order_addedInfo',orderinfo.order_addedInfo)
    order.setProperty('order_totalPayment',orderinfo.order_totalPayment)
    order.setProperty('orderReturnDate  ',orderinfo.orderReturnDate)
    order.setProperty('orderDateCompleted',orderinfo.orderDateCompleted)
    order.setProperty('orderCustomerBalance',orderinfo.orderCustomerBalance)
    order.setProperty('orderDueDate',orderinfo.orderDueDate)
  setOpenI(true)
  }
  const handleCloseI = () => {
    setOpenI(false);
  };

  let myOrder = filOrder.map(myorder => {

    return(
      <Grid item xs={12} sm={12} style={{marginTop:"16px",marginBottom:"50px"}}>
      <Paper className={classes.paper}>
      <Grid container xs={12} sm={12} direction='row' >
        <ThemeProvider theme={theme}>
    <Grid item xs={12} sm={12} style={{marginBottom:"16px",textAlign:'right',}}>
 <span >

    
         
          <IconButton aria-label="info" 
          style={{padding:0,textAlign:'right',float:'right'}}
 onClick={()=>{handleClickInfo(myorder)}} 
 color='secondary'>
            <InfoIcon />
          </IconButton> 
          
          </span> 


          </Grid>
          </ThemeProvider>  </Grid>
          <Grid container xs={12} sm={12}>
    <Grid item xs={12} sm={12} style={{textAlign:"left"}}><Typography variant="subtitle2"> Invoice # :<span style={{fontWeight:"bold",color:"#208769"}}> {myorder.orderID}</span></Typography></Grid>
                <Grid item xs={12} sm={12} style={{textAlign:"left"}}><Typography variant="subtitle2">Date/Time : <span style={{fontWeight:"bold"}}>{myorder.orderDate}</span></Typography></Grid>
                <Grid item xs={12} sm={12} style={{textAlign:"left"}}><Typography variant="subtitle2">Completed : <span style={{fontWeight:"bold"}}>{myorder.orderDateCompleted}</span></Typography></Grid>
          </Grid>
          <Divider style={{marginTop:"8px",marginBottom:"8px"}}/>

          <Grid container xs={12} sm={12}>
         
        
          <Grid item xs={12} sm={12} style={{textAlign:"left"}}><Typography variant="subtitle2"> Amount Due : <span style={{fontWeight:"bold"}}> &#8369;{myorder.orderTotalAmount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}.00</span></Typography></Grid>
          <Grid item xs={12} sm={12} style={{textAlign:"left"}}><Typography variant="subtitle2"> Payment Status : <span style={{fontWeight:"bold"}}> {myorder.paymentStatus}</span></Typography></Grid>
      
          </Grid>
       
         

      </Paper>
    </Grid>
  
  
    )
  })

  
  return (
    <div className={classes.root}>
      <Grid container xs={12} sm={12}>

      {myOrder}
      </Grid>


      <Dialog fullScreen open={openI} onClose={handleCloseI} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleCloseI} aria-label="close">
             <InfoIcon/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
             Purchase Order
            </Typography>
            <Button autoFocus color="inherit" onClick={handleCloseI}>
            <CloseIcon />
            </Button>
          </Toolbar>
        </AppBar>
     <DialogContent>
      <Orderinfo/>
     </DialogContent>
      </Dialog>
    </div>
  );
}

return ( 
  <Ongoing/>
 );
}
}

export default inject('customerStore')(observer(OngoingOrder));
