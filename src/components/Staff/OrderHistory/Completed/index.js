import React from 'react';
import { withStyles, makeStyles,ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import {Button,TableRow} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import {inject,observer} from 'mobx-react'
import theme from './../../../theme'


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Details from './Details'
import useMediaQuery from '@material-ui/core/useMediaQuery';


class CompletedTable extends React.Component {
    state = {  }

    componentDidMount(){
        let{staffStore:{getOrder}}=this.props;
        getOrder();

    }
    render() { 





const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#208769",
    color: theme.palette.common.white,
    padding:"0px"
  },
  body: {
    fontSize: 12,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(ref, date, action) {
  return { ref, date, action };
}
let {staffStore:{listOfOrder,order,getOrderD}}=this.props;
let myId =JSON.parse(sessionStorage.getItem('userData'))
let filterComplete =listOfOrder.filter(order => {
   if(order.orderStatus === 'Completed' && order.dispatcher_ID === myId.account_ID || order.orderStatus != 'Pending' && order.packer_ID === myId.account_ID ) {
       return order
   }

} )




const useStyles = makeStyles({
  table: {
    width: '100%',
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

 function Completed() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  


  const handleClickOpen = (ord) => {
   
    setOpen(true);
    order.setProperty('orderID',ord.orderID)
    order.setProperty('orderItems',ord.orderItems)
    order.setProperty('order_Quantity',ord.order_Quantity)
    order.setProperty('modeOfPayment',ord.modeOfPayment)
    order.setProperty('orderDate',ord.orderDate)
    order.setProperty('orderStatus',ord.orderStatus)
    order.setProperty('paymentStatus',ord.paymentStatus)
    order.setProperty('account_ID',ord.account_ID)
    order.setProperty('distributor_ID',ord.distributor_ID)
    order.setProperty('packer_ID',ord.packer_ID)
    order.setProperty('dispatcher_ID',ord.dispatcher_ID)
    order.setProperty('order_addedInfo',ord.order_addedInfo)
    order.setProperty('orderTotalAmount',ord.orderTotalAmount)
    // getOrderD();
   
  };

  const handleClose = () => {
    setOpen(false);
  };

  let rows = filterComplete.map(order => {
    return(createData(
        order.orderID,order.orderDate,<div><ThemeProvider theme={theme}> <Button size='small' variant="outlined" color="primary"  
        onClick={()=>{handleClickOpen(order)}}>
        Details
      </Button></ThemeProvider></div>
    ))
    })

  return (
    <React.Fragment>
 <Dialog
        open={open}
        // fullScreen={fullScreen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle> */}
        <DialogContent>
         <Details />
        </DialogContent>
        <DialogActions>
        
          <ThemeProvider theme={theme}>
          <Button onClick={handleClose} color="secondary" variant="contained">
            Close
          </Button>
          </ThemeProvider>
        </DialogActions>
      </Dialog>

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Ref #</StyledTableCell>
            <StyledTableCell align="left">Date</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.ref}>
              <StyledTableCell component="th" scope="row" align="left">
                {row.ref}
              </StyledTableCell>
              <StyledTableCell align="left">{row.date}</StyledTableCell>
              <StyledTableCell align="center">{row.action}</StyledTableCell>
    
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </React.Fragment>
  );
}


return ( 
    <Completed/>
 );
}
}

export default inject('staffStore')(observer(CompletedTable));
