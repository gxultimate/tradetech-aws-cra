import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './../theme'
import ProcessPage from './Processing/index.js'
import CompletedPage from './Completed'
import SummaryGrid from './Summary'
import FailedGrid from './Failed'
import { Grid } from '@material-ui/core';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    minWidth: '100%',
  },
}));

export default function OrderTab() {
  const classes = useStyles();
 
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <Grid container lg={12} sm={12} xs={12}>
      <ThemeProvider theme={theme}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          style={{color:"white",backgroundColor:"#208769"}}
          variant="fullWidth"
          
          aria-label="full width tabs example"
        >
          <Tab label="Summary" {...a11yProps(0)} />
          <Tab label="Processing" {...a11yProps(1)} />
        
       
          <Tab label="Completed" {...a11yProps(2)} />
          <Tab label="Failed" {...a11yProps(3)} />
        
        </Tabs>
      </AppBar>
      </ThemeProvider>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid item sm={12} xs={12}>
          <SummaryGrid/>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Grid item sm={12} xs={12}>
         <ProcessPage/>
         </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <Grid item sm={12} xs={12}>
          <CompletedPage/>
          </Grid>
        </TabPanel>
 
        <TabPanel value={value} index={3} dir={theme.direction}>
        <Grid item sm={12} xs={12}>
          <FailedGrid/>
          </Grid>
        </TabPanel>
      
      </SwipeableViews>
      </Grid>
    </div>
  );
}