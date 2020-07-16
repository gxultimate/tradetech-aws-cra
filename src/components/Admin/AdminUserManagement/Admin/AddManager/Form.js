

import DateFnsUtils from '@date-io/date-fns';
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { inject, observer } from 'mobx-react';
import moment from 'moment';
import React, { Component } from 'react';
import theme from './../../../theme';
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
class RegForm extends Component{

  constructor(){
   super()
   this.state={
     disabled :true,
   }
  }

   

  RegistrationForm = () => {
    const classes = useStyles();
    let {startingStore:{account}}=this.props
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
      account.setProperty("account_address", event.target.value);
      account.setProperty("account_storeAddress", event.target.value)
    };

   
    let date = new Date();
  
  

      

    //   function onChangeaccount_mName(value) {
    //     account.setProperty('account_mName' , value)
    //     }
        
    //      function onChangeaccount_lName(value) {
    //     account.setProperty('account_lName' , value)
    //     }
  
    const [selectedDate, setSelectedDate] = React.useState(new Date('1990-08-18T21:11:54'));
  
    const handleDateChange = date => {
      setSelectedDate(date);
      let bday =  moment(date).format('MMM/DD/YYYY')
      account.setProperty("account_birthday",bday)
    };
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
  
  
      
    return (
      <div >
      <form className={classes.root} noValidate autoComplete="off" >
     

  <Grid container direction="row"
    justify="flex-start"
    alignItems="flex-start"
   >


<Grid item>
  <Grid container ditection="row" sm={12}>

    <Grid item xs={4}>
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
          account.setProperty("account_dateRegistered",moment().format('MMM/DD/YYYY') )
          account.setProperty('account_username', account_fName.target.value.split(" ")[0]+"123")
         
        
        }}
      /> 
</Grid>
<Grid item xs={4}>
  <TextField
        id="outlined-secondary"
        label="Middle name"
        variant="outlined"
        color="secondary"
        style={{height:"50px"}}
        onChange={account_mName=>{account.setProperty("account_mName", account_mName.target.value)}}
    />
     </Grid>       
 <Grid item xs={4}>
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
      </Grid>
      </Grid>
  </Grid>
  <Grid item xs={3}>
  <FormControl variant="outlined" className={classes.formControl} style={{width:"100%",marginLeft:"7px",marginTop:"7.5px"}}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            Suffix
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
          
            onChange={account_suffix=>{account.setProperty("account_suffix", account_suffix.target.value)}}
          
        
            labelWidth={labelWidth}
  
          >
          
            <MenuItem value="Jr.">Jr.</MenuItem>
            <MenuItem value="Sr.">Sr.</MenuItem>
            <MenuItem value="II">II</MenuItem>
            <MenuItem value="III">III</MenuItem>
            <MenuItem value="IV">IV</MenuItem>
          </Select>
        </FormControl>



</Grid>  



        <TextField
          id="outlined-secondary"
          label="Address"
          variant="outlined"
          color="secondary"
          style={{height:"50px"}}
          value={value}
          onChange={handleChange}
          // onChange={account_address=>{account.setProperty("account_address", account_address.target.value)}}
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
     
        <FormControl variant="outlined" className={classes.formControl} style={{width:"25%",marginLeft:"7px",marginTop:"7.5px"}}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            Contract
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
          
            onChange={account_contract=>{account.setProperty("account_contract", account_contract.target.value)
          
          
          }}
            labelWidth={labelWidth}
  
          >
          
            <MenuItem value="contract_1">Contract 1</MenuItem>
            <MenuItem value="contract_2">Contract 2</MenuItem>
            <MenuItem value="contract_3">Contract 3</MenuItem>
            <MenuItem value="contract_4">Contract 4</MenuItem>
          </Select>
        </FormControl>
    
        <ThemeProvider theme={theme}>
<MuiPickersUtilsProvider utils={DateFnsUtils}>
         <KeyboardDatePicker
          margin="normal"
          id="date-picker"
          label="Date of Birth"
         format='MMM/dd/yyyy'
         color='primary'
         value={selectedDate}
          style={{height:"50px"}}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
</MuiPickersUtilsProvider>
</ThemeProvider>
  
  <FormControl variant="outlined" className={classes.formControl} style={{width:"22.5%",marginLeft:"7px",marginTop:"7.5px"}}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            Manager Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
          
            onChange={staff_Role=>{account.setProperty("staff_Role", staff_Role.target.value)
          
          
          }}
            labelWidth={labelWidth}
  
          >
          
            <MenuItem value="Packer Manager">Packer Manager</MenuItem>
            <MenuItem value="Dispatcher Manager">Dispatcher Manager</MenuItem>
     
          </Select>
        </FormControl>
  
  
  
  
  
        
     
        
  </Grid>
      </form>
      </div>
    );
  }
  


  render(){



return ( 
       
  <this.RegistrationForm/>


 );

}}


export default inject("startingStore")(observer(RegForm));