import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { inject, observer } from 'mobx-react';
import React, { Component,Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import OrderTab from './tab.js';
import DashGrid from './OrderDashboard'




class adDrawer extends Component{

  componentDidMount(){
    let {orderStore:{getOrder,getAccounts}}=this.props;
  }
render(){
  function OrderManagement() {

 

  return (
<Fragment>
      <Grid container direction="row" lg={12} sm={12} xs={12}>
        <Typography variant="h5" >
           Order Management
        </Typography>
        
        </Grid>
 
        <Divider style ={{marginBottom:"5px"}}/> 
        <Grid container style={{marginTop:"1%"}} lg={12} sm={12} xs={12}>
        <OrderTab/>
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





