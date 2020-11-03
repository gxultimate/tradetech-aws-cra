import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RepTabs from './Tab'
import { Divider,Typography } from '@material-ui/core';
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
      <Grid container direction="row" lg={12} sm={12} xs={12}>
          

          <Grid item  lg={12} sm={12} xs={12}>
            <Typography variant="h5" >
              Reports
    </Typography>

          </Grid>
          <Divider style={{ marginBottom: "15px" }} />
          <Grid item  lg={12} sm={12} xs={12}>
          <RepTabs />
          </Grid>
       
      </Grid>
    </div>
  );
}
