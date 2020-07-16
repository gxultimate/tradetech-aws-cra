import Step from '@material-ui/core/Step';
import StepConnector from '@material-ui/core/StepConnector';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Check from '@material-ui/icons/Check';
import PersonPinOutlinedIcon from '@material-ui/icons/PersonPinOutlined';
import PhonelinkLockOutlinedIcon from '@material-ui/icons/PhonelinkLockOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';



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



export default function ThirdStep() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(2);
  const steps = getSteps();


  return (
    <div className={classes.root}>
 
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

    </div>
  );
}
