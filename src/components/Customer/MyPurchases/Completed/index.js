import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Divider,Grid,Typography} from '@material-ui/core';
// import Table from './table'
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

export default function Completed() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container xs={12} sm={12}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
              <Grid container xs={12} sm={12}>
                    <Grid item xs={6} sm={6} style={{textAlign:"left"}}><Typography variant="subtitle2"> Invoice Numer :</Typography></Grid>
                    <Grid item xs={6} sm={6} style={{textAlign:"left"}}><Typography variant="subtitle2">Invoice Date :</Typography></Grid>
              </Grid>
              <Divider style={{marginTop:"8px",marginBottom:"8px"}}/>
              <Grid container xs={12} sm={12}>
                    <Grid item xs={6} sm={6} style={{textAlign:"left"}}><Typography variant="subtitle2"> Customer Name :</Typography></Grid>
                    <Grid item xs={6} sm={6} style={{textAlign:"left"}}><Typography variant="subtitle2"> Address :</Typography></Grid>
                    <Grid item xs={6} sm={6} style={{textAlign:"left"}}><Typography variant="subtitle2"> Packer :</Typography></Grid>
                    <Grid item xs={6} sm={6} style={{textAlign:"left"}}><Typography variant="subtitle2"> Dispatcher :</Typography></Grid>
              </Grid>
              <Divider style={{marginTop:"8px",marginBottom:"8px"}}/>
              <Grid container xs={12} sm={12}>
              <Grid item xs={6} sm={6} style={{textAlign:"left"}}><Typography variant="subtitle2"> Order Status :</Typography></Grid>
              <Grid item xs={6} sm={6} style={{textAlign:"left"}}><Typography variant="subtitle2"> Mode Of Payment :</Typography></Grid>
              <Grid item xs={6} sm={6} style={{textAlign:"left"}}><Typography variant="subtitle2"> Total Payment :</Typography></Grid>
              <Grid item xs={6} sm={6} style={{textAlign:"left"}}><Typography variant="subtitle2"> Payment Status :</Typography></Grid>
              </Grid>
              <Divider style={{marginTop:"8px",marginBottom:"8px"}}/>
                {/* <Table/> */}
          </Paper>
        </Grid>
      
      </Grid>
    </div>
  );
}
