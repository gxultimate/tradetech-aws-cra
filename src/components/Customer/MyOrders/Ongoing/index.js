import { Button, DialogContent, Divider, Grid, IconButton, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';
import { inject, observer } from 'mobx-react';
import React from 'react';
import theme from './../../../theme';
import CancelBtn from './CancelBtn';
import Orderinfo from './Info';
import TrackBtn from './TrackBtn';


class OngoingOrder extends React.Component {
  state = {  }
componentDidMount(){
  let{customerStore:{getAccounts,getOrder,getDistributors}}=this.props;
  getAccounts()
  getOrder();
  getDistributors();
}


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
  if( order.orderStatus === 'Packing' || order.orderStatus === 'Dispatch' || order.orderStatus === 'Pending' || order.orderStatus === 'Transfer'){
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
  // const [stat, setStat] = React.useState();


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

    // if(myorder.Status === 'Pending' || myorder.Status === 'Packing'){
    //   setStat(true);
    // }else{
    //   setStat(false);
    // }
    return(
  
      <Grid item xs={12} sm={12} style={{marginTop:"16px",marginBottom:"50px"}}>
      <Paper className={classes.paper}>
      <Grid container xs={12} sm={12} direction='row' >
        <ThemeProvider theme={theme}>
    <Grid item xs={12} sm={12} style={{marginBottom:"16px",textAlign:'right',}}>
 <span  style={{}}>

          <Grid style={{float:'right'}}><CancelBtn myorderID ={myorder.orderID} stats = {myorder.orderStatus}/></Grid> <TrackBtn myorderID ={myorder.orderID}/>  
         
          <IconButton aria-label="info" 
          style={{padding:0,textAlign:'left',float:'left',marginTop:'-28px'}}
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
          </Grid>
          <Divider style={{marginTop:"8px",marginBottom:"8px"}}/>
          {/* <Grid container xs={12} sm={12}>

                <Grid item xs={12} sm={12} style={{textAlign:"left"}}><Typography variant="subtitle2"> Packer : <span style={{fontWeight:"bold"}}>{listOfUsers.filter(accs => accs.account_ID === myorder.packer_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) }</span></Typography></Grid>
                <Grid item xs={12} sm={12} style={{textAlign:"left"}}><Typography variant="subtitle2"> Dispatcher : <span style={{fontWeight:"bold"}}>{listOfUsers.filter(accs => accs.account_ID === myorder.dispatcher_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) }</span></Typography></Grid>
          </Grid>
          <Divider style={{marginTop:"8px",marginBottom:"8px"}}/> */}
          <Grid container xs={12} sm={12}>
          {/* <Grid item xs={12} sm={12} style={{textAlign:"left"}}><Typography variant="subtitle2"> Order Status : <span style={{fontWeight:"bold"}}>{myorder.orderStatus}</span></Typography></Grid> */}
          {/* <Grid item xs={12} sm={12} style={{textAlign:"left"}}><Typography variant="subtitle2"> Mode Of Payment :<span style={{fontWeight:"bold"}}>{myorder.modeOfPayment}</span></Typography></Grid> */}
          <Grid item xs={12} sm={12} style={{textAlign:"left"}}><Typography variant="subtitle2"> Amount Due : <span style={{fontWeight:"bold"}}> &#8369; {myorder.orderTotalAmount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}.00</span></Typography></Grid>
          <Grid item xs={12} sm={12} style={{textAlign:"left"}}><Typography variant="subtitle2"> Due Date: <span style={{fontWeight:"bold"}}>{myorder.orderDueDate}</span></Typography></Grid>
          <Grid item xs={12} sm={12} style={{textAlign:"left"}}><Typography variant="subtitle2"> Payment Status : <span style={{fontWeight:"bold"}}> {myorder.paymentStatus}</span></Typography></Grid>
          </Grid>
          {/* <Divider style={{marginTop:"8px",marginBottom:"8px"}}/>
          <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <ViewModuleIcon />
        </ListItemIcon>
        <ListItemText primary="View Items" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
          
              <Table orderid={myorder.orderID}/>
          </ListItem>
        </List>
      </Collapse> */}

      </Paper>
    </Grid>
  
  
  
    )
  })

  
  return (
    <React.Fragment>
    <div className={classes.root}>
      <Grid container xs={12} sm={12}>

      {myOrder}
      </Grid>
    </div>


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

    </React.Fragment>
  );
}

return ( 
  <Ongoing/>
 );
}
}

export default inject('customerStore')(observer(OngoingOrder));
