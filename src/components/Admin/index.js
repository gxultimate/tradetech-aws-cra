
import { AppBar, Avatar, CssBaseline, Divider, Drawer, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
import { makeStyles, useTheme,withStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import clsx from 'clsx';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import OptionButton from './toolbar';
import Accounting from './Accounting';
import AdminUserManagement from './AdminUserManagement';


import CRM from './CRM';
import AdminDashboard from './Dashboard';
import Inventory from './Inventory';
import DrawerList from './List.js';
import OrderManagement from './OrderManagement';
import pr from './pr.png';

// import ProfileManagement from './ProfileManagement';
import SettingGrid from './Setting'
import ReportGrid from './Reports'
import ProfileGrid from './CRM/Customer/CustomerProfile'

// report
import SalesByCustomer from './Reports/Sales/SalesByCustomer'
import SalesByItem from './Reports/Sales/SalesByItem'
import OFByItem from './Reports/Sales/OFByItem'
import SalesReturn from './Reports/Sales/SalesReturn'
import PackingHistory from './Reports/Sales/PackingHistory'

import InventorySummary from './Reports/Inventory/Summary'
import EvalReport from './Reports/Inventory/Evaluation'
import ProdSales from './Reports/Inventory/ProdSalesReport'
import StockSummary from './Reports/Inventory/StockReport'

import CustBalance from './Reports/Payments&Receivables/CustomerBalance'
import Invoice from './Reports/Payments&Receivables/InvoiceDetails'
import SalesOrder from './Reports/Payments&Receivables/SalesOrder'
import PaymentReceived from './Reports/Payments&Receivables/PaymentsReceived'

import IssuesGrid from './Issues'
import Notif from './notification'




import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ListItemText from '@material-ui/core/ListItemText';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class adDrawer extends Component{

  state = {}
render(){

  

const drawerWidth = 255;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper:{
   backgroundColor:"#208769"
  },
  small: {
    width: theme.spacing(4),
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
    backgroundColor:"#208769",
    color:"white",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
      backgroundColor:"#208769",
      color:"white",
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
      color:"white",
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    width:"100%"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    
    
  },
}));



// let item=(e)=>{
//   if(e.notif_subject === 'Order'){
//     this.props.history.push("/Admin/OrderManagement");
//   }else if (e.notif_subject === 'Account'){
//     this.props.history.push("/Admin/CRM");
//   }else if(e.notif_subject === 'Inventory'){
//     this.props.history.push("/Admin/InventoryManagement");
//   }else{
//     return null
//   }
// }

  function AdminDrawer() {
    const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);


  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

// let filnotf =listOfNotif.filter(notf => notf.distributor_ID === myID.distributor_ID)

// let getnotif = filnotf.map(notif =>{
//   return(
//     <span>
//     <ListItem alignItems="flex-start" button  >
//     <ListItemText
//       primary={notif.notif_date}
//       secondary={
//         <React.Fragment>
//           <Typography
//             component="span"
//             variant="body2"
//             className={classes.inline}
//             color="textPrimary"
//           >
//           {notif.notif_subject}
//           </Typography>
//        - {notif.notif_description}
//         </React.Fragment>
//       }
//     />
//       </ListItem>
//      <Divider variant="inset" component="li" />
//      </span>
//   )
// })
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
           
             <IconButton style={{backgroundColor:"#1E7A60",marginRight:"8px",height:'43px'}} 
              // onClick={handleClick}
             >
  <NotificationsOutlinedIcon style={{color:"white",fontSize:"18px"}}/>
  
</IconButton>
{/* <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
       
          <List>
      {getnotif}
        
      </List>
      </StyledMenu> */}

<IconButton style={{marginRight:"8px",backgroundColor:"#1E7A60"}}>
  <QuestionAnswerOutlinedIcon style={{color:"white",fontSize:"18px"}}/>
</IconButton>
{/* <IconButton style={{marginRight:"0px",backgroundColor:"#208769"}}>
<Avatar src={pr} > </Avatar>
</IconButton> */}

<OptionButton/>

</Grid></div>

        </Toolbar>
      
   
       
      </AppBar>

    




      <Drawer
        
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

      <Router>
  <div>
  <main className={classes.content}>
        <div className={classes.toolbar} />
      

  <Switch>
      <Route exact path="/Admin" render={()=><AdminDashboard/>}/>
      <Route path="/Admin/CRM" render={()=><CRM/>}/>
      <Route path="/Admin/OrderManagement" render={()=><OrderManagement/>}/>
      <Route path="/Admin/InventoryManagement" render={()=><Inventory/>}/>
      <Route path="/Admin/CustomerProfile" render={()=><ProfileGrid/>}/>
     
   
      {/* <Route  path="/Admin/ProfileManagement" render={()=><ProfileManagement/>}/> */}
      <Route  path="/Admin/Accounting" render={()=><Accounting/>}/>
      <Route  path="/Admin/AdminUserManagement" render={()=><AdminUserManagement/>}/>
      <Route  path="/Admin/Setting" render={()=><SettingGrid/>}/>
     
    
      {/* Report Routes */}
      <Route  path="/Admin/Reports" render={()=><ReportGrid/>}/>
      <Route  path="/Admin/SalesByCustomer" render={()=><SalesByCustomer/>}/>
      <Route  path="/Admin/SalesByItem" render={()=><SalesByItem/>}/>
      <Route  path="/Admin/OFByItem" render={()=><OFByItem/>}/>
      <Route  path="/Admin/SalesReturn" render={()=><SalesReturn/>}/>
      <Route  path="/Admin/PackingHistory" render={()=><PackingHistory/>}/>

      <Route  path="/Admin/InventorySummary" render={()=><InventorySummary/>}/>
      <Route  path="/Admin/EvalReport" render={()=><EvalReport/>}/>
      <Route  path="/Admin/ProdSales" render={()=><ProdSales/>}/>
      <Route  path="/Admin/StockSummary" render={()=><StockSummary/>}/>

      <Route  path="/Admin/CustBalance" render={()=><CustBalance/>}/>
      <Route  path="/Admin/Invoice" render={()=><Invoice/>}/>
      <Route  path="/Admin/SalesOrder" render={()=><SalesOrder/>}/>
      <Route  path="/Admin/PaymentReceived" render={()=><PaymentReceived/>}/>


      <Route  path="/Admin/Issues" render={()=><IssuesGrid/>}/>

      
  </Switch>
        
        
       
      </main>
    
</div>
</Router>
      </div>

  );
}

return ( 
  
<AdminDrawer></AdminDrawer>
 

 );

}
}
export default withRouter(inject("startingStore")(observer(adDrawer)));
