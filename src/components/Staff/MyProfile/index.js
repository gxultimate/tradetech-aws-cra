import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Typography,Divider} from '@material-ui/core'
import {HashRouter as Router,withRouter} from 'react-router-dom'
import {inject,observer} from 'mobx-react'
import {TextField,Button} from '@material-ui/core'
import UpdateIcon from '@material-ui/icons/Update';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
class Profile extends React.Component {
    state = {  }

    componentDidMount(){
      let {staffStore:{getAccounts}}=this.props;
          getAccounts();
        
    }

    render() { 
      let{staffStore:{account,editAccount,listOfUsers}}=this.props
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

let filterAccount = listOfUsers.filter(account => account.account_ID === myID.account_ID)

let getAccount =filterAccount.map(account => {

return(createData(

  account.account_ID,account.account_fName,account.account_mName,account.account_lName,
  account.account_suffix,account.account_address,account.account_emailAddress,
  account.account_contactNo,account.account_birthday,account.account_username,
  account.account_password


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
      account.setProperty("account_ID",myaccount.id)
    
      editAccount();
      setOpen(true);
    }else{
      setOpens(true);
    }


    }



  return (
    <div className={classes.root}>
       <Snackbar open={open} autoHideDuration={3000}  anchorOrigin={{vertical:'center',horizontal:'center'}}>
        <Alert  severity="success">
          Profile Update Successful!
        </Alert>
      </Snackbar>

      <Snackbar open={opens} autoHideDuration={3000}  anchorOrigin={{vertical:'center',horizontal:'center'}}>
        <Alert  severity="error">
          Profile Update Error!
        </Alert>
      </Snackbar>


      <form autoComplete='off'>
      {getAccount.map((row)=>(
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
        <Typography variant="h6"> My Profile</Typography> 
        <Divider style={{marginTop:"10px"}} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6" style={{marginBottom:"16px"}}>Personal Information </Typography>
            <Grid container direction="row" alignItems="center" justify="center" sm={12} xs={12}>
              <Grid item xs={12} sm={12}>
                <Grid container direction='row' alignItems='center' justify='center' sm={12} xs={12}>
              <Grid item sm={6} xs={6}>
          <TextField id="outlined-basic" label="First Name"  
          defaultValue={row.fname} variant="outlined" 
          size="small" 
          style={{marginBottom:"8px",marginRight:"8px"}}
          onChange={account_fName=>{
            account.setProperty("account_fName",account_fName.target.value)
          }}
          />
          </Grid>
          <Grid item sm={6} xs={6}>
          <TextField id="outlined-basic" label="Middle Name"  
          defaultValue={row.mname} variant="outlined" 
          size="small"
          style={{marginBottom:"8px"}}
          onChange={account_mName=>{
            account.setPropert("account_mName",account_mName.target.value)
          }}
          />
          </Grid>
     
          </Grid>
          <Grid container direction='row' alignItems='center' justify='center' sm={12} xs={12}>
  
          <Grid item sm={6} xs={6}>
          <TextField id="outlined-basic" label="Last Name"  
          defaultValue={row.lname} variant="outlined" 
          size="small"
          style={{marginBottom:"8px",marginRight:"8px"}}
          onChange={account_lName=>{
            account.setProperty("account_lName",account_lName.target.value)
          }}
          />
          </Grid>
          <Grid item sm={6} xs={6}>
          <TextField id="outlined-basic" label="Suffix"  
          defaultValue={row.suffix} variant="outlined" 
          size="small"
          style={{marginBottom:"8px"}}
          onChange={account_suffix=>{
            account.setProperty('account_suffix',account_suffix.target.value)
          }}
          />
          </Grid>
          </Grid>

          </Grid>
          <Grid item sm={12} xs={12}> 
          <TextField id="outlined-basic" label="Address"  
          defaultValue={row.address} variant="outlined" 
          size="small"
          style={{marginBottom:"8px",width:"100%"}}
          onChange={account_address =>{
            account.setProperty('account_address',account_address.target.value)
          }}
          />
          </Grid>

          <Grid item sm={12} xs={12}> 
          <TextField id="outlined-basic" label="Email Address"  
          defaultValue={row.emailAddress} variant="outlined" 
          size="small"
          style={{marginBottom:"8px",width:"100%"}}
          onChange={account_emailAddress=>{
            account.setProperty('account_emailAddress',account_emailAddress.target.value)
          }}
          />
          </Grid>
          <Typography variant="h6" style={{marginBottom:"16px"}}>Account Details </Typography>
          <Grid item sm={12} xs={12}>    
          <TextField id="outlined-basic" label="Username"  
          defaultValue={row.username} variant="outlined" 
          size="small"
          style={{marginBottom:"8px",width:"100%"}}
          onChange={account_username=>{
            account.setProperty('account_username',account_username.target.value)

          }}
          />
          </Grid>
          
          <Grid item sm={12} xs={12}> 
          <TextField id="outlined-basic" label="Password"  
          defaultValue={row.password} variant="outlined" 
          size="small"
          type='password'
          style={{marginBottom:"8px",width:"100%"}}
          onChange={account_password=>{
            account.setProperty('account_password',account_password.target.value)
          }}
          />
          </Grid>

          <Grid item sm={12} xs={12}>
          <Button variant="contained" startIcon={<UpdateIcon/>} style={{backgroundColor:"#208769",color:"white"}} onClick={()=>{update(row)}}>
          Update
        </Button>
          </Grid>
          </Grid>
          </Paper>
        </Grid>
    
      </Grid>
     
      ))} 
      </form>
    </div>
  );
}
return ( 
    <MyProfile/>
 );
}
}

export default withRouter(inject("staffStore")(observer(Profile)));
