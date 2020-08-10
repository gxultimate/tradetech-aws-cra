import React from 'react';
import { makeStyles ,ThemeProvider} from '@material-ui/core/styles';
import {Paper,Typography,Divider, Badge} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {
  HashRouter as Router,withRouter,
 

} from "react-router-dom";
import {inject,observer} from 'mobx-react'
import TransactionTable from './TransactionsTable'
import user from './user.png'
import {Button,List} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';

import StorefrontIcon from '@material-ui/icons/Storefront';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';

import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import theme from './../../theme'
import ActivityTable from './ActivityLogs'
import ShowChartIcon from '@material-ui/icons/ShowChart';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
class CustProfile extends React.Component {

  componentWillMount(){
    let{employeeStore:{getOrderD,order}}=this.props;
   
    order.setProperty('account_ID',this.props.accId)
    getOrderD();
 
  
  }
 

  render() { 

    let {employeeStore:{listOfUsers,account,editAccount,listOfOrder,listOfClogs}}=this.props
  


let AccID=this.props.accId;
function createData(id,name,pos,email,address,contactNo,birthday,dateRegistered,shopName,shopAddress, sRole){
  return {id,name,pos,email,address,contactNo,birthday,dateRegistered,shopName,shopAddress, sRole}
}
let trans = listOfOrder.filter(acc => acc.packer_ID === AccID || acc.dispatcher_ID === AccID).length;
let acts = listOfClogs.filter(acc => acc.account_ID === AccID).length;
let rowss =  listOfOrder.map(product => {
  
  return (

    listOfOrder.filter((amount) => (amount.packer_ID === AccID || amount.dispatcher_ID === AccID))
    .reduce((sum, record) => parseInt(sum) + parseInt(record.orderTotalAmount) , 0)



    );

 })


let accountinfo =listOfUsers.filter(user => user.account_ID === AccID).map(info=>{

  return(createData(
    info.account_ID,`${info.account_fName} ${info.account_mName} ${info.account_lName} ${info.account_suffix}`,`${info.account_accessType.charAt(0).toUpperCase()}${info.account_accessType.slice(1)}`,info.account_emailAddress,info.account_address,
    info.account_contactNo,info.account_birthday,info.account_dateRegistered,
    info.account_storeName,info.account_address,info.staff_Role


  ))
  
})
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'100%',
    minWidth:"1225px",
    marginTop:'10px',
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width:"100%"
  },
  paper3: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width:"100%"
  },
  buttonGrid: {
    padding: theme.spacing(3),
    textAlign:"right",

    width:"100%"
  },
  button:{
   
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
 function ProfileGrid() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [Dopen, DsetOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
   
  };

  
  let deactivate = userdata =>{
    DsetOpen(true);
    account.setProperty('account_ID',userdata.id)
    account.setProperty('account_status','archived')
    
  }

  let handleArchive =()=>{
    editAccount();
  }
  const handleClickD = () => {
  
    DsetOpen(false);
  };


  return (
    <div className={classes.root}>

<Dialog
        open={Dopen}
        onClose={handleClickD}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Deactivate this account?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ThemeProvider theme={theme}>
          <Button onClick={handleClickD} color="secondary" variant='contained' style={{color:'white'}}>
            Cancel
          </Button>
          <Button onClick={handleArchive} color="primary" autoFocus variant='contained' style={{color:'white'}}>
            Agree
          </Button>
          </ThemeProvider>
        </DialogActions>
      </Dialog>


        {accountinfo.map((info) => (
      <Grid container spacing={2} xs={12} sm={12} >
        
        {/* left */}
        <Grid item xs={4} sm={4}>
          <Paper className={classes.paper}>
            <Grid container xs={12} sm={12}>
            <Grid item xs={12} sm={12} style={{textAlign:"left"}}>
        <Typography variant='p'><span>ID# : </span> {info.id}</Typography>
            </Grid>
            <Grid item xs={4} sm={4} style={{textAlign:"left",marginTop:"8px"}}>
              <img src={user} style={{height:"100px",width:"100px"}}></img>
            </Grid>
            <Grid item xs={7} sm={7} style={{textAlign:"left",marginTop:"16px"}}>
        <Typography variant='subtitle2' style={{fontWeight:"bold"}}>{info.name}</Typography>
        <Typography variant='subtitle2' >{info.pos}</Typography>
        <Typography variant='subtitle2' >{info.email}</Typography>
            </Grid>

            <Grid item xs={12} sm={12} style={{textAlign:"left",marginTop:"20px"}}>

            <List component="nav" aria-label="store info">
        <ListItem button>
          <ListItemIcon>
            <StorefrontIcon />
          </ListItemIcon>
        <ListItemText>{info.shopName}</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText>{info.shopAddress}</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PhoneAndroidIcon />
          </ListItemIcon>
          <ListItemText>{info.contactNo}</ListItemText>
        </ListItem>
      </List>

      <Divider />

      <List component="nav" aria-label="payment info"

    subheader={
  <ListSubheader component="div" id="nested-list-subheader" style={{fontWeight:"bold"}}>
    Activities
  </ListSubheader>
      }
      >
        <ListItem button>
          <ListItemIcon>
            <LocalShippingIcon />
          </ListItemIcon>
        <ListItemText>Transactions</ListItemText>
        <ListItemText  style={{textAlign:'right'}}><Badge color='secondary' badgeContent={trans}></Badge></ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FormatListBulletedIcon />
          </ListItemIcon>
          <ListItemText>Activities</ListItemText>
          <ListItemText  style={{textAlign:'right'}}><Badge color='secondary' badgeContent={acts}></Badge></ListItemText>
        </ListItem>
    


        <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <ShowChartIcon />
        </ListItemIcon>
        <ListItemText>Sales Progress</ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            
            </ListItemIcon>
            <ListItemText style={{textAlign:'right',color:'#208769'}}>Total Collection :<span style={{color:'#208769'}}> &#8369;{Number(rowss.pop()).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}.00</span></ListItemText>
          </ListItem>
        </List>
      </Collapse>



      </List>


            </Grid>
            </Grid>
          </Paper>

          <Grid container xs={12} sm={12} style={{marginTop:"20px"}}>
              <Button variant='filled' style={{backgroundColor:"grey",color:"white",width:"100%"}} onClick={()=>{deactivate(info)}}>Deactivate Account</Button>
          </Grid>
        </Grid>

        {/* Right */}
        <Grid item xs={8} sm={8}>
      
      
          
          
          <Grid container  xs={12} sm={12} >
          <Paper className={classes.paper2}>
          <Grid item xs={12} sm={12}>
            <Grid container xs={12} sm={12}>
              <Grid item xs={12} sm={12} style={{textAlign:"left"}}>
          <Typography variant='h6'>Transactions</Typography>
          </Grid>
          <Grid item  xs={12} sm={12} style={{marginTop:"16px"}}>
            <TransactionTable account_ID={info.id} role={info.sRole}/>
          </Grid>
          </Grid>
        </Grid>

        </Paper>
        </Grid>
        


        <Grid container  xs={12} sm={12} style={{marginTop:"20px"}}>
          <Paper className={classes.paper2}>
          <Grid item xs={12} sm={12}>
            <Grid container xs={12} sm={12}>
              <Grid item xs={12} sm={12} style={{textAlign:"left"}}>
          <Typography variant='h6'>Activities</Typography>
          </Grid>
          <Grid item  xs={12} sm={12} style={{marginTop:"16px"}}>
            <ActivityTable account_ID={info.id} role={info.sRole}/>
          </Grid>
          </Grid>
        </Grid>

        </Paper>
        </Grid>
     


        </Grid>

  
       
    
      </Grid>
      ))}
    </div>
  );
}

return ( 
  <ProfileGrid/>
 );
}
}

export default withRouter(inject("employeeStore")(observer(CustProfile)));
