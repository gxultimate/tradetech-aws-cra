
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import clsx from 'clsx';
import { inject, observer } from 'mobx-react';
import React from 'react';
import DeliveryGrid from './Delivery';
import PackGrid from './Packing';
import TransferGrid from './Transfer';
import { Grid } from '@material-ui/core';







 class Stepsss extends React.Component {

componentWillMount(){
let {orderStore:{getOrder}}=this.props;
getOrder();
}
  render() {
    let {orderStore:{listOfOrder}}=this.props;

    let packing = listOfOrder.filter(ord => ord.orderStatus === 'Packing').length;
    let transfer = listOfOrder.filter(ord => ord.orderStatus === 'Transfer').length;
    let dispatch = listOfOrder.filter(ord => ord.orderStatus === 'Dispatch').length;


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
 
    minWidth:1200
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));





function getSteps() {
  return ['Packing', 'Transfer', 'Delivery'];
}

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient(90deg, rgba(32,135,105,1) 0%, rgba(255,165,0,1) 99%, rgba(252,176,69,1) 100%);',
    boxShadow: '0 4px 10px 0 rgb(32,135,105)',
  },
  completed: {
    backgroundImage:
      'linear-gradient(90deg, rgba(32,135,105,1) 0%, rgba(255,165,0,1) 99%, rgba(252,176,69,1) 100%);',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1:   <Badge badgeContent={packing} color="secondary">
    <ArchiveOutlinedIcon /> 
  </Badge>,
    2: <Badge badgeContent={transfer} color="secondary"><  TransferWithinAStationIcon/></Badge> ,
    3:<Badge badgeContent={dispatch} color="secondary"> < EmojiTransportationIcon/></Badge> ,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}


function getStepContent(step) {
  switch (step) {
    case 0:
      return <PackGrid/>;
    case 1:
      return < TransferGrid />;
    case 2:
      return <  DeliveryGrid/>;
    default:
      return 'Unknown step';
  }
}

function ProcessPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };



  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };



 

  const handleStep = (step) => () => {
    setActiveStep(step);
  };


  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <React.Fragment >
      <div  className={classes.root}>
      <Grid container direction='row' lg={12} sm={12} xs={12}>
    <Grid item  sm={12} xs={12}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
          
            <StepButton onClick={handleStep(index)} completed={completed[index]}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      </Grid>
     
          <Grid item  sm={12} xs={12}>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
     
          </Grid>
          </Grid>
  
          </div>
    </React.Fragment>
  );
}
return (
  <ProcessPage/>
)
}
}

export default inject('orderStore')(observer(Stepsss))