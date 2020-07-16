// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
// import Typography from '@material-ui/core/Typography';
// import { inject, observer } from 'mobx-react';
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// import AddProductForm from './Form.js';


// class AddProduct extends React.Component {
//   render() {
// let {inventoryStore:{addProduct}}=this.props;


// const styles = (theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(2),
//   },
//   closeButton: {
//     position: 'absolute',
//     right: theme.spacing(1),
//     top: theme.spacing(1),
//     color: theme.palette.grey[500],
//   },
// });

// const DialogTitle = withStyles(styles)((props) => {
//   const { children, classes, onClose, ...other } = props;
//   return (
//     <MuiDialogTitle disableTypography className={classes.root} {...other}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });

// const DialogContent = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2),
//   },
// }))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);

// function AddProd() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };




// let addProd  =()=>{

// }



//   return (
//     <div>
//            <Button variant="outlined" size='small'  onClick={handleClickOpen} style={{margin:"8px",backgroundColor:"#208769",color:"white"}}>
//            <AddCircleOutlineIcon/> <span style={{marginLeft:"5px"}}>Add</span> 
//        </Button>
//       <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
//       <DialogTitle id="responsive-dialog-title" style={{backgroundColor:"#208769"}}><Typography variant="h5" style={{color:"white"}}>Add New Product</Typography></DialogTitle>
//         <DialogContent dividers>
//          <AddProductForm/>
//         </DialogContent>
//         <DialogActions>
//         <Button autoFocus onClick={() => {addProd()}} style={{backgroundColor:"#208769",color:"white"}}>
//             <span style={{paddingLeft:"8px",paddingRight:"8px"}}>  Submit</span>
//            </Button>
      
//              <Button onClick={handleClose}  autoFocus style={{backgroundColor:"#F7A31C",color:"white"}}>
//              <span style={{paddingLeft:"8px",paddingRight:"8px"}}>  Close</span>
//              </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

// return (
// <AddProd/>
// )
// }
// }

// export default inject('inventoryStore')(observer(AddProduct))





import { Button, Dialog, Divider, Slide, Typography } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import AddProductForm from './Form.js';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
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



class addProducts extends Component{
  constructor(props) {
    super(props);
 
  
    this.state = {
        image: '',
        submitted  : false,
       
        snackbaropen:false,
        snackbarmessage:"Product Successfully Added!",
    }
    this.addProd  = this.addProd.bind(this);
    this.uploadRef = React.createRef()
  
  }

  snackbarClose =(event)=>{
    this.setState({snackbaropen:false});
  }

  addProd = (e) => {
    this.setState({submitted: true })

    this.setState({ loading: true });
    let {startingStore:{product}}=this.props;


    let getDisId = JSON.parse(sessionStorage.getItem('userData'))
    product.setProperty("distributor_ID", getDisId.distributor_ID)
    product.setProperty("product_Status", 'active')

  setTimeout(()=>{

 
      this.setState({ snackbaropen: true });

    },1500)
 
   
     
    
  };

   AddButton = () => {
    const classes = useStyles();
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
       <Snackbar anchorOrigin={{vertical:'top',horizontal:'center'}}  open={this.state.snackbaropen} autoHideDuration={3000} onClose={this.snackbarClose}  >   
       <Alert  severity="success">
       {this.state.snackbarmessage }
        </Alert></Snackbar>
    
            <Button variant="outlined" size='small'  onClick={handleClickOpen} style={{margin:"8px",backgroundColor:"#208769",color:"white"}}>
            <AddCircleOutlineIcon/> <span style={{marginLeft:"5px"}}>Add Item</span> 
        </Button>

        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title" style={{backgroundColor:"#208769"}}><Typography variant="h5" style={{color:"white"}}>Add New Product</Typography></DialogTitle>
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

 <this.AddButton></this.AddButton>


);
}
}
export default inject("startingStore")(observer(addProducts));