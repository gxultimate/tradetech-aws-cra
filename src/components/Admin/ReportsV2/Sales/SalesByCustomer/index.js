import { Divider, IconButton, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { withRouter } from 'react-router-dom';
import theme from './../../../theme';
import SbCTable from './table';

class SBC extends React.Component {
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
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  
  },

  search: {
    // padding: '2px 4px',
    display: 'flex',
    alignItems: 'right',
    width: '100%',
    float:"right"
  },
}));

 function SalesByCustomer() {
  const classes = useStyles();
  const [filter,setFilter]= React.useState("");

  return (
    <div className={classes.root}>
   
    
      <Grid container spacing={3} xs={12} sm={12} >
      
        <Grid item xs={12} sm={12}>
       
            <Grid container xs={12} sm={12}>

            <Grid item sm={12} style={{width:'100%',marginBottom:"16px"}}>
   <Paper className={classes.paper}>
   <Grid container direction="row" sm={12}>
  <Grid item xs={9} style={{textAlign:'left'}}><Typography variant='h6'>Sales by customer</Typography>  </Grid>
  <Grid item xs={3} >     
  <Paper component="form" className={classes.search} >
   
   <InputBase
     className={classes.input}
     placeholder="Search "
     inputProps={{ 'aria-label': 'search ' }}
     onChange={(e)=>setFilter(e.target.value)}
   />
   <span style={{  backgroundColor:"#FFA500",borderRadius:"3px"}}>
   <IconButton type="submit" className={classes.iconButton} aria-label="search">
     <SearchIcon style={{color:"white"}}/>
   </IconButton>
   </span>
 
 </Paper>
 </Grid>
  
   </Grid>

   </Paper>

   </Grid>


            <Grid item xs={12} sm={12}>
              <SbCTable mysearch={filter}/>
            </Grid>
            </Grid>
         
        </Grid>
        
      </Grid>
    </div>
  );
}

return ( 
  <SalesByCustomer/>
 );
}
}

export default withRouter(SBC);
