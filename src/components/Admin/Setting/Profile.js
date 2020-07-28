import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Typography,Divider} from '@material-ui/core'

import {inject,observer} from 'mobx-react'
import {TextField,Button} from '@material-ui/core'
import UpdateIcon from '@material-ui/icons/Update';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
class ProfileInfo extends React.Component {
    state = {  }

    componentDidMount(){
      let {startingStore:{getDistributors}}=this.props;
          getDistributors();
        
    }

    render() { 
      
  let{startingStore:{distributor,editDistributorD,listOfDistributors}}=this.props;
 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function createData(id,fname,mname,lname,suffix,address,emailAddress,contactNo,birthday,username,password){
  return{id,fname,mname,lname,suffix,address,emailAddress,contactNo,birthday,username,password}

}
let myID = JSON.parse(sessionStorage.getItem('userData'));

let filterAccount = listOfDistributors.filter(account => account.distributor_ID === myID.distributor_ID)

let getAccount =filterAccount.map(distributor => {

return(createData(

  distributor.distributor_ID,distributor.distributor_fName,distributor.distributor_mName,distributor.distributor_lName,
  distributor.distributor_suffix,distributor.distributor_address,distributor.distributor_emailAddress,
  distributor.distributor_contactNo,distributor.distributor_birthday,distributor.distributor_username,
  distributor.distributor_password


));



})


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
 function MyProfile() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  let  update = myaccount =>{
  
    if (myaccount != null){
      
    
      editDistributorD();
      setOpen(true);
    }else{
      setOpens(true);
    }
  }


  return (
  
    <div className={classes.root}>

<Snackbar open={open} autoHideDuration={2000}  anchorOrigin={{vertical:'center',horizontal:'center'}}>
        <Alert  severity="success">
          Profile Update Successful!
        </Alert>
      </Snackbar>

      <Snackbar open={opens} autoHideDuration={2000}  anchorOrigin={{vertical:'center',horizontal:'center'}}>
        <Alert  severity="error">
          Profile Update Error!
        </Alert>
      </Snackbar>

      
      {getAccount.map((row)=>(
      <Grid container  >
     
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6" style={{marginBottom:"25px"}}>Personal Information </Typography>
            <Grid container direction="row"  sm={12} xs={12}>


              <Grid item xs={12} sm={12} >

                <Grid container sm={12} xs={12}>
              <Grid item sm={3} xs={3} >
          <TextField id="outlined-basic" label="First Name"  
          defaultValue={row.fname} variant="outlined" 
           
          style={{marginBottom:"8px",marginRight:"8px"}}
          onChange={distributor_fName=>{
            distributor.setProperty("distributor_fName",distributor_fName.target.value)
          }}
          />
          </Grid>

          <Grid item sm={3} xs={3}>
          <TextField id="outlined-basic" label="Middle Name"  
          defaultValue={row.mname} variant="outlined" 
          
          style={{marginBottom:"8px",marginRight:"8px"}}
          onChange={distributor_mName=>{
            distributor.setPropert("distributor_mName",distributor_mName.target.value)
          }}
          />
          </Grid>
     
        


  
          <Grid item sm={3} xs={3}>
          <TextField id="outlined-basic" label="Last Name"  
          defaultValue={row.lname} variant="outlined" 
          
          style={{marginBottom:"8px",marginRight:"8px"}}
          onChange={distributor_lName=>{
            distributor.setProperty("distributor_lName",distributor_lName.target.value)
          }}
          />
          </Grid>
          <Grid item sm={3} xs={3}>
          <TextField id="outlined-basic" label="Suffix"  
          defaultValue={row.suffix} variant="outlined" 
          
          style={{marginBottom:"8px"}}
          onChange={distributor_suffix=>{
            distributor.setProperty('distributor_suffix',distributor_suffix.target.value)
          }}
          />
          </Grid>
          </Grid>

          </Grid>



          <Grid item sm={12} xs={12}> 
          <Grid container direction='row'  sm={12} xs={12}>
          <Grid item sm={6} xs={6}> 
          <TextField id="outlined-basic" label="Address"  
          defaultValue={row.address} variant="outlined" 
          
          style={{marginBottom:"8px",width:"98%",marginRight:"8px"}}
          onChange={distributor_address =>{
            distributor.setProperty('distributor_address',distributor_address.target.value)
          }}
          />
            </Grid>
        <Grid item sm={6} xs={6}> 
          <TextField id="outlined-basic" label="Email Address"  
          defaultValue={row.emailAddress} variant="outlined" 
          
          style={{marginBottom:"8px",width:"100%"}}
          onChange={distributor_emailAddress=>{
            distributor.setProperty('distributor_emailAddress',distributor_emailAddress.target.value)
          }}
          />
            </Grid>
          </Grid>
          </Grid>
          <Typography variant="h6" style={{marginBottom:"20px"}}>distributor Details </Typography>
          <Grid item sm={12} xs={12}>    
          <Grid container direction='row'  sm={12} xs={12}>
          <Grid item sm={6} xs={6}> 
          <TextField id="outlined-basic" label="Username"  
          defaultValue={row.username} variant="outlined" 
          
          style={{marginBottom:"8px",width:"98%",marginRight:"8px"}}
          onChange={distributor_username=>{
            distributor.setProperty('distributor_username',distributor_username.target.value)

          }}
          />
         </Grid>
          
          <Grid item sm={6} xs={6}> 
         
          <TextField id="outlined-basic" label="Password"  
          defaultValue={row.password} variant="outlined" 
          
          type='password'
          style={{marginBottom:"8px",width:"100%"}}
          onChange={distributor_password=>{
            distributor.setProperty('distributor_password',distributor_password.target.value)
          }}
          />
            </Grid>
          </Grid>
          </Grid>
          <Grid item sm={12} xs={12}  style={{marginTop:'18px'}}>
          <Button variant="contained" startIcon={<UpdateIcon/>} style={{backgroundColor:"#208769",color:"white"}} onClick={()=>{update(row)}}>
          Update
        </Button>
          </Grid>
          </Grid>
          </Paper>
        </Grid>
    
      </Grid>
     
      ))} 
   
    </div>
   
  );
}
return ( 
    <MyProfile/>
 );
}
}

export default inject("startingStore")(observer(ProfileInfo));
