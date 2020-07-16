import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor:"#FAFAFA"
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
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

export default function Filter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
  <Paper className={classes.paper} >
      <Grid container  direction="row"
  justify="flex-end"
  alignItems="flex-start" sm={12} >
      
        <Grid item sm={1} >
         
          <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">
          All
        </InputLabel>
        <Select
          native
    
        >
          <option value="" />
          <option value="All">All</option>
          <option value="Resolved">Resolved</option>
          <option value="Unresolved">Unresolved</option>
        </Select>
      </FormControl>
</Grid>
<Grid item sm={1.5} >
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">
          Type of Concern
        </InputLabel>
        <Select
          native
          style={{width:"180px"}}
        >
          <option value="" />
          <option value="Concern 1">Concern 1</option>
          <option value="Concern 2">Concern 2</option>
          <option value="Concern 3">Concern 3</option>
        </Select>
      </FormControl>
      </Grid>
<Grid item sm={1} >
      {/* <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form> */}
    </Grid>
    <Grid item sm={3} >
    <Paper component="form" className={classes.search} >
   
   <InputBase
     className={classes.input}
     placeholder="Search Messages"
     inputProps={{ 'aria-label': 'search customers' }}
    //  onChange={(e)=>setFilter(e.target.value)}
   />
   <span style={{  backgroundColor:"#FFA500",borderRadius:"3px"}}>
   <IconButton type="submit" className={classes.iconButton} aria-label="search">
     <SearchIcon style={{color:"white"}}/>
   </IconButton>
   </span>
   {/* <IconButton color="primary" className={classes.iconButton} aria-label="directions">
     <DirectionsIcon />
   </IconButton> */}
 </Paper>

        </Grid>
       
      </Grid>
      </Paper>
    </div>
  );
}
