import MomentUtils from '@date-io/moment';
import { Button, TextField } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Typography from '@material-ui/core/Typography';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
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

class AddProduct extends Component {
  constructor(props) {
    super(props);
  
    // this.onFileChange = this.onFileChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
 

    this.state = {
        image: '',
        loading: false,
        selectedFile : undefined,
        props : false
        
    }
    // this.addProd = this.addProd.bind(this)

    
  }



componentWillReceiveProps(nexProps){
  this.state.props = !this.state.props
  if (nexProps.submitted && this.state.props){
    let {startingStore:{addProductImg}}=this.props;
    let formData = new FormData();
    formData.append('productImg' , this.state.selectedFile)
    formData.append('type', 'product')
      addProductImg(formData);

    // console.log("roaw")
  }

}


componentWillUnmount(){
  this.setState({props : !this.state.props})
}



  onFileChange = (e) => {

  this.setState({ loading: true });
  let {startingStore:{product}}=this.props;
  
      this.setState({selectedFile:e.target.files[0]})
    
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





//  AddProd = (e) => {
//   let {startingStore:{addProductImg ,product}}=this.props;
 

  

//   setTimeout(() => {
//     this.setState({ loading: false, visible: false });
//   }, 3000);
// };

 AddProductForm = () => {
  // const [image,fileUpload]= React.useState(0);
  const [labelWidth, setLabelWidth] = React.useState(0);   
  const [selectedDate, setSelectedDate] = React.useState(new Date('2019-08-18T21:11:54'));
  const [exselectedDate, exsetSelectedDate] = React.useState(new Date('2019-08-18T21:11:54'));
  let {startingStore:{product}}=this.props
  // const handleDateChange = date => {
    // setSelectedDate(date);
  // };
  const inputLabel = React.useRef(null);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const classes = useStyles();

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


  //  function onFileChange (e){
  //       // ({ image: e.target.files[0] })

       
  //   }
  return (
    <form className={classes.root} noValidate autoComplete="off">
        
         <Grid container  direction="row" sm={12} >
         <Grid item xs={4} style={{margin:"5px"}}>

      <div className="container">
       
       <input
        accept="image/*"
    
        id="contained-button-file"
        multiple
        type="file"
        style={{display:"none"}}
        onChange={e=> this.onFileChange(e)}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained"  component="span" color="primary" style={{height:"100%",width:"100%",color:"white"}}>
    {this.state.loading ?  <CircularProgress color="secondary" style={{margin:"5px"}}/>: <PhotoCamera style={{margin:"5px"}}/>} Upload Image
        </Button>
      </label>

   
      </div>

      </Grid>
      <Grid item xs={6} style={{textAlign:"center"}}>

 <img src={this.state.image} ></img>


      </Grid>
      </Grid>
<Typography variant="h6" style={{color:"#208769"}}> Basic Info</Typography>

       <Grid container direction="row" sm={12} >
           <Grid item  xs={6} style={{margin:"5px"}}>
      <TextField 
      id="outlined-basic" 
      label="Item Name" 
      variant="outlined" 
      
      style={{width:"98%"}}
      onChange={
        product_Name=>{
          product.setProperty("product_Name", product_Name.target.value)
          
        product.setProperty('product_ID',`${getHash(product_Name.target.value)}-${ Math.floor(1000 + Math.random() * 9000)}` )
        
      
      }}
      
      /></Grid>
      <Grid item  xs={5} style={{margin:"5px"}}>
        {/* <TextField 
      id="outlined-basic" 
      label="Category" 
      variant="outlined" 
      onChange={product_Category=>{product.setProperty("product_Category", product_Category.target.value)}}
      /> */}
      
      
      <FormControl variant="outlined" className={classes.formControl} style={{width:"100%"}}>
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
          <MenuItem value="beverages">Beverages</MenuItem>
          <MenuItem value="cannedGoods">Canned Goods</MenuItem>
          <MenuItem value="snacks">Snacks</MenuItem>
        </Select>
      </FormControl>
      </Grid>
 
      <Grid item xs={6} style={{margin:"5px"}}>
        
        {/* <TextField 
      id="outlined-basic"
      style={{width:"100%"}} 
      label="Standard UoM" 
      variant="outlined" 
      onChange={product_UoM=>{product.setProperty("product_UoM", product_UoM.target.value)}}
      /> */}
      
      <TextField 
      id="outlined-basic" 
      style={{width:"98%"}}
      label="Price" 
      variant="outlined" 
      onChange={product_Price=>{product.setProperty("product_Price", product_Price.target.value)}}
      />
      </Grid>
      <Grid xs={5} item style={{margin:"5px"}}>
        
            <FormControl variant="outlined" className={classes.formControl} style={{width:"100%"}}>
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
          <MenuItem value="Pcs">Pcs</MenuItem>
          <MenuItem value="Pack">Pack</MenuItem>
          <MenuItem value="Box">Box</MenuItem>
          <MenuItem value="Case">Case</MenuItem>
        </Select>
      </FormControl>
      </Grid>
     <Grid item  xs={12} style={{margin:"5px",}}>
       <TextField 
      id="outlined-basic" 
      style={{width:"100%"}}
      label="Description" 
      variant="outlined"
      onChange={product_Description=>{product.setProperty("product_Description", product_Description.target.value)}}
      /></Grid>
      </Grid>



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
      onChange={product_Barcode=>{product.setProperty("product_Barcode", product_Barcode.target.value)}}
      />
      </Grid>
      <Grid xs={5} item style={{margin:"5px"}}>
      {/* <TextField 
      id="outlined-basic" 
      style={{width:"100%"}}
      label="Brand" 
      variant="outlined" 
      onChange={product_Brand=>{product.setProperty("product_Brand", product_Brand.target.value)}}
      /> */}
        <FormControl variant="outlined" className={classes.formControl} style={{width:"100%"}}>
        <InputLabel ref={inputLabel}  id="demo-simple-select-outlined-label">
          Brand
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          maxWidth="100"
          onChange={product_Brand=>{product.setProperty("product_Brand", product_Brand.target.value)}}
          labelWidth={labelWidth}
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value="Oishi">Oishi</MenuItem>
          <MenuItem value="P&G">P&G</MenuItem>
          <MenuItem value="Uniliver">Uniliver</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid xs={5} item style={{margin:"5px"}}>
      {/* <TextField 
      id="outlined-basic" 
      style={{width:"100%"}}
      label="Date Received" 
      variant="outlined" 
      onChange={product_DateReceived=>{product.setProperty("product_DateReceived", product_DateReceived.target.value)}}
      /> */}
           <MuiPickersUtilsProvider utils={MomentUtils} >
     

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
      <Grid xs={5} item style={{margin:"5px"}}>
      {/* <TextField 
      id="outlined-basic" 
      style={{width:"100%"}}
      label="Expiration Date" 
      variant="outlined"
      onChange={product_ExpirationDate=>{product.setProperty("product_ExpirationDate", product_ExpirationDate.target.value)}}
      /> */}
     
       <MuiPickersUtilsProvider utils={MomentUtils} >
     

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
      </Grid>
      
      <Typography variant="h6" style={{color:"#208769"}}>Multiple Item Options</Typography>
       <Grid

  container

  direction="row"
  justify="flex-start"
  alignItems="flex-start"
  
>
           <Grid xs={6} item style={{margin:"5px"}}>
           <FormControl variant="outlined" className={classes.formControl} style={{width:"100%"}}>
        <InputLabel ref={inputLabel}  id="demo-simple-select-outlined-label">
          Size
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          maxWidth="100"
          disabled
          onChange={product_Brand=>{product.setProperty("product_Brand", product_Brand.target.value)}}
          labelWidth={labelWidth}
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value="Oishi">Oishi</MenuItem>
          <MenuItem value="P&G">P&G</MenuItem>
          <MenuItem value="Uniliver">Uniliver</MenuItem>
        </Select>
      </FormControl>
      </Grid>

      <Grid xs={5} item style={{margin:"5px"}}>
      <TextField 
      id="outlined-basic" 
      style={{width:"98%"}}
     
      variant="outlined"
      onChange={product_Barcode=>{product.setProperty("product_Barcode", product_Barcode.target.value)}}
      />
  
      </Grid>

      <Grid xs={6} item style={{margin:"5px"}}>
           <FormControl variant="outlined" className={classes.formControl} style={{width:"100%"}}>
        <InputLabel ref={inputLabel}  id="demo-simple-select-outlined-label">
          Flavor
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          maxWidth="100"
          disabled
          onChange={product_Brand=>{product.setProperty("product_Brand", product_Brand.target.value)}}
          labelWidth={labelWidth}
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value="Oishi">Oishi</MenuItem>
          <MenuItem value="P&G">P&G</MenuItem>
          <MenuItem value="Uniliver">Uniliver</MenuItem>
        </Select>
      </FormControl>
      </Grid>

      <Grid xs={5} item style={{margin:"5px"}}>
      <TextField 
      id="outlined-basic" 
      style={{width:"98%"}}
     
      variant="outlined"
      onChange={product_Barcode=>{product.setProperty("product_Barcode", product_Barcode.target.value)}}
      />
  
      </Grid>


      </Grid>

      <Typography variant="h6" style={{color:"#208769"}}> Remarks :</Typography>
      <Grid  container direction="row">
           <Grid item style={{margin:"5px"}} xs={12}>
      <TextareaAutosize  
      rowsMin={6} 
      style={{width:"100%",fontSize:"20px"}}
      onChange={product_Remarks=>{product.setProperty("product_Remarks", product_Remarks.target.value)}}
      ></TextareaAutosize>
    
      </Grid>
    </Grid>
  
    </form>
  );
}


  
  render() { 

  // const RegForm = ((props) => {    
  
  
  return(
  <div>

 <this.AddProductForm/>

  </div>     
 
  

 );
}
}
export default inject('startingStore')(observer(AddProduct));