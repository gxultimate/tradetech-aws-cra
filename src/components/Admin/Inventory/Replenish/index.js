import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Slide, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import React from 'react';
import ReplenishForm from './form.js';
import MoveToInboxOutlinedIcon from '@material-ui/icons/MoveToInboxOutlined';



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
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Stock() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
      setOpen(true);
    };

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined"  onClick={handleClickOpen} style={{margin:"8px",backgroundColor:"#208769",color:"white"}}>
      < MoveToInboxOutlinedIcon /> <span style={{marginLeft:"5px"}}> Replenish</span>
      </Button>

       <Dialog
          fullScreen={fullScreen}
          open={open}
          TransitionComponent={Transition}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title" style={{backgroundColor:"#208769"}}><Typography variant="h5" style={{color:"white"}}>Replenish Product</Typography></DialogTitle>
          <Divider/>
          <DialogContent >
          <ReplenishForm
          />
          </DialogContent>
          <DialogActions>
          <Button autoFocus onClick={handleClose} style={{backgroundColor:"#208769",color:"white"}}>
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
