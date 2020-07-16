import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';







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
  
class RegForm extends Component{


  render(){
    let {startingStore:{distributor}}=this.props


    
  function EditForm (){
    const classes = useStyles();
   

    let date = new Date();
  
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

  

      
    return (
      <div style={{}}>
     


<form className={classes.root} noValidate autoComplete="off" >
     


     <Grid container direction="row" sm={12}
       justify="flex-start"
       alignItems="flex-start"
      
      >
   
   
   <Grid item>
     <Grid container sm={12}>
       <Grid item xs={4} >
       <TextField
           id="outlined-secondary"
           label="First Name"
           variant="outlined"
           defaultValue={distributor.distributor_fName}
           color="secondary"
           style={{height:"50px",width:"96%"
           }}
           onChange={distributor_fName=>{
             distributor.setProperty("distributor_fName", distributor_fName.target.value)
      
            
           
           }}
         /> 
   </Grid>
   <Grid item xs={4}>
   <TextField
           id="outlined-secondary"
           label="Middle Name"
           variant="outlined"
           defaultValue={distributor.distributor_mName}
           color="secondary"
           style={{height:"50px",width:"96%"
           }}
           onChange={distributor_mName=>{
             distributor.setProperty("distributor_mName", distributor_mName.target.value)
   
            
           
           }}
         /> 
   </Grid>
   <Grid item xs="4">
   <TextField
           id="outlined-secondary"
           label="Last Name"
           variant="outlined"
           defaultValue={distributor.distributor_lName}
           color="secondary"
           style={{height:"50px",width:"96%"
           }}
           onChange={distributor_lName=>{
             distributor.setProperty("distributor_lName", distributor_lName.target.value)
           
            
           
           }}
         /> 
         </Grid>
      </Grid> 
      </Grid>
   
      <Grid item  sm={12}>
    <Grid container sm={12}>
      <Grid item xs={6}>
   <TextField
           id="outlined-secondary"
           label="Warehouse Name"
           variant="outlined"
           defaultValue={distributor.distributor_warehouseName}
           color="secondary"
           style={{height:"50px",width:"97%"
           }}
           onChange={distributor_warehouseName=>{
             distributor.setProperty("distributor_warehouseName", distributor_warehouseName.target.value)
      
        
            
   
        
           
           }}
         /> 
    
    </Grid>
    <Grid item xs={6}>
     <TextField
           id="outlined-secondary"
           label="Address"
           defaultValue={distributor.distributor_address}
           variant="outlined"
           color="secondary"
           style={{height:"50px",width:"97%"}}
           onChange={distributor_address=>{distributor.setProperty("distributor_address", distributor_address.target.value)}}
         />
    
         </Grid>
         </Grid>                                      
      </Grid>
   
   
   
      <Grid item  sm={12}>
    <Grid container sm={12}>
      <Grid item xs={6}>
      <TextField
           id="outlined-secondary"
           label="Email Address"
           defaultValue={distributor.distributor_emailAddress}
           variant="outlined"
           color="secondary"
           style={{height:"50px",width:"97%"}}
           onChange={distributor_emailAddress=>{distributor.setProperty("distributor_emailAddress", distributor_emailAddress.target.value)
           
          
         }}
         /> </Grid>
          <Grid item xs={6}>
     <TextField
             id="outlined-secondary"
             label="Contact No"
             variant="outlined"
             defaultValue={distributor.distributor_contactNo}
             color="secondary"
             style={{height:"50px",width:"97%"}}
             onChange={distributor_contactNo=>{distributor.setProperty("distributor_contactNo", distributor_contactNo.target.value)}}
           />
   
        
   </Grid>
         </Grid>                                      
      </Grid>
   <Grid item sm={6}>
     <FormControl variant="outlined" className={classes.formControl} style={{marginBottom:"22px",width:"97%",marginTop:"7.5px",marginLeft:"7px"}}>
             <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
               Tier No.
             </InputLabel>
             <Select
               labelId="demo-simple-select-outlined-label"
               id="demo-simple-select-outlined"
               
               onChange={distributor_tierNo=>{distributor.setProperty("distributor_tierNo", distributor_tierNo.target.value)}}
               labelWidth={labelWidth}
     
             >
             
               <MenuItem value="Tier 1">Tier 1</MenuItem>
               <MenuItem value="Tier 2">Tier 2</MenuItem>
               <MenuItem value="Tier 3">Tier 3</MenuItem>
              
             </Select>
           </FormControl>
   
           </Grid>

     
     
     </Grid>
     
   
        
         
         </form>

      </div>
    );
  }
  


 



return ( 
       
  <EditForm/>


 );

}}


export default inject("startingStore")(observer(RegForm));