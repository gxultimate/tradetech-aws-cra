import { Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Archived from './Archived';
import CrmMessages from './CrmMessages/index.js';
import CustListTable from './Customer/table.js';
import CustomerLog from './CustomerLog';
import theme from './theme';


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
    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  
  },

  search: {
    
    display: 'flex',
    alignItems: 'right',
    width: 350,
    float:"right"
  },
}));

export default function  CRMTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [filter,setFilter]= React.useState("")
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    
    <div className={classes.root} maxWidth="100"  >
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
          <Tab label="Messages" {...a11yProps(0)} />
          <Tab label="Customers" {...a11yProps(1)} />
          <Tab label="Customer Logs" {...a11yProps(2)} />
          <Tab label="Deactivated" {...a11yProps(3)} />
     
        
        </Tabs>
      </AppBar>
      </ThemeProvider>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
         <CrmMessages/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction} >
          <Grid container direction="row" xs={12} sm={12}>
      <Grid item sm={12} xs={12} style={{textAlign:"right",float:"right",marginBottom:"10px"}}>
        
      <Paper component="form" className={classes.search} >
   
      <InputBase
        className={classes.input}
        placeholder="Search Customers"
        inputProps={{ 'aria-label': 'search customers' }}
        onChange={(e)=>setFilter(e.target.value)}
      />
      <span style={{  backgroundColor:"#FFA500",borderRadius:"3px"}}>
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon style={{color:"white"}}/>
      </IconButton>
      </span>
 
    </Paper>
   
   
      </Grid>
      <Grid item sm={12}>
          <CustListTable mysearch={filter}/>
          </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <CustomerLog/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Archived/>
        </TabPanel>
    
      
      </SwipeableViews>
    </div>
  
  );
}