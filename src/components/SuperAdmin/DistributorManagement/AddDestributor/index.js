import { Button, Dialog, Divider, Slide, Typography } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MuiAlert from '@material-ui/lab/Alert';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import RegForm from './Form.js';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  }, 
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});





class AddDistributors extends Component {
  state={}
  render (){
    let {startingStore:{addDistributor,distributor}}=this.props;
    function Alert(props) {
      return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    
 




  


function RegisterDistributor() {


  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openS, setOpenS] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseS = (event, reason) => {
    setOpenS(false);
    if (reason === 'clickaway') {
      return;
    }

    setOpenS(false);
  };

  const handleOk = () => {
     
   
    distributor.setProperty("distributor_status",'active')
 addDistributor();
  setOpen(false);
  setOpenS(true);
// }else{
//   console.log('false')
// }
    //  this.setState({ loading: true });

    //  setTimeout(() => {
    //    this.setState({ loading: false, visible: false });
    //  }, 3000);

     // success();

};

 
  return (
    <div>
      <Snackbar open={openS} autoHideDuration={1500} anchorOrigin={{vertical:'top',horizontal:'center'}} onClose={handleCloseS}>
        <Alert onClose={handleCloseS} severity="success">
          Distributor Successfully Added!
        </Alert>
      </Snackbar>
      <Button variant="outlined"  onClick={handleClickOpen} style={{marginTop:"8px",backgroundColor:"#208769",color:"white"}}>
       < AddCircleOutlineIcon /> <span style={{marginLeft:"5px"}}> Add Distributor</span>
      </Button>
 
      <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title" style={{backgroundColor:"#208769"}}><Typography variant="h5" style={{color:"white"}}>Register Distributor</Typography></DialogTitle>
          <Divider/>
          <DialogContent >
          <RegForm></RegForm>
          </DialogContent>
          <Divider style={{borderTop:"1px solid #7f7f7f"}} />
          <DialogActions>
          <Button autoFocus onClick={()=> {handleOk()}} style={{backgroundColor:"#208769",color:"white"}}>
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
return ( 
       
  <RegisterDistributor/>


 );
}}
export default inject("startingStore")(observer(AddDistributors));