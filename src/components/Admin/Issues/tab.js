import { Grid, IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
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
import theme from './../../theme';
import MaterialUIPickers from './DatePicker';
import OrderTable from './table';
import AccountTbl from './table/account.js';



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
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  
  },

  search: {
    // padding: '2px 4px',
    display: 'flex',
    alignItems: 'right',
    width: '100%',
    float:"right"
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const [Afilter,AsetFilter]= React.useState("")
  // Orders
  const [Ofilter,OsetFilter]= React.useState("")


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
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
          <Tab label="Account" {...a11yProps(0)} />
          <Tab label="Order" {...a11yProps(1)} />
     
        </Tabs>
      </AppBar>
      </ThemeProvider>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <Grid container spacing={3} lg={12} sm={12} xs={12}style={{width:'100%'}}>
      <Grid item lg={12} sm={12} xs={12} style={{width:'100%',marginBottom:"16px"}}>
             <Paper className={classes.paper}>
   <Grid container direction="row" sm={12}>
  <Grid item xs={8} style={{textAlign:"left",margin:"8px"}}> <Typography variant="subtitle2"> Issues as of &nbsp; <MaterialUIPickers/>&nbsp; to &nbsp;  <MaterialUIPickers/></Typography> </Grid>
  <Grid item xs={3} >     
     
  <Paper component="form" className={classes.search} >
    
    <InputBase
      className={classes.input}
      placeholder="Search"
      inputProps={{ 'aria-label': 'search customers' }}
      onChange={(e)=>AsetFilter(e.target.value)}
    />
    <span style={{  backgroundColor:"#FFA500",borderRadius:"3px"}}>
    <IconButton type="submit" className={classes.iconButton} aria-label="search">
      <SearchIcon style={{color:"white"}}/>
    </IconButton>
    </span>
 
  </Paper></Grid>
  
   </Grid>

   </Paper>
   </Grid>
     <Grid item lg={12} sm={12} xs={12}>
       <AccountTbl mysearch={Afilter}/>
       </Grid>
       </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Grid container spacing={3}  lg={12} sm={12} xs={12} style={{width:'100%'}}>
      <Grid item  lg={12} sm={12} xs={12} style={{width:'100%',marginBottom:"16px"}}>
             <Paper className={classes.paper}>
   <Grid container direction="row"  lg={12} sm={12} xs={12}>
  <Grid item xs={8} style={{textAlign:"left",margin:"8px"}}> <Typography variant="subtitle2"> Issues as of &nbsp; <MaterialUIPickers/>&nbsp; to &nbsp;  <MaterialUIPickers/></Typography> </Grid>
  <Grid item xs={3} >     
     
  <Paper component="form" className={classes.search} >
    
    <InputBase
      className={classes.input}
      placeholder="Search"
      inputProps={{ 'aria-label': 'search customers' }}
      onChange={(e)=>OsetFilter(e.target.value)}
    />
    <span style={{  backgroundColor:"#FFA500",borderRadius:"3px"}}>
    <IconButton type="submit" className={classes.iconButton} aria-label="search">
      <SearchIcon style={{color:"white"}}/>
    </IconButton>
    </span>
 
  </Paper></Grid>
  
   </Grid>

   </Paper>
   </Grid>
   <Grid item  lg={12} sm={12} xs={12}>
        <OrderTable mysearch={Ofilter}/>
        </Grid>
        </Grid>
        </TabPanel>
   
      </SwipeableViews>
      </Grid>
    </div>
  );
}
