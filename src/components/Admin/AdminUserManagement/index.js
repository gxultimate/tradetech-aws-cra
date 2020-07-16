import React, { Component ,Fragment} from 'react';
import {withRouter} from 'react-router-dom'
import {inject,observer} from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ProfilesTab from './profileTab.js';


class adDrawer extends Component{
  componentDidMount(){
    let {employeeStore:{getAccounts}}=this.props;

    getAccounts();
  }


render(){
  function AdminUserManagement() {

  return (
<Fragment>
     

      <Grid container direction="row" lg={12} sm={12} xs={12}>
        <Grid item lg={12} sm={12} xs={12} style ={{marginBottom:"8px"}}>
        <Typography variant="h5" >
           Employee Management
        </Typography>
        </Grid>
<Grid item lg={12} sm={12} xs={12}>
        <ProfilesTab/>
        </Grid>
        </Grid>
      </Fragment>
  );
}
return ( 
       
  <AdminUserManagement/>


 );

}
}
export default withRouter(inject("employeeStore")(observer(adDrawer)));





