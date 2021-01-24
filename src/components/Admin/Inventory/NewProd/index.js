
import MomentUtils from '@date-io/moment';
import Button from '@material-ui/core/Button';
import {Dialog,DialogContent,DialogTitle,DialogActions, Grid,MenuItem,FormControl,TextField,Select,InputLabel} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
<<<<<<< HEAD
import { inject, observer } from 'mobx-react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Resizer from 'react-image-file-resizer';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import imageCompression from 'browser-image-compression';
import theme from './../../theme'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment';
class UploadProd extends Component {


     
       state = {
         
          selectedFile: null,
     
        }

       
      

      
       
    


  
   




    render() {

        let {inventoryStore:{product,addProductImg}}=this.props;
  let userData=JSON.parse(sessionStorage.getItem('userData'))



        function getHash(input){
            var hash = 0, len = input.length;
            for (var i = 0; i < len; i++) {
              hash  = ((hash << 5) - hash) + input.charCodeAt(i);
              hash |= 0; // to 32bit integer
            }
          
                    
          
            return hash;
          }


          async function handleImageUpload(event) {


            var imageFile = event.target.files[0];
    
    
        
            var options = {
              maxSizeMB: 10,
              maxWidthOrHeight: 1000,
              useWebWorker: false,
            };
            let image = await imageCompression(imageFile, options)
              .then(function (compressedFile) {
                return compressedFile;
              })
              .catch(function (error) {
                console.log(error.message);
              });
              product.setProperty('product_Img',image)
            
          }



   let   Submit=()=> {
   
    this.product.setProperty('distributor_ID' ,userData.distributor_ID)
    let formData = new FormData();
    formData.append('productImg' , product.product_Img)

    formData.append('type', 'product')
=======
import AddProductForm from './Form.js';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';



  const AddProducts = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [image, setImage] = React.useState('');
    const [submitted, setSubmitted] = React.useState(false);
    const [snackbaropen, setSnackbaropen] = React.useState(false);
    const [snackbarmessage, setSnackbarmessage] = React.useState("Product Successfully Added!");
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    let {product}=props.startingStore;

    const useStyles = makeStyles(theme => ({
      appBar: {
        position: 'relative',
      },
      title: {
        marginLeft: theme.spacing(2),
        flex: 1,
      },
    }));
    
    const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
    });

   let snackbarClose =(event)=>{
      setSnackbaropen(false);
    }
  
   let addProd = (e) => {
      setSubmitted( true )

      let getDisId = JSON.parse(sessionStorage.getItem('userData'))
      product.setProperty("distributor_ID", getDisId.distributor_ID)
      product.setProperty("product_Status", 'active')
  
    setTimeout(()=>{
  
   
       setSnackbaropen( true );
  
      },1500) 
    }


    const handleClickOpen = () => {
      setOpen(true);
    };
>>>>>>> ca76084c9e1065cc3b873dbaaed1042c6ffdc1de
  
      addProductImg(formData);

      }





  

 function UploadDialog() {
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date('08-18-2019'));
  const [exselectedDate, exsetSelectedDate] = React.useState(new Date('08-18-2020'));
 
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function handleReceived(date) {
    setSelectedDate(date);
    let dReceive =  moment(date).format('MMM/DD/YYYY')
  
    product.setProperty("product_DateReceived", dReceive)
    }
