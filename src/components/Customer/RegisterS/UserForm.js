import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails.js'
import FormPersonalDetails from './FormPersonalDetails.js'
import Confirm from './Confirm'
import Account from './Account'
 class UserForm extends Component {

    state ={
        step :1,
        fName:'',
        mName:'',
        lName:'',
        suffix:'',
        address:'',
        emailAddress:'',
        contactNo:'',
        username:'',
        password:'',
        confPassword:'',
        shopName:'',
        shopAddress:'',
    
      }
    
      //Proceed  to next Step
      nextStep =()=>{
        const {step}=this.state;
        this.setState({
          step:step+1
        });
      }
      
      // Goback to prev step
      prevStep =()=>{
        const {step}=this.state;
        this.setState({
          step:step-1
        });
      }
      

      //Handle Field Change
      handleChange = input => e =>{
          this.setState({[input]:e.target.value});
      }
    render() {
        const {step}=this.state;
        const {
            fName, mName, lName, suffix, address, emailAddress, contactNo, username, password,confPassword, shopName,shopAddress
            }=this.state;
        const values ={
          fName, mName, lName, suffix, address, emailAddress, contactNo, username, password,confPassword, shopName,shopAddress
        }

    switch(step){
            case 1:
                return(
                    <FormUserDetails 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 2:
             return (
                 <FormPersonalDetails
                 nextStep={this.nextStep}
                 prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                 />
             )
             case 3:
            
                return (
                  <Account
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                     handleChange={this.handleChange}
                     values={values}
                  />
                  )
                case 4:
                  return (
                    <Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                       handleChange={this.handleChange}
                       values={values}
                    />
                    )

             case 4:
             return <h1>Success</h1>
    }

    }
}

export default UserForm
