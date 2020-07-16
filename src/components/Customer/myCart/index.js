import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { withRouter } from 'react-router-dom';
import CartTable from './cartTable.js';

class Cart extends React.Component {
  constructor(props){


    super(props)
    this.state = {
      listOfProducts : [],
      listOfCart : [],
    }
  }
    componentDidMount() {

     
      
      let {customerStore:{getCart }}=this.props;


      getCart().then(res => 
        this.setState({listOfCart : res})
      );


    }

    render() {
      let getuname = JSON.parse(sessionStorage.getItem('userData'))
      let dist = JSON.parse(sessionStorage.getItem('distData'))
  
      let date = new Date();
      function getHash(input){
        var hash = 0, len = input.length;
        for (var i = 0; i < len; i++) {
          hash  = ((hash << 5) - hash) + input.charCodeAt(i);
          hash |= 0; // to 32bit integer
        }



        return hash;
      }


  
  let {customerStore:{listOfCart}}=this.props;

  let a = listOfCart.filter(carts => carts.account_ID === getuname.account_ID && carts.distributor_ID === dist.distributor_ID).length;





   
  let rows =  listOfCart.map(product => {
    let getuname = JSON.parse(sessionStorage.getItem('userData'))
    return (

      listOfCart.filter((amount) => amount.account_ID === getuname.account_ID)
      .reduce((sum, record) => parseInt(sum) + parseInt(record.product_Price) , 0)



      );

   })








function MyCart(){


return(
<div style={{marginTop:"20px"}}>

    <Grid container direction="row" sm={10} xs={11} >
    <Grid item sm={12} xs={12} style={{margin:"auto"}}>
<Paper style={{marginLeft:"32px"}}>
    <Grid container sm={12} >
       <Grid item  sm={1} xs={1} style={{backgroundColor:"#208769",paddingRight:"10px"}}></Grid>
       <Grid item sm={5} xs={5} style={{paddingTop:"10px",paddingBottom:"10px",marginleft:"15px"}}><Typography variant="p" style={{fontWeight:"bold",width:"98%"}}>&nbsp;&nbsp;My Cart</Typography> </Grid>
       <Grid item  sm={5} xs={6} style={{paddingRight:"10px",color:"#208769",textAlign:"right",paddingTop:"10px",paddingBottom:"10px",}}><Typography variant="p">{a} items on cart</Typography></Grid>
       </Grid>
       </Paper>
    </Grid>
    </Grid>

<Grid container sm={12} xs={12} style={{marginTop:"16px",textAign:"center"}}>
<Grid item sm={11} xs={11} style={{margin:"auto"}}>

<CartTable/>
</Grid>



</Grid>




    </div>

);



}



        return (
            <MyCart/>
          );
    }
}

export default withRouter(inject("customerStore")(observer(Cart)));
