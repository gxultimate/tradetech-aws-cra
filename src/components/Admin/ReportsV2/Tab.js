
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { makeStyles,ThemeProvider } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SalesByCustomer from './Sales/SalesByCustomer'
import SalesByItem from './Sales/SalesByItem'
import SalesReturn from './Sales/SalesReturn'
import Invoice from './Payments&Receivables/InvoiceDetails'
import SalesOrder from './Payments&Receivables/SalesOrder'
import Payments from './Payments&Receivables/PaymentsReceived/index'
import Balances from './Payments&Receivables/CustomerBalance/index'
import InventorySummary from './Inventory/Summary/index'
import Evaluation from './Inventory/Evaluation/index'
import Packing from './Sales/PackingHistory/index'
import Delivery from './Inventory/Deliver/index'
import { Divider,Grid } from '@material-ui/core';
import PriceHistory from './PriceChangesHistory'

import theme from './../../theme' 





  

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
        height: 'auto',
        textAlign:'left'
      },
      tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        width:'100%',
        maxWidth:'200px',   
        textAlign:'left'
       
      },
     
    }));

export default function VerticalTabs() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const [state, setState] = React.useState({
 
    checkedB: true,
 
  });

  const handleChange = (event, newValue) => {
     
    setValue(newValue);
  };
  const handleChangeC = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
   <ThemeProvider theme={theme}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
       
      <Tab    label="Sales by customer" {...a11yProps(0)} ></Tab>
      <Divider/>
    <Tab    label="Sales by Item" {...a11yProps(1)} />
    <Divider/>
        <Tab    label="Sales Return" {...a11yProps(2)} />
        <Divider/>
        <Tab    label="Sales Order" {...a11yProps(4)} />
        <Divider/>
        <Tab    label="Payments Received" {...a11yProps(5)} />
        <Divider/>
        <Tab    label="Invoice" {...a11yProps(3)} />
        <Divider/>
       
       
        <Tab    label="Balances" {...a11yProps(6)} /> 
        <Divider/>
        <Tab    label="Inventory" {...a11yProps(7)} />
        <Divider/>
        <Tab    label="Evaluation" {...a11yProps(8)} />
        <Divider/>
        <Tab    label="Packing History" {...a11yProps(9)} />
        <Divider/>
        <Tab    label="Delivery History" {...a11yProps(10)} />
        <Divider/>
        <Divider/>
        <Tab    label="Price History" {...a11yProps(11)} />
        <Divider/>
       
      </Tabs>
      <TabPanel value={value} index={0}>
        <SalesByCustomer/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SalesByItem/>
      </TabPanel>
      <TabPanel value={value} index={4}>
       <SalesReturn/>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Invoice/>
      </TabPanel>
      <TabPanel value={value} index={8}>
        <SalesOrder/>
      </TabPanel>
      <TabPanel value={value} index={10}>
        <Payments/>
      </TabPanel>
      <TabPanel value={value} index={12}>
        <Balances/>
      </TabPanel>
      <TabPanel value={value} index={14}>
        <InventorySummary/>
      </TabPanel>
      <TabPanel value={value} index={16}>
        <Evaluation/>
      </TabPanel>
      <TabPanel value={value} index={18}>
       <Packing/>
      </TabPanel>
      <TabPanel value={value} index={20}>
        <Delivery/>
      </TabPanel>
      <TabPanel value={value} index={23}>
        <PriceHistory/>
      </TabPanel>
      </ThemeProvider>
    </div>
  );
}


