

import React, { Component } from 'react'
import {inject,observer} from 'mobx-react'
import { Paper,  Grid, TextField, Button, FormControlLabel, Checkbox ,Box,Typography,CssBaseline} from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import logogreen from './../../Logo/logogreen.png'
import img from './loginBackground.jpg'
import { ThemeProvider ,withStyles} from '@material-ui/core/styles';
import theme from './../../theme'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


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

    
         <img src={logogreen} style={{height:"160px"}}></img>
      

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
{/* </Paper> */}
</Grid>      
</Grid>
<Grid style={{textAlign:'center'}}>
{/* <Box style={{position:'absolute',bottom:0,right:'15%',marginLeft:'-150px',left:'50%'}}>
      <Typography variant='subtitle2'>©TradeTech 2020</Typography>
       </Box> */}
       </Grid>
{/* </div> */}
</React.Fragment>

)

}

    return (
    <LoginPage/>
    )
  }
}

export default inject('customerStore')(observer(Login));


// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import {inject,observer} from 'mobx-react'
// import { Paper} from '@material-ui/core';
// import { Face, Fingerprint } from '@material-ui/icons'
// import logogreen from './../../Logo/logogreen.png'
// import img from './loginBackground.jpg'
// import { ThemeProvider ,withStyles} from '@material-ui/core/styles';
// import theme from './../../theme'
// import { BrowserRouter as withRouter } from "react-router-dom";

//  class Login extends React.Component {


  
//   render() {
//     let {customerStore:{account}} = this.props;
//     let login = () => {

//             let {customerStore:{loginAccount}} = this.props;
//             loginAccount().then(res => {
           
           
//               if (res === 3){
//                 setTimeout(() => {
//                 // openNotificationSucess();
//                 this.props.history.push("/Customer")
//               }, 500);
//               }       
//               else{
//                 setTimeout(() => {
//                 //   openNotification();
//                   this.props.history.push("/Login")
//                 }, 500);
             
//               }
//             });
//       }

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         TradeTech
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     // backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

//  function LoginPage() {
//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Grid className={classes.avatar}>
//         <img src={logogreen} style={{height:"160px"}}></img>
//         </Grid>
//         {/* <Typography component="h1" variant="h5">
//           Log in
//         </Typography> */}
//         <Grid className={classes.form} noValidate>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="username"
//             label="Username"
//             name="username"
//             autoComplete="username"
//             autoFocus required 
//            onChange={account_username =>account.setProperty("account_username" , account_username.target.value) }
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//             onClick={()=>{login()}}
//           >
//             Log In
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>
//             <Grid item>
//               <Link href="/Register" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
//         </Grid>
//       </div>
//       <Box mt={8}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }



//     return (
//     <LoginPage/>
//     )
//   }
// }

// export default withRouter(inject('customerStore')(observer(Login)));





