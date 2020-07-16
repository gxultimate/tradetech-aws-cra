import React,{Component} from 'react';
import {inject,observer} from 'mobx-react';
import RegisterCustomer from './addCustomer.js';




class Customer extends Component{

render(){
  return (
<RegisterCustomer/>

);
}

}

export default inject('startingStore')(observer(Customer));
