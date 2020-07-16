
import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import {Grid,Tab} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DestributorTable from './Table'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './../../theme'
import ArchivedDisTable from './Table/Archived'
import {  IconButton, Paper } from '@material-ui/core';
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
    // padding: '2px 4px',
    display: 'flex',
    alignItems: 'right',
    width: '100%',
    float:"right"
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const [filter,setFilter]= React.useState("")
  const [Afilter,AsetFilter]= React.useState("")
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <Grid container lg={12} xs={12} sm={12}>
    <div className={classes.root}>
    
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
          <Tab label="Distributor Accounts" {...a11yProps(0)} />
          <Tab label="Deactivated Accounts" {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      </ThemeProvider>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid container sm={12}> 
          <Grid item sm={12} style={{textAlign:"right",marginBottom:"12px"}}>
          <Grid item sm={3} xs={3} style={{textAlign:"right",float:"right",marginBottom:"10px"}}>
        
        <Paper component="form" className={classes.search} >
     
        <InputBase
          className={classes.input}
          placeholder="Search"
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
          </Grid>
        <Grid item sm={12} xs={12}>
        <DestributorTable mysearch={filter}/>
        </Grid>
        </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
   
         
        
         
          <Grid container sm={12}> 
          <Grid item sm={12} style={{textAlign:"right",marginBottom:"12px"}}>
          <Grid item sm={3} xs={3} style={{textAlign:"right",float:"right",marginBottom:"10px"}}>
        
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
    
      </Paper>
     
     
        </Grid>
          </Grid>
        <Grid item sm={12} xs={12}>
        <ArchivedDisTable mysearch={Afilter}/>
        </Grid>
        </Grid>
        </TabPanel>

      </SwipeableViews>
     
    </div>
    </Grid>
  );
}
