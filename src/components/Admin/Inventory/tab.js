import { Grid, IconButton, InputBase, Paper } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import theme from './../theme';
import RestockTable from './Restock';
import EnhancedTable from './table';
import ExpiringTable from './table/expiring';


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
    minWidth:1250
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor:"#FAFAFA"
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
    width: '90%',
    float:"right"
  },
}));

export default function InventoryTab() {
  const classes = useStyles();
  const [filter,setFilter]= React.useState("")
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
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
          style={{color:"white",backgroundColor:"#208769"}}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="All Products" {...a11yProps(0)} />
          <Tab label="Expiring" {...a11yProps(1)} />
          <Tab label="Restock" {...a11yProps(2)} />
        </Tabs>
      </AppBar> 
      </ThemeProvider>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid container lg={12} xs={12} sm={12}>
          <Grid item  lg={12} xs={12} sm={12}>
      <Paper className={classes.paper} style={{marginBottom:"10px"}}>
    
        <Grid
  container
  lg={12} xs={12} sm={12}
  direction="row"
  justify="flex-end"
  alignItems="flex-end"
  
>
       
          <Grid item xs={2}  >



      <FormControl  variant="outlined" className={classes.formControl} style={{marginRight:"5px",width:"95%"}}>
        <InputLabel htmlFor="grouped-native-select">Category</InputLabel>
        <Select native defaultValue="" id="grouped-native-select"
       onChange={(e)=>setFilter(e.target.value)}
        >
       <option aria-label="None" value="" />
          <optgroup label="Beverages">
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
<Grid item xs={2}>
           
              <FormControl variant="outlined" className={classes.formControl} style={{marginRight:"2px",width:"95%"}}>
        <InputLabel htmlFor="outlined-age-native-simple">Brand</InputLabel>
        <Select
       
         
          onChange={(e)=>setFilter(e.target.value)}
          label="Brand"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Ajinomoto">Ajinomoto</MenuItem>
          <MenuItem value="Bear Brand">Bear Brand</MenuItem>
          <MenuItem value="Lays">Lays</MenuItem>
          <MenuItem value="Lucky Me">Lucky Me</MenuItem>
          <MenuItem value="Maggi">Maggi</MenuItem>
          <MenuItem value="Milo">Milo</MenuItem>
          <MenuItem value="Nescafe">Nescafe</MenuItem>
          <MenuItem value="Oishi">Oishi</MenuItem>
          <MenuItem value="Palmolive">Palmolive</MenuItem>
         
          <MenuItem value="Safeguard">Safeguard</MenuItem>
          <MenuItem value="Siver Swan">Siver Swan</MenuItem>    
          <MenuItem value="Surf">Surf</MenuItem>
          <MenuItem value="Uniliver">Uniliver</MenuItem>
        
        </Select>
      </FormControl>

      

</Grid>
<Grid sm={3}  > 
<Paper component="form" className={classes.search} >
   
   <InputBase
     className={classes.input}
     placeholder="Search Items"
     inputProps={{ 'aria-label': 'search Items' }}
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
     
      </Paper >
      </Grid>
      <Grid item sm={12}>
          <EnhancedTable mysearch={filter}/>
          </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Grid container lg={12} md={12} xs={12}>
          <Grid item lg={12} md={12} xs={12}> <Paper className={classes.paper}></Paper> </Grid>
            <Grid item lg={12} md={12} xs={12}>
        <ExpiringTable/>
        </Grid>
        </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Grid container direction="row" lg={12} md={12} xs={12}>
           <Grid item lg={12} md={12} xs={12}>

           </Grid>
            <Grid item lg={12} md={12} xs={12}>
        <RestockTable/>
        </Grid>
        </Grid>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