<<<<<<< HEAD
    function handleExpiration(exDate) {
      exsetSelectedDate(exDate);
      let dExpiration =  moment(exDate).format('MMM/DD/YYYY')
      
=======
   
    return (                  
      <div>
       <Snackbar anchorOrigin={{vertical:'top',horizontal:'center'}}  open={snackbaropen} autoHideDuration={3000} onClose={snackbarClose}  >   
       <Alert  severity="success">
       {snackbarmessage }
        </Alert></Snackbar>
>>>>>>> ca76084c9e1065cc3b873dbaaed1042c6ffdc1de
    
      product.setProperty("product_ExpirationDate", dExpiration)
      }
  return (
    <div>
         <Button variant="outlined" size='small'  onClick={handleClickOpen} style={{margin:"8px",backgroundColor:"#208769",color:"white"}}>
            <AddCircleOutlineIcon/> <span style={{marginLeft:"5px"}}>Add Item</span> 
        </Button>
        <form  autoComplete='off'>
      <Dialog  aria-labelledby="customized-dialog-title" open={open}>
   
        <DialogTitle id="customized-dialog-title" onClose={handleClose} style={{backgroundColor:'#208769'}}>
        <span style={{color:'#FFA500'}}> Add new product</span> 
        </DialogTitle>
        <DialogContent dividers>
  


<Grid container direction="row" justify="flex-start" alignItems="flex-start">




    <Grid item xs={12}>
    <Grid container direction="row" xs={12}  >
		<Grid item xs={3} style={{margin:'4px'}}>

       
        <div className="container">
       <input

        id="contained-button-file"
        accept="image/*"
        type="file"
        style={{display:"none"}}
        onChange={(e)=>handleImageUpload(e)}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained"  component="span" startIcon={<PhotoCamera  />}  size='small'  style={{color:"white",backgroundColor:"#208769"}}>
    Upload</Button>
      </label>
      </div>
   
     


        </Grid>

        <Grid item xs={6} style={{textAlign:"center"}}>

<img 
// src={this.state.selectedFile} 
></img>


     </Grid>

</Grid>
    </Grid>


    <Grid item xs={12}>
    <Grid container direction="row" xs={12}  >
		<Grid item xs={4} style={{marginBottom:'2px'}}>


        <TextField 
      id="outlined-basic" 
      label="Item Name" 
      variant="outlined" 
      size='small'
      style={{
        width: '98%'
    }}
      onChange={
        product_Name=>{
          product.setProperty("product_Name", product_Name.target.value)
          
        product.setProperty('product_ID',`${getHash(product_Name.target.value)}-${ Math.floor(1000 + Math.random() * 9000)}` )
        
      
      }}
      
      />
     


        </Grid>

        <Grid item xs={4} style={{marginBottom:'2px'}}>


        <FormControl variant="outlined" size='small' style={{width:"98%"}}>
        <InputLabel  id="demo-simple-select-outlined-label">
          Packaging
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          maxWidth="100"
          label='Packaging'
          onChange={product_Packaging=>{product.setProperty("product_Packaging", product_Packaging.target.value)}}
         
        >
<<<<<<< HEAD
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


     <Grid item  xs={4} style={{margin:"0px"}}>
    
=======
          <DialogTitle id="responsive-dialog-title" style={{backgroundColor:"#208769"}}><Typography variant="h5" style={{color:"white"}}>Add New Product</Typography></DialogTitle>
          <Divider/>
          <DialogContent >
      <AddProductForm submitted={submitted}  />
          </DialogContent>
          <DialogActions>
          <Button autoFocus onClick={()=>addProd()} style={{backgroundColor:"#208769",color:"white"}}>
            <span style={{paddingLeft:"8px",paddingRight:"8px"}}>  Submit</span>
            </Button>
>>>>>>> ca76084c9e1065cc3b873dbaaed1042c6ffdc1de
      
      


    <FormControl  variant="outlined" size='small' style={{width:"98%"}}>
      <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
      <Select native labelId="demo-simple-select-outlined-label"  label="Category"  
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


</Grid>
    </Grid>


    <Grid item xs={12}>
    <Grid container direction="row" xs={12}  >
		<Grid item xs={4} style={{marginBottom:'2px'}}>
        <TextField 
      id="outlined-basic" 
      style={{width:"98%"}}
      label="Price" 
      variant="outlined" 
      type='number'
      size='small'
 
      onChange={product_Price=>{product.setProperty("product_Price", product_Price.target.value)}}
      />
            </Grid>


<Grid item xs={4} style={{marginBottom:'2px'}}>
<TextField 
      id="outlined-basic" 
      style={{width:"98%"}}
      label="UOM (g/kg)" 
      variant="outlined" 
      size='small'
      
 
      onChange={product_UoM=>{product.setProperty("product_UoM", product_UoM.target.value)}}
      />  
            </Grid>

            <Grid item xs={4} style={{marginBottom:'2px'}}>
            <TextField 
      id="outlined-basic" 
      style={{width:"98%"}}
      label="Variant" 
      size='small'
      variant="outlined" 
  
      
 
      onChange={product_Variant=>{product.setProperty("product_Variant", product_Variant.target.value)}}
      />
            </Grid>

            



            </Grid>
            </Grid>


            <Grid item xs={12}>
    <Grid container direction="row" xs={12}  >
		<Grid item xs={12} style={{marginBottom:'2px'}}>
        <TextField 
      id="outlined-basic" 
      style={{width:"100%"}}
      multiline
     rows={5}
      size='small'
      label="Description" 
      variant="outlined"
      onChange={product_Description=>{product.setProperty("product_Description", product_Description.target.value)}}
      />
            </Grid>
            </Grid>
            </Grid>



            <Grid item xs={12}>
    <Grid container direction="row" xs={12}  >
		<Grid item xs={6} style={{marginBottom:'2px'}}>
        <TextField 
      id="outlined-basic" 
      style={{width:"98%"}}
      tyle='number'
      label="Stocks" 
      size='small'
      variant="outlined"
      onChange={product_Stocks=>{product.setProperty("product_Stocks", product_Stocks.target.value)}}
      />
</Grid>
<Grid item xs={6} style={{marginBottom:'2px'}}>
<FormControl size='small' variant="outlined"  style={{width:"100%"}}>
        <InputLabel   id="demo-simple-select-outlined-label">
          Brand
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          maxWidth="100"
          onChange={product_Brand=>{product.setProperty("product_Brand", product_Brand.target.value)}}
        
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
</Grid>
</Grid>


<<<<<<< HEAD

<Grid item xs={12}>
    <Grid container direction="row" xs={12}  >

    <ThemeProvider theme={theme}>
      <Grid xs={6} item style={{marginBottom:"4px"}}>
  
           <MuiPickersUtilsProvider utils={MomentUtils} >
     

     <KeyboardDatePicker
     color='primary'
       margin="normal"
       id="dReceive"
       label="Date Received"
       format="MMM/DD/YYYY"
       size='small'
     value ={selectedDate}
       
       onChange={handleReceived}
       KeyboardButtonProps={{
         'aria-label': 'change date',
       }}
     />

   
 </MuiPickersUtilsProvider>
      </Grid>
      <Grid xs={6} item style={{marginBottom:"4px"}}>
 
     
       <MuiPickersUtilsProvider utils={MomentUtils} >
     

     <KeyboardDatePicker
     color='primary'
       margin="normal"
       size='small'
       id="dExpiration"
       label="Expiration Date"
   value={exselectedDate}
   format="MMM/DD/YYYY"
       onChange={handleExpiration}
       KeyboardButtonProps={{
         'aria-label': 'change date',
       }}
     />

   
 </MuiPickersUtilsProvider>

      </Grid>
      </ThemeProvider>
        </Grid>
        </Grid>


        <Grid item xs={12}>
    <Grid container direction="row" xs={12}  >
		<Grid item xs={12} style={{marginBottom:'2px'}}>
        <TextField 
      id="outlined-basic" 
      style={{width:"100%"}}
      multiline
     rows={5}
      size='small'
      label="Remarks" 
      variant="outlined"
      onChange={product_Remarks=>{product.setProperty("product_Remarks", product_Remarks.target.value)}}
      />
            </Grid>
            </Grid>
            </Grid>


</Grid>























        </DialogContent>
        <DialogActions>
          <Button size='small' onClick={handleClose} style={{backgroundColor:"#F7A31C",color:"white"}}>
            Close
          </Button>
          <Button size='small' type='submit' autoFocus onClick={Submit} style={{backgroundColor:"#208769",color:"white"}}>
            Submit
          </Button>
    
        </DialogActions>
      </Dialog>
      </form>
    </div>
  );
}
return (
    <UploadDialog/>
)
}
}

export default inject('inventoryStore')(observer(UploadProd))
=======
export default inject("startingStore")(observer(AddProducts));
>>>>>>> ca76084c9e1065cc3b873dbaaed1042c6ffdc1de
