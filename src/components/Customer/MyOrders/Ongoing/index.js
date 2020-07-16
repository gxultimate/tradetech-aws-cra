import React from 'react';
import { makeStyles,ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Divider,Grid,Typography,Button} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import Table from './table'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import ViewModuleIcon from '@material-ui/icons/ViewModule';
import {inject,observer} from 'mobx-react'
import theme from './../../../theme'



import CancelBtn from './CancelBtn'
import  TrackBtn from './TrackBtn'
class OngoingOrder extends React.Component {
  state = {  }
componentDidMount(){
  let{customerStore:{getAccounts,getOrder}}=this.props;
  getAccounts()
  getOrder();
}
  render() { 
let {customerStore:{listOfOrder,listOfUsers}}=this.props;



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



let filOrder = listOfOrder.filter(order => {
  if( order.orderStatus === 'Packing' || order.orderStatus === 'Dispatch' || order.orderStatus === 'Pending' || order.orderStatus === 'Transfer'){
    return order
  }
})


 function Ongoing() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // const [stat, setStat] = React.useState();


  const handleClick = () => {
    setOpen(!open);
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
    <Grid item xs={12} sm={12} style={{marginBottom:"16px",textAlign:'right'}}>
 <span><Grid style={{float:'right'}}><CancelBtn myorderID ={myorder.orderID} stats = {myorder.orderStatus}/></Grid> <TrackBtn myorderID ={myorder.orderID}/></span> 


          </Grid>
          </ThemeProvider>  </Grid>
          <Grid container xs={12} sm={12}>
    <Grid item xs={12} sm={12} style={{textAlign:"left"}}><Typography variant="subtitle2"> Invoice # :<span style={{fontWeight:"bold",color:"#208769"}}> {myorder.orderID}</span></Typography></Grid>
                <Grid item xs={12} sm={12} style={{textAlign:"left"}}><Typography variant="subtitle2">Date/Time : <span style={{fontWeight:"bold"}}>{myorder.orderDate}</span></Typography></Grid>
          </Grid>
          <Divider style={{marginTop:"8px",marginBottom:"8px"}}/>
          <Grid container xs={12} sm={12}>

                <Grid item xs={12} sm={12} style={{textAlign:"left"}}><Typography variant="subtitle2"> Packer : <span style={{fontWeight:"bold"}}>{listOfUsers.filter(accs => accs.account_ID === myorder.packer_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) }</span></Typography></Grid>
                <Grid item xs={12} sm={12} style={{textAlign:"left"}}><Typography variant="subtitle2"> Dispatcher : <span style={{fontWeight:"bold"}}>{listOfUsers.filter(accs => accs.account_ID === myorder.dispatcher_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) }</span></Typography></Grid>
          </Grid>
          <Divider style={{marginTop:"8px",marginBottom:"8px"}}/>
          <Grid container xs={12} sm={12}>
          {/* <Grid item xs={12} sm={12} style={{textAlign:"left"}}><Typography variant="subtitle2"> Order Status : <span style={{fontWeight:"bold"}}>{myorder.orderStatus}</span></Typography></Grid> */}
          <Grid item xs={12} sm={12} style={{textAlign:"left"}}><Typography variant="subtitle2"> Mode Of Payment :<span style={{fontWeight:"bold"}}>{myorder.modeOfPayment}</span></Typography></Grid>
          <Grid item xs={12} sm={12} style={{textAlign:"left"}}><Typography variant="subtitle2"> Amount Due : <span style={{fontWeight:"bold"}}> &#8369; {myorder.orderTotalAmount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}.00</span></Typography></Grid>
          <Grid item xs={12} sm={12} style={{textAlign:"left"}}><Typography variant="subtitle2"> Due Date: <span style={{fontWeight:"bold"}}>{myorder.orderDueDate}</span></Typography></Grid>
          <Grid item xs={12} sm={12} style={{textAlign:"left"}}><Typography variant="subtitle2"> Payment Status : <span style={{fontWeight:"bold"}}> {myorder.paymentStatus}</span></Typography></Grid>
          </Grid>
          <Divider style={{marginTop:"8px",marginBottom:"8px"}}/>
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
      </Collapse>

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
    </React.Fragment>
  );
}

return ( 
  <Ongoing/>
 );
}
}

export default inject('customerStore')(observer(OngoingOrder));
