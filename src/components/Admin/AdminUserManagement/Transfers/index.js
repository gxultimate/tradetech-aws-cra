import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Typography,Grid,Divider} from '@material-ui/core';
import ProcessTable from './Process'
import PendingTable from './Pending'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function TransfersGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <Typography variant="h5">Process</Typography>
            <Divider style={{marginBottom:"15px"}}/>
            <Typography variant="h6">Ready to Transfer</Typography>
          <Paper className={classes.paper}><ProcessTable/></Paper>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6">Pending</Typography>
          <Paper className={classes.paper}><PendingTable/></Paper>
        </Grid>

      </Grid>
    </div>
  );
}
