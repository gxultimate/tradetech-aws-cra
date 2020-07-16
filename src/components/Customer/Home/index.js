import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import {Grid, CssBaseline} from '@material-ui/core';
import CenteredTabs from './tab.js';
import {
  HashRouter as Router,withRouter,


} from "react-router-dom";







const styles={
   marginBottom:"5%",
   
}

 class Home extends Component {

  handleChange = event => {
    this.setState({ selected: event.target.value, name: event.target.name});
  };

  componenDidMount() {
    let {customerStore:{getProducts,getDistributors, getCart,listofProducts  }}=this.props;
  
        getDistributors();
        getCart();
        
        getProducts().then(res => {
        

          this.setState({listofProducts: res})
        })
       
    
  }
  state={
    listofProducts:[],
  }
  
  render() {
 
    return (
      
      <div >
       <CssBaseline/>
      <Grid style={styles}>
        
      <CenteredTabs />
     
   
    </Grid>
   

  <Grid maxWidth="100" >

</Grid>  
</div>
     




    );
  }
}

export default withRouter(inject("customerStore")(observer(Home)));
