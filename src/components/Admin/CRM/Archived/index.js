import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ArchivedTBL from './table'
import {inject,observer} from 'mobx-react'
import { InputBase,IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
class ArchivedPage extends React.Component {
    state = {  }
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
    display: 'flex',
    alignItems: 'right',
    width: 350,
    float:"right"
  },
}));
 function Archived() {
  const classes = useStyles();
  const [filter,setFilter] =React.useState("")
  return (
    <div className={classes.root}>
      <Grid container spacing={3} xs={12} sm={12}>
        <Grid item xs={12} sm={12} style={{textAlign:"right"}} >
        <Grid container  xs={12} sm={12} direction="row" justify="flex-end" alignItems="center">
    <Grid item xs={4} sm={4} style={{textAlign:"right"}} >
        <Paper component="form" className={classes.search} >
   
   <InputBase
     className={classes.input}
     placeholder="Search Customers"
     inputProps={{ 'aria-label': 'search customers' }}
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
        </Grid>
        <Grid item xs={12}>
          <ArchivedTBL mySearch={filter}/>
        </Grid>
   
      </Grid>
    </div>
  );
}

return ( 
    <Archived/>
 );
}
}

export default ArchivedPage;
