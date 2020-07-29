import React from 'react';
import { makeStyles,ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Divider,IconButton,Grid,Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import MaterialUIPickers from './DatePicker'
import SbCTable from './table'
import {inject,observer} from 'mobx-react'

import ImportExportIcon from '@material-ui/icons/ImportExport';
import theme from './../../../theme'
import PrintIcon from '@material-ui/icons/Print';


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
    minWidth:800
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
       <Grid container direction='row' sm={12} xs={12} >
        <Grid item xs={8} sm={8}  >
        <Typography variant="h6">Reports</Typography>
        </Grid>
        <ThemeProvider theme={theme}>
        <Grid item xs={4} sm={4}  style={{textAlign:'right'}}>
        {/* <Button variant='contained' size='small' color='primary' startIcon={ <PrintIcon />}  style={{marginRight:"10px"}}>Print</Button>
          <Button variant='contained' size='small' color='primary' startIcon={ <ImportExportIcon />}  style={{marginRight:"20px"}}>Excel</Button> */}
        </Grid>
        </ThemeProvider>
        </Grid>
        <Divider style={{marginRight:'20px'}} />
      <Grid container spacing={3} xs={12} sm={12} style={{marginTop:"10px"}}>
      
        <Grid item xs={12} sm={12}>
        
            <Grid container xs={12} sm={12}>
            <Grid item sm={12} style={{marginBottom:"16px"}}>
   <Paper className={classes.paper}>
   <Grid container direction="row" sm={12}>
   <Grid item xs={9} style={{textAlign:'left'}}><Typography variant='h6'>Sales by item</Typography>  </Grid>
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