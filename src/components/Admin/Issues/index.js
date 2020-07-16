import { Divider, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { inject, observer } from 'mobx-react';
import React from 'react';
import Tab from './tab';




class Issues extends React.Component {
  componentDidMount(){
    let{issuesStore:{getReport,getDistributors,getAccounts}}=this.props;
    getReport();
    getDistributors();
    getAccounts()
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



function IssuesGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container style={{marginBottom:"10px"}} lg={12} sm={12} xs={12}>
        <Grid item lg={12} sm={12} xs={12}>
      <Typography variant='h6'>Help/Support</Typography>
      </Grid>
      <Divider/>
    
     
      <Grid item lg={12} sm={12} xs={12} style={{marginBottom:"16px"}}>
  
<Tab/>
   </Grid>
   
       
    
      </Grid>
    </div>
  );
}


return (
<IssuesGrid/>
)
}
}

export default inject('issuesStore')(observer(Issues))
