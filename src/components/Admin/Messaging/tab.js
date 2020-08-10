import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles ,ThemeProvider} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import SendIcon from '@material-ui/icons/Send';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import SentMsg from './Sent'
import Inbox from './Inbox'
import theme from './../../theme'
import DraftsIcon from '@material-ui/icons/Drafts';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 555,
    minWidth: 1050,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
        <Grid container lg={12} sm={12} xs={12}>
            <ThemeProvider theme={theme}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab icon={<InboxIcon/>} label="Inbox" {...a11yProps(0)} />
        <Tab icon={<SendIcon/>}  label="Sent" {...a11yProps(1)} />
        <Tab  icon={<DraftsIcon/>}  label="Drafts" {...a11yProps(2)} />
        <Tab icon={<DeleteOutlineIcon/>}  label="Trash" {...a11yProps(3)} />
  
      </Tabs>
     
      <TabPanel value={value} index={0}>
        <Inbox/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SentMsg/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      No data to display
      </TabPanel>
      <TabPanel value={value} index={3}>
      No data to display
      </TabPanel>
      </ThemeProvider>
      </Grid>
    </div>
  );
}
