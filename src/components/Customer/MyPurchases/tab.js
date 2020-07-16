import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles,ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import theme from './../../theme'

import ToPay from './ToPay'
import Cancelled from './Cancelled'
import Completed from './Completed'
import Refund from './Refund'
import ToReceive from './ToReceive'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginBottom:"50px"
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
        <ThemeProvider theme={theme}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="To Pay" {...a11yProps(0)} />
          <Tab label="To Receive" {...a11yProps(1)} />
          <Tab label="Completed" {...a11yProps(2)} />
          <Tab label="Cancelled" {...a11yProps(3)} />
          <Tab label="Refund" {...a11yProps(4)} />
      
        </Tabs>
      </AppBar>
      </ThemeProvider>
      <TabPanel value={value} index={0}>
        <ToPay/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ToReceive/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Completed/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Cancelled/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Refund/>
      </TabPanel>

    </div>
  );
}
