import { Stepper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepConnector from '@material-ui/core/StepConnector';
import StepLabel from '@material-ui/core/StepLabel';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Check from '@material-ui/icons/Check';
import PhonelinkLockOutlinedIcon from '@material-ui/icons/PhonelinkLockOutlined';
import NavigateBeforeOutlinedIcon from '@material-ui/icons/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';
import PersonPinOutlinedIcon from '@material-ui/icons/PersonPinOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import clsx from 'clsx';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import React from 'react';
import Register from './../Register';
import AccountInfo from './../Register/accountInfo.js';
import ShopDetails from './../Register/shopDetails.js';
class RegStepper extends React.Component {
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      fname:'',
  //      mname:'',
  //      sname:'',
  //      suffix:'',
  //      address:'',
  //      contactNo:'',
  //   }
  // }

  state ={
    step :1,
    fName:'',
    mName:'',
    lname:'',
    suffix:'',
    address:'',
    contactNo:'',

  }

  nextStep =()=>{
    const {step}=this.state;
  }
  

  componentDidMount(){
    let {startingStore:{account}}=this.props;

  }

  render() { 


const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient(90deg, rgba(32,135,105,1) 0%, rgba(255,165,0,1) 99%, rgba(252,176,69,1) 100%);',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient(90deg, rgba(32,135,105,1) 0%, rgba(255,165,0,1) 99%, rgba(252,176,69,1) 100%);',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

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
    1: <PersonPinOutlinedIcon />,
    2: <StorefrontOutlinedIcon />,
    3: <PhonelinkLockOutlinedIcon />,
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

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
    marginTop:"14px"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Personal Info', 'Store Details', 'Account Info'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Register personal="hello"/> ;
    case 1:
      return <ShopDetails/>;
    case 2:
      return <AccountInfo/>;
    default:
      return 'Unknown step';
  }
}

 function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>


      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div style={{textAlign:"center"}}>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div >
              <Button variant="contained"  disabled={activeStep === 0} onClick={handleBack} className={classes.button} style={{backgroundColor:"#FFA500",color:"white"}} startIcon={<NavigateBeforeOutlinedIcon/>}>
                Back
              </Button>
              <Button
                variant="contained"
                style={{backgroundColor:"#208769",color:"white"}}
                onClick={handleNext}
                className={classes.button}
                endIcon={<NavigateNextOutlinedIcon/>}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


return ( 
  <CustomizedSteppers/>
 );
}
}

export default inject("startingStore")(observer(RegStepper));
