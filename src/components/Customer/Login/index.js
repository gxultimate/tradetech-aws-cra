

import { Button, Checkbox, CssBaseline, FormControlLabel, Grid, TextField } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import { Face, Fingerprint } from '@material-ui/icons';
import MuiAlert from '@material-ui/lab/Alert';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

import theme from './../../theme';


 class Login extends Component {

  constructor(props) {
    super(props);
 
  
    this.state = {
    
       
        snackbaropen:false,
      
     
        snackbarerror:"Incorrect username or password.",
    }
   
  
  }
  
  render() {

  let  snackbarClose =(event)=>{
      this.setState({snackbaropen:false});
    }


   let login = () => {

      let {customerStore:{loginAccount}} = this.props;
      loginAccount().then(res => {
     
     
        if (res === 3){
          setTimeout(() => {
          // openNotificationSucess();
          this.props.history.push("/AccessDistributor")
        }, 500);
        }       
        else{
        
          setTimeout(() => {
            this.setState({ snackbaropen: true });
            this.props.history.push("/Login")
          }, 500);
       
        }
      });
}

 let register =()=>{
  setTimeout(() => {
    //   openNotification();
      this.props.history.push("/Register")
    }, 500);
}

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: '#208769',
      color:'white'
    },
    '& input:invalid + fieldset': {
      borderColor: '#208769',
      color:'white'
     
    },
 
  },
})(TextField);

        let {customerStore:{account}} = this.props;

        function Alert(props) {
          return <MuiAlert elevation={6} variant="filled" {...props} />;
        } 
        let errormsg=this.state.snackbarerror;
     
        let openS =this.state.snackbaropen;
function LoginPage(){

return(
<React.Fragment>
  <CssBaseline/>
<Snackbar anchorOrigin={{vertical:'top',horizontal:'center'}}    open={openS} autoHideDuration={2000} onClose={snackbarClose}  >   
       <Alert  severity="error">
       {errormsg }
        </Alert></Snackbar>

  {/* <div style={{backgroundImage:`url(${img})`,height:'100vh',backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}> */}
<Grid container  sm={12} xs={12}
  direction="row"
  justify="center"
  alignItems="center">
<Grid item  sm={4} xs={12} style={{textAlign:"center",marginTop:"70px"}}>
{/* <Paper elevation={3}> */}
        <Grid container >
          <Grid item xs={12} sm={12} style={{textAlign:"center",marginTop:"16px"}}>

    
         <img src='https://res.cloudinary.com/startupprojectventuresph/image/upload/v1597019655/BackgroundImg/logogreen_uqfjwy.png' style={{height:"160px"}}></img>
      

         </Grid>
         <ThemeProvider theme={theme}>
           <Grid item sm={12} xs={12} style={{marginTop:"25px"}}>
        <Grid container spacing={2} alignItems="center" >
                              <Grid item  sm={12} xs={12} style={{marginTop:"20px"}}>
                                 <Face style={{color:"#208769",fontSize:"35px",marginTop:"10px",marginRight:"10px"}} />                        
                                        
                           
                                  <ValidationTextField style={{width:"80%",backgroundColor:"transparent"}} autoComplete="off"  variant="outlined" id="username" label="Username" type="text" color='primary' autoFocus required 
                                 onChange={account_username =>account.setProperty("account_username" , account_username.target.value) }
                                 />
                             </Grid>
                         </Grid>
                         </Grid>

                         <Grid item sm={12} xs={12} style={{marginTop:"8px"}}>
                         <Grid container spacing={2} alignItems="center">
                         <Grid item  sm={12} xs={12}>
                                 <Fingerprint style={{color:"#208769",fontSize:"35px",marginTop:"10px",marginRight:"10px"}}/>
                             
                          
                                 <ValidationTextField style={{width:"80%",color:"#208769"}} variant='outlined'
                                  autoComplete="off" id="password" label="Password" type="password" required 
                                 onChange={account_password =>account.setProperty("account_password" , account_password.target.value) }/>
                             </Grid>
                         </Grid>
              </Grid>

              <Grid item sm={12} xs={12} style={{marginTop:"8px"}}>
                         <Grid container  sm={12} xs={12} alignItems="center" justify="space-between" style={{margin:"auto"}}>
                             <Grid item  sm={6} xs={6}>
                                 <FormControlLabel control={
                                    <Checkbox
                                    style={{color:"#208769",marginLeft:"15px",fontSize:'10px'}}
                                    />
                                } label="Remember me" style={{color:"grey"}} />
                            </Grid>
                            <Grid item sm={6} xs={6} style={{textAlign:'right',paddingRight:'4px'}}>
                                <Button disableFocusRipple disableRipple style={{ textTransform: "none",color:"grey" }} variant="text">Forgot password?</Button>
                            </Grid>
                        </Grid>
                        </Grid>
                        <Grid item sm={12} xs={12} style={{marginTop:"16px"}}>
                        <Grid container  sm={12} xs={12}  justify="center" style={{ marginTop: '15px',marginBottom:"15px" }}>
                          <Grid item  sm={12} xs={12} >
                            <Button variant="outlined" type='submit' style={{ textTransform: "none",fontWeight:"bold",backgroundColor:"#208769",marginBottom:"20px",color:"white",width:"80%",marginLeft:"10px" }} 
                           onClick={()=>{login()}}>
                               LOG IN
                               </Button>
                               </Grid>
                               <br/>
                               <Grid item  sm={12} xs={12} >
                               <Button disableFocusRipple disableRipple style={{ textTransform: "none",color:"grey" }} variant="outlined" onClick={()=> {register()}}>Create an Account?</Button>
                               </Grid>
                        </Grid>
                        </Grid>

                        </ThemeProvider>









         
                  

</Grid>

</Grid>      
</Grid>
<Grid style={{textAlign:'center'}}>

       </Grid>

</React.Fragment>

)

}

    return (
    <LoginPage/>
    )
  }
}

export default inject('customerStore')(observer(Login));








