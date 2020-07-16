import React, { Component } from 'react'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import {Grid,Paper,TextField,AppBar,Toolbar} from '@material-ui/core';
import logo from './../../Logo/logowhite.png'
import FirstStep from './FirstStep'
import { FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Link, withRouter } from 'react-router-dom';
 class FormUserDetails extends Component {

      
    state = {
 
       
        snackbaropen:false,
      
     
        snackbarerror:"Fill out all fields.",
    }

     continue = e =>{
       
         e.preventDefault();
         if(this.props.values.fName,this.props.values.mName,this.props.values.lName,this.props.values.address,this.props.values.emailAddress,this.props.values.contactNo != ''){
         this.props.nextStep();
        }else{
            this.setState({ snackbaropen: true });
        }
     }

     
  snackbarClose =(event)=>{
    this.setState({snackbaropen:false});
  }

     
    render() {
        const {values,handleChange} =this.props;
        function Alert(props) {
            return <MuiAlert elevation={6} variant="filled" {...props} />;
          } 
        return (
            <div >
                
<Snackbar anchorOrigin={{vertical:'top',horizontal:'center'}}    open={this.state.snackbaropen} autoHideDuration={2000} onClose={this.snackbarClose}  >   
       <Alert  severity="warning">
       {this.state.snackbarerror }
        </Alert></Snackbar>
        
                <React.Fragment>
                <AppBar position="fixed" style={{backgroundColor:"#208769"}}>
               {/* <Button style={{width:'100px',fontSize:''}}> <span style={{color:'white',textAlign:'right',marginRight:'8px',marginTop:'5px',textDecoration:'underlined'}}>Login account?</span></Button> */}
        <Toolbar style={{textAlign:"center"}}>
            <img src={logo} style={{height:"120px",margin:"auto"}}></img>
        </Toolbar>
      </AppBar>
      <Toolbar />
    
                <Grid container direction="row" sm={10} xs={11} justify='center' alignItems='center' style={{marginTop:"20%"}}>
    <Grid item sm={12} xs={12} style={{textAlign:"center"}} justify='center' alignItems='center'>
<Paper style={{marginLeft:'20px'}}>
    <Grid container sm={12} >
       <Grid item  sm={1} xs={1} style={{backgroundColor:"#208769",paddingRight:"10px"}}></Grid>
       <Grid item sm={10} xs={10} style={{paddingTop:"10px",paddingBottom:"10px",marginleft:"15px"}}><Typography variant="p" style={{fontWeight:"bold",width:"98%"}}>&nbsp;&nbsp;Create an Account</Typography> </Grid>
      
       </Grid>
       </Paper>
    </Grid>
    </Grid>

            <FirstStep/>
 <form autoComplete='off'>
              <Grid container direction='row' 
              alignItems='center' 
              justify='center'

              sm={12} xm={12} 
              style={{marginTop:"16px",textAlign:"center"}}> 
              
              
               <Grid item sm={7} xs={11}>
               <Paper style={{paddingTop:"16px",paddingBottom:"8px"}}>
               <Typography variant='h5' 
               style={{margin:"16px"}}
               >Personal Information</Typography>
             
                <TextField 
                id="outlined-basic" 
                label="First Name" 
                variant="outlined" 
                  required
                style={{marginBottom:"8px"}}
                onChange={handleChange('fName')}
                defaultValue={values.fName}
                />
                <br/>
                <TextField 
                id="outlined-basic" 
                label="Middle Name" 
                required
                variant="outlined" 
                style={{marginBottom:"8px"}}
                onChange={handleChange('mName')}
                defaultValue={values.mName}
                />
                <br/>
                <TextField 
                id="outlined-basic" 
                label="Last Name" 
                required
                variant="outlined" 
                style={{marginBottom:"8px"}}
                onChange={handleChange('lName')}
                defaultValue={values.lName}
                />
                <br/>
                {/* <TextField 
                id="outlined-basic" 
                label="Suffix" 
                style={{marginBottom:"8px"}}
                variant="outlined" 
                onChange={handleChange('suffix')}
                defaultValue={values.suffix}
                /> */}
         <FormControl variant="outlined" style={{maxWidth:"222px", width:'100%',marginBottom:"8px"}}>
          <InputLabel  >
            Suffix
          </InputLabel>
          <Select
             defaultValue={values.suffix}
          
            onChange={handleChange('suffix')}
          
        
      
  
          >
          
            <MenuItem value="Jr.">Jr.</MenuItem>
            <MenuItem value="Sr.">Sr.</MenuItem>
            <MenuItem value="II">II</MenuItem>
            <MenuItem value="III">III</MenuItem>
            <MenuItem value="IV">IV</MenuItem>
          </Select>
        </FormControl>

        <br/>
                <TextField 
                id="outlined-basic" 
                label="Contact number" 
                variant="outlined" 
                required
               type='number'
                style={{marginBottom:"8px"}}
                onChange={handleChange('contactNo')}
                defaultValue={values.contactNo}
                />

<br/>
                <TextField 
                id="outlined-basic" 
                label="Home Address" 
                variant="outlined" 
                required
                style={{marginBottom:"8px"}}
                onChange={handleChange('address')}
                defaultValue={values.address}
                />
                <br/>
                 <TextField 
                id="outlined-basic" 
                label="Email address" 
                variant="outlined" 
                required
                type='email'
                style={{marginBottom:"8px"}}
                onChange={handleChange('emailAddress')}
                defaultValue={values.emailAddress}
                />
          
                
                </Paper>
                </Grid> 
        
                <Grid item sm={12} xs={12} justify='center' textAlign='center'>
                <Button
                variant='contained'
               
                style={style.button}
                onClick={this.continue}
                >Continue
                </Button>
                </Grid>
               
                </Grid>
                </form>
        
                </React.Fragment>
                <Grid container sm={12} xs={12} style={{marginTop:"16px"}} alignItems='center'><Grid item xs={12} sm={12} style={{textAlign:'center',marginRight:'5px'}}><Typography variant='captiontext' >Have already an account? <Link to='/#/Login'> Login Here</Link></Typography></Grid>  </Grid>
            </div>
        )
    }
}

const style ={
    button:{
        margin:"15px",
        color:"white",
        backgroundColor:"#208769"
    }
} 
export default withRouter(FormUserDetails)
