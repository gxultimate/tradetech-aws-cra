import React from 'react';
import {inject,observer} from 'mobx-react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {TextField} from '@material-ui/core'
// import moment from 'moment';


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


class Registration2 extends React.Component {
  state = {  }
  render() { 
//  let {startingStore:{account}}=this.props
 

//  let date = new Date();
//  function getHash(input){
//   var hash = 0, len = input.length;
//   for (var i = 0; i < len; i++) {
//     hash  = ((hash << 5) - hash) + input.charCodeAt(i);
//     hash |= 0; // to 32bit integer
//   }}

function ShopDetails() {
  const classes = useStyles();

  return (
    <div className={classes.root} >


        

 <Paper className={classes.paper}>

     
          <Grid container direction="row" sm={6} xs={12}>
           


{/* <Typography variant="h6" style={{marginBottom:"16px"}}>Shop Details</Typography> */}

<Grid item sm={12} xs={12}>
             <TextField
          label="Store Name"
          id="outlined-size-small"
        //   defaultValue="First Name"
          multiline
          variant="outlined"
          size="small"
          style={{width:"90%",marginBottom:"8px"}}
        />
             </Grid>

             <Grid item sm={12} xs={12}>
             <TextField
          label="Store Address"
          id="outlined-size-small"
        //   defaultValue="First Name"
          multiline
          variant="outlined"
          size="small"
          style={{width:"90%",marginBottom:"8px"}}
        />
             </Grid>
  
          </Grid>
          </Paper>

    
    </div>
  );
}
return ( 

<ShopDetails/> );
}
}

export default inject("startingStore")(observer(Registration2));