import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Track from './../Track'

class TrackBtn extends React.Component {
    state = {  }
    render() { 
       let Id= this.props.myorderID

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

 function DialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
         <Button variant="outlined" color="primary" size='small' style={{marginRight:"8px"}} startIcon={<MyLocationIcon/>} onClick={handleClickOpen}>
  Track 
</Button>
<Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title" style={{backgroundColor:"#208769"}} variant=''><span style={{color:'white'}}>Track My Order</span></DialogTitle>
        <DialogContent>
         <Track orderId ={Id}/>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose} color="secondary" style={{color:"white"}} variant='contained'  size='small'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
return ( 
    <DialogSlide/>
 );
}
}

export default TrackBtn;
