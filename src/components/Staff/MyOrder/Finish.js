import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { inject, observer } from 'mobx-react';
import moment from 'moment';
import React from 'react';

class Done extends React.Component {
 
  
  constructor(props){

    
    super(props)
    this.state = {
      listOfOrder : [],
      
    }
  }
  render() { 
    let acID =JSON.parse(sessionStorage.getItem('userData'))
    let date = new Date();
    function getHash(input){
      var hash = 0, len = input.length;
      for (var i = 0; i < len; i++) {
        hash  = ((hash << 5) - hash) + input.charCodeAt(i);
        hash |= 0; // to 32bit integer
      }

      return hash;
    }
    let {staffStore:{assignOrder,order,addNotif,notif}}=this.props;
    const assign =() =>{
     

      if(this.props.status ==='Packing'){
         order.setProperty("orderID",this.props.orderid)
      order.setProperty("orderStatus",'Transfer')
      order.setProperty("orderDateCompleted",moment().format('MMM/DD/YYYY,h:mm:ssa'))
      notif.setProperty('notif_ID',`${getHash(date.getHours())}-${ Math.floor(1000 + Math.random() * 9000)}`)
      notif.setProperty('sender_ID',acID.account_ID)
      notif.setProperty('account_ID',this.props.accountid)
      notif.setProperty('distributor_ID',acID.distributor_ID)
      notif.setProperty("order_ID",this.props.orderid)
      notif.setProperty('notif_subject','Order Process')
      notif.setProperty('notif_description',`Packing of order ${this.props.orderid} is finished`)
      notif.setProperty('notif_date',moment().format('MMM/DD/YYYY,h:mm:ssa'))
      notif.setProperty('notif_status','unread')


      setTimeout(()=>{
      assignOrder();
      addNotif();
    },500)
      }else {
        order.setProperty("orderID",this.props.orderid)
        order.setProperty("orderStatus",'Completed')
       
        order.setProperty("orderDateCompleted",moment().format('MMM/DD/YYYY,h:mm:ssa'))
        
     
        notif.setProperty('notif_ID',`${getHash(date.getHours())}-${ Math.floor(1000 + Math.random() * 9000)}`)
        notif.setProperty('account_ID',this.props.accountid)
        notif.setProperty('sender_ID',acID.account_ID)
        notif.setProperty('distributor_ID',acID.distributor_ID)
        notif.setProperty("order_ID",this.props.orderid)
        notif.setProperty('notif_subject','Order Process')
        notif.setProperty('notif_description',`Delivery of order ${this.props.orderid} is finished`)
        notif.setProperty('notif_date',moment().format('MMM/DD/YYYY,h:mm:ssa'))
        notif.setProperty('notif_status','unread')

        setTimeout(()=>{
          assignOrder();
          addNotif();
        },500)
      
      }
   
    }
    let tAmount = this.props.total;
    let ordStat = this.props.status;
function Finish() {
  const [open, setOpen] = React.useState(false);
  const [openP, setOpenP] = React.useState(false);
 

  const [bal,setbal] = React.useState(0);
  // const [txtval,setval] = React.useState();
  // let[reff,inputRef] = React.createRef();

  const handleClickOpen = () => {
    if(ordStat ==='Packing'){
    setOpenP(true);
  }else{
    setOpen(true);
  }
  };

  const handleClose = () => {
    setOpen(false);
    setOpenP(false);
  };




  return (
    <div>
      <Button variant="outlined" style={{backgroundColor:"#208769",color:"white"}} size='small' onClick={handleClickOpen}>
        Done
      </Button>

      <Dialog
      
      open={openP}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title" style={{backgroundColor:"#208769"}}><span style={{color:"white"}}>Confirmation</span></DialogTitle>
      <DialogContent>
        <DialogContentText>
         Packing of items is finished!
        </DialogContentText>

      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} size='small' style={{backgroundColor:"#F7A31C",color:"white"}}>
          Cancel
        </Button>
        <Button onClick={()=>{assign()}} size='small' style={{backgroundColor:"#208769",color:"white"}} autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>





      <Dialog
      
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" style={{backgroundColor:"#208769"}}><span style={{color:"white"}}>Confirmation</span></DialogTitle>
        <DialogContent>
          <DialogContentText>
           Amount Due: &#8369;{tAmount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
          </DialogContentText>
   
          <TextField
            autoFocus
            
            margin="dense"
            id="payment"
            defaultValue={tAmount}
            // inputRef={ref => { this.tAmount = ref; }}
            inputRef={ref => { order.setProperty("order_totalPayment", tAmount) 
            setbal(Number(tAmount) - Number(tAmount));
            order.setProperty("orderCustomerBalance",Number(tAmount) - Number(tAmount))
            if (Number(tAmount) - Number(tAmount) === 0){
              order.setProperty("paymentStatus",'Fully paid')
              }else{
                order.setProperty("paymentStatus",'Partially paid')
              }
          }}
            // value={tAmount}
            label="Enter Payment"
           
            fullWidth
            onChange={order_totalPayment=>{order.setProperty("order_totalPayment", order_totalPayment.target.value)
                   setbal(Number(tAmount) - Number(order_totalPayment.target.value));
                    order.setProperty("orderCustomerBalance",Number(tAmount) - Number(order_totalPayment.target.value))
                    if (Number(tAmount) - Number(order_totalPayment.target.value) === 0){
                    order.setProperty("paymentStatus",'Fully paid')
                    }else{
                      order.setProperty("paymentStatus",'Partially paid')
                    }
          }}
          />

<TextField
          
            margin="dense"
            id="payment"
            defaultValue={Number(bal)}
            value={Number(bal)}
            label="balance"
            type="number"
          InputLabelProps={{
            shrink: true,
          }}
            
            fullWidth
      
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} size='small' style={{backgroundColor:"#F7A31C",color:"white"}}>
            Cancel
          </Button>
          <Button onClick={()=>{assign()}} size='small' style={{backgroundColor:"#208769",color:"white"}} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>



    </div>
  );
}


return ( 
  <Finish/>
 );
}
}

export default inject("staffStore")(observer(Done));
