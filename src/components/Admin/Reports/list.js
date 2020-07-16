import { Divider, Grid } from '@material-ui/core';
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
import React, { Component } from 'react';
import { withRouter } from 'react-router';
 class Lists extends Component {
   

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
            <div>
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
        <ListItem button>
          <ListItemText primary="Sales by Customer" />
          <ListItemSecondaryAction>
                    <IconButton onClick={sbc} edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItem>
        <Divider />
        <ListItemLink href="#simple-list">
          <ListItemText primary="Sales by Item" />
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItemLink>
        <Divider />
        <ListItemLink href="#simple-list">
          <ListItemText primary="Order Fulfillment by Item" />
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItemLink>
        <Divider />
        <ListItemLink href="#simple-list">
          <ListItemText primary="Sales Return History" />
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItemLink>
        <Divider />
        <ListItemLink href="#simple-list" >
          <ListItemText primary="Packing History" />
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItemLink>
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
        <ListItem button>
          <ListItemText primary="Customer Balances" />
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItem>
        <Divider />
        <ListItemLink href="#simple-list">
          <ListItemText primary="Invoice Details" />
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItemLink>
        <Divider />
        <ListItemLink href="#simple-list">
          <ListItemText primary="Sales Order Details" />
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItemLink>
        <Divider />
      
        <ListItem button>
          <ListItemText primary="Payments Received" />
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItem>
   
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
        <ListItem button>
          <ListItemText primary="Inventory Summary" />
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItem>
        <Divider />
        <ListItemLink href="#simple-list">
          <ListItemText primary="Evaluation Report" />
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItemLink>
        <Divider />
        <ListItemLink href="#simple-list">
          <ListItemText primary="Product Sales Report" />
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItemLink>
        <Divider />
        <ListItemLink href="#simple-list">
          <ListItemText primary="Stock Summary Report" />
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItemLink>
   
      </List>
          </Paper>
        </Grid>
            </div>
        )
    } 
    return ( 
        <ReportGrid/>
       )
}

}

export default withRouter(Lists)
