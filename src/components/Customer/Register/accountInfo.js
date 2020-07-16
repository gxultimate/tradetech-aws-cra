import React from 'react';
import clsx from 'clsx';
import {inject,observer} from 'mobx-react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {TextField} from '@material-ui/core'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
// import moment from 'moment';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '100px',
    height:'80px'
  },
}));


class Registration3 extends React.Component {
  state = {  }
  render() { 
//  let {startingStore:{account}}=this.props
 

//  let date = new Date();
//  function getHash(input){
//   var hash = 0, len = input.length;
//   for (var i = 0; i < len; i++) {
//     hash  = ((hash << 5) - hash) + input.charCodeAt(i);
//     hash |= 0; // to 32bit integer
//   }}

function AccountInfo() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root} >


        

 <Paper className={classes.paper}>

     
          <Grid container direction="row" sm={6} xs={12}>
           


{/* <Typography variant="h6" style={{marginBottom:"16px"}}>Account Information</Typography> */}

<Grid item sm={12} xs={12}>
             <TextField
          label="Username"
          id="outlined-size-small"
        //   defaultValue="First Name"
          multiline
          variant="outlined"
          size="small"
          style={{width:"90%",marginBottom:"8px"}}
        />
             </Grid>

             <Grid item sm={12} xs={12}>
             {/* <TextField
          label="Password"
          type="password"
          id="outlined-size-small"
        //   defaultValue="First Name"
          multiline
          variant="outlined"
          size="small"
          style={{width:"90%",marginBottom:"8px"}}
        /> */}
<FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
<OutlinedInput
            id="bootstrap-input"
        
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
          
            onChange={handleChange('password')}
            required="true"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={80}
          />
 </FormControl>
             </Grid>
  

             <Grid item sm={12} xs={12}>
             <TextField
          label="Confirm Password"
          id="outlined-size-small"
          type="password"
        //   defaultValue="First Name"
          multiline
          variant="outlined"
          size="small"
          style={{width:"90%",marginBottom:"8px"}}
        />
             </Grid>

          </Grid>
          </Paper>

    
    </div>
  );
}
return ( 

<AccountInfo/> );
}
}

export default inject("startingStore")(observer(Registration3));