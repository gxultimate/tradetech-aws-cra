import React,{Component} from 'react';
import {TextField,Divider,Card,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {inject,observer} from 'mobx-react';
import moment from 'moment';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import {
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
// import 'date-fns';

// import DateFnsUtils from '@date-io/date-fns';
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
  },
}));

class RegForm extends Component{
  state = { }
  render(){
    let {startingStore:{account}}=this.props

  let date = new Date();

//   var dateB = moment(account_birthday).format('YYYY MMMM Do ');
// console.log(dateB);
    function getHash(input){
      var hash = 0, len = input.length;
      for (var i = 0; i < len; i++) {
        hash  = ((hash << 5) - hash) + input.charCodeAt(i);
        hash |= 0; // to 32bit integer
      }
    
              
    
      return hash;
    }
 function RegistrationForm() {
  const classes = useStyles();

  // function onchangebday(value) {
  //   let bday =  moment(value).format('MMMM Do YYYY ')
  //   console.log(bday)
  //   account.setProperty("account_birthday",bday.target.value)
  //   }
    
  //   function onChangeaccount_mName(value) {
  //     account.setProperty('account_mName' , value)
  //     }
      
  //      function onChangeaccount_lName(value) {
  //     account.setProperty('account_lName' , value)
  //     }

  const [selectedDate, setSelectedDate] = React.useState(new Date('1990-08-18T21:11:54'));

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);


    
  return (
    <div style={{marginLeft:"16%"}}>
    <form className={classes.root} noValidate autoComplete="off" >
   
<Card style={{marginTop:"20px",width:"80%",padding:"10px"}}>
<Typography>
 <h2>Personal Information </h2>
</Typography>
  <TextField
      id="outlined-secondary"
      label="First name"
      variant="outlined"
      color="secondary"
      style={{height:"50px"
      }}
      onChange={account_fName=>{
        account.setProperty("account_fName", account_fName.target.value)
        account.setProperty('account_ID',`${date.getFullYear()}-${getHash(account_fName.target.value)}-${ Math.floor(1000 + Math.random() * 9000)}` )
        account.setProperty("account_dateRegistered",moment().format('MMM/DD/YYYY, h:mm:ss a') )
        account.setProperty('account_username', account_fName.target.value.split(" ")[0]+"123")
       
      
      }}
    /> 

<TextField
      id="outlined-secondary"
      label="Middle name"
      variant="outlined"
      color="secondary"
      style={{height:"50px"}}
      onChange={account_mName=>{account.setProperty("account_mName", account_mName.target.value)}}
    />
    <TextField
      id="outlined-secondary"
      label="Last name"
      variant="outlined"
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
        style={{height:"50px"}}
        onChange={account_suffix=>{account.setProperty("account_suffix", account_suffix.target.value)}}
      />
      <TextField
        id="outlined-secondary"
        label="Address"
        variant="outlined"
        color="secondary"
        style={{height:"50px"}}
        onChange={account_address=>{account.setProperty("account_address", account_address.target.value)}}
      />
      <TextField
        id="outlined-secondary"
        label="Email"
        variant="outlined"
        color="secondary"
        style={{height:"50px"}}
        onChange={account_emailAddress=>{account.setProperty("account_emailAddress", account_emailAddress.target.value)}}
      />
    
    <TextField
        id="outlined-secondary"
        label="Contact No."
        variant="outlined"
        color="secondary"
        style={{height:"50px"}}
        onChange={account_contactNo=>{account.setProperty("account_contactNo", account_contactNo.target.value)}}
      />
      <TextField
        id="outlined-secondary"
        label="Contract"
        variant="outlined"
        color="secondary"
        style={{height:"50px",marginBottom:"20px"}}
        onChange={account_contract=>{account.setProperty("account_contract", account_contract.target.value)}}
      />
  
      {/* <TextField
      id="date"
      label="Birthday"
      type="date"
      defaultValue="2017-05-24"
      
      onChange={onchangebday}
      InputLabelProps={{
        shrink: true,
      }}
        color="secondary"
        style={{height:"50px"}}
        
      />  */}

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


<FormControl variant="outlined" className={classes.formControl} style={{width:"21%",marginLeft:"6px",marginTop:"7.5px"}}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Access Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
        
          onChange={account_accessType=>{account.setProperty("account_accessType", account_accessType.target.value)
        
        
        }}
          labelWidth={labelWidth}

        >
        
          <MenuItem value="customer">Customer</MenuItem>
          <MenuItem value="staff">Staff</MenuItem>
          <MenuItem value="manager">Manager</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
        </Select>
      </FormControl>

        </Card>
   
    
    </form>
    </div>
  );
}
return ( 
       
  <RegistrationForm/>


 );

}}


export default inject("startingStore")(observer(RegForm));