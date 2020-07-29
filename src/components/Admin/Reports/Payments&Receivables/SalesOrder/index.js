import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles ,ThemeProvider} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {withRouter} from 'react-router-dom'
import { Typography, Divider,Button ,IconButton} from '@material-ui/core';
import SOReportTable from './table'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import theme from './../../../theme'
import PrintIcon from '@material-ui/icons/Print';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
class SOReport extends React.Component {
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
    // padding: '2px 4px',
    display: 'flex',
    alignItems: 'right',
    width: '100%',
    float:"right"
  },
}));

 function SalesByCustomer() {
  const classes = useStyles();
  const [filter,setFilter]= React.useState("")

  const [selectedStartDate, setSelectedStartDate] = React.useState();
    const [selectedEndDate, setSelectedEndDate] = React.useState();

  const handleDateChangeStart = (date) => {
   
    setSelectedStartDate(date);
    



  };
  const handleDateChangeEnd = (date) => {
   
    
    setSelectedEndDate(date);




  };
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
      {/* <Grid container spacing={3} xs={12} sm={12} style={{marginTop:"10px"}}>
      
        <Grid item xs={12} sm={12}>
        
            <Grid container xs={12} sm={12}>
            <Grid item xs={12} sm={12} style={{marginBottom:"16px"}}>
              <Grid  xs={6} sm={6}> <Typography variant='subtitle1' style={{textAlign:"left"}}> Sales Order Report</Typography></Grid>
              <Grid  xs={6} sm={6}></Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
              <SOReportTable mysearch={filter}/>
            </Grid>
            </Grid>
          
        </Grid>
        
      </Grid> */}


      <Grid container spacing={3} xs={12} sm={12} style={{marginTop:"10px"}}>
      
      <Grid item xs={12} sm={12}>
      
          <Grid container xs={12} sm={12}>

          <Grid item sm={12} style={{width:'100%',marginBottom:"16px"}}>
 <Paper className={classes.paper}>
 <Grid container direction="row" sm={12}>
 <Grid item lg={8} sm={8} xs={8} style={{textAlign:"left",margin:"8px"}}> <Typography variant="subtitle2"> Sales order as of &nbsp; 

<MuiPickersUtilsProvider utils={DateFnsUtils} >
   
<ThemeProvider theme={theme}>
   <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
       

        format="MMM/dd/yyyy"
        value={selectedStartDate}
        color='primary'
        onChange={handleDateChangeStart}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
</ThemeProvider>
    
  </MuiPickersUtilsProvider>


&nbsp; to &nbsp; 
<MuiPickersUtilsProvider utils={DateFnsUtils} >
 <ThemeProvider theme={theme}>
   <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
       

        format="MMM/dd/yyyy"
        value={selectedEndDate}
        color='primary'
        onChange={handleDateChangeEnd}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
</ThemeProvider>
</MuiPickersUtilsProvider>
</Typography> </Grid>
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
 {/* <IconButton color="primary" className={classes.iconButton} aria-label="directions">
   <DirectionsIcon />
 </IconButton> */}
</Paper></Grid>

 </Grid>

 </Paper>

 </Grid>

         
          <Grid item xs={12} sm={12}>
            <SOReportTable mysearch={filter} startdate={selectedStartDate} enddate={selectedEndDate}/>
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

export default withRouter(SOReport);
