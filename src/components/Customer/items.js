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
  state = {  }

  render() { 

    let {customerStore:{listofProducts,product}}= this.props;

    const click = ()=>{
      console.log("clicked!!!")
    }

    let Allprod =listofProducts.map(product => {
 
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

/>
<CardMedia


>
<img  src={product.product_Img} style={{height:"100%",width:"100%"}} />
</CardMedia>
<CardContent>
<Typography style={{textAlign:"center",color:"#208769"}}><Button onClick={()=>{click()}}>&#8369;{product.product_Price}</Button>  </Typography>
</CardContent>
<CardActions  justify="bottom" style={{margin:"auto"}}>
{/* <IconButton aria-label="add to favorites">
  <FavoriteIcon />
</IconButton>
<IconButton aria-label="share">
  <ShareIcon />
</IconButton> */}
<Button  style={{backgroundColor:"#208769",margin:"auto",color:"white",fontWeight:"bold"}} variant="contained">Add to Cart </Button>
</CardActions>

</Card>
</Grid>

        
        )

    })


 function Items() {
  const classes = useStyles();

  return (
    <div >
      <Grid container spacing={3} md={12}>
      
       {Allprod}
       
      </Grid>
    </div>
  );
}
return ( 
  <Items/>
 );
}
}

export default inject("customerStore")(observer(AllProd));
