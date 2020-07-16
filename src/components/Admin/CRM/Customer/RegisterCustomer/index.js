import { Dialog, DialogTitle, Divider, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { inject, observer } from 'mobx-react';
import React from 'react';
import RegistrationForm from './Form.js';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
class addCustomers extends React.Component {
  state = {  }
 

  constructor(props) {
    super(props);
 
  
    this.state = {
        image: '',
        submitted  : false,
       
        snackbaropen:false,
        snackbaropenE:false,
     
        snackbarS:"Account Added!",
        snackbarerror:"Error!",
    }
    this.addCustomer  = this.addCustomer.bind(this);
  
  
  }
  snackbarClose =(event)=>{
    this.setState({snackbaropen:false});
    this.setState({snackbaropenE:false});
  }
addCustomer = (e) => {
  let {startingStore:{addAccount,account}}=this.props;
  let getDisId = JSON.parse(sessionStorage.getItem('userData'))
  account.setProperty("distributor_ID", getDisId.distributor_ID)
  account.setProperty("account_accessType", "customer")
  account.setProperty('account_status','active')
    addAccount().then(res =>{
   if (res != null){
    this.setState({ snackbaropen: true });
   }else{
    this.setState({ snackbaropenE: true });
   }

    })
 
this.setState({submitted: true })

  this.setState({ loading: true });

  setTimeout(() => {
    this.setState({ loading: false, visible: false });
  }, 3000);
};


 RegisterDialog = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  } 
  
  return (
    <div>
      <Snackbar anchorOrigin={{vertical:'top',horizontal:'center'}}    open={this.state.snackbaropen} autoHideDuration={2000} onClose={this.snackbarClose}  >   
       <Alert  severity="success">
       {this.state.snackbarS }
        </Alert></Snackbar>

        <Snackbar anchorOrigin={{vertical:'top',horizontal:'center'}}    open={this.state.snackbaropenE} autoHideDuration={2000} onClose={this.snackbarClose}  >   
       <Alert  severity="error">
       {this.state.snackbarerror }
        </Alert></Snackbar>

      <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{marginTop:"8px",backgroundColor:"#208769",color:"white"}}>
      < AddCircleOutlineOutlinedIcon /> <span style={{marginLeft:"5px"}}> Add Member</span>
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth="md"
      >
       <DialogTitle id="responsive-dialog-title" style={{backgroundColor:"#208769"}}><Typography variant="h5" style={{color:"white"}}>Register Customer</Typography></DialogTitle>
        <Divider/>
        <DialogContent>
         <RegistrationForm/>
        </DialogContent>
        <DialogActions>
          <Divider/>
          <Button autoFocus onClick={() => {this.addCustomer()}} style={{backgroundColor:"#208769",color:"white"}}>
            <span style={{paddingLeft:"8px",paddingRight:"8px"}}>  Submit</span>
            </Button>
    
          <Button onClick={handleClose}  autoFocus style={{backgroundColor:"#F7A31C",color:"white"}}>
          <span style={{paddingLeft:"8px",paddingRight:"8px"}}>  Close</span>
          </Button>
        
        </DialogActions>
      </Dialog>
    </div>
  );
}
render() { 
return (  
  <this.RegisterDialog/>
);
}
}

export default inject("startingStore")(observer(addCustomers));
