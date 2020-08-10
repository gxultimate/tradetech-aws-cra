
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {inject,observer} from 'mobx-react'
import img from './../user.png'
import React, { Component, Fragment } from 'react'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
 class SentMsg extends Component {

  componentDidMount(){
    let{staffStore:{getAccounts,getMessage}}=this.props;
   
    getMessage()
}
  
    render() {

      let myAccount = JSON.parse(sessionStorage.getItem('userData'))
let {staffStore:{listOfMessage}}=this.props;





  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    minWidth: 250,
    // maxWidth: 1000,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    // padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



 function SentGrid() {
  const classes = useStyles();


  let sentmsg =listOfMessage.filter(msg=> msg.recipient_ID === myAccount.account_ID || msg.recipient_Name === `${myAccount.account_fName} ${myAccount.account_mName} ${myAccount.account_lName}` || msg.recipient_Name === myAccount.mName || msg.recipient_Name === myAccount.lName).map(sent=>{
    return (
        <Fragment key={sent.message_ID}>
                  <Paper className={classes.paper}>
     
       

        <ListItem alignItems="flex-start" button>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={img} />
        </ListItemAvatar>
        <ListItemText
          primary={sent.message_Subject}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="caption"
                className={classes.inline}
                color="textPrimary"
              >
                {sent.sender_Name}
              </Typography>
              {sent.mesage_Body}
            </React.Fragment>
          }
        >
            
        </ListItemText>
        <ListItemSecondaryAction>
            <Typography edge="end" variant='caption'>{sent.date_Created} </Typography>
            
            </ListItemSecondaryAction>
      </ListItem>
     
        </Paper>
        <Divider />

        </Fragment>
    )
})


  return (
    <div className={classes.root}>
      <Grid container sm={12} xs={12}>
        <Grid item xs={12}>
      
          <List component="nav" aria-label="main mailbox folders">
    {sentmsg}
        
      </List>
   
    


        </Grid>
  
      </Grid>
    </div>
  );
}

return (
    <SentGrid/>
)
}
}

export default inject('staffStore')(observer(SentMsg))