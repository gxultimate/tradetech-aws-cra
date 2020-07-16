import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import React from 'react';
import DrawerList from './Routes';
import {inject,observer} from 'mobx-react'
import {HashRouter as Router,Route,Switch,withRouter} from 'react-router-dom';

import MyOrders from './MyOrder'
import MyProfile from './MyProfile'
import OrderHistory from './OrderHistory'



class staffpage extends React.Component {
  state = {  }

  componentWillMount(){
    let {staffStore:{staffAssigned}}=this.props
    staffAssigned();
  }
  render() { 


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      backgroundColor:'#208769',
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'#208769',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function StaffGrid(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} style={{backgroundColor:"#208769"}}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <span style={{color:"#F7A31C"}}>Trade</span><span style={{color:"white"}}>Tech</span>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
          
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <DrawerList/>
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <DrawerList/>
          </Drawer>
        </Hidden>
      </nav>
      <Router>
      <main className={classes.content}>
        <div className={classes.toolbar} />
     {/* Content */}
     <Switch>
          <Route exact path="/Staff" render={()=><MyOrders/>} />
          <Route  path="/Staff/MyProfile" render={()=><MyProfile/>} />
          <Route  path="/Staff/OrderHistory" render={()=><OrderHistory/>} />
     </Switch>
      </main>
      </Router>
    </div>
  );
}




return ( 
  <StaffGrid/>
 );
}
}
export default withRouter(inject("staffStore")(observer(staffpage)));