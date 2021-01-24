import MomentUtils from '@date-io/moment';
import { TextField, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { inject, observer } from 'mobx-react';
import moment from 'moment';
import React, { Component } from 'react';
import Resizer from 'react-image-file-resizer';









 let EditForm = (props) => {
    const classes = useStyles();
   
    const [labelWidth, setLabelWidth] = React.useState(0);  
    const [image,setImage] = React.useState('')
    const [loading,setLoading]=React.useState(false)
    const [selectedDate, setSelectedDate] = React.useState(new Date('2019-08-18T21:11:54'));
    const [exselectedDate, exsetSelectedDate] = React.useState(new Date('2019-08-18T21:11:54'));
    let {product,pricehist}=props.inventoryStore;
   

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


  let  onFileChange = (e) => {
    
      setLoading( true );
    
      
        Resizer.imageFileResizer(
          e.target.files[0],
          100,
          100,
          'JPEG',
          100,
          0,
          uri => {
            setImage(uri)
            product.setProperty('product_Img',uri)
          },
          'URI'
         
      )
      setTimeout(() => {
            
        setLoading( false );
            }, 2000);
    
        
    }


    const inputLabel = React.useRef(null);
    React.useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
    


      function handleReceived(date) {
        setSelectedDate(date);
        let dReceive =  moment(date).format('MMMM Do YYYY')
       
        product.setProperty("product_DateReceived", dReceive)
        }
        function handleExpiration(exDate) {
          exsetSelectedDate(exDate);
          let dExpiration =  moment(exDate).format('MMMM Do YYYY')
          
         
          product.setProperty("product_ExpirationDate", dExpiration)
          }

  

  
    let priceChanged =(newPrice)=>{
      
    
   
    
   if (newPrice != product.product_Price){
    product.setProperty("product_Price", newPrice)
     pricehist.setProperty('priceHistID',`${product.product_ID}-${ Math.floor(100 + Math.random() * 900)}`)
     pricehist.setProperty('product_ID',product.product_ID)
     pricehist.setProperty('priceFrom',this.props.price)
     pricehist.setProperty('priceTo',newPrice)
     pricehist.setProperty('dateCreated',moment().format('MMM/DD/YYYY'))


   }else{
    product.setProperty("product_Price", newPrice)
     console.log('nochange')
   }
    }
  
      
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
 
      onChange={(newPrice)=>priceChanged(newPrice.target.value)}
      />
      </Grid>
      <Grid xs={5} item style={{margin:"5px"}}>
        

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

      <TextField 
      
      id="outlined-basic" 
      style={{width:"100%"}}
      label="Variant" 
      variant="outlined" 
      defaultValue={product.product_Variant}
  
      
 
      onChange={product_Variant=>{product.setProperty("product_Variant", product_Variant.target.value)}}
      />

     

      </Grid>
 

     <Grid item  xs={5} item style={{margin:"5px"}}>
       <TextField 
      id="outlined-basic" 
      style={{width:"100%"}}
      label="Description" 
      defaultValue={product.product_Description}
      variant="outlined"
      onChange={product_Description=>{product.setProperty("product_Description", product_Description.target.value)}}
      /></Grid>


<Grid item  xs={6} style={{margin:"5px"}}>
   
<FormControl variant="outlined" className={classes.formControl} style={{width:"100%"}}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Status
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          maxWidth="100"
          label='Status'
          defaultValue={product.product_Status}
          onChange={product_Status=>{product.setProperty("product_Status", product_Status.target.value)}}
          labelWidth={labelWidth}
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="onSale">On Sale</MenuItem>
         
        </Select>
      </FormControl>
   
   </Grid>

    
      </Grid>





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
  





export default inject("inventoryStore")(observer(EditForm));