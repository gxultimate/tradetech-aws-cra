import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import ManagersTable from './ManagerTable'
import AddManager from './AddManager'
import { Typography } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

}));

export default function AdminGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} lg={12} sm={12} xs={12}>
    


        <Grid item lg={12} sm={12} xs={12} style={{textAlign:"right"}}>
    <AddManager/>
        </Grid>
        <Grid item lg={12} sm={12} xs={12}>
        <ManagersTable/>
        </Grid>
        


      </Grid>
    </div>
  );
}
