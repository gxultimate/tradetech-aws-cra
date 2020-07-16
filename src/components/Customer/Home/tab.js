import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles,ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Items from './items.js'
import OnSale from './OnSale/index.js'
import {inject,observer} from 'mobx-react'
import theme from './theme'
import CategoryGrid from './Category'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Divider,Paper,IconButton,Grid,Button, CssBaseline} from '@material-ui/core';
class HomeTab extends React.Component {
  state = {  }

  componentWillMount() {
      
    let {customerStore:{getProducts,getDistributors,getAccounts }}=this.props;

    getProducts();
   
    getDistributors();
    getAccounts();


  }


  render() { 

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
    // flex: 1,
    height:'30px',
  
  },
  iconButton: {
    padding: 10,
    height:'30px',
  
  
  },

  search: {
    // padding: '2px 4px',
    display: 'flex',
    alignItems: 'right',
    width: '100%',
  
    height:'30px',

  },
  button: {
    
   
  },
  formControl: {
    height:'30px',
    minWidth:'100%',
  
  },
}));



 function HomeTabs() {
  const classes = useStyles();
  
  const [value, setValue] = React.useState(0);
  const [filter,setFilter]= React.useState("")
  const [open, setOpen] = React.useState(false);
  const handleChangeF = (event) => {
    setFilter(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          style={{backgroundColor:"#F7A31C"}}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Products" {...a11yProps(0)} />
          <Tab label="On Sale" {...a11yProps(1)} />
          <Tab label="Favorites" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      </ThemeProvider>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <Grid container direction="row" xs={12} >
<Grid xs={5} style={{marginRight:'20px'}}>

      {/* <FormControl className={classes.formControl} size='small' >
        <InputLabel id="demo-controlled-open-select-label" style={{  fontSize:'15px'}}>Categories</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          size='small'
         
          onChange={(e)=>setFilter(e.target.value)}
        >
          <MenuItem value=""  style={{  fontSize:'15px'}}>
            <em>None</em>
          </MenuItem>
          <MenuItem value='cannedGoods' style={{  fontSize:'15px'}}>Canned Goods</MenuItem>
          <MenuItem value='beverages' style={{  fontSize:'15px'}}>Beverages</MenuItem>
          <MenuItem value='snacks' style={{  fontSize:'15px'}}>Snacks</MenuItem>
        </Select>
      </FormControl> */}


      
      <FormControl  size='small'className={classes.formControl} style={{width:"100%"}}>
        <InputLabel htmlFor="grouped-native-select" style={{  fontSize:'15px'}}>Category</InputLabel>
        <Select native defaultValue="" id="grouped-native-select"
       onChange={(e)=>setFilter(e.target.value)}
       size='small'
        >
          <option aria-label="None" value="" />
          <optgroup label="Beverages">
          <option value='Chocolate drink'>Chocolate drink</option>
            <option value='Coffee'>Coffee</option>
            <option value='Tea'>Tea</option>
            <option value='Juice'>Juice</option>
            <option value='Soda'>Soda</option>
            <option value='Milk'>Milk</option>
            <option value='Water'>Water</option>
          </optgroup>
          <optgroup label="Bread/Bakery">
            <option value='Sandwich Loaf'>Sandwich Loaf</option>
            <option value='Cake'>Cake</option>
            <option value='Brownies'>Brownies</option>
            <option value='Cookies'>Cookies</option>
            <option value='Biscuits'>Biscuits</option>
            <option value='Pizzas'>Pizzas</option>
            <option value='Doughnuts'>Doughnuts</option>
            <option value='Pandesal'>Pandesal</option>
            <option value='Pies'>Pies</option>
          </optgroup>
          <optgroup label="Canned/Jarred">
            <option value='Sardines'>Sardines</option>
            <option value='Tuna'>Tuna</option>
            <option value='Corned beef'>Corned beef</option>
            <option value='Mushroom'>Mushroom</option>
            <option value='Sausage'>Sausage</option>
            <option value='Condenced Milk'>Condenced Milk</option>
            <option value='Evaporated Milk'>Evaporated Milk</option>
            <option value='Sisig'>Sisig</option>
            <option value='Corn'>Corn</option>
            <option value='Fruits'>Fruits</option>
            <option value='Juice'>Juice</option>
          </optgroup>
          <optgroup label="Cleaning">
            <option value='Disinfectant'>Disinfectant</option>
            <option value='Sprays'>Sprays</option>
            <option value='Toilet'>Toilet</option>
            <option value='Floor'>Floor</option>
            <option value='Furnature'>Furnature</option>
            <option value='Carpet'>Carpet</option>
            <option value='Detergent'>Detergent</option>
            <option value='Bleach'>Bleach</option>
            <option value='Fabric Conditioner'>Fabric Conditioner</option>
            <option value='Dishwashing'>Dishwashing</option>
          </optgroup>
          <optgroup label="Dry/Baking">
            <option value='Flour'>Flour</option>
            <option value='Sugar'>Sugar</option>
            <option value='Measuring'>Measuring</option>
          </optgroup>
          <optgroup label="Liquor">
          <option value='Brandy'>Brandy</option>
          <option value='Beer'>Beer</option>
            <option value='Whiskey'>Whiskey</option>
            <option value='Gin'>Gin</option>
           
          </optgroup>
          <optgroup label="Pasta & Noodles">
            <option value='Pancit Canton'>Pancit Canton</option>
            <option value='Pasta'>Pasta</option>
            <option value='Noodles'>Noodles</option>
          </optgroup>
          <optgroup label="Produce">
            <option value='Fruits'>Fruits</option>
            <option value='Vegetable'>Vegetable</option>
          </optgroup>
          <optgroup label="Paper Goods">
            <option value='Toilet Paper'>Toilet Paper</option>
            <option value='Table Napkin'>Table Napkin</option>
          </optgroup>
          <optgroup label="Personal Care">
            <option value='Soap'>Soap</option>
            <option value='Shampoo'>Shampoo</option>
            <option value='Cotton'>Cotton</option>
            <option value='Shaving'>Shaving</option>
            <option value='Lotion'>Lotion</option>
            <option value='Facial Wash'>Facial Wash</option>
            <option value='Facial Cream'>Facial Cream</option>
          </optgroup>
        </Select>
      </FormControl>

</Grid>
  <Grid item  xs={6} style={{textAlign:"right",paddingTop:'14px'}}>
        
        <Paper component="form" className={classes.search}  >
     
        <InputBase
          className={classes.input}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search customers' }}
          onChange={(e)=>setFilter(e.target.value)}
        />
        <span style={{  backgroundColor:"#FFA500",borderRadius:"3px"}}>
        <IconButton size='small' type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon style={{color:"white"}}/>
        </IconButton>
        </span>
        {/* <IconButton color="primary" className={classes.iconButton} aria-label="directions"> */}
          {/* <DirectionsIcon /> */}
        {/* </IconButton> */}
      </Paper>
     
     
        </Grid>
  
   </Grid>
         <Items mysearch={filter}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Grid container direction="row" xs={12} >
<Grid xs={5} style={{marginRight:'20px'}}>

      <FormControl className={classes.formControl} size='small' >
        <InputLabel id="demo-controlled-open-select-label" style={{  fontSize:'15px'}}>Categories</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          size='small'
         
          onChange={(e)=>setFilter(e.target.value)}
        >
          <MenuItem value=""  style={{  fontSize:'15px'}}>
            <em>None</em>
          </MenuItem>
          <MenuItem value='cannedGoods' style={{  fontSize:'15px'}}>Canned Goods</MenuItem>
          <MenuItem value='beverages' style={{  fontSize:'15px'}}>Beverages</MenuItem>
          <MenuItem value='snacks' style={{  fontSize:'15px'}}>Snacks</MenuItem>
        </Select>
      </FormControl>
</Grid>
  <Grid item  xs={6} style={{textAlign:"right",paddingTop:'14px'}}>
        
        <Paper component="form" className={classes.search}  >
     
        <InputBase
          className={classes.input}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search customers' }}
          onChange={(e)=>setFilter(e.target.value)}
        />
        <span style={{  backgroundColor:"#FFA500",borderRadius:"3px"}}>
        <IconButton size='small' type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon style={{color:"white"}}/>
        </IconButton>
        </span>
        {/* <IconButton color="primary" className={classes.iconButton} aria-label="directions"> */}
          {/* <DirectionsIcon /> */}
        {/* </IconButton> */}
      </Paper>
     
     
        </Grid>
  
   </Grid>
         <OnSale mysearch={filter}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction} style={{padding:0,margin:0}}>
          {/* <CategoryGrid style={{padding:0,margin:0}} /> */}
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
return ( 
  <HomeTabs/>
 );
}
}

export default inject("customerStore")(observer(HomeTab));