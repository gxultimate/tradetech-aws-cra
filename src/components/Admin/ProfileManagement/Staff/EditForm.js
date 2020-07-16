import { Card, Divider, TextField, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { inject, observer } from 'mobx-react';
import moment from 'moment';
import React, { Component } from 'react';

// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';



const useStyles = makeStyles(theme => ({
  
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 220,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    formControl2: {
      margin: theme.spacing(1),
      minWidth: 220,      },
  },
}));


  function getHash(input){
    var hash = 0, len = input.length;
    for (var i = 0; i < len; i++) {
      hash  = ((hash << 5) - hash) + input.charCodeAt(i);
      hash |= 0; // to 32bit integer
    }
  
            
  
    return hash;
  }
class EditForm extends Component{

  constructor(){
   super()
   this.state={
     disabled :true,
   }
  }

   
  accessType = (value) => {
    let {startingStore:{account}}=this.props

    if (value ==="staff"){
      this.setState({disabled: false})
      account.setProperty("account_accessType", value)
    }
    else{
      this.setState({disabled: true})
    }
    
 
  }
  RegistrationForm = () => {
    const classes = useStyles();
    let {startingStore:{account}}=this.props

    let date = new Date();
  
  
    function onchangebday(value) {
      let bday =  moment(value).format('MMMM Do YYYY')
      console.log(bday)
      account.setProperty("account_birthday",bday.target.value)
      }
      

    //   function onChangeaccount_mName(value) {
    //     account.setProperty('account_mName' , value)
    //     }
        
    //      function onChangeaccount_lName(value) {
    //     account.setProperty('account_lName' , value)
    //     }
  
    // const [selectedDate, setSelectedDate] = React.useState(new Date('1990-08-18T21:11:54'));
  
    // const handleDateChange = date => {
    //   setSelectedDate(date);
    // };
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
  
  
      
    return (
      <div style={{marginLeft:"5%"}}>
      <form className={classes.root} noValidate autoComplete="off" >
     
  <Card style={{marginTop:"80px",width:"95%",padding:"10px"}}>
  <Typography>
   <h2>Personal Information </h2>
  </Typography>
  <Divider/>
  <Grid container direction="row"
    justify="flex-end"
    alignItems="flex-start"
   >
  <Grid item  sm={12}  >
  <FormControl variant="outlined" className={classes.formControl} style={{marginBottom:"22px",width:"21%",marginTop:"7.5px",marginLeft:"52.5%"}}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            Access Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={account.account_accessType}
          
            onChange={account_accessType=>{
              this.accessType(account_accessType.target.value)
          }}
            labelWidth={labelWidth}
  
          >
          
            <MenuItem value="customer">Customer</MenuItem>
            <MenuItem value="staff">Staff</MenuItem>
            <MenuItem value="manager">Manager</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </Select>
        </FormControl>
      
  <FormControl disabled={this.state.disabled} variant="outlined" className={classes.formControl2} style={{marginBottom:"22px",width:"21%",marginLeft:"6px",marginTop:"7.5px",}}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            Staff 
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={account.account_staffRole}
            onChange={account_staffRole=>{account.setProperty("account_staffRole", account_staffRole.target.value)
            
          
          }}
            labelWidth={labelWidth}
  
          >
          
            <MenuItem value="customer">Packer</MenuItem>
            <MenuItem value="staff">Dispatcher</MenuItem>
            <MenuItem value="manager">Driver</MenuItem>
          
          </Select>
        </FormControl>
        </Grid>
  
  </Grid>
    <TextField
        id="outlined-secondary"
        label="First name"
        variant="outlined"
        defaultValue={account.account_fName}
        color="secondary"
        style={{height:"50px"
        }}
        onChange={account_fName=>{
          account.setProperty("account_fName", account_fName.target.value)
          account.setProperty('account_ID',`${date.getFullYear()}-${getHash(account_fName.target.value)}-${ Math.floor(1000 + Math.random() * 9000)}` )
         
          account.setProperty('account_username', account_fName.target.value.split(" ")[0]+"123")
         
        
        }}
      /> 
  
  <TextField
        id="outlined-secondary"
        label="Middle name"
        variant="outlined"
        color="secondary"
        defaultValue={account.account_mName}
        style={{height:"50px"}}
        onChange={account_mName=>{account.setProperty("account_mName", account_mName.target.value)}}
      />
      <TextField
        id="outlined-secondary"
        label="Last name"
        variant="outlined"
        defaultValue={account.account_lName}
        color="secondary"
        style={{height:"50px"}}
        onChange={account_lName=>{account.setProperty("account_lName", account_lName.target.value)
        
        account.setProperty('account_password', account_lName.target.value.split(" ")[0]+"!123")
      }}
      /> 
  
  <TextField
          id="outlined-secondary"
          label="Suffix"
          variant="outlined"
          color="secondary"
          defaultValue={account.account_suffix}
          style={{height:"50px"}}
          onChange={account_suffix=>{account.setProperty("account_suffix", account_suffix.target.value)}}
        />
        <TextField
          id="outlined-secondary"
          label="Address"
          variant="outlined"
          defaultValue={account.account_address}
          color="secondary"
          style={{height:"50px"}}
          onChange={account_address=>{account.setProperty("account_address", account_address.target.value)}}
        />
        <TextField
          id="outlined-secondary"
          label="Email"
          variant="outlined"
          defaultValue={account.account_emailAddress}
          color="secondary"
          style={{height:"50px"}}
          onChange={account_emailAddress=>{account.setProperty("account_emailAddress", account_emailAddress.target.value)}}
        />
      
      <TextField
          id="outlined-secondary"
          label="Contact No."
          variant="outlined"
          defaultValue={account.account_contactNo}
          color="secondary"
          style={{height:"50px"}}
          onChange={account_contactNo=>{account.setProperty("account_contactNo", account_contactNo.target.value)}}
        />
        {/* <TextField
          id="outlined-secondary"
          label="Contract"
          variant="outlined"
          color="secondary"
          style={{height:"50px",marginBottom:"20px"}}
          onChange={account_contract=>{account.setProperty("account_contract", account_contract.target.value)}}
        /> */}
        <FormControl variant="outlined" className={classes.formControl} style={{width:"22.5%",marginLeft:"7px",marginTop:"7.5px"}}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            Contract
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={account.account_contract}
            onChange={account_contract=>{account.setProperty("account_contract", account_contract.target.value)          
          }}
            labelWidth={labelWidth}
  
          >
          
            <MenuItem value="contract 1">Contract 1</MenuItem>
            <MenuItem value="contract 2">Contract 2</MenuItem>
            <MenuItem value="contract 3">Contract 3</MenuItem>
            <MenuItem value="contract 4">Contract 4</MenuItem>
          </Select>
        </FormControl>
    
        <TextField
        id="date"
        label="Birthday"
        type="date"
        
        value ={moment(account.account_birthday.split(",")[0].replace("th", "")).format("YYYY-DD-MM")}
        
        onChange={onchangebday}
        InputLabelProps={{
          shrink: true,
        }}
          color="secondary"
          style={{height:"50px"}}
          
        /> 
  
      {/* <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          /> */}
  
  
  
  
          </Card>
     
      
      </form>
      </div>
    );
  }
  


  render(){

 

return ( 
       
  <this.RegistrationForm/>


 );

}}


export default inject("startingStore")(observer(EditForm));