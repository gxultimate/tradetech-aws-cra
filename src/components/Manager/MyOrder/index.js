import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Typography,Grid} from '@material-ui/core/';
import Table from './table'

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

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Grid container direction="row"> 
          <Grid item xs={12}  >
          <Typography variant="h5" style={{textAlign:"left"}}>Order List</Typography>
          </Grid>
      
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Table/>
        </Grid>
      
      </Grid>
    </div>
  );
}
