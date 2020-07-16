import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme,ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import theme from './../../theme'
import { Grid,Divider} from '@material-ui/core';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}));

export default function PaymentTab() {
  const classes = useStyles();
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
        <ThemeProvider theme={theme}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          style={{backgroundColor:"#208769",color:"white"}}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Cash On Delivery" {...a11yProps(0)} />
          <Tab label="GCash" {...a11yProps(1)} />
          <Tab label="TTech Credit" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      </ThemeProvider>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} >
          <Grid container direction='row' sm={12} xs={12}  style={{border:"1px solid black"}}>
                <Grid item sm={6} xs={6} style={{textAlign:"left",padding:"4px"}}>
                    <Typography variant='p'>SubTotal : </Typography>
                </Grid>
                <Grid item sm={6} xs={6} style={{textAlign:"right",padding:"8px"}}>
                    <Typography variant='p'>&#x20b1; 141764.00 </Typography>
                </Grid>
                <Grid item sm={6} xs={6} style={{textAlign:"left",padding:"4px"}}>
                    <Typography variant='p'>Delivery Fee : </Typography>
                </Grid>
                <Grid item sm={6} xs={6} style={{textAlign:"right",padding:"8px"}}>
                    <Typography variant='p'>&#x20b1; 120.00 </Typography>
                </Grid>
                <Grid item sm={6} xs={6} style={{textAlign:"left",padding:"4px"}}>
                    <Typography variant='p'>Total : </Typography>
                </Grid>
                <Grid item sm={6} xs={6} style={{textAlign:"right",padding:"8px"}}>
                    <Typography variant='p'>&#x20b1; 141884.00 </Typography>
                </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Grid container direction='row' sm={12} xs={12}  style={{border:"1px solid black"}}>

        <Grid item sm={12} xs={12} style={{textAlign:"left",padding:"4px",marginBottom:"5px"}}>
                    <Typography variant='p'><span style={{fontSize:"10px"}}>Powered by :</span> <span style={{fontWeight:"bold"}}>GCash</span></Typography>
                </Grid>
                <Grid item sm={6} xs={6} style={{textAlign:"left",padding:"4px"}}>
                    <Typography variant='p'>SubTotal : </Typography>
                </Grid>
                <Grid item sm={6} xs={6} style={{textAlign:"right",padding:"8px"}}>
                    <Typography variant='p'>&#x20b1; 0.00 </Typography>
                </Grid>
                <Grid item sm={6} xs={6} style={{textAlign:"left",padding:"4px"}}>
                    <Typography variant='p'>Delivery Fee : </Typography>
                </Grid>
                <Grid item sm={6} xs={6} style={{textAlign:"right",padding:"8px"}}>
                    <Typography variant='p'>&#x20b1; 0.00 </Typography>
                </Grid>
                <Grid item sm={6} xs={6} style={{textAlign:"left",padding:"4px"}}>
                    <Typography variant='p'>Total : </Typography>
                </Grid>
                <Grid item sm={6} xs={6} style={{textAlign:"right",padding:"8px"}}>
                    <Typography variant='p'>&#x20b1; 0.00 </Typography>
                </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          
        <Grid container direction='row' sm={12} xs={12}  style={{border:"1px solid black"}}>

<Grid item sm={12} xs={12} style={{textAlign:"left",padding:"4px",marginBottom:"5px"}}>
            <Typography variant='p'><span style={{fontSize:"10px"}}>Powered by :</span> <span style={{fontWeight:"bold"}}>TTech Credits</span></Typography>
        </Grid>
        <Grid item sm={6} xs={6} style={{textAlign:"left",padding:"4px"}}>
            <Typography variant='p'>Credit Limit : </Typography>
        </Grid>
        <Grid item sm={6} xs={6} style={{textAlign:"right",padding:"8px"}}>
            <Typography variant='p'>&#x20b1; 0.00 </Typography>
        </Grid>
        <Grid item sm={6} xs={6} style={{textAlign:"left",padding:"4px"}}>
            <Typography variant='p'>Credit Balance : </Typography>
        </Grid>
        <Grid item sm={6} xs={6} style={{textAlign:"right",padding:"8px"}}>
            <Typography variant='p'>&#x20b1; 0.00 </Typography>
        </Grid>
        <Grid item sm={6} xs={6} style={{textAlign:"left",padding:"4px"}}>
            <Typography variant='p'>Credit Available : </Typography>
        </Grid>
        <Grid item sm={6} xs={6} style={{textAlign:"right",padding:"8px"}}>
            <Typography variant='p'>&#x20b1; 0.00 </Typography>
        </Grid>
        <Divider/>

        <Grid item sm={6} xs={6} style={{textAlign:"left",padding:"4px"}}>
                    <Typography variant='p'>SubTotal : </Typography>
                </Grid>
                <Grid item sm={6} xs={6} style={{textAlign:"right",padding:"8px"}}>
                    <Typography variant='p'>&#x20b1; 0.00 </Typography>
                </Grid>
                <Grid item sm={6} xs={6} style={{textAlign:"left",padding:"4px"}}>
                    <Typography variant='p'>Delivery Fee : </Typography>
                </Grid>
                <Grid item sm={6} xs={6} style={{textAlign:"right",padding:"8px"}}>
                    <Typography variant='p'>&#x20b1; 0.00 </Typography>
                </Grid>
                <Grid item sm={6} xs={6} style={{textAlign:"left",padding:"4px"}}>
                    <Typography variant='p'>Total : </Typography>
                </Grid>
                <Grid item sm={6} xs={6} style={{textAlign:"right",padding:"8px"}}>
                    <Typography variant='p'>&#x20b1; 0.00 </Typography>
                </Grid>
  </Grid>

        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
