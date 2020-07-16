import { Grid,CssBaseline } from '@material-ui/core';
import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { HashRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import AccountSetting from './AccountSettings';
import CheckOutGrid from './CheckOut';
import Footer from './Footer';
import Header from './Header';
import CustHome from './Home';
import Carousel from './Home/carousel.js';
import ItemInfo from './itemInfo';
import MyAccountGrid from './MyAccount';
import MyCart from './myCart';
import MyOrderTab from './MyOrders';
import TrackOrder from './MyOrders/Ongoing/Track';
import MyPurchases from './MyPurchases';
import Register from './Register';
import UserForm from './RegisterS/UserForm.js';
import CustomizedSteppers from './Stepper';

 class CustRoute extends Component {

  handleChange = event => {
    this.setState({ selected: event.target.value, name: event.target.name});
  };

  
  render() {
    
    return (
      <Router>
      <div >
        <CssBaseline/>
        <Grid>
       <Header/>
       </Grid>
       <Grid>
<Carousel/>
       </Grid>

</div>
     

<Switch>
      {/* <Route  path="/AccessDistributor" render={()=><AccessD/>}/> */}
      <Route exact path="/Customer" render={()=><CustHome/>}/>
      <Route path="/Customer/Register" render={()=><Register/>}/>
  
        <Route path="/Customer/ItemInfo" render={()=><ItemInfo/>}/>
       <Route path="/Customer/Stepper" render={()=><CustomizedSteppers/>}/>
       <Route path="/Customer/RegisterS" render={()=><UserForm/>}/>
   
      <Route  path="/Customer/MyCart" render={()=><MyCart/>}/>
      <Route path="/Customer/CheckOut" render={()=><CheckOutGrid/>}/>
      <Route path="/Customer/MyAccount" render={()=><MyAccountGrid/>}/>
      <Route path="/Customer/MyOrder" render={()=><MyOrderTab/>}/>
      <Route path="/Customer/MyOrder/Track" render={()=><TrackOrder/>}/>
      <Route path="/Customer/MyPurchases" render={()=><MyPurchases/>}/>
      <Route path="/Customer/MyPurchases" render={()=><MyPurchases/>}/>
      <Route path="/Customer/AccountSetting" render={()=><AccountSetting/>}/>
     
      {/*<Route  path="/Admin/AdminUserManagement" render={()=><AdminUserManagement/>}/> */}
      
  </Switch>



<Grid container sm={12} xs={12} direction='row'  >
  <Grid item sm={12} xs={12}  >
       <Footer/>
       </Grid>
       </Grid>

</Router>



    );
  }
}

export default withRouter(inject("customerStore")(observer(CustRoute)));
