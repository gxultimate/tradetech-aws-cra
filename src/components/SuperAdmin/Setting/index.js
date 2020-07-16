import { Typography } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { inject, observer } from 'mobx-react';
import React from 'react';
import MyProfile from './MyProfile';
class setting extends React.Component {
    state = {  }


    componentDidMount(){
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
 <Grid  container
  sm={12} xs={12} >
<Typography variant="h5" >
Setting
</Typography>
</Grid>
<Grid container  direction="row"
  justify="center"
  alignItems="center" >
<Grid item sm={12} xs={12} style={{margin:'auto'}}>
  <Typography variant='h6'>My Profile</Typography>
      <Grid container spacing={3} sm={12} xs={12}>
 
    
       <Grid item sm={12} xs={12} >
         <MyProfile/>
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