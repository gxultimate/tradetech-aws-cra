import { AppBar, Avatar, CssBaseline, Divider, Drawer, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import clsx from 'clsx';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, withRouter } from "react-router-dom";
// import SuperAdminDashboard from './Dashboard'; 
import LogoutButton from './../Logout';
import pr from './../pr.png';
import DashboardGrid from './Dashboard';
import DistributorManagement from './DistributorManagement';
import DrawerList from './DrawerRouter';
import IssuesGrid from './Issues';
import SettingGrid from './Setting'
class adDrawer extends Component{

  state = {}
render(){

const drawerWidth = 270;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
   
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor:"#208769",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
     
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
      backgroundColor:"#208769",
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));





  function SupAdminDrawer() {
    const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{backgroundColor:"#208769"}}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
           
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
    
          <Typography variant="h6" noWrap style={{fontWeight:"bold",color:"white"}}>
            <span style={{color:"orange"}}>TRADE</span>TECH
          </Typography>
     
          <div style={{position:"absolute",right:0}}
                 >
          <Grid >
           
             <IconButton style={{backgroundColor:"#1E7A60",marginRight:"10px"}}>
  <NotificationsOutlinedIcon style={{color:"white",fontSize:"18px"}}/>
</IconButton>
<IconButton style={{backgroundColor:"#1E7A60",marginRight:"10px"}}>
  <QuestionAnswerOutlinedIcon style={{color:"white",fontSize:"18px"}}/>
</IconButton>


<LogoutButton/>

</Grid></div>

        </Toolbar>
      
   
       
      </AppBar>
      <Drawer
        style={{backgroundColor:"#208769"}}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose} style={{backgroundColor:"#1E7A60"}}>
            {theme.direction === 'rtl' ? <ChevronRightIcon style={{color:"white"}}/> : <ChevronLeftIcon style={{color:"white"}}/>}
          </IconButton>
        </div>
        <Divider />


      <DrawerList/>

      </Drawer>

     
  <div>
  <main className={classes.content}>
        <div className={classes.toolbar} />
      
        <Router>
  <Switch>
      <Route exact path="/SuperAdmin" render={()=><DashboardGrid/>}/>
      <Route path="/SuperAdmin/DistributorManagement" render={()=><DistributorManagement/>}/>
      <Route path="/SuperAdmin/Issues" render={()=><IssuesGrid/>}/>
      <Route path="/SuperAdmin/Setting" render={()=><SettingGrid/>}/>
      
      
  </Switch>
  </Router>  
        
       
      </main>
    
</div>

      </div>

  );
}

return ( 
  
<SupAdminDrawer></SupAdminDrawer>
 

 );

}
}
export default withRouter(inject("startingStore")(observer(adDrawer)));
