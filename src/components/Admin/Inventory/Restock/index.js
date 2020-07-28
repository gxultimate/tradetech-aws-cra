
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Restock from './table'

import React, { Component } from 'react'

class RIndex extends Component {
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
let filter =this.props.mysearch;
 function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} xs={12} sm={12}>
   
        <Grid item sm={12} xs={12}>
         <Restock mysearch={filter}/>
        </Grid>
        
      </Grid>
    </div>
  );
}
return (
  <CenteredGrid/>
)
}
}

export default RIndex
