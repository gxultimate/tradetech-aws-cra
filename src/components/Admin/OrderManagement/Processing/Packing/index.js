import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import {inject,observer} from 'mobx-react'
class Packing extends React.Component {
  state = {  }

componentDidMount(){
  let {orderStore:{getAccounts}}=this.props;
  // getOrder();
  // getAccounts()
}

  render() { 

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

}));

let {orderStore:{listOfOrder,listOfUsers}}=this.props;
let getDis = JSON.parse(sessionStorage.getItem('userData'))
let filpacking =listOfOrder.filter(order => order.orderStatus === 'Packing' && order.distributor_ID === getDis.distributor_ID)



let getorder =filpacking.map(orders =>{


  return(
      <Grid container lg={12} sm={12} xs={12} >
      <Grid item xs={12} sm={12}>
      <Paper style={{padding:"12px"}}>
      <Grid container direction="row" item xs={12} sm={12}>
    <Grid item xs={6}  sm={6} alignItems="left">
    <Typography style={{textAlign:"left"}}>Reference # : <span style={{color:"#208769",fontWeight:"bold"}}> {orders.orderID}</span></Typography>
    <Typography  style={{textAlign:"left"}}>Customer Name :<span style={{fontWeight:"bold"}}> {listOfUsers.filter(accs => accs.account_ID === orders.account_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) }</span></Typography>
     <Typography style={{textAlign:"left"}}>Address : <span style={{fontWeight:"bold"}}> {listOfUsers.filter(accs => accs.account_ID === orders.account_ID).map((account)=> {return `${account.account_address} `  } ) }</span></Typography>
    </Grid>
   
    <Grid item xs={6} sm={6} >
    <Typography style={{textAlign:"left"}}>Date Ordered : <span style={{fontWeight:"bold"}}>{orders.orderDate} </span></Typography>
    <Typography  style={{textAlign:"left"}}>In Charge : <span style={{fontWeight:"bold"}}> {listOfUsers.filter(accs => accs.account_ID === orders.packer_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) }</span></Typography>
     <Typography style={{textAlign:"left"}}> Anticipated Transfer Time : <span style={{fontWeight:"bold"}}></span></Typography>
    </Grid>
    </Grid>
    </Paper>
    </Grid>
    </Grid>
    )
    
    })
  

 function PackGrid() {
  const classes = useStyles();




  return (

    <div className={classes.root} >
    <Grid container  xs={12} sm={12}>
    
      <Grid item xs={12} sm={12}>
        <Typography variant="h5"  style={{color:"#208769",float:"left",marginLeft:"5px"}}>Orders On Packing</Typography>
      </Grid>
  
   <Grid item xs={12} sm={12}>
      {getorder}
      </Grid>

    </Grid>
  </div>
  );
}


return ( 
  <PackGrid/>
 );
}
}

export default inject('orderStore')(observer(Packing));