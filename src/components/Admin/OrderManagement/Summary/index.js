import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SummaryTable from './Table'
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';
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
    width: 350,
    float:"right"
  },
}));

export default function SummaryGrid() {
  const classes = useStyles();
  const [filter,setFilter]= React.useState("")
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item sm={12} xs={12} style={{textAlign:"right",float:"right",marginBottom:"10px"}}>
        
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
        <Grid item xs={12}>
          <SummaryTable mysearch={filter}/>
        </Grid>
        
      </Grid>
    </div>
  );
}
