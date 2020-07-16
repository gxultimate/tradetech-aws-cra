import React from 'react';
import {inject,observer} from 'mobx-react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {TextField} from '@material-ui/core'
import moment from 'moment';

class Registration extends React.Component {


  render() {
    const {values,handleChange} =this.props;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));




 let {startingStore:{account}}=this.props
 

 let date = new Date();
 function getHash(input){
  var hash = 0, len = input.length;
  for (var i = 0; i < len; i++) {
    hash  = ((hash << 5) - hash) + input.charCodeAt(i);
    hash |= 0; // to 32bit integer
  }}


function Register () {
  const classes = useStyles();


  return (

    <div className={classes.root} >
 <React.Fragment>

        <Grid container direction="row" justify="center" sm={12} xs={12} alignItems="center" style={{textAlign:"center"}}>
  <Grid item sm={5} xs={12}>
 <Paper className={classes.paper}>

     
          <Grid container direction="row" sm={12} xs={12} >
           {/* <Grid item xs={12} style={{marginBottom:"16px"}}>   <Typography variant="h6" style={{float:"left"}}>Personal Information</Typography></Grid> */}
             <Grid item sm={6} xs={6} >
               <div style={{marginBottom:"4px",marginRight:"4px"}}>
             <TextField
          label="First Name"
          id="outlined-size-small"
          // onChange={handleChange('fName')}
          // defaultValue={values.fName}
          multiline
          variant="outlined"
          size="small"
          // onChange ={()=>this.changefname()}
          
          // onChange={account_fName =>{
          // account.setProperty("account_fName", account_fName.target.value)
          // account.setProperty('account_ID',`${date.getFullYear()}-${getHash(account_fName.target.value)}-${ Math.floor(1000 + Math.random() * 9600)}` )
          // account.setProperty("account_dateRegistered",moment().format('MMMM Do YYYY, h:mm:ss a') )
          // account.setProperty('account_username', account_fName.target.value.split(" ")[0]+"123")



          // }}
        />
        </div>
             </Grid>

             <Grid item sm={6} xs={6} >
             <div style={{marginBottom:"4px",marginLeft:"4px"}}>
             <TextField
          label="Middle Name"
          id="outlined-size-small"
          // onChange={handleChange('mName')}
          // defaultValue={values.mName}
          multiline
          variant="outlined"
          size="small"
          
          // onChange={account_mName=>{account.setProperty("account_mName", account_mName.target.value)}}
        />
        </div>
             </Grid>

             <Grid item sm={6} xs={6}>
             <div style={{marginBottom:"4px",marginRight:"4px",marginTop:"4px"}}>
             <TextField
          label="Surname"
          id="outlined-size-small"
          // onChange={handleChange('lName')}
          // defaultValue={values.lName}
          multiline
          variant="outlined"
          size="small"
         
          // onChange={account_lName=>{account.setProperty("account_lName", account_lName.target.value)
        //  account.setProperty('account_password', account_lName.target.value.split(" ")[0]+"!123")
        // }}
        />
        </div>
             </Grid>


             <Grid item sm={6} xs={6}>
             <div style={{marginBottom:"4px",marginLeft:"4px",marginTop:"4px"}}>
             <TextField
          label="Suffix"
          id="outlined-size-small"
          // onChange={handleChange('suffix')}
          // defaultValue={values.suffix}
          multiline
          variant="outlined"
          size="small"
       
        //   onChange={account_lName=>{account.setProperty("account_lName", account_lName.target.value)
        //  account.setProperty('account_password', account_lName.target.value.split(" ")[0]+"!123")
        // }}
        />
        </div>
             </Grid>

            
             <Grid item sm={12} xs={12}>
             <TextField
          label="Address"
          id="outlined-size-small"
          // onChange={handleChange('address')}
          // defaultValue={values.address}
          multiline
          variant="outlined"
          size="small"
          style={{width:"90%",marginBottom:"8px",marginTop:"4px"}}
          // onChange={account_address=>{account.setProperty("account_address", account_address.target.value)}}
        />
             </Grid>

             <Grid item sm={12} xs={12}>
             <TextField
          label="Contact no."
          id="outlined-size-small"
          // onChange={handleChange('contactNo')}
          // defaultValue={values.contactNo}
          multiline
          variant="outlined"
          size="small"
          style={{width:"90%",marginBottom:"8px"}}
          // onChange={account_contactNo=>{account.setProperty("account_contactNo", account_contactNo.target.value)}}
        />
             </Grid>



  
          </Grid>
          </Paper>
          </Grid>
          </Grid>
          </React.Fragment>
    </div>
  );
}
return ( 

<Register/> );
}
}

export default inject("startingStore")(observer(Registration));



