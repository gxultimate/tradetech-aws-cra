import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {Grid,TextareaAutosize,Typography,Checkbox} from '@material-ui/core';
import {inject,observer} from 'mobx-react'
import moment from 'moment'
class Reports extends React.Component {
  state = {  }

  
  render() { 
  
    let {staffStore:{addReport,report,assignOrder,order,notif,addNotif}}=this.props

let myId = JSON.parse(sessionStorage.getItem('userData'))

   let selectedOrder =this.props.orderid;
   let dis =this.props.dis

 function Report() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    order.setProperty('orderID',selectedOrder)
    order.setProperty('orderStatus','Failed')
    report.setProperty("order_ID",selectedOrder)
    report.setProperty("report_ID",`${getHash(date.getFullYear())}-${ Math.floor(1000 + Math.random() * 9000)}`)
    report.setProperty("account_ID",myId.account_ID)
    report.setProperty("distributor_ID",dis)
    report.setProperty("report_Detail","Low Stock")
    
    report.setProperty("report_Date",moment().format('MMM/DD/YYYY,h:mm:ssa'))
    report.setProperty("report_Status",'Pending')
    report.setProperty('report_Type','Order Report')
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function getHash(input){
    var hash = 0, len = input.length;
    for (var i = 0; i < len; i++) {
      hash  = ((hash << 5) - hash) + input.charCodeAt(i);
      hash |= 0; // to 32bit integer
    }
  
            
  
    return hash;
  }
let date = new Date();
const submit =() =>{
  
  notif.setProperty('notif_ID',`${getHash(date.getHours())}-${ Math.floor(1000 + Math.random() * 9000)}`)
  notif.setProperty('account_ID',myId.account_ID)
  notif.setProperty('distributor_ID',myId.distributor_ID)
  notif.setProperty('notif_subject','Order Process')
  notif.setProperty('notif_description',`Order ${selectedOrder} has been reported`)
  notif.setProperty('notif_date',moment().format('MMM/DD/YYYY,h:mm:ssa'))
  notif.setProperty('notif_status','unread')

  addReport();
  assignOrder();
  addNotif();
  setTimeout(()=>{
    setOpen(false);
  },500)
 
}
  return (
    <div>
      <Button variant="outlined" style={{backgroundColor:"#F7A31C",color:"white"}} size='small' onClick={handleClickOpen}>
        Report
      </Button>
      <Dialog
      
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{""}</DialogTitle>
        <DialogContent>
          <DialogContentText>
        <Grid container sm={12} xs={12} >
        <Grid item xs={12} sm={12} style={{textAlign:"left"}}> <Typography variant="h6">Reason: </Typography> </Grid>
        <Grid item sm={6} xs={6}>
              <Checkbox/> Low Stock
                </Grid>
                <Grid item sm={6} xs={6}>
              <Checkbox/> Reason 2
                </Grid>
                
        </Grid>
              <Grid container sm={12} xs={12}>
            
                <Typography variant="h6">Add Note : </Typography>
                  <Grid item sm={12} xs={12} >
          <TextareaAutosize aria-label="minimum height" rowsMin={7} style={{width:"100%"}} 
          onChange={report_Note=>{
            report.setProperty("report_Note",report_Note.target.value)
          }}
          
          />
          </Grid>
          </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} size='small' style={{backgroundColor:"#F7A31C",color:"white"}}>
            Close
          </Button>
          <Button onClick={submit} size='small' style={{backgroundColor:"#208769",color:"white"}} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

return ( 
  <Report/>
 );
}
}

export default inject("staffStore")(observer(Reports));