import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { inject, observer } from 'mobx-react';
import React from 'react';
import AddStaff from './addStaff';
import StaffTable from './Table';
import {  IconButton, Paper ,InputBase} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
class StaffIndex extends React.Component {
  

  componentDidMount(){
    let {employeeStore:{getAccounts}}=this.props;

    getAccounts();
  }
  render() { 


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  formControl: {
    margin: theme.spacing(1),
    width: '90%',
    
   
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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

 function StaffGrid() {
  const classes = useStyles();
  const [filter,setFilter]= React.useState("")
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <div className={classes.root}>
      <Grid container direction="row"  spacing={2} lg={12} sm={12} xs={12}>
        <Grid item lg={12} sm={12} xs={12}>
          <Grid container justify="flex-start" alignItems="flex-start" >
              <Grid item xs={2} sm={2} >
              <FormControl variant="outlined" className={classes.formControl}  >
        <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
         Staff Role
        </InputLabel>
        <Select
          native
          size='small'
          labelWidth={labelWidth}
          onChange={(e)=>setFilter(e.target.value)}
        >
                <option value=""></option>
          <option value="Packer"  >Packer</option>
          <option value="Dispatcher">Dispatcher</option>
      
        </Select>
      </FormControl>
            </Grid>
            <Grid item xs={2} sm={2} >
            <Paper component="form" className={classes.search} style={{marginTop:'18px'}}>
     
     <InputBase
       className={classes.input}
       placeholder="Search"
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
            <Grid item xs={8} sm={8} style={{textAlign:"right"}} >
              <AddStaff/>
            </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
         <StaffTable mysearch={filter}/>
        </Grid>
        
      </Grid>
    </div>
  );
}

return ( 
  <StaffGrid/>
 );
}
}

export default inject("employeeStore")(observer(StaffIndex));
