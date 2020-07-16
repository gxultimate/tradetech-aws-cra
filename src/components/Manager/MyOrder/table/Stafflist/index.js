import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {inject,observer} from 'mobx-react'
import { Grid } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


class Lists extends React.Component {
    render() {
let {managerStore:{listOfUsers,listOfOrder,assignOrder,order}}=this.props;
let myID =JSON.parse(sessionStorage.getItem('userData'))
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

function SelectedListItem() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [opens, setOpens] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    setOpen(false)
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };


let assign =(staff)=>{
  
if(staff != null){
        if( staff.staff_Role==='Packer'){
          order.setProperty("packer_ID",staff.account_ID)
          
         }

       else 
         if( staff.staff_Role==='Dispatcher'){
          order.setProperty("dispatcher_ID",staff.account_ID)
         }
          assignOrder();
          setOpen(true);
        }else{
            setOpens(true);
        }

}


  let lists = listOfUsers.filter(acc => {
    if (myID.staff_Role === 'Packer Manager' && acc.distributor_ID === myID.distributor_ID ){
        if( acc.staff_Role==='Packer'){
           return  acc
         }
       } 
       else if (myID.staff_Role === 'Dispatcher Manager' && acc.distributor_ID === myID.distributor_ID ){
         if( acc.staff_Role==='Dispatcher'){
            return  acc
          }
        } 
  }).map(mystaff =>{
      let ordnum= listOfOrder.filter(ord=> ord.packer_ID === mystaff.account_ID && ord.orderStatus === 'Packing' || ord.dispatcher_ID === mystaff.account_ID && ord.orderStatus === 'Dispatch').length;
      return(
          <React.Fragment>
              <Grid item xs={12} style={{paddingLeft:'10px',paddingRight:'10px'}}>
        <ListItem
        button
        // selected={selectedIndex === 0}
        // onClick={(event) => handleListItemClick(event, 0)}
        onClick={()=>assign(mystaff)}
      >
<ListItemIcon>
<Badge badgeContent={ordnum} color="secondary">     <AssignmentIcon /></Badge>
          </ListItemIcon>
        <ListItemText >{mystaff.account_fName} {mystaff.account_mName} {mystaff.account_lName}</ListItemText>
      </ListItem>
      <Divider />
      </Grid>
      </React.Fragment>
      )
  })

  return (
    <div className={classes.root}>
        <Snackbar open={open} autoHideDuration={2000}  anchorOrigin={{vertical:'center',horizontal:'center'}}>
        <Alert  severity="success">
        Order Assign Successfully!
        </Alert>
      </Snackbar>

      <Snackbar open={opens} autoHideDuration={2000}  anchorOrigin={{vertical:'center',horizontal:'center'}}>
        <Alert  severity="error">
         Order Assigning Error!
        </Alert>
      </Snackbar>
        <Grid container xs={12}>
      <List component="nav" aria-label="main mailbox folders">
        {/* <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Spam" />
        </ListItem> */}
        {lists}
      </List>
      </Grid>
    </div>
  );
}

return (
   <SelectedListItem/>
)
}
}

export default inject('managerStore')(observer(Lists))