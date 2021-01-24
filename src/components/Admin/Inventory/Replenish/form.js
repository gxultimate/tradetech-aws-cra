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





 let ReplenishForm = (props) => {
    const classes = useStyles();
    const [image,setImage]=React.useState('')
    const [selectedDate, setSelectedDate] = React.useState(new Date('2019-08-18T21:11:54'));
    const [exselectedDate, exsetSelectedDate] = React.useState(new Date('2019-08-18T21:11:54'));
    let {product,stock}=props.inventoryStore;



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


   let   onFileChange = (e) => {
    
    
         
        
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
    

          
      }






      function handleReceived(date) {
        setSelectedDate(date);
        let dReceive =  moment(date).format('MMMM Do YYYY')
   
        stock.setProperty("product_replenishDate", dReceive)
        }
        function handleExpiration(exDate) {
          exsetSelectedDate(exDate);
          let dExpiration =  moment(exDate).format('MMMM Do YYYY')
          
        
          stock.setProperty("product_expirationDate", dExpiration)
          }

  
      
    return (
      <div >

      
<form className={classes.root} noValidate autoComplete="off">
        
        <Grid container  direction="row" sm={12} >
        <Grid item xs={4} style={{margin:"5px"}}>


     </Grid>
     <Grid item xs={6} style={{textAlign:"center"}}>

<img src={image} ></img>


     </Grid>
     </Grid>




      <Typography variant="h6" style={{color:"#208769"}}> Storage Info</Typography>
      <Grid

 container

 direction="row"
 justify="flex-start"
 alignItems="flex-start"
 
>
          <Grid xs={6} item style={{margin:"5px"}}>

     </Grid>


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
        

        stock.setProperty("product_replenishQty", product_Stocks.target.value)
        stock.setProperty("stock_Detail", 'stockIn')
       
      stock.setProperty('stock_ID',`${getHash(product_Stocks.target.value)}-${ Math.floor(1000 + Math.random() * 9000)}` )
      
    
    }}
     
     />
     </Grid>

     <Grid xs={5} item style={{margin:"5px"}}>
  
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
  




export default inject("inventoryStore")(observer(ReplenishForm));