
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MsgTab from './tab'
import ComposeMsg from './Compose'
import { Typography } from '@material-ui/core';
import {inject,observer} from 'mobx-react'


import React, { Component } from 'react'

 class Messages extends Component {



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
function MessageGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} xs={12} sm={12}>
        <Grid item xs={12} sm={12}>
         <Typography variant='h6'>Messages</Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
        <Grid container xs={12} sm={12}>
  <Grid item sm={5}> <ComposeMsg/> </Grid>
  <Grid item sm={7}></Grid>
        </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
          <MsgTab/>
        </Grid>

      </Grid>
    </div>
  );
}

return (
   <MessageGrid/>
)
}
}

export default inject('messageStore')(observer(Messages))
