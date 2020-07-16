import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {inject,observer} from 'mobx-react'

class Track extends React.Component {
    state = {  }
   
    render() { 
        let {customerStore:{listOfOrder}}=this.props;

        let filOrder = listOfOrder.filter(order => {
            if(order.orderID === this.props.orderId){
                return order
            }
        })

        let track = filOrder.map(thisorder =>{
            return(thisorder.orderStatus)
        })
      let val =()=>{
         if (track == 'Pending' || track == 'Packing' || track == 'Transfer'){
           return 0;
         }else if(track == 'Dispatch'){
           return 1;
         }
         else if(track == 'Completed'){
           return 2;
         }else{
           return 3;
         }
       }
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Processing','Out for Delivery', 'Done'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Preparing your order.`;
    case 1:
      return 'Your order is on its way!';
    case 2:
      return `Thank you for shopping at TradeTech!`;
     
    default:
      return 'Your order Has Been Placed!';
  }
}


 function Tracker() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(val);
  const steps = getSteps();

 


  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
              
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Order Completed</Typography>
         
        </Paper>
      )}
    </div>
  );
}
return ( 
    <Tracker/>
 );
}
}

export default inject('customerStore')(observer(Track));
