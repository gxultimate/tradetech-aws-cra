import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {inject,observer} from 'mobx-react'
import AddButton from './addButton'

class Assignpacker1 extends React.Component {
  state = {  }


  componentDidMount(){
    let {startingStore:{staffAssigned,getOrder}}=this.props
    staffAssigned();
    getOrder();
  }

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

 function Packer1Grid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} sm={12} xm={12}>
        
        <Grid item sm={12} xs={12} style={{textAlign:"right"}}>
          <AddButton/>
        </Grid>
        <Grid item sm={12} xs={12}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>

      </Grid>
    </div>
  );
}

    return ( 
    <Packer1Grid/> 
    );
  }
}
 
export default inject("startingStore")(observer(Assignpacker1));