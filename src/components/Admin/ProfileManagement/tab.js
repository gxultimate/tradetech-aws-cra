import { AppBar, Box, Grid, Tab, Tabs, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import CustListTable from './Customer/table.js';
import ManagerListTable from './Manager/table.js';
import StaffListTable from './Staff/table.js';


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
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%"
  }
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <Grid container xs={12}>
      <AppBar position="static" color="default" >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          maxWidth="100"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab  label="Customer" {...a11yProps(0)} />
          <Tab label="Staff" {...a11yProps(1)} />
          <Tab label="manager" {...a11yProps(2)} />
          <Tab label="Admin" {...a11yProps(3)} />
       
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid container direction="column">
          <Grid item style={{marginBottom:"2%"}} >
         {/* <RegisterCustomer /> */}
        </Grid>
        <Grid item alignItems="strech">
        <CustListTable/>
       
        </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          
        <Grid container direction="column">
          <Grid item style={{marginBottom:"2%"}} >
         {/* <RegisterCustomer /> */}
        </Grid>
        <Grid item alignItems="strech">
        <StaffListTable/>
        </Grid>
          </Grid>


       
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <Grid container direction="column">
          <Grid item style={{marginBottom:"2%"}} >
         {/* <RegisterCustomer /> */}
        </Grid>
        <Grid item alignItems="strech">
        <ManagerListTable/>
        </Grid>
          </Grid>

        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        <Grid container direction="column">
          <Grid item style={{marginBottom:"2%"}} >
         {/* <RegisterCustomer /> */}
        </Grid>
        <Grid item alignItems="strech">

        </Grid>
     
          </Grid>
        
        </TabPanel>
      </SwipeableViews>
      </Grid>
    </div>
  );
}