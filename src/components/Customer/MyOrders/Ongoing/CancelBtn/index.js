import { Dialog, Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CancelIcon from '@material-ui/icons/Cancel';
import { inject, observer } from 'mobx-react';
import moment from 'moment';
import React from 'react';
import Cancel from './../Cancel';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
class TrackBtn extends React.Component {
    state = {  }
    // componentDidMount(){
    //   let {customerStore:{getOrder,order}}=this.props;
    //   // getOrder();
    // }
    render() { 
      let {customerStore:{addReport,report,assignOrder,order}}=this.props;
     
let myID = JSON.parse(sessionStorage.getItem('userData'))
let distID = JSON.parse(sessionStorage.getItem('distData'))
function getHash(input){
  var hash = 0, len = input.length;
  for (var i = 0; i < len; i++) {
    hash  = ((hash << 5) - hash) + input.charCodeAt(i);
    hash |= 0; // to 32bit integer
  }

          

  return hash;
}
let date = new Date();

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

let selectedOrder = this.props.myorderID;
let orderStas = this.props.stats;
 function DialogSlide() {
  const [open, setOpen] = React.useState(false);
  const [btn,setbtn] =React.useState(false);
  const [opens, setOpens] = React.useState(false);

  const handleClickOpen = () => {
    order.setProperty('orderID',selectedOrder)
    order.setProperty('orderStatus','Failed')
    order.setProperty('orderReturnDate',moment().format('MMM/DD/YYYY,hh:mm:ssa'))

    report.setProperty('report_ID',`${getHash(date.getFullYear())}-${ Math.floor(1000 + Math.random() * 9000)}`)
    report.setProperty('order_ID',selectedOrder)
 
    report.setProperty('distributor_ID',distID.distributor_ID)
    report.setProperty('account_ID',myID.account_ID)
    report.setProperty('report_Date',moment().format('MMM/DD/YYYY,hh:mm:ssa'))
    report.setProperty('report_Status','Pending')
    report.setProperty('report_Type','Order Report')
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpens(false);
  };

  let cancelOrd =()=>{

    if(orderStas === 'Transfer' || orderStas === 'Dispatch'){
      setOpen(false);
      setOpens(true);
    }else{
    assignOrder();
    addReport()
  }
  }
  return (
    <div>

<Snackbar  onClose={handleClose} open={opens} autoHideDuration={2000}  anchorOrigin={{vertical:'center',horizontal:'center'}}>
        <Alert  severity="error">
          Cancellation of order has been disabled!
        </Alert>
      </Snackbar>


         <Button variant="outlined" disabled={btn} color="secondary" size='small' style={{marginRight:"8px"}} startIcon={<CancelIcon/>} onClick={handleClickOpen}>
 Cancel
</Button>
<Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title" style={{backgroundColor:"#208769"}}><span style={{color:"white"}}>Cancelling Order...</span></DialogTitle>
        <Divider/>
        <DialogContent>
        <Cancel/>
        </DialogContent>
        <DialogActions>
        <Button onClick={()=>cancelOrd()} color="primary" style={{color:"white"}} variant='contained' size='small'>
            Submit
          </Button>
          <Button onClick={handleClose} color="secondary" style={{color:"white"}} variant='contained'  size='small'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
return ( 
    <DialogSlide/>
 );
}
}

export default inject('customerStore')(observer(TrackBtn));
