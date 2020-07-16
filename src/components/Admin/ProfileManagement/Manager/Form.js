import React from 'react';
import {TextField,Divider,Card,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {inject,observer} from 'mobx-react';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));



export default function RegForm() {
  const classes = useStyles();

  // function onChange(value) {
  //   customer.setProperty('account_fName  ' , value)
  //   }
    
  //   function onChangeaccount_mName(value) {
  //     customer.setProperty('account_mName' , value)
  //     }
      
  //      function onChangeaccount_lName(value) {
  //     customer.setProperty('account_lName' , value)
  //     }

    
  return (
    <div style={{marginLeft:"16%"}}>
    <form className={classes.root} noValidate autoComplete="off" >
   
<Card style={{marginTop:"20px",width:"80%",padding:"10px"}}>
<Typography>
  <h2>Personal Information</h2>
</Typography>
  {/* <TextField
      id="outlined-secondary"
      label="First name"
      variant="outlined"
      color="secondary"
      style={{height:"50px"
      }}
      onChange={account_fName=>{customer.setProperty("account_fName", account_fName.target.value)}}
    /> 

<TextField
      id="outlined-secondary"
      label="Middle name"
      variant="outlined"
      color="secondary"
      style={{height:"50px"}}
      onChange={account_fName=>{customer.setProperty("account_fName", account_mName.target.value)}}
    />
    <TextField
      id="outlined-secondary"
      label="Last name"
      variant="outlined"
      color="secondary"
      style={{height:"50px"}}
      onChange={account_fName=>{customer.setProperty("account_lName", account_fName.target.value)}}
    />  */}

<TextField
        id="outlined-secondary"
        label="Suffix"
        variant="outlined"
        color="secondary"
        style={{height:"50px"}}
      />
      <TextField
        id="outlined-secondary"
        label="Address"
        variant="outlined"
        color="secondary"
        style={{height:"50px"}}
      />
      <TextField
        id="outlined-secondary"
        label="Email"
        variant="outlined"
        color="secondary"
        style={{height:"50px"}}
      />
    
    <TextField
        id="outlined-secondary"
        label="Contact No."
        variant="outlined"
        color="secondary"
        style={{height:"50px"}}
      />
      <TextField
        id="outlined-secondary"
        label="Contract"
        variant="outlined"
        color="secondary"
        style={{height:"50px",marginBottom:"20px"}}
      />
      <Divider/>
      <Typography>
  <h2>Account Information</h2>
</Typography>
      <TextField
        id="outlined-secondary"
        label="Username"
        variant="outlined"
        color="secondary"
        style={{height:"50px"}}
      />
      <TextField
        id="outlined-secondary"
        label="Password"
        variant="outlined"
        color="secondary"
        style={{height:"50px"}}
      />
        </Card>
   
    
    </form>
    </div>
  );
}


// export default inject("startingStore")(observer(RegForm));