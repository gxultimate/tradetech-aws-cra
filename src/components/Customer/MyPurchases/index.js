import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import PurchasesTab from './tab'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:"16px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={12} style={{marginBottom:"8px",width:"95%"}}>
          <Paper >
          <Grid container sm={12} >
       <Grid item  sm={1} xs={1} style={{backgroundColor:"#208769",paddingRight:"10px"}}></Grid>
       <Grid item sm={10} xs={10} style={{paddingTop:"10px",paddingBottom:"10px",marginleft:"15px"}}><Typography variant="p" style={{fontWeight:"bold",width:"98%"}}>&nbsp;&nbsp;My Purchases</Typography> </Grid>
      
       </Grid>
          </Paper>
        </Grid>
    
    <Grid item xs={12}>
    <PurchasesTab/>
    </Grid>
      </Grid>
    </div>
  );
}
