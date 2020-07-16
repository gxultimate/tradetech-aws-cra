import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MyProfile from './Profile'
import AccessCode from './AccessCode'
import ChangeButton from './changeCode'
import {inject,observer} from 'mobx-react'
import {Typography,Divider} from '@material-ui/core/'
class setting extends React.Component {
    state = {  }


    componentWillMount(){
      let {startingStore:{getToken}}=this.props;

      getToken();
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
 function SettingGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
 <Grid container  sm={12} xs={12}>
<Typography variant="h5">
Setting
</Typography>


{/* <Grid item sm={12} xs={12} style={{marginTop:'25px'}}>
  <Typography variant='h6'>My Profile</Typography>
      <Grid container spacing={3} sm={12} xs={12}>
 
    
       <Grid item sm={12} xs={12} >
         <MyProfile/>
         </Grid>
        </Grid>
        </Grid> */}


<Grid item sm={12} xs={12} style={{marginTop:'25px'}}>
  <Typography variant='h6'>Access Token</Typography>
      <Grid container spacing={3} sm={12} xs={12}>
 
    
        <Grid item sm={12} xs={12} style={{textAlign:"right"}}>
          <ChangeButton/>
       </Grid>
       <Grid item sm={12} xs={12} >
       <MyProfile/>
         <AccessCode/>
         </Grid>
        </Grid>
        </Grid>


        </Grid>
    </div>
  );
}


return ( 
    <SettingGrid/>
 );
}
}

export default inject("startingStore")(observer(setting));