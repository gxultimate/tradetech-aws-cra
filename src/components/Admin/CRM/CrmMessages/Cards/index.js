import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import sample from './../omg/sample.png'
import { Typography } from '@material-ui/core';
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
}));

export default function Card() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{marginTop:"30px"}}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          
          <Paper className={classes.paper}>
          <Grid container md={12}>
         <Grid item sm={1} style={{float:"left"}} >
           <img src={sample} style={{height:"120px"}}></img>
         </Grid>
         <Grid item sm={9} >
        <Typography style={{textAlign:"left"}} variant="h5"> Sample Name</Typography>
         <Typography style={{textAlign:"left"}}>Praesent accumsan ligula eget elit porta, sed efficitur est varius. Sed quam tellus, iaculis vel ante nec,
            tincidunt tempus ipsum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec lacinia, enim a posuere molestie, ante est</Typography>
         </Grid>
         <Grid item sm={2} >
         <Typography style={{textAlign:"left"}} variant="h6"> Sample Concern <span style={{float:"right"}}> 8:30am</span></Typography>
         <Typography style={{textAlign:"right"}} variant="h6"> Reply</Typography>
         </Grid>
         </Grid> 
          </Paper>
         
        </Grid>


        <Grid item xs={12}>
          
          <Paper className={classes.paper}>
          <Grid container md={12}>
         <Grid item sm={1} style={{float:"left"}} >
           <img src={sample} style={{height:"120px"}}></img>
         </Grid>
         <Grid item sm={9} >
        <Typography style={{textAlign:"left"}} variant="h5"> Sample Name</Typography>
         <Typography style={{textAlign:"left"}}>Praesent accumsan ligula eget elit porta, sed efficitur est varius. Sed quam tellus, iaculis vel ante nec,
            tincidunt tempus ipsum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec lacinia, enim a posuere molestie, ante est</Typography>
         </Grid>
         <Grid item sm={2} >
         <Typography style={{textAlign:"left"}} variant="h6"> Sample Concern <span style={{float:"right"}}> 8:30am</span></Typography>
         <Typography style={{textAlign:"right"}} variant="h6"> Reply</Typography>
         </Grid>
         </Grid> 
          </Paper>
         
        </Grid>



        <Grid item xs={12}>
          
          <Paper className={classes.paper}>
          <Grid container md={12}>
         <Grid item sm={1} style={{float:"left"}} >
           <img src={sample} style={{height:"120px"}}></img>
         </Grid>
         <Grid item sm={9} >
        <Typography style={{textAlign:"left"}} variant="h5"> Sample Name</Typography>
         <Typography style={{textAlign:"left"}}>Praesent accumsan ligula eget elit porta, sed efficitur est varius. Sed quam tellus, iaculis vel ante nec,
            tincidunt tempus ipsum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec lacinia, enim a posuere molestie, ante est</Typography>
         </Grid>
         <Grid item sm={2} >
         <Typography style={{textAlign:"left"}} variant="h6"> Sample Concern <span style={{float:"right"}}> 8:30am</span></Typography>
         <Typography style={{textAlign:"right"}} variant="h6"> Reply</Typography>
         </Grid>
         </Grid> 
          </Paper>
         
        </Grid>


        <Grid item xs={12}>
          
          <Paper className={classes.paper}>
          <Grid container md={12}>
         <Grid item sm={1} style={{float:"left"}} >
           <img src={sample} style={{height:"120px"}}></img>
         </Grid>
         <Grid item sm={9} >
        <Typography style={{textAlign:"left"}} variant="h5"> Sample Name</Typography>
         <Typography style={{textAlign:"left"}}>Praesent accumsan ligula eget elit porta, sed efficitur est varius. Sed quam tellus, iaculis vel ante nec,
            tincidunt tempus ipsum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec lacinia, enim a posuere molestie, ante est</Typography>
         </Grid>
         <Grid item sm={2} >
         <Typography style={{textAlign:"left"}} variant="h6"> Sample Concern <span style={{float:"right"}}> 8:30am</span></Typography>
         <Typography style={{textAlign:"right"}} variant="h6"> Reply</Typography>
         </Grid>
         </Grid> 
          </Paper>
         
        </Grid>


        <Grid item xs={12}>
          
          <Paper className={classes.paper}>
          <Grid container md={12}>
         <Grid item sm={1} style={{float:"left"}} >
           <img src={sample} style={{height:"120px"}}></img>
         </Grid>
         <Grid item sm={9} >
        <Typography style={{textAlign:"left"}} variant="h5"> Sample Name</Typography>
         <Typography style={{textAlign:"left"}}>Praesent accumsan ligula eget elit porta, sed efficitur est varius. Sed quam tellus, iaculis vel ante nec,
            tincidunt tempus ipsum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec lacinia, enim a posuere molestie, ante est</Typography>
         </Grid>
         <Grid item sm={2} >
         <Typography style={{textAlign:"left"}} variant="h6"> Sample Concern <span style={{float:"right"}}> 8:30am</span></Typography>
         <Typography style={{textAlign:"right"}} variant="h6"> Reply</Typography>
         </Grid>
         </Grid> 
          </Paper>
         
        </Grid>

      </Grid>
    </div>
  );
}
