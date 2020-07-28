import React from 'react';
import { makeStyles ,ThemeProvider} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {withRouter} from 'react-router-dom'
import { Typography, Divider,Button } from '@material-ui/core';
import SOReportTable from './table'
import ImportExportIcon from '@material-ui/icons/ImportExport';
import theme from './../../../theme'
import PrintIcon from '@material-ui/icons/Print';
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
}));

 function SalesByCustomer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container direction='row' sm={12} xs={12} >
        <Grid item xs={8} sm={8}  >
        <Typography variant="h6">Reports</Typography>
        </Grid>
        <ThemeProvider theme={theme}>
        <Grid item xs={4} sm={4}  style={{textAlign:'right'}}>
        <Button variant='contained' size='small' color='primary' startIcon={ <PrintIcon />}  style={{marginRight:"10px"}}>Print</Button>
          <Button variant='contained' size='small' color='primary' startIcon={ <ImportExportIcon />}  style={{marginRight:"20px"}}>Excel</Button>
        </Grid>
        </ThemeProvider>
        </Grid>
        <Divider style={{marginRight:'20px'}} />
      <Grid container spacing={3} xs={12} sm={12} style={{marginTop:"10px"}}>
      
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <Grid container xs={12} sm={12}>
            <Grid item xs={12} sm={12} style={{marginBottom:"16px"}}>
              <Grid  xs={6} sm={6}> <Typography variant='subtitle1' style={{textAlign:"left"}}> Sales Order Report</Typography></Grid>
              <Grid  xs={6} sm={6}></Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
              <SOReportTable/>
            </Grid>
            </Grid>
          </Paper>
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
