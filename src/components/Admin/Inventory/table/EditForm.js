import MomentUtils from '@date-io/moment';
import { TextField, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { inject, observer } from 'mobx-react';
import moment from 'moment';
import React, { Component } from 'react';
import Resizer from 'react-image-file-resizer';



const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      
    },
  },
    input: {
      display: 'none',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
 
}));


  function getHash(input){
    var hash = 0, len = input.length;
    for (var i = 0; i < len; i++) {
      hash  = ((hash << 5) - hash) + input.charCodeAt(i);
      hash |= 0; // to 32bit integer
    }
  
            
  
    return hash;
  }
class EditForm extends Component{

  constructor(){
   super()
  this.state = {
    image: '',
    loading: false,
}
  }


  onFileChange = (e) => {
    
    this.setState({ loading: true });
      let {inventoryStore:{product}}=this.props;
    
      Resizer.imageFileResizer(
        e.target.files[0],
        100,
        100,
        'JPEG',
        100,
        0,
        uri => {
          this.setState({image:uri})
          product.setProperty('product_Img',uri)
        },
        'URI'
       
    )
    setTimeout(() => {
          
      this.setState({ loading: false });
          }, 2000);
  
      
  }

  EditForm = () => {
    const classes = useStyles();
    let {inventoryStore:{product}}=this.props
    const [labelWidth, setLabelWidth] = React.useState(0);   
    const [selectedDate, setSelectedDate] = React.useState(new Date('2019-08-18T21:11:54'));
    const [exselectedDate, exsetSelectedDate] = React.useState(new Date('2019-08-18T21:11:54'));



    const inputLabel = React.useRef(null);
    React.useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
      console.log(product,"prod")


      function handleReceived(date) {
        setSelectedDate(date);
        let dReceive =  moment(date).format('MMMM Do YYYY')
        console.log(dReceive);
        product.setProperty("product_DateReceived", dReceive)
        }
        function handleExpiration(exDate) {
          exsetSelectedDate(exDate);
          let dExpiration =  moment(exDate).format('MMMM Do YYYY')
          
          console.log(dExpiration);
          product.setProperty("product_ExpirationDate", dExpiration)
          }
    //   function onChangeaccount_mName(value) {
    //     account.setProperty('account_mName' , value)
    //     }
        
    //      function onChangeaccount_lName(value) {
    //     account.setProperty('account_lName' , value)
    //     }
  

  
  
      
    return (
      <div >

      
<form className={classes.root} noValidate autoComplete="off">
        
        <Grid container  direction="row" sm={12} >
        <Grid item xs={4} style={{margin:"5px"}}>


     </Grid>
     <Grid item xs={6} style={{textAlign:"center"}}>

<img src={this.state.image} ></img>


     </Grid>
     </Grid>
<Typography variant="h6" style={{color:"#208769"}}> Basic Info</Typography>

<Grid container direction="row" sm={12} >
           <Grid item  xs={5} style={{margin:"5px"}}>
      <TextField 
      id="outlined-basic" 
      label="Item Name" 
      variant="outlined" 
      defaultValue={product.product_Name}
      style={{width:"100%"}}
      onChange={
        product_Name=>{
          product.setProperty("product_Name", product_Name.target.value)
          
  
        
      
      }}
      
      /></Grid>

<Grid item  xs={6} style={{margin:"5px"}}>
<FormControl variant="outlined" className={classes.formControl} style={{width:"100%"}}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Package
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          maxWidth="100"
          defaultValue={product.product_Packaging}
          onChange={product_Packaging=>{product.setProperty("product_Packaging", product_Packaging.target.value)}}
          labelWidth={labelWidth}
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value="10/Order">10/Order</MenuItem>
          <MenuItem value="12/Order">12/Order</MenuItem>
          <MenuItem value="15/Order">15/Order</MenuItem>
          <MenuItem value="20/Order">20/Order</MenuItem>
          <MenuItem value="24/Order">24/Order</MenuItem>
          <MenuItem value="30/Order">30/Order</MenuItem>
          <MenuItem value="36/Order">36/Order</MenuItem>
          <MenuItem value="40/Order">40/Order</MenuItem>
          <MenuItem value="48/Order">48/Order</MenuItem>
          <MenuItem value="50/Order">50/Order</MenuItem>
          <MenuItem value="72/Order">72/Order</MenuItem>
          <MenuItem value="80/Order">80/Order</MenuItem>
          <MenuItem value="100/Order">100/Order</MenuItem>
        </Select>
      </FormControl>
      
     </Grid>

      <Grid item  xs={5} style={{margin:"5px"}}>
    
      
      
      {/* <FormControl variant="outlined" className={classes.formControl} style={{width:"100%"}}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          labelWidth={labelWidth}
          onChange={product_Category=>{product.setProperty("product_Category", product_Category.target.value)}}
          
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value="Beverages">Beverages</MenuItem>
          <MenuItem value="Bread/Bakery">Bread/Bakery</MenuItem>
          <MenuItem value="Canned/Jarred Goods">Canned/Jarred Goods</MenuItem>
          <MenuItem value="Cleaning">Cleaning</MenuItem>
          <MenuItem value="Dry/Baking Goods">Dry/Baking Goods </MenuItem>
          <MenuItem value="Liquor">Liquor</MenuItem>
          <MenuItem value="Produce">Produce </MenuItem>
          <MenuItem value="Paper Goods">Paper Goods </MenuItem>
          <MenuItem value="Personal Care">Personal Care</MenuItem>
         
        </Select>
      </FormControl> */}

      <FormControl  variant="outlined" className={classes.formControl} style={{width:"100%"}}>
        <InputLabel htmlFor="grouped-native-select">Category</InputLabel>
        <Select native  defaultValue={product.product_Category} id="grouped-native-select" label="Category"
        onChange={product_Category=>{product.setProperty("product_Category", product_Category.target.value)}}
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
          <optgroup label="Produce">
            <option value='Fruits'>Fruits</option>
            <option value='Vegetable'>Vegetable</option>
          </optgroup>
          <optgroup label="Paper Goods">
            <option value='Toilet Paper'>Toilet Paper</option>
            <option value='Table Napkin'>Table Napkin</option>
          </optgroup>
          <optgroup label="Pasta & Noodles">
            <option value='Pancit Canton'>Pancit Canton</option>
            <option value='Pasta'>Pasta</option>
            <option value='Noodles'>Noodles</option>
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
 
      <Grid item xs={6} style={{margin:"5px"}}>
 
      
      <TextField 
      id="outlined-basic" 
      style={{width:"100%"}}
      label="Price" 
      variant="outlined" 
      type='number'
      defaultValue={product.product_Price}
 
      onChange={product_Price=>{product.setProperty("product_Price", product_Price.target.value)}}
      />
      </Grid>
      <Grid xs={5} item style={{margin:"5px"}}>
        
            {/* <FormControl variant="outlined" className={classes.formControl} style={{width:"100%"}}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Standard UoM
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          maxWidth="100"
          onChange={product_UoM=>{product.setProperty("product_UoM", product_UoM.target.value)}}
          labelWidth={labelWidth}
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value="10/Order">10/Order</MenuItem>
          <MenuItem value="12/Order">12/Order</MenuItem>
          <MenuItem value="15/Order">15/Order</MenuItem>
          <MenuItem value="20/Order">20/Order</MenuItem>
          <MenuItem value="24/Order">24/Order</MenuItem>
          <MenuItem value="30/Order">30/Order</MenuItem>
          <MenuItem value="36/Order">36/Order</MenuItem>
          <MenuItem value="40/Order">40/Order</MenuItem>
          <MenuItem value="48/Order">48/Order</MenuItem>
          <MenuItem value="50/Order">50/Order</MenuItem>
          <MenuItem value="72/Order">72/Order</MenuItem>
          <MenuItem value="80/Order">80/Order</MenuItem>
          <MenuItem value="100/Order">100/Order</MenuItem>
        </Select>
      </FormControl> */}

      <TextField 
      id="outlined-basic" 
      style={{width:"100%"}}
      label="UOM (g/kg)" 
      variant="outlined" 
      defaultValue={product.product_UoM}
      
 
      onChange={product_UoM=>{product.setProperty("product_UoM", product_UoM.target.value)}}
      />


    
      </Grid>


      <Grid item  xs={6} style={{margin:"5px"}}>
      <FormControl  variant="outlined" className={classes.formControl} style={{width:"100%"}}>
        <InputLabel htmlFor="grouped-native-select">Variant</InputLabel>
        <Select native  defaultValue={product.product_Variant} id="grouped-native-select" label="Variant"
        onChange={product_Variant=>{product.setProperty("product_Variant", product_Variant.target.value)}}
        >
          <option aria-label="None" value="" />
          <optgroup label="Color">
            <option value='Blue'>Blue</option>
            <option value='Green'>Green</option>
            <option value='Red'>Red</option>
            <option value='Orange'>Orange</option>
            <option value='Yellow'>Yellow</option>
            <option value='Violet'>Violet</option>
          </optgroup>
          <optgroup label="Flavor">
            <option value='Calamansi'>Calamansi</option>
            <option value='Spicy'>Spicy</option>
            <option value='Original'>Original</option>
            <option value='Sweet'>Sweet</option>
            <option value='Sweet&Spicy'>Sweet&Spicy</option>
            <option value='Extra Hot'>Extra Hot</option>
            <option value='Squid'>Squid</option>
            <option value='Orange'>Orange</option>
            <option value='Chocolate'>Chocolate</option>
            <option value='Lemon'>Lemon</option>
            <option value='Butter'>Butter</option>
            <option value='Lime'>Lime</option>
            <option value='Mango'>Mango</option>
            <option value='Pineapple'>Pineapple</option>
            <option value='Grapes'>Grapes</option>
            <option value='4 Season'>4 Season</option>
          </optgroup>
          <optgroup label="Size">
          <option value='XXS'>XXS</option>
            <option value='XS'>XS</option>
            <option value='SM'>SM</option>
            <option value='L'>L</option>
            <option value='XL'>XL</option>
            <option value='XXL'>XXL</option>
          </optgroup>
          
        </Select>
      </FormControl>

      </Grid>
 

     <Grid item  xs={12} style={{margin:"5px",}}>
       <TextField 
      id="outlined-basic" 
      style={{width:"100%"}}
      label="Description" 
      defaultValue={product.product_Description}
      variant="outlined"
      onChange={product_Description=>{product.setProperty("product_Description", product_Description.target.value)}}
      /></Grid>
      </Grid>


{/* 
      <Typography variant="h6" style={{color:"#208769"}}> Storage Info</Typography>
      <Grid

 container

 direction="row"
 justify="flex-start"
 alignItems="flex-start"
 
>
          <Grid xs={6} item style={{margin:"5px"}}>
     <TextField 
     id="outlined-basic" 
     style={{width:"98%"}}
     label="Barcode" 
     variant="outlined"
     defaultValue={product.product_Barcode}
     onChange={product_Barcode=>{product.setProperty("product_Barcode", product_Barcode.target.value)}}
     />
     </Grid>
     <Grid xs={5} item style={{margin:"5px"}}> */}
     {/* <TextField 
     id="outlined-basic" 
     style={{width:"100%"}}
     label="Brand" 
     variant="outlined" 
     onChange={product_Brand=>{product.setProperty("product_Brand", product_Brand.target.value)}}
     /> */}
       {/* <FormControl variant="outlined" className={classes.formControl} style={{width:"100%"}}>
       <InputLabel ref={inputLabel}  id="demo-simple-select-outlined-label">
         Brand
       </InputLabel>
       <Select
         labelId="demo-simple-select-outlined-label"
         id="demo-simple-select-outlined"
         maxWidth="100"
         defaultValue={product.product_Brand}
         onChange={product_Brand=>{product.setProperty("product_Brand", product_Brand.target.value)}}
         labelWidth={labelWidth}
       >
         <MenuItem value="">
           <em></em>
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
     <Grid xs={5} item style={{margin:"5px"}}> */}
     {/* <TextField 
     id="outlined-basic" 
     style={{width:"100%"}}
     label="Date Received" 
     variant="outlined" 
     onChange={product_DateReceived=>{product.setProperty("product_DateReceived", product_DateReceived.target.value)}}
     /> */}
         {/* <MuiPickersUtilsProvider utils={MomentUtils} >
    

    <KeyboardDatePicker
      margin="normal"
      id="dReceive"
      label="Date Received"
    value ={selectedDate}
      
      onChange={handleReceived}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
    />

  
</MuiPickersUtilsProvider>
     </Grid>
     <Grid xs={5} item style={{margin:"5px"}}> */}
     {/* <TextField 
     id="outlined-basic" 
     style={{width:"100%"}}
     label="Expiration Date" 
     variant="outlined"
     onChange={product_ExpirationDate=>{product.setProperty("product_ExpirationDate", product_ExpirationDate.target.value)}}
     /> */}
    
      {/* <MuiPickersUtilsProvider utils={MomentUtils} >
    

    <KeyboardDatePicker
      margin="normal"
      id="dExpiration"
      label="Expiration Date"
  value={exselectedDate}
     
      onChange={handleExpiration}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
    />

  
</MuiPickersUtilsProvider>
     </Grid>
     </Grid> */}
     


     <Typography variant="h6" style={{color:"#208769"}}> Remarks :</Typography>
     <Grid  container direction="row">
          <Grid item style={{margin:"5px"}} xs={12}>
     <TextareaAutosize  
     rowsMin={6} 
     style={{width:"100%",fontSize:"20px"}}
     defaultValue={product.product_Remarks}
     onChange={product_Remarks=>{product.setProperty("product_Remarks", product_Remarks.target.value)}}
     ></TextareaAutosize>
   
     </Grid>
   </Grid>
 
   </form>
      </div>
    );
  }
  


  render(){



return ( 
       
  <this.EditForm/>


 );

}}


export default inject("inventoryStore")(observer(EditForm));