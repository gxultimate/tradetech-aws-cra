import { Typography } from '@material-ui/core';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { inject, observer } from 'mobx-react';
import React from 'react';
import AssignOrder from './addButton';
import AssignedTable from './assignedTable.js';

class Packaging extends React.Component {
  componentDidMount(){

    let {managerStore:{getAccounts,getOrder}}=this.props;
    getAccounts();
    getOrder();

  }
  render() { 
 
    let {managerStore:{listOfUsers}}=this.props;
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

let myID =JSON.parse(sessionStorage.getItem('userData'))


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





let getpacker = listOfUsers.filter(pack => {

  if (myID.staff_Role === 'Packer Manager' && pack.distributor_ID === myID.distributor_ID ){
   if( pack.staff_Role==='Packer'){
      return  pack
    }
  } 
  else if (myID.staff_Role === 'Dispatcher Manager' && pack.distributor_ID === myID.distributor_ID ){
    if( pack.staff_Role==='Dispatcher'){
       return  pack
     }
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
let pa = packer.filter((o)=> {return (o)})

  return (
    <div className={classes.root} style={{height:"470px"}}>
      <Grid container spacing={3} >
        <Grid item sm={12}>
          <Grid container direction="row"> 
          <Grid item xs={6}  >
          <Typography variant="h5" style={{textAlign:"left"}}>Staff List</Typography>
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

export default inject("managerStore")(observer(Packaging));