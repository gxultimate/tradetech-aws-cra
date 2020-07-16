import { Divider, Grid, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PaymentIcon from '@material-ui/icons/Payment';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ReportRoute extends React.Component {
  componentDidMount(){
    let {reportStore:{getOrder,getAccounts}}=this.props;
    getOrder();
    getAccounts();
  }
  render() { 
 let sbc =()=>{
  
  this.props.history.push("/Admin/Reports/Sales");


 }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'100%',

  },
  paper: {
  
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100%',
    minWidth: 380,
  },
 
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
function ReportGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

<Grid container direction="row" xs={12} sm={12} lg={12}>
  <Grid item xs={12} sm={12} lg={12}>
        <Typography variant="h5" >
          Reports
        </Typography>
        </Grid>
      
        <Divider style ={{marginBottom:"15px"}}/>
<Grid item xs={12} sm={12} lg={12}>
      <Grid container spacing={5} item xs={12} sm={12} lg={12}>
      
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
          <List component="nav" aria-label="main mailbox folders" style={{backgroundColor:"#208769",color:"white"}}>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon style={{color:"white"}}/>
          </ListItemIcon>
          <ListItemText  primary="Sales" />
        </ListItem>
   
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
      <Link to='/Admin/SalesByCustomer'>
        <ListItem button>
          <ListItemText  style={{color:"#F7A31C"}}>Sales By Customer</ListItemText>
          <ListItemSecondaryAction>
                    <IconButton onClick={sbc} edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItem>
        </Link>
        <Divider />
        <Link to='/Admin/SalesByItem'>
        <ListItemLink >
        <ListItemText  style={{color:"#F7A31C"}}>Sales by Item </ListItemText>
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItemLink>
        </Link>
        <Divider />
        {/* <Link to='/Admin/OFByItem'>
        <ListItemLink >
        <ListItemText  style={{color:"#F7A31C"}}>Order Fulfillment by Item </ListItemText>
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItemLink>
        </Link>
        <Divider /> */}
        <Link to='/Admin/SalesReturn'>
        <ListItemLink >
        <ListItemText  style={{color:"#F7A31C"}}>Sales Return History </ListItemText>
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItemLink>
        </Link>
        <Divider />
        <Link to='/Admin/PackingHistory'>
        <ListItemLink  >
        <ListItemText  style={{color:"#F7A31C"}}>Packing History </ListItemText>
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItemLink>
        </Link>
      </List>
          </Paper>
        </Grid>
  
        <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
          <List component="nav" aria-label="main mailbox folders" style={{backgroundColor:"#208769",color:"white",fontWeight:"bold"}}>
        <ListItem button >
          <ListItemIcon>
            <PaymentIcon style={{color:"white"}}/>
          </ListItemIcon>
          <ListItemText primary="Payments & Receivables" />
        </ListItem>
   
      </List>
      <Divider />
      
      <List component="nav" aria-label="secondary mailbox folders">
 
        <Link to='/Admin/Invoice'>
        <ListItemLink >
        <ListItemText  style={{color:"#F7A31C"}}>Invoice Details </ListItemText>
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItemLink>
        </Link>
        <Divider />
        <Link to='/Admin/SalesOrder'>
        <ListItemLink >
        <ListItemText  style={{color:"#F7A31C"}}>Sales Order Details </ListItemText>
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItemLink>
        </Link>
        <Divider />
        <Link to='/Admin/PaymentReceived'>
      
        <ListItem button>
        <ListItemText  style={{color:"#F7A31C"}}>Payments Received </ListItemText>
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItem>
        </Link>
        <Divider />
        <Link to='/Admin/CustBalance'>
        <ListItem button>
        <ListItemText  style={{color:"#F7A31C"}}>Customer Balances </ListItemText>
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItem>
        </Link>
        
      </List>
          </Paper>
        </Grid>



        <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
          <List component="nav" aria-label="main mailbox folders" style={{backgroundColor:"#208769",color:"white",fontWeight:"bold"}}>
        <ListItem button>
          <ListItemIcon>
            <HomeWorkIcon style={{color:"white"}} />
          </ListItemIcon>
          <ListItemText primary="Inventory" />
        </ListItem>
   
      </List>
      <Divider />
     
      <List component="nav" aria-label="secondary mailbox folders" >
      <Link to='/Admin/InventorySummary'>
        <ListItem button>
        <ListItemText  style={{color:"#F7A31C"}}>Inventory Summary </ListItemText>
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItem>
        </Link>
        <Divider />
        <Link to='/Admin/EvalReport'>
        <ListItemLink >
        <ListItemText  style={{color:"#F7A31C"}}>Evaluation Report </ListItemText>
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItemLink>
        </Link>
        {/* <Divider /> */}
        {/* <Link to='/Admin/ProdSales'>
        <ListItemLink >
        <ListItemText  style={{color:"#F7A31C"}}>Product Sales Report</ListItemText>
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItemLink>
        </Link>
        <Divider /> */}
        {/* <Link to='/Admin/StockSummary'>
        <ListItemLink >
        <ListItemText  style={{color:"#F7A31C"}}>Stock Summary Report </ListItemText>
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItemLink>
        </Link> */}
      </List>
          </Paper>
        </Grid>
        
        </Grid>
      </Grid>
      </Grid>
    </div>
  );
}

return ( 
  <ReportGrid/>
 );
}
}

export default withRouter(inject('reportStore')(observer(ReportRoute)));
