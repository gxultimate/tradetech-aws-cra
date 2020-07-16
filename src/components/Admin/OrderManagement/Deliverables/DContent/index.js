import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

// const styles = {
//     backgroundColor:"#208769",
     
    
//   };
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function PackGrid() {
    const classes = useStyles();
    // const [age, setAge] = React.useState('');
  
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
  
    // const handleChange = event => {
    //   setAge(event.target.value);
    // };
  return (
    <div className={classes.root}>
      <Grid sm={12} container spacing={3}>
      
        <Grid item xs={9} style={{marginTop:"8px"}}>
          <Typography variant="h5"  style={{color:"#208769",float:"left",marginLeft:"5px"}}>Today's Deliverables</Typography>
        </Grid>
        <Grid item xs={3} style={{marginTop:"8px"}}>
        <Paper component="form" style={{margin:"auto",height:"38px"}}>
    
    <InputBase 
    type="search"
    
     fullWidth={false} 
     style={{marginTop:"1.5px",
     width:"80%",
     marginLeft:"10px"}}
      placeholder="Search "
      inputProps={{ 'aria-label': 'search google maps' }}
    />
    <IconButton type="submit"  aria-label="search" style={{backgroundColor:"orange",borderRadius:"4px",height:"38px",float:"right"}}>
      <  SearchIcon style={{color:"white",marginTop:'-15%',float:"right"}}/>
    </IconButton>
  
  </Paper >
        </Grid>

        <Grid item xs={9} >
        <TextField
          label="Reference #"
          id="outlined-size-small"
         
          variant="outlined"
          size="small"
        />
        </Grid>
        
        <Grid item xs={3} >
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Completed/Failed
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          
         
          labelWidth={labelWidth}
          size="small"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Completed</MenuItem>
          <MenuItem value={20}>Failed</MenuItem>
        
        </Select>
      </FormControl>
        </Grid>


        <Grid item xs={12} >
        <Paper className={classes.paper}>
          <Grid container direction="row">
        <Grid item  sm={6} alignItems="left">
         <Typography style={{color:"#208769",textAlign:"left"}}>Reference # :</Typography>
         <Typography  style={{textAlign:"left"}}>Customer name :</Typography>
         <Typography style={{textAlign:"left"}}>Address :</Typography>
        </Grid>
       
        <Grid item sm={6} stle={{border:"1px solid red"}}>
        <Typography style={{textAlign:"left"}}>Date Ordered :</Typography>
         <Typography  style={{textAlign:"left"}}>In Charge :</Typography>
         <Typography style={{textAlign:"left"}}>Anticipated Delivery Date/Time :</Typography>
        </Grid>
        </Grid>
        </Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Grid container direction="row">
        <Grid item  sm={6} alignItems="left">
         <Typography style={{color:"#208769",textAlign:"left"}}>Reference # :</Typography>
         <Typography  style={{textAlign:"left"}}>Customer name :</Typography>
         <Typography style={{textAlign:"left"}}>Address :</Typography>
        </Grid>
       
        <Grid item sm={6} stle={{border:"1px solid red"}}>
        <Typography style={{textAlign:"left"}}>Date Ordered :</Typography>
         <Typography  style={{textAlign:"left"}}>In Charge :</Typography>
         <Typography style={{textAlign:"left"}}>Anticipated Delivery Date/Time :</Typography>
        </Grid>
        </Grid>
        </Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Grid container direction="row">
        <Grid item  sm={6} alignItems="left">
         <Typography style={{color:"#208769",textAlign:"left"}}>Reference # :</Typography>
         <Typography  style={{textAlign:"left"}}>Customer name :</Typography>
         <Typography style={{textAlign:"left"}}>Address :</Typography>
        </Grid>
       
        <Grid item sm={6} stle={{border:"1px solid red"}}>
        <Typography style={{textAlign:"left"}}>Date Ordered :</Typography>
         <Typography  style={{textAlign:"left"}}>In Charge :</Typography>
         <Typography style={{textAlign:"left"}}>Anticipated Delivery Date/Time :</Typography>
        </Grid>
        </Grid>
        </Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Grid container direction="row">
        <Grid item  sm={6} alignItems="left">
         <Typography style={{color:"#208769",textAlign:"left"}}>Reference # :</Typography>
         <Typography  style={{textAlign:"left"}}>Customer name :</Typography>
         <Typography style={{textAlign:"left"}}>Address :</Typography>
        </Grid>
       
        <Grid item sm={6} stle={{border:"1px solid red"}}>
        <Typography style={{textAlign:"left"}}>Date Ordered :</Typography>
         <Typography  style={{textAlign:"left"}}>In Charge :</Typography>
         <Typography style={{textAlign:"left"}}>Anticipated Delivery Date/Time :</Typography>
        </Grid>
        </Grid>
        </Paper>
        </Grid>
      </Grid>
    </div>
  );
}