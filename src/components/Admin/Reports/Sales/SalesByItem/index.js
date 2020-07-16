import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Divider,IconButton,Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import MaterialUIPickers from './DatePicker'
import SbCTable from './table'
import {inject,observer} from 'mobx-react'




 class SBItem extends React.Component {

  componentWillMount(){
    let{reportStore:{getProducts,getOrder,getCart}}=this.props;
    getProducts();
    getOrder();
    getCart();
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
function CenteredGrid() {
  const classes = useStyles();
  const [filter,setFilter]= React.useState("");
  return (
    <div className={classes.root}>
      <Grid container xs={12} sm={12}>
        <Typography variant="h6">Reports</Typography>
        </Grid>
        <Divider/>
      <Grid container spacing={3} xs={12} sm={12} style={{marginTop:"10px"}}>
      
        <Grid item xs={12} sm={12}>
        
            <Grid container xs={12} sm={12}>
            <Grid item sm={12} style={{marginBottom:"16px"}}>
   <Paper className={classes.paper}>
   <Grid container direction="row" sm={12}>
  <Grid item xs={8} style={{textAlign:"left",margin:"8px"}}> <Typography variant="subtitle2"> Sales By Item as of &nbsp; <MaterialUIPickers/>&nbsp; to &nbsp;  <MaterialUIPickers/></Typography> </Grid>
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

 </Paper></Grid>
  
   </Grid>

   </Paper>

   </Grid>
            <Grid item xs={12} sm={12}>
              <SbCTable  mysearch={filter}/>
            </Grid>
            </Grid>
          
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

export default inject('reportStore')(observer(SBItem))