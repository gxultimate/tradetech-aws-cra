import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import {inject,observer} from 'mobx-react'
import Filter from './Filters'
import Card from './Cards'
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


class Messages extends React.Component {
    state = {  }
    render() { 


 function CrmMessages() {
  const classes = useStyles();

  return (
    <div className={classes.root} maxWidth="100">
      <Grid container spacing={1} >
      

        <Grid container sm={12}  >
          
           
         <Filter></Filter>
       
           

         
        </Grid>

        <Grid container sm={12}  >
          
           
          <Card></Card>
        
            
 
          
         </Grid>


      </Grid>
    </div>
  );
}

return ( 
    <CrmMessages/>
 );
}
}

export default inject("startingStore")(observer(Messages));