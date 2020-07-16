import React from 'react';
import { makeStyles,ThemeProvider } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import LocalShippingTwoToneIcon from '@material-ui/icons/LocalShippingTwoTone';
import NotificationsIcon from '@material-ui/icons/Notifications';
import theme from './theme';
import {HashRouter as Router,withRouter} from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import Badge from '@material-ui/core/Badge';
import {inject,observer} from 'mobx-react'
import { CssBaseline } from '@material-ui/core';

class FooterNav extends React.Component {

componentDidMount(){
  let {customerStore:{getNotif}}=this.props;
  getNotif();
}

 state = { 
    val:0,
   }
  render() { 
    let {customerStore:{listOfNotif}}=this.props;
let getID = JSON.parse(sessionStorage.getItem('userData'))

 let myAccount = ()=>{
  this.setState({
    val:3,
  });
  setTimeout(() =>{
      this.props.history.push("/Customer/MyAccount")

    },1000)
    }

    
 let myOrder = ()=>{

      this.setState({
        val:2,
      });
  setTimeout(() =>{
      this.props.history.push("/Customer/MyOrder")
    
    },1000)
    }
    let HomeD =()=>{
      setTimeout(() =>{
        this.props.history.push("/Customer")
      
      },1000)
    }

const useStyles = makeStyles({
  root: {
    width: '100%',
        position:'fixed',
    bottom:0,
  },
});

let valu=this.val;
let filnotif =listOfNotif.filter(notf =>  notf.notif_subject === 'Order Process' && notf.sender_ID === getID.account_ID || notf.notif_subject === 'Order Process' && notf.account_ID === getID.account_ID)
let count =filnotif.length;


function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

const bn =(e)=>{
  e.preventDefault();
  setValue(value+1)
}

let notif =filnotif.map(notf => {return notf})

  return (
    <React.Fragment>
      <CssBaseline/>
    <ThemeProvider theme={theme}>
    <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="primary" />
      </Backdrop>
    <BottomNavigation
      value={value}
              // indicatorColor="secondary"
        style={{borderTop:"1px solid grey"}}
      onChange={bn}
      showLabels
      className={classes.root}
    >

      <BottomNavigationAction  label="Home" icon={<HomeIcon />}
       onClick={()=>{HomeD()}} 
      />
      <BottomNavigationAction  label="Notification" icon={ <Badge color="secondary" badgeContent={count}><NotificationsIcon /></Badge>} />
      <BottomNavigationAction  label="My Order" icon={<LocalShippingTwoToneIcon />}
      onClick={myOrder} />
      <BottomNavigationAction   label="Account"  icon={<AccountCircleIcon/>} onClick={myAccount} />
    </BottomNavigation>

    

    </ThemeProvider>
    </React.Fragment>
  );
}

return ( 
  <Footer/>
 );
}
}

export default withRouter(inject('customerStore')(observer(FooterNav)));