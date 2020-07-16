import React from 'react';
import Button from '@material-ui/core/Button';
import {Grid,Dialog} from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import OrderTable from './orderTable.js'
import {inject,observer} from 'mobx-react'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

class AddOrder extends React.Component {
    componentDidMount(){
      let {managerStore:{getOrder}}=this.props;
      getOrder()
    }
    render() { 
let id=this.props.accountId;
 function AddOrders() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
           <Grid container xs={12} sm={12}>
       <Grid item xs={12} sm={12} style={{textAlign:"right"}}>
       
       <Button variant="outlined" size='small' style={{backgroundColor:"#208769",color:"white"}} onClick={handleClickOpen} startIcon={ 
       <AddCircleOutlineOutlinedIcon />
        }>
        Add
      </Button>
     
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth="xl"
      >
        <DialogTitle id="responsive-dialog-title">{"Orders to be Assign"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
           <OrderTable id={id} />
          

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose} color="primary">
            Disagree
          </Button> */}
          <Button onClick={handleClose} style={{backgroundColor:"#FFA500",color:"white"}} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>


       </Grid>
  
       
        </Grid>
    </div>
  );
}

return ( 
    <AddOrders/>
 );
}
}

export default inject('managerStore')(observer(AddOrder));