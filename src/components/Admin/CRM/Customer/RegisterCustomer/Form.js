import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { makeStyles,ThemeProvider } from '@material-ui/core/styles';
import { inject, observer } from 'mobx-react';
import moment from 'moment';
import theme from './../../theme'
import React, { Component } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

<<<<<<< HEAD



 const RegForm = (props) => {
    
=======



 const RegForm = (props) => {
    const classes = useStyles();
>>>>>>> ca76084c9e1065cc3b873dbaaed1042c6ffdc1de
    let {account}=props.startingStore;
    const [value, setValue] = React.useState('');



<<<<<<< HEAD

=======
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
>>>>>>> ca76084c9e1065cc3b873dbaaed1042c6ffdc1de
    
    
      function getHash(input){
        var hash = 0, len = input.length;
        for (var i = 0; i < len; i++) {
          hash  = ((hash << 5) - hash) + input.charCodeAt(i);
          hash |= 0; // to 32bit integer
        }
      
                
      
        return hash;
      }


 
   
    let date = new Date();
  
  
    
      

  
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
      <form  noValidate autoComplete="off" >
     

  <Grid container direction="row"
    justify="flex-start"
    alignItems="flex-start"
   >


<Grid item xs={12}>
  <Grid container direction="row" sm={12}>

    <Grid item xs={3} style={{margin:'4px'}}>
    <TextField
        id="outlined-secondary"
        label="First name"
        variant="outlined"
        color="secondary"
        size='small'
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
<Grid item xs={3} style={{margin:'4px'}}>
  <TextField
        id="outlined-secondary"
        label="Middle name"
        variant="outlined"
        color="secondary"
        size='small'
        style={{height:"50px"}}
        onChange={account_mName=>{account.setProperty("account_mName", account_mName.target.value)}}
    />
     </Grid>       
 <Grid item xs={3} style={{margin:'4px'}}>
      <TextField
        id="outlined-secondary"
        label="Last name"
        variant="outlined"
        color="secondary"
        size='small'
        style={{height:"50px"}}
        onChange={account_lName=>{account.setProperty("account_lName", account_lName.target.value)
        
        account.setProperty('account_password', account_lName.target.value.split(" ")[0]+"!123")
      }}
      /> 
      </Grid>


      <Grid item xs={2} style={{margin:'4px'}}>


<FormControl variant="outlined" size='small'	style={{ width: '100%' }}>
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

      </Grid>
  </Grid>


	<Grid item xs={12}>
						<Grid container direction="row" sm={12} >
							<Grid item xs={3} style={{margin:'4px'}}>

        <TextField
          id="outlined-secondary"
          label="Address"
          variant="outlined"
          color="secondary"
          style={{height:"50px"}}
          size='small'
        
          onChange={account_address=>{account.setProperty("account_address", account_address.target.value)}}
        />
        </Grid>
<Grid item xs={3} style={{margin:'4px'}}>
        <TextField
          id="outlined-secondary"
          label="Email"
          variant="outlined"
          color="secondary"
          type='email'
          size='small'
          style={{height:"50px"}}
          onChange={account_emailAddress=>{account.setProperty("account_emailAddress", account_emailAddress.target.value)}}
        />
      </Grid>
<Grid item xs={3} style={{margin:'4px'}}>
      <TextField
          id="outlined-secondary"
          label="Contact No."
          variant="outlined"
          color="secondary"
          inputProps={{maxLength:11}}
          size='small'
          style={{height:"50px"}}
          onChange={account_contactNo=>{account.setProperty("account_contactNo", account_contactNo.target.value)}}
        />
</Grid>
<Grid item xs={2} style={{margin:'4px'}}>
        <FormControl variant="outlined" size='small' style={{ width: '100%' }}>
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
    
        </Grid>
					</Grid>
					</Grid>



          <Grid item xs={12}>
						<Grid container direction="row" sm={12} >
			


<Grid item xs={3} style={{margin:'4px'}}>
  <TextField
          id="outlined-secondary"
          label="Store Name"
          variant="outlined"
          color="secondary"
          size='small'
          style={{height:"50px"}}
          onChange={account_shopName=>{account.setProperty("account_storeName", account_shopName.target.value)}}
        />

</Grid>

<Grid item xs={3} style={{margin:'4px'}}>
        <TextField
       id="outlined-secondary"
       label="Store Address"
       variant="outlined"
       color="secondary"
       size='small'
       style={{height:"50px"}}
        
          onChange={account_shopAddress=>{account.setProperty("account_storeAddress", account_shopAddress.target.value)}}
        />
 
  
  	</Grid>


    <Grid item xs={3} style={{marginLeft:'4px'}}>

<ThemeProvider theme={theme}>
<MuiPickersUtilsProvider utils={DateFnsUtils}>
 <KeyboardDatePicker
  margin="normal"
  id="date-picker"
  label="Date of Birth"
 format='MMM/dd/yyyy'
 color='primary'
 size='small'
 value={selectedDate}
 style={{ marginTop:'-2px'}}
  onChange={handleDateChange}
  KeyboardButtonProps={{
    'aria-label': 'change date',
  }}
/>
</MuiPickersUtilsProvider>
</ThemeProvider>
</Grid>


					</Grid>
					</Grid>
  
  
        
     
        
  </Grid>
      </form>
      </div>
    );
  }
  





export default inject("startingStore")(observer(RegForm));