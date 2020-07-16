import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import {withRouter } from 'react-router-dom'
// import AdCarousel from './carousel'

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
  state = { products: [] }

    //   let filterProducts =listofProducts.filter(product =>{

  //     if(product.distributor_ID === this.props.location.state.id ){
  //       return product
  //     }
  //   })
  //  this.setState({
  //    products:filterProducts
  //  })
   
  componentDidMount(){
    let {customerStore:{getProducts,product}}=this.props;

    // product.setProperty('distributor_ID',this.props.location.state.id)
    getProducts();
   
  }

  render() { 

    let {customerStore:{listofProducts,product}}= this.props;
  
    let disId=JSON.parse(sessionStorage.getItem('distData'));


    let filteredProducts = listofProducts.filter(prod => {
      if (prod.distributor_ID === disId.disId && prod.product_Favorite === '1'){
        return prod
      }
    })


    const handleClick = (products) => {
   
          // setOpen(true);
        
          product.setProperty("product_ID", products.product_ID)

           
          setTimeout(() => {
          
            // openNotificationSucess();
            this.props.history.push({"pathname":"/Customer/itemInfo", state:{ id: products.product_ID,dis_id:disId.distributor_ID}} )
          }, 500);
        };  

 

    let Allprod =filteredProducts.map(product => {
    
      
      return(
      
<Grid item xs={6} sm={2}>

<Card style={{minHeight:"100%"}}>
<CardHeader
avatar={
  <Avatar aria-label="recipe" >
    R
  </Avatar>
}

title={product.product_Name}
style={{fontWeight:"bold"}}
/>


<CardMedia style={{margin:"auto"}}


>
 <img  src={product.product_Img} style={{height:"140px",width:"100%",margin:"auto"}} />
</CardMedia>
<CardContent>
<Typography style={{textAlign:"center",color:"#208769"}}>&#8369;{product.product_Price} </Typography>
</CardContent>
<CardActions  justify="bottom" style={{margin:"auto"}}>
{/* <IconButton aria-label="add to favorites">
  <FavoriteIcon />
</IconButton>
<IconButton aria-label="share">
  <ShareIcon />
</IconButton> */}
<Button onClick={()=>{handleClick(product)}} style={{backgroundColor:"#208769",margin:"auto",color:"white",fontWeight:"bold"}} size='small' variant="contained">Order</Button>
</CardActions>

</Card>
</Grid>

        
        )

    })


 function OnSale() {
  const classes = useStyles();



  return (
    <React.Fragment>
    <Grid container sm={12} xs={12}>
    <Grid item sm={12} xs={12}>
      {/* <AdCarousel/> */}
    </Grid>
      </Grid>
    <div style={{marginBottom:"50px"}}>
  
      <Grid container spacing={3} md={12}>
      
       {Allprod}
       
      </Grid>
    </div>
    </React.Fragment>
  );
}
return ( 
  <OnSale/>
 );
}
}

export default withRouter(inject("customerStore")(observer(AllProd)));
