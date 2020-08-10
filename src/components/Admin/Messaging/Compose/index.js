
import { withStyles ,ThemeProvider} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import theme from './../../../theme'
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import {inject,observer} from 'mobx-react'
import moment from 'moment'
import React, { Component } from 'react'

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

 class ComposeMessage extends Component {
    render() {
      let myAccount = JSON.parse(sessionStorage.getItem('userData'))
let {messageStore:{listOfDistributors,message,addMessage,listOfUsers,listOfClogs}}=this.props;


function createData(id,name) {
  return { id,name };
}
// let rows = listOfClogs.filter(logs => logs.distributor_ID === myAccount.distributor_ID).map(acc =>{
//   return (createData(
//     listOfUsers.filter(accc => accc.account_ID === acc.account_ID).map(acID => {return acID}) 
    
//     ))
// })

let rows = listOfUsers.filter(type => type.account_accessType === 'customer').map(acc=> 
  {return (createData( acc.account_ID,`${acc.account_fName} ${acc.account_mName} ${acc.account_lName}`))
})


function getHash(input){
    var hash = 0, len = input.length;
    for (var i = 0; i < len; i++) {
      hash  = ((hash << 5) - hash) + input.charCodeAt(i);
      hash |= 0; // to 32bit integer
    }
  
            
  
    return hash;
  }
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor:'#208769',
    color:'white'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: 'white',
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other} >
      <Typography variant="h6" >{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function ComposeDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  let send =()=>{
  message.setProperty('sender_Name',`${myAccount.distributor_fName} ${myAccount.distributor_mName} ${myAccount.distributor_lName}`)
  message.setProperty('sender_ID',myAccount.distributor_ID)
  message.setProperty('message_Status','unread')
  message.setProperty('date_Created',moment().format('MMM/DD/YY,h:mma'))
  message.setProperty('message_ID',`${getHash(moment().format('MMM'))}${ Math.floor(1000 + Math.random() * 9000)}`)
    addMessage();
  }

  return (
    <div>
        <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" onClick={handleClickOpen} >
        Compose message
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose} >
         <span styles={{color:'white'}}>New Message</span> 
        </DialogTitle>
        <DialogContent dividers>
          <form autoComplete='off'>
            <Grid container  xs={12} sm={12} > 
                <Grid item xs={12} sm={12}> <TextField disabled id="outlined-basic" label="From"  defaultValue={`${myAccount.distributor_fName} ${myAccount.distributor_mName} ${myAccount.distributor_lName}`} variant="outlined" style={{width:'100%',marginBottom:'8px'}}/></Grid>
                <Grid item xs={12} sm={12}> 
                <TextField id="outlined-basic" label="To:(Firstname Middlename Surname)" variant="outlined" style={{width:'100%',marginBottom:'8px'}}
                onChange={recipient_Name=>{message.setProperty("recipient_Name", recipient_Name.target.value)}}
                />
                  {/* <FormControl style={{width:'100%',marginBottom:'8px'}} variant="outlined">
        <InputLabel htmlFor="grouped-native-select">To</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label='To'>
          <option aria-label="None" value="" />
          <optgroup label="Customers">


          {rows.map((row) => (
                 <option value={row.id} key={row.id}>{row.name}</option>
          ))}
          
         
          </optgroup>

        </Select>
      </FormControl> */}
                
                </Grid>
                <Grid item xs={12} sm={12}> <TextField id="outlined-basic" label="Subject" variant="outlined" style={{width:'100%',marginBottom:'8px'}}
                onChange={message_Subject=>{message.setProperty("message_Subject", message_Subject.target.value)}}
                /></Grid>
                <Grid item xs={12} sm={12}> <TextField id="outlined-basic"  label="Message" multiline rows={4} variant="outlined" style={{width:'100%',marginBottom:'8px'}} 
                onChange={message_Body=>{message.setProperty("message_Body", message_Body.target.value)}}
                /></Grid>
       
        </Grid>
        </form>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=>{send()}} color="primary" variant='contained'>
            Send
          </Button>
        </DialogActions>
      </Dialog>
      </ThemeProvider>
    </div>
  );
}

return (
    <ComposeDialogs/>
)
}
}

export default inject('messageStore')(observer(ComposeMessage))