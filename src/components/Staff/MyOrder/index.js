import { Divider, Typography } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import { inject, observer } from 'mobx-react';
import React from 'react';
import Finish from './Finish';
import OrderTable from './OrderTable';
import Report from './Report';





class Orders extends React.Component {
  componentDidMount(){
    let {staffStore:{getOrder,getAccounts}}=this.props
    getOrder();
  
    getAccounts();
   
  
  }

  render() { 
 

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


function createData(name, address,contactNo) {
  return { name, address,contactNo};
}


let getuserId = JSON.parse(sessionStorage.getItem('userData'))


let {staffStore:{listOfOrder,order,listOfUsers}}=this.props;


let filterOrder = listOfOrder.filter(order =>{
  

  if(order.packer_ID === getuserId.account_ID && order.orderStatus ==='Packing' ? order.packer_ID === getuserId.account_ID && order.orderStatus ==='Packing' : order.dispatcher_ID === getuserId.account_ID && order.orderStatus ==='Dispatch'){
    return order
  }

})


let filterAccount = listOfUsers.filter(account => {
  if(account.account_ID === getuserId.account_ID){
    return account
  } })

let account =filterAccount.map(accounts => { 
  
  return(createData(
    
    
    `${accounts.account_fName} ${accounts.account_mName} ${accounts.account_lName}`,accounts.account_address,accounts.account_contactNo

   
   
   
   )) 
  
  
  } )




 function MyOrders() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);


  const handleClick = () => {
    setOpen(!open);
  };
 
  
let getMyOrder =filterOrder.map(orders => {

  return(
  
  <Grid item xs={12} sm={6} >
            <Paper style={{padding:"10px"}}>
             <Grid container xs={12} sm={12}>
               <Grid item xs={12} sm={12}>
              <Typography variant="p" style={{fontWeight:"bold"}}> REF # : </Typography>{orders.orderID}
              </Grid>
              {account.map((row) => (
                <div>
              <Grid item xs={12} sm={12}>
              <Typography variant="p" style={{fontWeight:"bold"}}>Customer : </Typography>{row.name}
              </Grid>
              <Grid item xs={12} sm={12}>
              <Typography variant="p" style={{fontWeight:"bold"}}>Address : </Typography>{row.address}
              </Grid>
              <Grid item xs={12} sm={12}>
              <Typography variant="p" style={{fontWeight:"bold"}}>Contact # : </Typography>{row.contactNo}
              </Grid>
              </div>
                ))}
              <Grid item xs={12} sm={12}>
              <Typography variant="p" style={{fontWeight:"bold"}}>Order Date/Time : </Typography>{orders.orderDate}
              </Grid>
             
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
          
          <OrderTable  myOrder={orders.orderID}  dis={orders.distributor_ID}/>
          </ListItem>
        </List>
      </Collapse>

              <Grid container xs={12} sm={12} style={{textAlign:"center"}}>
                <Grid item xs={6} sm={6} style={{marginTop:"10px"}}><Report orderid={orders.orderID} status={orders.orderStatus} dis={orders.distributor_ID}/> </Grid>
                <Grid item xs={6} sm={6} style={{marginTop:"10px"}}><Finish orderid={orders.orderID} status={orders.orderStatus} accountid={orders.account_ID} total={orders.orderTotalAmount}/></Grid>
              </Grid>
            </Paper>
          </Grid>
    
  )
  
  })

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Typography variant="h6"> MyOrders</Typography> 
        <Divider style={{marginTop:"10px",marginBottom:"10px"}} />
        </Grid>
        {getMyOrder}
      
      </Grid>
    </div>
  );
}

return ( 
  <MyOrders/>
 );
}
}

export default inject("staffStore")(observer(Orders));