import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import CustListTable from './table.js'

import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import pr from './pr.png';
import FullWidthTabs from './tab.js';
import RegisterCustomer from './RegisterCustomer/addCustomer.js'
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper:{
   backgroundColor:"#208769"
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
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
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
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
          <div style={{marginLeft:"68%"}}>
          <IconButton style={{backgroundColor:"#1E7A60",marginRight:"12px"}}>
  <NotificationsOutlinedIcon style={{color:"white",fontSize:"18px"}}/>
</IconButton>
<IconButton style={{backgroundColor:"#1E7A60"}}>
  <QuestionAnswerOutlinedIcon style={{color:"white",fontSize:"18px"}}/>
</IconButton>
<IconButton style={{marginRight:"0px",backgroundColor:"#208769"}}>
<Avatar src={pr} > </Avatar>
</IconButton>

<IconButton style={{backgroundColor:"#208769"}}>
 <ArrowDropDownOutlinedIcon/>
</IconButton>


</div>
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
         
            <ListItem button >
              <ListItemIcon><DashboardIcon/></ListItemIcon>
             <ListItemText> Dashboard</ListItemText> 
            </ListItem>
            <Divider />
            <ListItem button >
              <ListItemIcon><AssignmentOutlinedIcon/></ListItemIcon>
             <ListItemText> Order Management</ListItemText> 
            </ListItem>
            <Divider />
            <ListItem button >
              <ListItemIcon><ListAltIcon/></ListItemIcon>
             <ListItemText> Inventory</ListItemText> 
            </ListItem>
            <Divider />
            <ListItem button >
              <ListItemIcon><DashboardIcon/></ListItemIcon>
             <ListItemText> Product Management</ListItemText> 
            
            </ListItem>
            <Divider />
            <ListItem button >

              <ListItemIcon><PersonOutlineIcon/></ListItemIcon>
             <ListItemText> Profile Management</ListItemText> 
            </ListItem>
            <Divider />
        </List>
      

      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

      <Grid container direction="column">
        <Typography variant="h5" >
           Profile Management
        </Typography>
        <Grid item>
        <RegisterCustomer/>
        </Grid>
        <Grid item  style={{marginTop:"1%"}}>
        <FullWidthTabs/>
        </Grid >
        
        </Grid>
      </main>
    </div>
  );
}
