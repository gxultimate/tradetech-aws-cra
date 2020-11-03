import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles,ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SalesByCustomer from '../ReportsV2/Sales/SalesByCustomer'
import SalesByItem from '../ReportsV2/Sales/SalesByItem'
import SalesReturn from '../ReportsV2/Sales/SalesReturn'
import Invoice from '../ReportsV2/Payments&Receivables/InvoiceDetails'
import SalesOrder from '../ReportsV2/Payments&Receivables/SalesOrder'
import Payments from '../ReportsV2/Payments&Receivables/PaymentsReceived/index'
import Balances from '../ReportsV2/Payments&Receivables/CustomerBalance/index'
import InventorySummary from '../ReportsV2/Inventory/Summary/index'
import Evaluation from '../ReportsV2/Inventory/Evaluation/index'
import Packing from '../ReportsV2/Sales/PackingHistory/index'
import Delivery from '../ReportsV2/Inventory/Deliver/index'
import theme from './../../theme';
import PriceHist from './PriceChangesHistory'
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
    width: 1250,
    backgroundColor: theme.palette.background.paper,
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
          indicatorColor="secondary"
          style={{color:"white",backgroundColor:"#208769"}}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Sales By Customer" {...a11yProps(0)} />
          <Tab label="Sales By Item" {...a11yProps(1)} />
          <Tab    label="Sales Return History" {...a11yProps(2)} />
        <Tab    label="Invoice Details" {...a11yProps(3)} />
        <Tab    label="Sales Order Details" {...a11yProps(4)} />
        <Tab    label="Payments Received" {...a11yProps(5)} />
        <Tab    label="Customer Balances" {...a11yProps(6)} /> 
        <Tab    label="Inventory Summary" {...a11yProps(7)} />
        <Tab    label="Evaluation Report" {...a11yProps(8)} />
        <Tab    label="Packing History" {...a11yProps(9)} />
        <Tab    label="Delivery History" {...a11yProps(10)} />
        <Tab    label="Price Changes History" {...a11yProps(11)} />
        </Tabs>
      </AppBar>
      </ThemeProvider>
      <TabPanel value={value} index={0}>
        <SalesByCustomer/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SalesByItem/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <SalesReturn/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Invoice/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SalesOrder/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Payments/>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Balances/>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <InventorySummary/>
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Evaluation/>
      </TabPanel>
      <TabPanel value={value} index={9}>
       <Packing/>
      </TabPanel>
      <TabPanel value={value} index={10}>
        <Delivery/>
      </TabPanel>
      <TabPanel value={value} index={11}>
        <PriceHist/>
      </TabPanel>
    </div>
  );
}
