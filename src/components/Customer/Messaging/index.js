
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
      <Grid container  xs={12} sm={12}>
      <Grid item xs={12} style={{marginBottom:"8px",marginLeft:'30px',marginRight:'30px',marginTop:'20px'}}>
          <Paper >
          <Grid container sm={12} >
       <Grid item  sm={1} xs={1} style={{backgroundColor:"#208769",paddingRight:"10px"}}></Grid>
       <Grid item sm={10} xs={10} style={{paddingTop:"10px",paddingBottom:"10px",marginleft:"15px"}}><Typography variant="p" style={{fontWeight:"bold",width:"98%"}}>&nbsp;&nbsp;Messaging</Typography> </Grid> 
      
       </Grid>

          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
        <Grid container xs={12} sm={12} alignItems='center' justify='center' >
  <Grid item sm={4} > <ComposeMsg/> </Grid>
  
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

export default inject('customerStore')(observer(Messages))
