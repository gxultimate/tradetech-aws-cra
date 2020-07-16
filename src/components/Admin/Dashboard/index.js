import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
// import clsx from 'clsx';
import {inject,observer} from 'mobx-react';
import { lighten,makeStyles, useTheme,withStyles } from '@material-ui/core/styles';
import {Grid,Typography,Divider,Card,CardContent,LinearProgress,Button} from '@material-ui/core';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';

import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import SmsFailedOutlinedIcon from '@material-ui/icons/SmsFailedOutlined';
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined';
import CardActionArea from '@material-ui/core/CardActionArea';
// charts
// import StatChart from './StatTab/StatChart';
import StatTab from './StatTab';
import OrderChart from './OrderStat/Charts/Month'
// import DeliveyChart from './DeliveryAct/Charts/Week'
import DeliveryTab from './DeliveryAct'
// tables
import CustBalTable from './CustomerBal'
import ReplenishTable from './Replenishment'

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
class AdDashboard extends Component{



  
    componentDidMount() {
      let {startingStore:{getAccounts,getProducts,getOrder,getCartD}}=this.props;
    
        getOrder();
        getProducts();
        getAccounts();
        getCartD();

      
    }
  
  
  
    state = {}
  render(){
    let {startingStore:{listOfOrder,listOfUsers,listOfCart}}=this.props;
    let getId =JSON.parse(sessionStorage.getItem("userData"))


    let saless =()=>{
      this.props.history.push("/Admin/PaymentReceived")
    }

    let orders =()=>{
      this.props.history.push("/Admin/OrderManagement")
    }
    let usersact =()=>{
      this.props.history.push("/Admin/CRM")
    }
    let collections =()=>{
      this.props.history.push("/Admin/Accounting")
    }

    let failed =()=>{
      this.props.history.push("/Admin/OrderManagement")
    }
    let newcust =()=>{
      this.props.history.push("/Admin/CRM")
    }

    function Alert(props) {
      return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
const BorderLinearProgress = withStyles({
    root: {
      height: 10,
      backgroundColor: lighten('#666666', 0.5),
    },
    bar: {
      borderRadius: 20,
      backgroundColor: '#666666',
    },
  })(LinearProgress);



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper:{
   backgroundColor:"#208769"
  },
  cont:{
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor:"#208769"
   },
   cont2:{
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor:"#F7A31C"
   },
   cont3:{
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  
   },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },

  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
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
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
  card:{

   color:"white",
    backgroundColor:"#208769",
    height:"160px",
  },
  card2:{

    color:"white",
    backgroundColor:"#F7A31C",
    height:"160px",
   }
}));

let filinactivecust = listOfUsers.filter(account => account.distributor_ID === getId.distributor_ID && account.account_status === 'archived').length;
let filactivecust = listOfUsers.filter(account => account.distributor_ID === getId.distributor_ID && account.account_status === 'active').length;

let filorder = listOfOrder.filter(order => order.distributor_ID === getId.distributor_ID).length;


