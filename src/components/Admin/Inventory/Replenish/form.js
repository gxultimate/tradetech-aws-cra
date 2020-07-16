import MomentUtils from '@date-io/moment';
import { TextField, Typography ,ThemeProvider} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { inject, observer } from 'mobx-react';
import moment from 'moment';
import React, { Component } from 'react';
import Resizer from 'react-image-file-resizer';


import theme from './../../../theme'





// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

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

// const useStyles = makeStyles(theme => ({
  
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: 200,
//     },
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 220,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
//     formControl2: {
//       margin: theme.spacing(1),
//       minWidth: 220,      },
//   },
// }));

//   var dateB = moment(account_birthday).format('YYYY MMMM Do ');
// console.log(dateB);
  function getHash(input){
    var hash = 0, len = input.length;
    for (var i = 0; i < len; i++) {
      hash  = ((hash << 5) - hash) + input.charCodeAt(i);
      hash |= 0; // to 32bit integer
    }
  
            
  
    return hash;
  }
class ReplenishForm extends Component{

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


  ReplenishForm = () => {
    const classes = useStyles();
    let {inventoryStore:{product,stock}}=this.props
    // const [labelWidth, setLabelWidth] = React.useState(0);   
    const [selectedDate, setSelectedDate] = React.useState(new Date('2019-08-18T21:11:54'));
    const [exselectedDate, exsetSelectedDate] = React.useState(new Date('2019-08-18T21:11:54'));




      console.log(product,"prod")


      function handleReceived(date) {
        setSelectedDate(date);
        let dReceive =  moment(date).format('MMMM Do YYYY')
        console.log(dReceive);
        stock.setProperty("product_replenishDate", dReceive)
        }
        function handleExpiration(exDate) {
          exsetSelectedDate(exDate);
          let dExpiration =  moment(exDate).format('MMMM Do YYYY')
          
          console.log(dExpiration);
          stock.setProperty("product_expirationDate", dExpiration)
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

     {/* <div className="container">
      
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

  
     </div> */}

     </Grid>
     <Grid item xs={6} style={{textAlign:"center"}}>

<img src={this.state.image} ></img>


     </Grid>
     </Grid>
{/* <Typography variant="h6" style={{color:"#208769"}}> Basic Info</Typography>

      <Grid container direction="row" sm={12} >
          <Grid item  xs={6} style={{margin:"5px"}}>
     <TextField 
     disabled
     id="outlined-basic" 
     label="Item Name" 
     variant="outlined" 
     defaultValue={product.product_Name}
     style={{width:"98%",color:"black"}}

     
     /></Grid> */}
     {/* <Grid item  xs={5} style={{margin:"5px"}}> */}
       {/* <TextField 
     id="outlined-basic" 
     label="Category" 
     variant="outlined" 
     onChange={product_Category=>{product.setProperty("product_Category", product_Category.target.value)}}
     /> */}
     
{/*      
     <TextField 
     disabled
     id="outlined-basic" 
     style={{width:"98%"}}
     label="Category" 
     variant="outlined"
     defaultValue={product.product_Category}
     
     />
     </Grid>

     <Grid item xs={6} style={{margin:"5px"}}> */}
       
       {/* <TextField 
     id="outlined-basic"
     style={{width:"100%"}} 
     label="Standard UoM" 
     variant="outlined" 
     onChange={product_UoM=>{product.setProperty("product_UoM", product_UoM.target.value)}}
     /> */}
     
  
     {/* </Grid>
     <Grid xs={5} item style={{margin:"5px"}}>
       
     <TextField 
     disabled
     id="outlined-basic" 
     style={{width:"98%"}}
     label="Uom" 
     variant="outlined"
     defaultValue={product.product_UoM}
    
     />
     </Grid>

     </Grid> */}



      <Typography variant="h6" style={{color:"#208769"}}> Storage Info</Typography>
      <Grid

 container

 direction="row"
 justify="flex-start"
 alignItems="flex-start"
 
>
          <Grid xs={6} item style={{margin:"5px"}}>

     </Grid>
     {/* <Grid xs={5} item style={{margin:"5px"}}>
     <TextField 
     disabled
     id="outlined-basic" 
     style={{width:"98%"}}
     label="Barcode" 
     variant="outlined"
     defaultValue={product.product_Brand}
     
     />
     </Grid> */}

     <Grid xs={6} item style={{margin:"5px"}}>
     <TextField 
     disabled
     id="outlined-basic" 
     style={{width:"98%"}}
     label="Available Stocks" 
     variant="outlined"
     defaultValue={product.product_Stocks}
     
     />
     </Grid>
     <Grid xs={5} item style={{margin:"5px"}}>
     <TextField 
  
     id="outlined-basic" 
     style={{width:"98%"}}
     label="Replenish Qty" 
     autoFocus
     variant="outlined"
     onChange={
      product_Stocks=>{
        let {inventoryStore:{listOfProducts}}=this.props;

        stock.setProperty("product_replenishQty", product_Stocks.target.value)
        stock.setProperty("stock_Detail", 'stockIn')
        // product.setProperty("product_Stocks",product_Stocks.target.value + product.product_Stocks.target.value)
        // product.setProperty("product_Stocks", products.product_Stocks + product_Stocks.target.value)
      stock.setProperty('stock_ID',`${getHash(product_Stocks.target.value)}-${ Math.floor(1000 + Math.random() * 9000)}` )
      
    
    }}
     
     />
     </Grid>

     <Grid xs={5} item style={{margin:"5px"}}>
     {/* <TextField 
     id="outlined-basic" 
     style={{width:"100%"}}
     label="Date Received" 
     variant="outlined" 
     onChange={product_DateReceived=>{product.setProperty("product_DateReceived", product_DateReceived.target.value)}}
     /> */}
    <ThemeProvider theme={theme}>
         <MuiPickersUtilsProvider utils={MomentUtils} >
    

    <KeyboardDatePicker
      margin="normal"
      id="dReceive"
      label="Date Received"
    value ={selectedDate}
      color='primary'
      onChange={handleReceived}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
    />


</MuiPickersUtilsProvider>
</ThemeProvider>
     </Grid>
     <Grid xs={5} item style={{margin:"5px"}}>
     {/* <TextField 
     id="outlined-basic" 
     style={{width:"100%"}}
     label="Expiration Date" 
     variant="outlined"
     onChange={product_ExpirationDate=>{product.setProperty("product_ExpirationDate", product_ExpirationDate.target.value)}}
     /> */}
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={MomentUtils} >
    

    <KeyboardDatePicker
      margin="normal"
      id="dExpiration"
      label="Expiration Date"
  value={exselectedDate}
     color='primary'
      onChange={handleExpiration}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
    />

  
</MuiPickersUtilsProvider>
</ThemeProvider>
     </Grid>
     </Grid>
     

 
   </form>
      </div>
    );
  }
  


  render(){



return ( 
       
  <this.ReplenishForm/>


 );

}}


export default inject("inventoryStore")(observer(ReplenishForm));