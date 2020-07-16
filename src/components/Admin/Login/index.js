import React from 'react';
import {inject,observer} from 'mobx-react'
import { Paper,  Grid, TextField, Button, FormControlLabel, Checkbox,CssBaseline } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import logogreen from './../../Logo/logogreen.png'
import img from './loginBackground.jpg'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
class Login extends React.Component {


  componentDidMount() {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const user = rememberMe ? localStorage.getItem('user') : '';
    const pass = rememberMe ? localStorage.getItem('pass') : '';
    this.setState({ pass,user, rememberMe });
  }
  constructor(props) {
    super(props);
 
  
    this.state = {
        image: '',
        submitted  : false,
       
        snackbaropen:false,
      
     
        snackbarerror:"Incorrect username or password.",
    }
    this.login  = this.login.bind(this);
  
  
  }

  state = {
    pass:'',
    user: '',
    rememberMe: false
  };

  snackbarClose =(event)=>{
    this.setState({snackbaropen:false});
  }

  handleChangeU = (event) => {
    let {startingStore:{account}} = this.props;
    account.setProperty("account_username" , event.target.value) 

    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
 
    this.setState({ [input.name]: value });
  };

  handleChangeP = (event) => {
    let {startingStore:{account}} = this.props;
    
  account.setProperty("account_password" , event.target.value) 
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
 
    this.setState({ [input.name]: value });
  };

  handleChangeC = (event) => {
   
    
 
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
 
    this.setState({ [input.name]: value });
  };




    login = () => {

      const { pass,user, rememberMe } = this.state;
  localStorage.setItem('rememberMe', rememberMe);
  localStorage.setItem('user', rememberMe ? user : '');
  localStorage.setItem('pass', rememberMe ? pass : '');


        let {startingStore:{loginAccount}} = this.props;
        loginAccount().then(res => {

       
          if (res === 1){
            setTimeout(() => {
           
            this.props.history.push("/SuperAdmin")
          }, 500);
          }
          else if (res === 2){

         setTimeout(()  =>{

              this.props.history.push("/Admin")

         },500)
          }

          else if (res === 3){

            setTimeout(()  =>{
   
                 this.props.history.push("/AccessDistributor")
   
            },500)
             }
             else if (res === 4){

              setTimeout(()  =>{
     
                   this.props.history.push("/Staff")
     
              },500)
               }
               else if (res === 5){

                setTimeout(()  =>{
       
                     this.props.history.push("/Manager")
       
                },500)
                 }

                 
          else{
            this.setState({ snackbaropen: true });
            setTimeout(() => {
          
              this.props.history.push("/")
             
            }, 500);
         
          }
        });
  }
  
    render() {
       
        const { classes } = this.props;
        function Alert(props) {
          return <MuiAlert elevation={6} variant="filled" {...props} />;
        } 
        
        return (
       <div>
         <CssBaseline />
      


<div style={{backgroundImage:`url(${img})`,height:'100vh',backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center",backgroundRepeat:"no-repeat",textAlign:"center"}}>

<Snackbar anchorOrigin={{vertical:'top',horizontal:'center'}}    open={this.state.snackbaropen} autoHideDuration={2000} onClose={this.snackbarClose}  >   
       <Alert  severity="error">
       {this.state.snackbarerror }
        </Alert></Snackbar>
        

    <Grid  direction="column"
  justify="center"
  alignItems="center" sm={4} style={{margin:"auto",paddingTop:"5%"}}>
     <Paper style={{backgroundColor:"white",padding:"40px",paddingLeft:"6px",paddingRight:"6px"}}>
         
          <Grid item sm={12} style={{marginTop:"10px"}}>

    
          <img src={logogreen} style={{height:"160px"}}></img>
      

          </Grid>
          <Grid item xs={12}>
          <Grid container spacing={2} alignItems="flex-end" style={{marginTop:"25px"}}>
                                <Grid item  sm={12} xs={12} style={{marginTop:"20px"}}>
                                  <Face style={{color:"#208769",fontSize:"35px",marginTop:"10px",marginRight:"10px"}} />                        
                                        
                           
                                  <TextField style={{width:"60%"}} autoComplete="off" name="user" value={this.state.user}  variant="outlined" id="username" label="Username" type="text"  autoFocus required 
                                 onChange={this.handleChangeU
                                  }
                                 />
                             </Grid>
                         </Grid>
                         <Grid container spacing={2} alignItems="flex-end">
                         <Grid item  sm={12} xs={12}>
                                 <Fingerprint style={{color:"#208769",fontSize:"35px",marginTop:"10px",marginRight:"10px"}}/>
                             
                          
                                 <TextField style={{width:"60%"}} variant="outlined" autoComplete="off" id="username" name="pass" value={this.state.pass} label="Password" type="password"  required 
                                 onChange={this.handleChangeP}/>
                             </Grid>
                         </Grid>
                         <div style={{marginTop:"12px",}}>
                         <Grid container  sm={12} xs={12} alignItems="center" justify="space-between" style={{margin:"auto"}}>
                             <Grid item  sm={6} xs={6}>
                                 <FormControlLabel   
                               
                                 control={<Checkbox name='rememberMe' checked={this.state.rememberMe} style={{color:"#208769",marginLeft:"16px"}} onChange={this.handleChangeC}  />}
                                 label="Remember me"  style={{color:"grey"}}   />
                                 
                            </Grid>
                            <Grid item sm={6} xs={6}>
                                <Button disableFocusRipple disableRipple style={{ textTransform: "none",color:"grey" }} variant="text">Forgot password?</Button>
                            </Grid>
                        </Grid>
                        </div>
                        <Grid container justify="center" style={{ marginTop: '15px',marginBottom:"15px" }}>
                            <Button variant="outlined" name='login' type='submit' style={{ textTransform: "none",fontWeight:"bold",backgroundColor:"#208769",marginBottom:"20px",color:"white",width:"65%",marginLeft:"10px" }} 
                           onClick={()=> {this.login()}}>
                               LOG IN
                               </Button>
                        </Grid>
                        </Grid>
                        </Paper>
                        </Grid>
            
                        </div>
</div>
        );
    }
}

export default inject("startingStore")(observer(Login));