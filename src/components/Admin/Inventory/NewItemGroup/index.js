import { Button, Dialog, Divider,  Typography } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {  useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import AddProductForm from './Form.js';
import PlaylistAddOutlinedIcon from '@material-ui/icons/PlaylistAddOutlined';


class addItemGroup extends Component{
  constructor(props) {
    super(props);
 
  
    this.state = {
        image: '',
        submitted  : false
    }
    this.addProd  = this.addProd.bind(this);
    this.uploadRef = React.createRef()
  
  }


  addProd = (e) => {
    this.setState({submitted: true })

    this.setState({ loading: true });
    let {startingStore:{product}}=this.props;

    // addProductImg();
    let getDisId = JSON.parse(sessionStorage.getItem('userData'))
    product.setProperty("distributor_ID", getDisId.distributor_ID)

  };

   AddItemGroupBtn = () => {

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
   
            <Button variant="outlined" size='small' onClick={handleClickOpen} style={{margin:"8px",backgroundColor:"#208769",color:"white"}}>
            <PlaylistAddOutlinedIcon/> <span style={{marginLeft:"5px"}}>Add Item Group</span> 
        </Button>

        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title" style={{backgroundColor:"#208769"}}><Typography variant="h5" style={{color:"white"}}>Add Item Group</Typography></DialogTitle>
          <Divider/>
          <DialogContent >
      <AddProductForm submitted={this.state.submitted}  />
          </DialogContent>
          <DialogActions>
          <Button autoFocus onClick={() => {this.addProd()}} style={{backgroundColor:"#208769",color:"white"}}>
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







  
render(){




return(

 <this.AddItemGroupBtn></this.AddItemGroupBtn>


);
}
}
export default inject("startingStore")(observer(addItemGroup));