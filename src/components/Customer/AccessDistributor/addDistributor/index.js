import { Dialog, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import { ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import { inject, observer } from 'mobx-react';
import React from 'react';
import theme from './../../../theme';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

class AddStore extends React.Component {

  



    render() {
   
        let myId =JSON.parse(sessionStorage.getItem('userData'))
 let {customerStore:{addMembership,membership,listOfToken,listOfMembership,distributor,listOfDistributors }}=this.props;

 function getHash(input){
    var hash = 0, len = input.length;
    for (var i = 0; i < len; i++) {
      hash  = ((hash << 5) - hash) + input.charCodeAt(i);
      hash |= 0; // to 32bit integer
    }
  
            
  
    return hash;
  }
  let date =new Date();


  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  } 


function FormDialog() {
 
  const [open, setOpen] = React.useState(false);
  const [Sopen, SsetOpen] = React.useState(false);
  const [Scopen, ScsetOpen] = React.useState(false);
  const [Mopen, MsetOpen] = React.useState(false);
  const [tknn, settknn] = React.useState("");
  const [dialog,setDialog] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  const submit = () => {
let getID = listOfToken.filter(id => id.access_Token === tknn).map(tkn => tkn.distributor_ID)
 console.log(getID[0],'idd')
    let getTermsCon = listOfDistributors.filter(dist => dist.distributor_ID === getID[0]).map(data => data.termsCondition)
    distributor.setProperty("termsCondition",getTermsCon)


    setDialog(true);


   

    
  
  
     
  };

  let  snackbarClose =(event)=>{
    SsetOpen(false);
    MsetOpen(false);
    ScsetOpen(false);
    setDialog(false);
  }

 

  let agreeDialog = ()=>{
    setDialog(false);
    let filtkn = listOfToken.filter(tkns => tkns.access_Token === tknn).length;
  let filmember =listOfMembership.filter(memb => memb.account_ID === myId.account_ID && memb.access_Token === tknn).length;
    
   
 
 

    if (filtkn != 0 && filmember === 0){
      let disID = listOfToken.filter(tkns => tkns.access_Token === tknn).map( dis=>{
        return dis.distributor_ID}
  
      );
      let disWH = listOfToken.filter(tkns => tkns.access_Token === tknn).map( dis=>{
        return dis.distributor_wHouse
      });

      membership.setProperty('access_Token',tknn)
      membership.setProperty('distributor_ID',disID[0])
      membership.setProperty('distributor_wHouse',disWH[0])
      membership.setProperty('membership_ID',`${disID[0]}-${ Math.floor(1000 + Math.random() * 9000)}`)
      membership.setProperty('account_ID',myId.account_ID)
      addMembership();
      setTimeout(()=>{
       
        ScsetOpen(true);
      },500)
     
    }else if (filmember !=0){
     
      MsetOpen(true);
    }else{
   
      SsetOpen(true);
    }
 
  }


  return (
    <div>
      <Snackbar anchorOrigin={{vertical:'center',horizontal:'center'}}    open={Sopen} autoHideDuration={2000} onClose={snackbarClose}    >   
    <Alert  severity="error">
    Incorrect access code!
      </Alert></Snackbar>

      <Snackbar anchorOrigin={{vertical:'center',horizontal:'center'}}    open={Mopen} autoHideDuration={2000} onClose={snackbarClose}   >   
    <Alert  severity="warning">
    Already a Member!
      </Alert></Snackbar>
      <Snackbar anchorOrigin={{vertical:'center',horizontal:'center'}}    open={Scopen} autoHideDuration={2000} onClose={snackbarClose}    >   
    <Alert  severity="success">
    Distributor added!
      </Alert></Snackbar>

        <ThemeProvider theme={theme}>
          
        <Tooltip title="Add Distributor"  aria-label="add" TransitionComponent={Zoom} placement="left">
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" style={{backgroundColor:"#208769"}} ><Typography style={{color:"white"}}>Add Store</Typography> </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the access token here.
          </DialogContentText>
          <form autoComplete='off'>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Access Token"
         
            fullWidth
            
            onChange={(e)=>settknn(e.target.value)}
          />
          </form>
        </DialogContent>
        <DialogActions>
        <Button onClick={submit} color="primary" variant='contained'>
            Submit
          </Button>
          <Button onClick={handleClose} color="secondary" variant='contained' style={{color:"white"}}>
            Cancel
          </Button>
     
        </DialogActions>
      </Dialog>



    
   <Dialog
        open={dialog}
        onClose={()=>snackbarClose()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{backgroundColor:"#208769"}}><Typography style={{color:"white"}}>Our Terms and Condition</Typography></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {distributor.termsCondition}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        
          <Button onClick={()=>agreeDialog()} color="primary" variant='contained' autoFocus>
            Agree
          </Button>
          <Button onClick={()=>snackbarClose()} color="secondary" variant='contained' style={{color:"white"}}>
            Disagree
          </Button>
        </DialogActions>
      </Dialog>


      </ThemeProvider>
    </div>
  );
}

return (
<FormDialog/>
)
}
}

export default inject('customerStore')(observer(AddStore))