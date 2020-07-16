import { Button,IconButton } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';

import { makeStyles ,ThemeProvider} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { inject, observer } from 'mobx-react';
import React, { Component, Fragment } from 'react';
import {withRouter } from 'react-router-dom'
import InfoIcon from '@material-ui/icons/Info';
import theme from './../../theme'


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import moment from 'moment'

import Quantity from './quantity'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },

}));
class AllProd extends Component {

    

  componentDidMount(){
   
    let {customerStore:{getProducts}}=this.props;
  
    getProducts();
    
  }

constructor(props){
  super(props)
  this.state ={
    open:'',
    price_total:'',
    addCartItem:'',
    listOfCart:[],
        
    snackbaropen:false,
    snackbaropenE:false,
    snackbar:"Item added to your cart.",
    snackbarE:"Incorrect username or password.",
    snackbaropenC:'',
    snackbarC:"Item already on cart.",

  }
 
  this.priceChange= this.priceChange.bind(this)

}

snackbarClose =()=>{
  this.setState({snackbaropen:false});
}

priceChange(totalValue){
  return (`total ${totalValue}`)
}

handleClose =()=>{
  const {open}=this.state;
    this.setState({
      open:false
    });
  

}

  render() { 
    let getId = JSON.parse(sessionStorage.getItem('userData'))
    let getdist = JSON.parse(sessionStorage.getItem('distData'))


    let {customerStore:{addtoCart,cart,listOfCart}}=this.props;
    function Alert(props) {
      return <MuiAlert elevation={6} variant="filled" {...props} />;
    } 
    let addCart =(prod)=>{
  
      let filcart = listOfCart.filter(itm => itm.product_ID === prod.product_ID).length;
  

     if(filcart === 0){
      this.setState({
        addCartItem:prod.product_Price
      });
      this.setState({
        open:true
      });

      cart.setProperty("account_ID",getId.account_ID)
      cart.setProperty("product_ID",prod.product_ID)
      cart.setProperty('distributor_ID',getdist.distributor_ID)
      cart.setProperty("product_Name",prod.product_Name)
      cart.setProperty("product_Category",prod.product_Category)
      cart.setProperty("product_Price",prod.product_Price)
      cart.setProperty("product_UoM",prod.product_UoM)
      
      cart.setProperty("product_Img",prod.product_Img)
      cart.setProperty("product_Barcode",prod.product_Barcode)
      cart.setProperty("product_Brand",prod.product_Brand)
      cart.setProperty("product_Stocks",prod.product_Stocks)
      cart.setProperty("product_DateReceived",prod.product_DateReceived)
      cart.setProperty("product_ExpirationDate",prod.product_ExpirationDate)
      cart.setProperty("product_Remarks",prod.product_Remarks)
      cart.setProperty("product_TransactionDate",moment().format('MMM/DD/YYYY,h:mm:ssa'))
     }else{
      this.setState({
      snackbaropenC:true,
    });
setTimeout(()=>{
  this.setState({
  
    snackbaropenC:false,
  });
},1000)

     }


      
    
    }
    let submitItem =()=>{
 
     
addtoCart();

setTimeout(() => {

    this.setState({
      open:false,
      snackbaropen:true
    });
  
  }, 1000);



      
    }


    let {customerStore:{listofProducts,product}}= this.props;
   
     let disId=JSON.parse(sessionStorage.getItem('distData'));




    const handleClick = (products) => {
   

        
          product.setProperty("product_ID", products.product_ID)

           
          setTimeout(() => {
          
  
            this.props.history.push({"pathname":"/Customer/ItemInfo", state:{ prod_id: products.product_ID,dis_id:disId.distributor_ID}} )
          }, 500);
        };  


     let filter = this.props.mysearch;
        
 

  


     let Allprod =listofProducts.filter(allprod => allprod.product_Stocks != 0).map(product => {
    
      
      if(filter.length !== 0){
        if( product.product_Name.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) || product.product_Category.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) 
        ||
        product.product_Name.toLocaleLowerCase().split(' ').slice(-1).join(' ').startsWith(filter.toLocaleLowerCase()) || product.product_Variant.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) 
        ){
         
      return (
      
  <Grid item xs={6} sm={2} key={product.product_ID}>
  
  <Card style={{minHeight:"100%"}}>
    <ThemeProvider theme={theme}>
  <CardHeader
   
    style={{fontSize:'10px',fontWeight:'bold',paddingTop:0,paddingBottom:0}}
    disableTypography
        subheader={product.product_Name}
  
        action={
          <IconButton aria-label="settings" onClick={()=>{handleClick(product)}} color='secondary'>
            <InfoIcon />
          </IconButton>
        }
      />
  </ThemeProvider>
  
  
  
  <CardMedia style={{margin:"auto"}}
  
  
  >
  <img  src={product.product_Img} style={{height:"140px",width:"90%",margin:"auto"}} />
  </CardMedia>
  <CardContent>
  <Grid container xs={12} >
  <Grid item xs={6}>
  <Typography style={{textAlign:"left",color:"#208769",fontSize:'11px',}}>&#8369;{product.product_Price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} </Typography>
  </Grid>
  <Grid item xs={6}>
  <Typography style={{textAlign:"right",fontSize:'11px',}}>{product.product_UoM} </Typography>
  </Grid>

  <Grid item xs={12}>
  <Typography style={{textAlign:"left",fontSize:'11px',}}>VAR:{product.product_Variant} </Typography>
  </Grid>

  
  
  </Grid>
  </CardContent>
  <CardActions  justify="bottom" style={{margin:"auto"}}>
  
  <Button  style={{backgroundColor:"#208769",margin:"auto",color:"white"}} size="small" variant="contained" onClick={()=>{addCart(product)}}>Add to Cart</Button>
  <Dialog
  open={this.state.open}
  TransitionComponent={Transition}
  keepMounted
  onClose={this.handleClose}
  aria-labelledby="alert-dialog-slide-title"
  aria-describedby="alert-dialog-slide-description"
  >
  <DialogTitle id="alert-dialog-slide-title">{"Enter Quantity"}</DialogTitle>
  <DialogContent>
  <Quantity price={this.state.addCartItem} handleChanges={this.priceChange}/>
  </DialogContent>
  <DialogActions>
    <Button onClick={this.handleClose} style={{backgroundColor:"#FFA500",color:"white"}} size='small'>
      Cancel
    </Button>
    <Button onClick={()=>{submitItem()}} style={{backgroundColor:"#208769",color:"white"}} size='small'>
      Enter
    </Button>
  </DialogActions>
  </Dialog>
  </CardActions>
  
  </Card>
  </Grid>
  
        
        )
      }
      else{
        return null
      }
    }
    return (
      
  <Grid item xs={6} sm={2}>
  
  <Snackbar anchorOrigin={{vertical:'top',horizontal:'center'}}    open={this.state.snackbaropen} autoHideDuration={2000} onClose={this.snackbarClose}  >   
       <Alert  severity="success">
       {this.state.snackbar}
        </Alert></Snackbar>

        <Snackbar anchorOrigin={{vertical:'top',horizontal:'center'}}    open={this.state.snackbaropenE} autoHideDuration={2000} onClose={this.snackbarClose}  >   
       <Alert  severity="error">
       {this.state.snackbarE }
        </Alert></Snackbar>


        <Snackbar anchorOrigin={{vertical:'top',horizontal:'center'}} style={{position:'fixed'}}   open={this.state.snackbaropenC} autoHideDuration={2000} onClose={this.snackbarClose}  >   
       <Alert onClose={this.snackbarClose}  severity="warning">
       {this.state.snackbarC }
        </Alert></Snackbar>

  <Card style={{minHeight:"100%"}}>
  <ThemeProvider theme={theme}>
  <CardHeader
    style={{fontSize:'10px',fontWeight:'bold',paddingTop:0,paddingBottom:0,paddingRight:0}}
    disableTypography
        subheader={product.product_Name}
        action={
          <IconButton aria-label="settings" size='small 
          ' onClick={()=>{handleClick(product)}} color='secondary' >
            <InfoIcon  size='small'/>
          </IconButton>
        }
      />
  </ThemeProvider>
  
  
  <CardMedia style={{margin:"auto"}}
  
  
  >
  <img  src={product.product_Img} style={{height:"140px",width:"100%",margin:"auto"}} />
  </CardMedia>
  <CardContent>
  <Grid container xs={12} >
  <Grid item xs={6}>
  <Typography style={{textAlign:"left",color:"#208769",fontSize:'11px',}}>&#8369;{product.product_Price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} </Typography>
  </Grid>
  <Grid item xs={6}>
  <Typography style={{textAlign:"right",fontSize:'11px',}}>{product.product_UoM} </Typography>
  </Grid>
  <Grid item xs={12}>
  <Typography style={{textAlign:"left",fontSize:'11px',}}>VAR:{product.product_Variant} </Typography>
  </Grid>

  
  </Grid>
  </CardContent>
  <CardActions  justify="bottom" style={{margin:"auto"}}>
  
  <Button  style={{backgroundColor:"#208769",margin:"auto",color:"white"}} size="small" variant="contained" onClick={()=>{addCart(product)}}>Add to cart</Button>
  
  </CardActions>
  
  </Card>
  
  <Dialog
  open={this.state.open}
  TransitionComponent={Transition}
  keepMounted
  onClose={this.handleClose}
  aria-labelledby="alert-dialog-slide-title"
  aria-describedby="alert-dialog-slide-description"
  >
  <DialogTitle id="alert-dialog-slide-title">{"Enter Quantity"}</DialogTitle>
  <DialogContent>
  <Quantity price={this.state.addCartItem} handleChange={this.priceChange}/>
  </DialogContent>
  <DialogActions>
    <Button onClick={this.handleClose} style={{backgroundColor:"#FFA500",color:"white"}} size='small'>
      Cancel
    </Button>
    <Button onClick={submitItem} style={{backgroundColor:"#208769",color:"white"}} size='small'>
      Enter
    </Button>
  </DialogActions>
  </Dialog>
  </Grid>
  
  
  
    )
    })

       

 function Items() {
  const classes = useStyles();
  



  


  return (
    <React.Fragment>
    <Grid container sm={12} xs={12}>
    <Grid item sm={12} xs={12}>
    
    </Grid>
      </Grid>
    <div style={{marginBottom:"50px"}}>
  
      <Grid container spacing={3} md={12}>
      <Grid item sm={12} style={{width:'100%'}}>
  


  

   </Grid>
   
       {Allprod}
      
      </Grid>
    </div>
   

    </React.Fragment>
  );
}
return ( 
  <Items/>
 );
}
}

export default withRouter(inject("customerStore")(observer(AllProd)));
