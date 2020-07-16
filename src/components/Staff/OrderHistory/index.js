import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Typography,Divider} from '@material-ui/core'
import OrderHistoryTab from './tab.js'
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

export default function OrderHistory() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Grid container  sm={12} xs={12} >
        <Grid item  sm={12}  xs={12}>
        <Typography variant='h6'> Order History</Typography> 
        
        </Grid>
        <Grid item xs={12} sm={12} alignItems='center' justify='center' >
          <OrderHistoryTab/>
        </Grid>
     

      </Grid>
    </div>
  );
}
