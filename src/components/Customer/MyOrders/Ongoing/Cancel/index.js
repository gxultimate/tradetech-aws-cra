import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import {TextareaAutosize,Checkbox} from '@material-ui/core';
import {inject,observer} from 'mobx-react'


 class CancelForm extends React.Component {
  render() {
let {customerStore:{report}}=this.props;



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:'8px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

 function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Grid container spacing={3}> */}
      {/* <Grid container sm={12} xs={12} >
        <Grid item xs={12} sm={12} style={{textAlign:"left"}}> <Typography variant="h6">Reason: </Typography> </Grid>
        <Grid item sm={6} xs={6}>
              <Checkbox/> Low Stock
                </Grid>
                <Grid item sm={6} xs={6}>
              <Checkbox/> Reason 2
                </Grid>
                
        </Grid> */}
              <Grid container sm={12} xs={12}>
            
                <Typography variant="h6">Reason : </Typography>
                  <Grid item sm={12} xs={12} >
          <TextareaAutosize aria-label="minimum height" rowsMin={7} style={{width:"100%"}}  
              onChange={report_Detail=>{report.setProperty("report_Detail", report_Detail.target.value)}}
          
              />
          </Grid>
          </Grid>
      {/* </Grid> */}
    </div>
  );
}

return (
 <CenteredGrid/>
)
}
}

export default inject('customerStore')(observer(CancelForm))
