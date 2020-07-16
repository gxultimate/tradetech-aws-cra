import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Paper, Button,ThemeProvider} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {withRouter,Link} from 'react-router-dom'
import theme from './../../theme'

class MyAccount extends React.Component {
  state = {  }
  render() { 

  let  mypurchases =()=>{
      setTimeout(()=>{
        this.props.history.push("/Customer/MyOrder");
      },500)
     
    }

    let  myfavorites =()=>{
      setTimeout(()=>{
        this.props.history.push("/Customer/MyFavorites");
      },500)
     
    }
    let  myDis =()=>{
      setTimeout(()=>{
        this.props.history.push("/AccessDistributor");
      },1000)
     
    }

    let  rv =()=>{
      setTimeout(()=>{
        this.props.history.push("/Customer/RecentlyView");
      },500)
     
    }
    let  ttechCoins =()=>{
      setTimeout(()=>{
        this.props.history.push("/Customer/TtechCoins");
      },500)
     
    }

    let account =()=>{
      setTimeout(()=>{
        this.props.history.push("/Customer/AccountSetting");
      },500)
     
    }
 
 
  function  logout() {
    sessionStorage.clear();
    window.location.href = '/#/Login';
  }



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginBottom:"40px",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: "white",
    backgroundColor:"#208769"

  },
}));

 function MyAccountGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{marginBottom:"8px"}}>
          <Paper >
          <Grid container sm={12} >
       <Grid item  sm={1} xs={1} style={{backgroundColor:"#208769",paddingRight:"10px"}}></Grid>
       <Grid item sm={10} xs={10} style={{paddingTop:"10px",paddingBottom:"10px",marginleft:"15px"}}><Typography variant="p" style={{fontWeight:"bold",width:"98%"}}>&nbsp;&nbsp;My Account</Typography> </Grid>
      
       </Grid>

          </Paper>
        </Grid>
        <ThemeProvider theme={theme}>
        <Grid item xs={12} sm={6}>
          {/* <Paper className={classes.paper}> */}
            <Button variant='contained' color ='primary' style={{width:"100%"}} onClick={mypurchases}>
            <Typography>My Orders</Typography>
            </Button>
          {/* </Paper> */}
        </Grid>
        {/* <Grid item  xs={12} sm={6}>
              <Button variant='contained' color ='primary' style={{width:"100%"}} onClick={myDis}>
          <Typography>My Distributors</Typography>
          </Button>
        </Grid> */}
        <Grid item xs={12} sm={6}>
        <Button variant='contained' color ='primary' style={{width:"100%"}} onClick={myfavorites}>
          <Typography>My Favorites</Typography>
          </Button>
        </Grid>
        <Grid item  xs={12} sm={6}>
              <Button variant='contained' color ='primary' style={{width:"100%"}} onClick={rv}>
          <Typography>Recently Viewed</Typography>
          </Button>
        </Grid>
        <Grid item  xs={12} sm={6}>
              <Button variant='contained' color ='primary' style={{width:"100%"}} onClick={ttechCoins}>
          <Typography >TTech Coins</Typography>
          </Button>
        </Grid>
        <Grid item  xs={12} sm={6}>
              <Button variant='contained' color ='primary' style={{width:"100%"}} onClick={account}>
          <Typography>Account Setting</Typography>
          </Button>
        </Grid>
        <Grid item  xs={12} sm={6}>
              <Button variant='contained' color ='primary' style={{width:"100%"}} onClick={logout}>
          <Typography >LogOut</Typography>
          </Button>
        </Grid>

        </ThemeProvider>
      </Grid>
    </div>
  );
}

return ( 
  <MyAccountGrid/>
 );
}
}

export default withRouter(MyAccount);