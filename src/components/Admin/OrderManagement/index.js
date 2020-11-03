import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { inject, observer } from 'mobx-react';
import React, { Component,Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import OrderTab from './tab.js';
import DashGrid from './OrderDashboard'
import AddOrder from './AddOrder'



class adDrawer extends Component{

  componentDidMount(){
    let {orderStore:{getOrder,getAccounts}}=this.props;
  }
render(){
  function OrderManagement() {

 

  return (
<Fragment>
      <Grid container direction="row" lg={12} sm={12} xs={12}>
        <Grid item sm={6} xs={6}>
        <Typography variant="h5" >
           Order Management
        </Typography>
        </Grid>
        <Grid item sm={6} xs={6}>

        </Grid>
        </Grid>
 
        <Divider style ={{marginBottom:"5px"}}/> 
        <Grid container sm={12} xs={12} direction="row" alignItems="right" justify="right" lg={12} sm={12} xs={12} style={{textAlign:'right',float:'right',marginTop:"1%"}}>
          <Grid item sm={12} xs={12} style={{marginBottom:'5px'}}>
            <AddOrder />
          </Grid>
         <Grid item sm={12} xs={12}>
         
        <OrderTab/>
        </Grid> 
        </Grid >
        
       
        </Fragment>
  );
}
return ( 
       
  <OrderManagement/>


 );

}
}
export default withRouter(inject('orderStore')(observer(adDrawer)));