let salesYTD =  listOfOrder.map(product => {
  
  return (

    listOfOrder.filter((amount) => (amount.distributor_ID === getId.distributor_ID))
    .reduce((sum, record) => parseInt(sum) + parseInt(record.orderTotalAmount) , 0)



    );

 })

 let failedOrders = listOfOrder.filter(order => order.distributor_ID === getId.distributor_ID && order.orderStatus === 'Failed').length;

 const sales = `${salesYTD.pop()}`;


  function AdminDashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });
  const { vertical, horizontal } = state;
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  // const theme = useTheme();
  // const [open, setOpen] = React.useState(false);


  return (
<div style={{display:"flex"}}>
      <main >
      <Snackbar anchorOrigin={{ vertical, horizontal }} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Welcome Distributor!
        </Alert>
      </Snackbar>
        <div  />

      <Grid container direction="row">
        <Typography variant="h5" >
           Dashboard
        </Typography>
        
        </Grid>
        <Divider style ={{marginBottom:"5px"}}/>
        <div className={classes.root}>
      <Grid container spacing={3} >
   
      <Grid item xs={4}>
        <CardActionArea onClick={saless}>
        <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}  gutterBottom style={{float:"right"}}>
          Sales YTD
        </Typography>
        <Typography variant="h5"  style={{textAlign:"left"}} >
       <MonetizationOnOutlinedIcon style={{fontSize:"3.5em",color:"white"}}/>
      <span style={{textAlign:"right",color:"white"}}> &#8369;{sales.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>
        </Typography>
       
        <Typography variant="body2" component="p">
      
       
          <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="primary"
        value={50}
      />
        </Typography>
     
      
        <Typography >Better than last week (50%)</Typography>
        </CardContent>
    </Card>
    </CardActionArea>
        </Grid>
        <Grid item xs={4}>
        <CardActionArea onClick={orders}>
        <Card className={classes.card2}>
      <CardContent>
        <Typography className={classes.title}  gutterBottom style={{float:"right"}}>
          Orders
        </Typography>
        <Typography variant="h5"  style={{textAlign:"left"}} >
       <LocalShippingOutlinedIcon style={{fontSize:"3.5em",color:"white"}}/>
      <span style={{textAlign:"right",color:"white"}}> {filorder.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>
        </Typography>
       
        <Typography variant="body2" component="p">
      
       
          <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="primary"
        value={50}
      />
        </Typography>
     
      
        <Typography >Better than last week (50%)</Typography>
        </CardContent>
    </Card>
    </CardActionArea>
        </Grid>
        <Grid item xs={4}>
        <CardActionArea onClick={usersact}>
        <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}  gutterBottom style={{float:"right"}}>
          Active Customers
        </Typography>
        <Typography variant="h5"  style={{textAlign:"left"}} >
       <PeopleAltOutlinedIcon style={{fontSize:"3.5em",color:"white"}}/>
      <span style={{textAlign:"right",color:"white"}}>{filactivecust.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>
        </Typography>
       
        <Typography variant="body2" component="p">
      
       
          <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="primary"
        value={50}
      />
        </Typography>
     
      
        <Typography >Better than last week (50%)</Typography>
        </CardContent>
    </Card>
    </CardActionArea>
        </Grid>
        <Grid item xs={4}>
        <CardActionArea onClick={collections}>
        <Card className={classes.card2}>
      <CardContent>
        <Typography className={classes.title}  gutterBottom style={{float:"right"}}>
          Collections YTD
        </Typography>
        <Typography variant="h5"  style={{textAlign:"left"}} >
       <CollectionsBookmarkOutlinedIcon style={{fontSize:"3.5em",color:"white"}}/>
      <span style={{textAlign:"right",color:"white"}}>&#8369;{sales.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>
        </Typography>
       
        <Typography variant="body2" component="p">
      
       
          <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="primary"
        value={50}
      />
        </Typography>
     
      
        <Typography >Better than last week (50%)</Typography>
        </CardContent>
    </Card>
    </CardActionArea >
        </Grid>


        <Grid item xs={4}>
        <CardActionArea onClick={failed}>
        <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}  gutterBottom style={{float:"right"}}>
          Failed Orders
        </Typography>
        <Typography variant="h5"  style={{textAlign:"left"}} >
       <SmsFailedOutlinedIcon style={{fontSize:"3.5em",color:"white"}}/>
      <span style={{textAlign:"right",color:"white"}}>{failedOrders.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>
        </Typography>
       
        <Typography variant="body2" component="p">
          <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="primary"
        value={50}
      />
        </Typography>
     
      
        <Typography >Better than last week (50%)</Typography>
        </CardContent>
    </Card>
    </CardActionArea>
        </Grid>


        <Grid item xs={4}>
        <CardActionArea onClick={newcust}>
        <Card className={classes.card2}>
      <CardContent>
        <Typography className={classes.title}  gutterBottom style={{float:"right"}}>
        Inactive Customers
        </Typography>
        <Typography variant="h5"  style={{textAlign:"left"}} >
       <PersonAddDisabledIcon style={{fontSize:"3.5em",color:"white"}}/>
      <span style={{textAlign:"right",color:"white"}}>  {filinactivecust.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>
        </Typography>
       
        <Typography variant="body2" component="p">
      
       
          <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="primary"
        value={50}
      />
        </Typography>
     
      
        <Typography >Better than last week (50%)</Typography>
        </CardContent>
    </Card>
    </CardActionArea>
        </Grid>


        <Grid item xs={9}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={6}> 
              <Typography variant="h5" style={{color :"grey"}}>Total Sales</Typography>
              </Grid>
              <Grid xs={6}> 
             {/* tab */}
              </Grid>
              </Grid>
              <Divider/>
              <Grid xs={12}>
              <StatTab/>
{/* <StatChart/> */}
              </Grid>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={3}>
        <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={6}> 
              <Typography variant="h5" style={{color :"grey"}}> Top 5 Best Selling</Typography>
              </Grid>
          
              </Grid>
             
            </CardContent>
            <Divider/>
            <CardContent>
         
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={9}>
        <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={6}> 
              <Typography variant="h5" style={{color :"grey"}}> Order Statistics</Typography>
              </Grid>
              <Grid xs={6}> 
           
              </Grid>
              </Grid>
              <Divider/>
              <Grid xs={12}>
<OrderChart/>
              </Grid>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={3}>
        <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={6}> 
              <Typography variant="h5" style={{color :"grey"}}>Top 5 Locations</Typography>
              </Grid>
          
              </Grid>
             
            </CardContent>
            <Divider/>
            <CardContent>
         
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={9}>
        <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={6}> 
              <Typography variant="h5" style={{color :"grey"}}> Delivery Activity</Typography>
              </Grid>
              <Grid xs={6}> 
           
              </Grid>
              </Grid>
              <Divider/>
              <Grid xs={12}> 
           <DeliveryTab/>
           </Grid>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={3}>
        <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={6}> 
              <Typography variant="h5" style={{color :"grey"}}>Top 5 Customers</Typography>
              </Grid>
          
              </Grid>
             
            </CardContent>
            <Divider/>
            <CardContent>
         
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={9}>
        <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={6}> 
              <Typography variant="h5" style={{color :"grey"}}> Customer Balance</Typography>
              </Grid>
              <Grid xs={6}> 
           
              </Grid>
              </Grid>
              <Divider/>
              <Grid xs={12}>
                <CustBalTable/>
              </Grid>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={3}>
        <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={6}> 
              <Typography variant="h5" style={{color :"grey"}}> Bottom 5 Customers</Typography>
              </Grid>
          
              </Grid>
             
            </CardContent>
            <Divider/>
            <CardContent>
         
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={9}>
        <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={6}> 
              <Typography variant="h5" style={{color :"grey"}}>Available Inventory</Typography>
              </Grid>
              <Grid xs={6}> 
           
              </Grid>
              </Grid>
              <Divider/>
              <Grid xs={12}>
                <ReplenishTable/>
              </Grid>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={3}>
        <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={6}> 
              <Typography variant="h5" style={{color :"grey"}}> Bottom 5 Locations</Typography>
              </Grid>
          
              </Grid>
             
            </CardContent>
            <Divider/>
            <CardContent>
         
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </div>
        
       
      </main>
      </div>
  );
}
return ( 
       
  <AdminDashboard/>


 );

}
}
export default withRouter(inject("startingStore")(observer(AdDashboard)));





