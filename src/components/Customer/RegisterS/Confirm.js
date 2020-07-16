import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import {ListItem,Grid,Paper,AppBar,Toolbar,ThemeProvider,Typography} from '@material-ui/core';

import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import moment from 'moment';
import logo from './../../Logo/logowhite.png'



import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {withRouter} from 'react-router-dom'
import theme from './../../theme'

 class Confirm extends Component {
     state={
         open:false,
     }

     success =()=>{
        const {open}=this.state;
        this.setState({
          open:true,
        });
      }
    
      handleClose =()=>{
    
            this.props.history.push("/#/Login")

      }
  
     continue = e =>{
      let{customerStore:{account,addAccount}}=this.props
      function getHash(input){
        var hash = 0, len = input.length;
        for (var i = 0; i < len; i++) {
          hash  = ((hash << 5) - hash) + input.charCodeAt(i);
          hash |= 0; // to 32bit integer
        }
      
                
      
        return hash;
      }

      let date = new Date();
         e.preventDefault();
         //PROCESS FORM
         account.setProperty('account_ID',`${date.getFullYear()}-${getHash(this.props.values.fName)}-${ Math.floor(1000 + Math.random() * 9000)}` )
         account.setProperty("account_fName",this.props.values.fName)
         account.setProperty("account_lName",this.props.values.lName)
         account.setProperty("account_mName",this.props.values.mName)
         account.setProperty("account_suffix",this.props.values.suffix)
         account.setProperty("account_address",this.props.values.address)
         account.setProperty("account_emailAddress",this.props.values.emailAddress)
         account.setProperty("account_contactNo",this.props.values.contactNo)
         account.setProperty("account_username",this.props.values.username)
         account.setProperty("account_password",this.props.values.password)
         account.setProperty("account_dateRegistered",moment().format('MMM/DD/YYYY') )
         account.setProperty("account_storeName",this.props.values.shopName)
         account.setProperty("account_storeAddress",this.props.values.shopAddress)
         account.setProperty("account_status",'active')
         account.setProperty("account_accessType",'customer')
         
         addAccount().then(res=>{

          if (res == true){
            this.success();
          }
        
          else{
         
                this.props.history.push("/#/Login")
           
          }
         })
      
        //  this.props.nextStep();
     }
     back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {values:{fName,mName,lName, suffix, emailAddress,contactNo,shopName,shopAddress,username,address}} =this.props;
        console.log(this.continue,'continue')
        return (
            <div >
                <React.Fragment>
<ThemeProvider theme={theme}>
                <Dialog
        open={this.state.open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{backgroundColor:"#208769"}}><Typography variant="h6" style={{color:"white"}}>Registration Successful!</Typography></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Typography variant="subtitle2">Thank You For Joining at TradeTech! </Typography> 
          <Typography variant="subtitle2">   Please Contact Your Distributor for your Access Code!</Typography> 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <Button onClick={this.handleClose} color="primary" autoFocus variant='contained'>
            Login
          </Button>
        </DialogActions>
      </Dialog>
      </ThemeProvider>
                <AppBar position="fixed" style={{backgroundColor:"#208769"}} >
        <Toolbar style={{textAlign:"center"}}>
            <img src={logo} style={{height:"120px",margin:"auto"}}></img>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Grid container direction="row" sm={10} xs={11} justify='center' alignItems='center' style={{marginTop:"95px"}}>
    <Grid item sm={12} xs={12} style={{textAlign:"center"}} justify='center' alignItems='center'>
<Paper style={{marginLeft:'20px'}}>
    <Grid container sm={12} >
       <Grid item  sm={1} xs={1} style={{backgroundColor:"#208769",paddingRight:"10px"}}></Grid>
       <Grid item sm={10} xs={10} style={{paddingTop:"10px",paddingBottom:"10px",marginleft:"15px"}}><Typography variant="p" style={{fontWeight:"bold",width:"98%"}}>&nbsp;&nbsp;Create an Account</Typography> </Grid>
      
       </Grid>
       </Paper>
    </Grid>
    </Grid>
                <Grid container direction='row' 
              alignItems='center' 
              justify='center'
              sm={12} xm={12} 
              style={{marginTop:"16px",textAlign:"center"}}> 
              
               <Grid item sm={5} xs={11}>
               <Typography variant='h5' 
               style={{margin:"16px"}}
               >Confirmation</Typography>
               <Paper style={{paddingTop:"16px",paddingBottom:"8px"}}>
               <List>
        <ListItem><Typography><span style={{fontWeight:"bold"}}> Name : </span>{fName} {mName} {lName} {suffix}</Typography></ListItem>
        <ListItem><Typography><span style={{fontWeight:"bold"}}>Home Address: </span>{address}</Typography></ListItem>
        <ListItem><Typography><span style={{fontWeight:"bold"}}>Email : </span>{emailAddress}</Typography></ListItem>
        <ListItem><Typography><span style={{fontWeight:"bold"}}>Contact No : </span>{contactNo}</Typography></ListItem>
        <ListItem><Typography><span style={{fontWeight:"bold"}}>Shop Name: </span>{shopName}</Typography></ListItem>
        <ListItem><Typography><span style={{fontWeight:"bold"}}>Shop Address: </span>{shopAddress}</Typography></ListItem>
        <ListItem><Typography><span style={{fontWeight:"bold"}}>Username:</span> {username}</Typography></ListItem>
       
               </List>
               </Paper>
               </Grid>
            
               <Grid item sm={12} xs={12} direction='row' style={{marginBottom:"16px"}} >
                <Button
                variant='contained'
                style={{marginTop:"15px",marginRight:"15px",color:"white",backgroundColor:"#FFA500"}}
                onClick={this.back}
                >Back
                </Button>

             

                <Button
                variant='contained'
              
                style={style.button}
                onClick={this.continue}
                >Register
                </Button>
          </Grid>
            </Grid>
                </React.Fragment>
            </div>
        )
    }
}

const style ={
    button:{
        marginTop:"15px",
        color:"white",
        backgroundColor:"#208769"
    }
} 
export default withRouter(inject('customerStore')(observer(Confirm)));
