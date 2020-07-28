import { CssBaseline, Divider } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Badge from '@material-ui/core/Badge';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CircularProgress from '@material-ui/core/CircularProgress';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, ThemeProvider, withStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import LocalShippingTwoToneIcon from '@material-ui/icons/LocalShippingTwoTone';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { withRouter } from 'react-router-dom';
import theme from './theme';




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


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: '#208769',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

let valu=this.val;
let filnotif =listOfNotif.filter(notf =>  notf.notif_subject === 'Order Process' && notf.sender_ID === getID.account_ID || notf.notif_subject === 'Order Process' && notf.account_ID === getID.account_ID)
let count =filnotif.length;

let notif =filnotif.map(notf => 
  {return (
  <div key={notf.notif_ID}>
  <StyledMenuItem>
       
      
    
        <ListItemText primary={notf.notif_description} secondary={notf.notif_date} />
      
    
     
</StyledMenuItem>
 <Divider/>
 </div>
)

})

const ITEM_HEIGHT = 100;
function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);






  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

const bn =(e)=>{
  e.preventDefault();
  setValue(value+1)
}

let notification =(event)=>{
  setAnchorEl(event.currentTarget);

}



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
      <BottomNavigationAction  label="Notification" icon={ <Badge color="secondary" badgeContent={count}><NotificationsIcon  onClick={notification}/></Badge>} />
      <BottomNavigationAction  label="My Order" icon={<LocalShippingTwoToneIcon />}
      onClick={myOrder} />
      <BottomNavigationAction   label="Account"  icon={<AccountCircleIcon/>} onClick={myAccount} />
    </BottomNavigation>

    

    </ThemeProvider>

    <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        size='small'
        // keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '40ch',
          },
        }}
      >
       {notif}
  
      </StyledMenu>

    </React.Fragment>
  );
}

return ( 
  <Footer/>
 );
}
}

export default withRouter(inject('customerStore')(observer(FooterNav)));