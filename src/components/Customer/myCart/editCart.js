import React from "react";
import {Button,TextField} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
// import {inject
import {inject,observer} from 'mobx-react';
// import Parser from 'react';
class EditForm extends React.Component {


  state = { counter: 0 };
 
  handleIncrement = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };
  
  handleDecrement = () => {
    this.setState(state => ({ counter: state.counter - 1 }));
  };
  render() {
    let  {customerStore:{cart}}=this.props;
 
    const displayCounter = this.state.counter > -1;
    let a =this.state.counter;
          cart.setProperty('product_TotalAmount',Number(a) * Number(cart.product_Price))
    return (
      <ButtonGroup size="small" aria-label="small outlined button group">
       {displayCounter && <Button onClick={this.handleDecrement}>-</Button>}
        {displayCounter && <TextField value={this.state.counter.toString()} 
        
        onChange={
          cart.setProperty("product_Quantity",this.state.counter.toString())
        }
        />}
                <Button onClick={this.handleIncrement}>+</Button>
      </ButtonGroup>
      
    );
    
  }
}

export default inject("customerStore")(observer(EditForm));