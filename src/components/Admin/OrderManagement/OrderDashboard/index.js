import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid,Typography} from '@material-ui/core';
import {inject,observer} from 'mobx-react'






 class OrderD extends React.Component {
  render() {

let {orderStore:{listOfOrder}}=this.props;


let totalorder = listOfOrder.length;

let pending = listOfOrder.filter(filorder => filorder.orderStatus === 'Pending').length;

let completed = listOfOrder.filter(comorder => comorder.orderStatus === 'Complete').length;

let failed = listOfOrder.filter(failorder => failorder.orderStatus === 'Failed').length;

let process = listOfOrder.filter(failorder => failorder.orderStatus === 'Packing' || failorder.orderStatus === 'Transfer'  ||failorder.orderStatus === 'Dispatch').length;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'white',
    backgroundColor:"#FFA500",
  },
}));

 function DashGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4} justify='center' alignItems='center'>
   
        <Grid item xs={2}>
          <Paper className={classes.paper}>
              <Typography>
                  Orders
              </Typography>
              <Typography variant="h5" style={{fontWeight:"bold",color:"white"}}>
                  {totalorder}
              </Typography>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
          <Typography>
                  Pending
              </Typography>
              <Typography variant="h5" style={{fontWeight:"bold",color:"white"}}>
                  {pending}
              </Typography>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
          <Typography>
                  Processing
              </Typography>
              <Typography variant="h5" style={{fontWeight:"bold",color:"white"}}>
                  {process}
              </Typography>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
          <Typography>
                  Completed
              </Typography>
              <Typography variant="h5" style={{fontWeight:"bold",color:"white"}}>
                  {completed}
              </Typography>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
          <Typography>
                  Unfulfilled
              </Typography>
              <Typography variant="h5" style={{fontWeight:"bold",color:"white"}}>
                  {failed}
              </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
return (
  <DashGrid/>
)
}
}

export default inject('orderStore')(observer(OrderD))