import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import {inject,observer} from 'mobx-react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

import OrderTable from './orderTable.js'
import AssignedTable from './assignedTable.js'
import AssignOrder from './addButton'
class Packaging extends React.Component {
  state = {  }


  componentDidMount(){

    let {startingStore:{getAccounts,getOrder}}=this.props;
    getAccounts();
    getOrder();

  }
  render() { 
 
    let {startingStore:{listOfUsers}}=this.props;
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

 function DeliveryGrid() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


let myID =JSON.parse(sessionStorage.getItem('userData'))


let getpacker = listOfUsers.filter(pack => {

  if (pack.staff_Role === 'Packer' && pack.distributor_ID === myID.distributor_ID){
    return pack
  }

})

let packer = getpacker.map(mypacker => {
return(
  <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
  <ExpansionPanelSummary  expandIcon={<ExpandMoreIcon />} aria-controls="panel1d-content" id="panel1d-header">
    <Typography>{mypacker.account_fName} {mypacker.account_mName} {mypacker.account_lName} </Typography>
  </ExpansionPanelSummary>
  <ExpansionPanelDetails>
     <Grid container xs={12} sm={12}>
       <Grid item xs={6} sm={6}>
         <Typography variant='subtitle1'>Currently Assigned Orders</Typography>
       </Grid>
       <Grid item xs={6} sm={6} style={{textAlign:"right"}}>
       {/* <Button variant="outlined" size='small' style={{backgroundColor:"#208769",color:"white"}} onClick={handleClickOpen} startIcon={<AddCircleOutlineOutlinedIcon />}>
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
           <OrderTable myId={mypacker.account_ID}/>
          

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose} color="primary">
            Disagree
          </Button> 
          <Button onClick={handleClose} style={{backgroundColor:"#FFA500",color:"white"}} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog> */}

<AssignOrder accountId={mypacker.account_ID}/>
       </Grid>
       
       <Grid item xs={12} sm={12} style={{marginTop:"16px"}}>

<AssignedTable myId={mypacker.account_ID}/>
       </Grid>
       
        </Grid>
  </ExpansionPanelDetails>
</ExpansionPanel>
)
})









  return (
    <div className={classes.root} style={{height:"470px"}}>
      <Grid container spacing={3} >
        <Grid item sm={12}>
          <Grid container direction="row"> 
          <Grid item xs={6}  >
          <Typography variant="h5" style={{textAlign:"left"}}>Assign Packer</Typography>
          </Grid>
      
          </Grid>
        </Grid>
        <Grid item xs={12}>
        <div>
{packer}
      
    </div>
        </Grid>

      </Grid>


      
    </div>
  );
}




return ( 
  <DeliveryGrid/>
 );
}
}

export default inject("startingStore")(observer(Packaging));