import React from 'react';
import { makeStyles,ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import {Typography,Button,IconButton} from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import {inject,observer} from 'mobx-react'
import InfoIcon from '@material-ui/icons/Info';
import Quantity from './quantity.js'
import moment from 'moment';
import theme from './../../theme'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import HistTable from './PriceHistory'
import {
  HashRouter as Router,withRouter,
 

} from "react-router-dom";
import './../Styles/ItemInfo.css'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

class IInfo extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       price_total:'',
      
    }
    this.handleChange= this.handleChange.bind(this)
    
  }
  
  state = {
    histmodal:false,
    favorites: false
  };
  componentDidMount(){
    let {customerStore:{getProductsR,getDistributors,getCart,getAccounts,product}}=this.props
    product.setProperty('distributor_ID',this.props.location.state.dis_id)
    getProductsR();  
   
    getDistributors();
    getCart();
    getAccounts();
    
  }


handleChange(totalValue){
  return (`total ${totalValue}`)
}
  render(){

   
    const {product_price}=this.state;
    const totalPrice = {product_price}
  let diz=this.props.location.state.dis_id;

let {customerStore:{cart,favorite,addFavorite}}=this.props;
let getId = JSON.parse(sessionStorage.getItem('userData'))
let getdist = JSON.parse(sessionStorage.getItem('distData'))
   
    let {customerStore:{listofProducts,listOfPriceHist,pricehist}}= this.props;
    let filteredProducts = listofProducts.filter(prod => {
      if (prod.product_ID === this.props.location.state.prod_id){
        return prod
      }
    })

 

    let handleClickPrice = (itmPrice)=>{
    console.log(itmPrice,'sadsadsa')
let filhist = listOfPriceHist.filter(hist => hist.product_ID === itmPrice.product_ID).map(prod => prod)

if (filhist.length !== 0){
  pricehist.setProperty('product_ID',filhist[0].product_ID)
  pricehist.setProperty('priceHistID',filhist[0].priceHistID)
  pricehist.setProperty('priceFrom',filhist[0].priceFrom)
  pricehist.setProperty('priceTo',filhist[0].priceTo)
  pricehist.setProperty('dateCreated',filhist[0].dateCreated)
  
  this.setState({
    histmodal: true
  });

}else{
  console.log('nopricechange')
}


    }

   let handleClose =  () => {
     
  
      this.setState({
        histmodal: false
      });
    }
      
   let filprod =filteredProducts.map(product =>{
    const { favorites } = this.state;

    let handleChangeC =(e)=>{
      const { favorites } = this.state;
      const input = e.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
 
    this.setState({ [input.name]: value });
    
      if (favorites === undefined || favorites === false){
        console.log('true')
        favorite.setProperty("account_ID",getId.account_ID)
        favorite.setProperty("product_ID",this.props.location.state.prod_id)
        favorite.setProperty("distributor_ID",getdist.distributor_ID)
        addFavorite();
      }
      else{
        console.log('false')
      }
     
    }

    let back =()=>{
     
        this.props.history.push("/Customer");
  
    }

      const addToCart = () =>{
        let {customerStore:{addtoCart}}=this.props;
         
        
         cart.setProperty("account_ID",getId.account_ID)
         cart.setProperty("product_ID",this.props.location.state.prod_id)
         cart.setProperty('distributor_ID',this.props.location.state.dis_id)
         cart.setProperty("product_Name",product.product_Name)
         cart.setProperty("product_Category",product.product_Category)
         cart.setProperty("product_Price",product.product_Price)
         cart.setProperty("product_UoM",product.product_UoM)
         cart.setProperty("product_Img",product.product_Img)
         cart.setProperty("product_Barcode",product.product_Barcode)
         cart.setProperty("product_Brand",product.product_Brand)
         cart.setProperty("product_Stocks",product.product_Stocks)
         cart.setProperty("product_DateReceived",product.product_DateReceived)
         cart.setProperty("product_ExpirationDate",product.product_ExpirationDate)
         cart.setProperty("product_Remarks",product.product_Remarks)
         cart.setProperty("product_Variant",product.product_Variant)
         cart.setProperty("product_Packaging",product.product_Packaging)
         cart.setProperty("product_TransactionDate",moment().format('MMM/DD/YYYY,h:mm:ssa'))
       
         addtoCart();
        
   
          setTimeout(() => {
       
            this.props.history.push({"pathname":"/Customer/myCart", state:{ id: getId.account_ID}} )
          }, 2000);
        
      }

    


return(
  
<React.Fragment>


<Dialog
        open={this.state.histmodal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Product Price History"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
{/* <p>{pricehist.dateCreated} - {pricehist.priceFrom} - {pricehist.priceTo}</p> */}
  <HistTable data={pricehist}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <Button onClick={handleClose} color="primary" autoFocus>
           Close
          </Button>
        </DialogActions>
      </Dialog>

  <Grid container  >
        
  <Grid item  sm={12} xs={12} style={{margin:"auto",paddingTop:'20px',paddingBottom:'10px'}}>
   <div className='headPaper'> 
   <Paper  style={{backgroundColor:"#208769",color:"white",fontWeight:"bold",outlineColor:"black",padding:"5px"}}>
     <Grid container sm={12} xs={12}>
     <Grid item sm={6} xs={6} style={{textAlign:"left",paddingLeft:"5px"}}>
<Typography style={{fontWeight:"bold"}}> {product.product_Name} </Typography></Grid>
<Grid item sm={6} xs={6}  style={{textAlign:"right",paddingRight:"5px"}}>
 <Typography style={{fontWeight:"bold"}}>{product.product_Brand}</Typography>
 </Grid>
</Grid>
     </Paper>
   </div>  
  </Grid>
  
  <Grid item sm={10} xs={8} style={{margin:"auto",paddingBottom:'10px'}}>
    
     <Paper className='imgPaper'><img src={product.product_Img} style={{height:"80%",width:"100%"}}></img> </Paper>
    
  </Grid>

  <Grid item sm={12} >
    <div className='infoPaper'>
    <Grid container direction="row" sm={12} style={{padding:'8px'}}>
  <Grid item sm={6} xs={8} >
<Typography variant="p" style={{fontWeight:"bold"}}>{product.product_Name}({product.product_UoM})</Typography>
  </Grid>
  <Grid item sm={6} xs={4} >
  <FormControlLabel style={{float:"right"}}
  control={<Checkbox
    
    onChange={handleChangeC}  
    name='favorites' 
    checked={this.state.favorites}
    style={{padding:"0px"}}
    icon={<FavoriteBorder  />} checkedIcon={<Favorite />} name="favorites" />}
  
/>
  </Grid>

  <Grid item sm={6} xs={6}>
<Typography variant="p" style={{color:"#208769"}}> &#8369; {product.product_Price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}.00</Typography> 
<ThemeProvider theme={theme}>
<IconButton aria-label="settings" size='small' 
          onClick={()=>{handleClickPrice(product)}} 
          color='secondary' >
            <InfoIcon  size='small'/>
          </IconButton>
          </ThemeProvider>
  </Grid>

  <Grid item sm={6} xs={6} style={{textAlign:"right"}}>
    <Typography variant="p" style={{color:"#FFA500"}}>{product.product_Stocks.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}stocks</Typography>
  </Grid>

  <Grid item sm={6} xs={6}>
  <Typography style={{textAlign:"left"}}>VAR:{product.product_Variant} </Typography>
  </Grid>

  <Grid item sm={6} xs={6} style={{textAlign:"right"}}>
  <Typography style={{textAlign:"right"}}>{product.product_Packaging} </Typography>
  </Grid>



  <Grid item sm={12} xs={5} >
    <div style={{margin:"auto",textAlign:"center"}}>

</div>
  </Grid>
  <Grid item sm={12} xs={6}>
 
  </Grid>
  <Grid item sm={12} xs={12} >
  <Quantity price={product.product_Price} handleChange={this.handleChange}/>
  </Grid>

    </Grid>
    </div>
  </Grid>
 
 <Grid item sm={12} xs={12} >
  <Grid container row alignItems='center' sm={12} xs={12} justify='center'>


  <Grid item  sm={3} xs={6} >
<Button
  variant="contained"
  style={{backgroundColor:"#FFA500",color:"white",marginTop:"14px",marginLeft:"13%",width:"85%",marginBottom:"80px"}}
  onClick={() => {back()}}

>
  back
</Button>
</Grid>

    <Grid item  sm={3} xs={6} >
    
 <Button
  variant="contained"
  style={{backgroundColor:"#208769",color:"white",marginTop:"14px",marginLeft:"5x",textAlign:'right',width:"85%",marginBottom:"80px"}}
  onClick={() => {addToCart()}}

>
  Add to Cart
</Button>
</Grid>

</Grid>
 </Grid>
</Grid>

</React.Fragment>


)
        



})

function ItemInfo() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
     {filprod}
    </div>
  );
}


return( <ItemInfo/>);
}
}
export default withRouter(inject("customerStore")(observer(IInfo)));