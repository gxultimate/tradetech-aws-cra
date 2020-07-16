import React,{Component,Fragment} from 'react';
import {withRouter} from 'react-router-dom'
import {inject,observer} from 'mobx-react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import CRMTab from './tab.js';
import RegisterDialog from './Customer/RegisterCustomer'
class CRMGrid extends Component{

  componentDidMount() {
    let {crmStore:{getAccounts }}=this.props;
        getAccounts();   
  }



render(){
  function CRM() {

  return (
        <Fragment>

      <Grid container direction="row" lg={12} sm={12} xs={12}>
        <Grid item lg={12} sm={12} xs={12}>
        <Typography variant="h5" >
           Customer Relationship Management
        </Typography>
        </Grid>
  
        <Divider style ={{marginBottom:"20px"}}/>
<Grid item lg={12} sm={12} xs={12}>
        <Grid container lg={12} sm={12} xs={12}   style={{marginTop:"1%"}}>
          <Grid item  lg={12} sm={12} xs={12}  style={{textAlign:"right",paddingBottom:"10px"}} >
          <RegisterDialog style={{float:"right"}} />
          </Grid>
          <Grid item  lg={12} sm={12} xs={12}>
        <CRMTab/>
        </Grid>
        </Grid >
        </Grid>
        </Grid>
  
      </Fragment>
  );
}
return ( 
       
  <CRM/>


 );

}
}
export default withRouter(inject("crmStore")(observer(CRMGrid)));





