import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ads1 from './OnSale/images/ads1.jpg'
import ads2 from './OnSale/images/ads2.jpg'
import ads3 from './OnSale/images/ads3.jpg'
import ads4 from './OnSale/images/ads4.jpg'
import { CssBaseline } from '@material-ui/core';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
   
    imgPath:
      ads1,
  },
  {
 
    imgPath:
    ads2,
  },
  {
  
    imgPath:
    ads3,
  },
  {
 
    imgPath:
    ads4,
  },
  // {
  
  //   imgPath:
  //     'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  // },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
    borderTop:'2px solid black',
    borderBottom:'1px solid black',

  },
  header: {
    display: 'flex',
    alignItems: 'center',
    // height: 0,
    // paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 80,
    display: 'block',
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
  },
}));

function AdCarousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);


  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
    <CssBaseline/>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

    </div>
  );
}

export default AdCarousel;
