import { action, observable, decorate, computed } from "mobx";
import Account from "../models/Account";
import Order from './../models/Order'
import Product from "../models/Product";
import Distributor from "../models/Distributor";
import Report from './../models/Report'
class OrderStore {

    account =new Account();
    product = new Product();
    distributor = new Distributor();
    order = new Order();
    report = new Report();
    listOfReport= [];
    listOfUsers = [];
    listOfDistributors =[];
    listofProducts =[];
    listOfOrder =[];

  api = undefined
  

  constructor(api) {
    this.api = api
  }


  getAccounts = () => {
    this.api.getaccounts()
    .then(resp => {

     this.listOfUsers=resp.data
     this.listOfUserDocs = resp.data
  
    })
  }


  getProducts = () => { 
   
    return new Promise((resolve, reject) => {   
      let getId = JSON.parse(sessionStorage.getItem('userData'))
            
     

    
      this.api.getproducts(getId.distributor_ID)
      .then(resp => {    
         this.listofProducts = resp.data
   
         if (resp.data !== false ) {   
                  resolve(resp.data);       
                  } 
         else {         
           resolve(false);      
           }  
           });
          })
    }

getDistributors = () => { 
  return new Promise((resolve, reject) => {   
    this.api.getdistributors()
    .then(resp => {    
       this.listOfDistributors = resp.data
 
       if (resp.data !== false ) {   
                resolve(resp.data);       
                }  
       else {         
         resolve(false);      
         }  
         });
        })
  }
  getOrder = () => {
       
    return new Promise ((resolve,reject) =>{
    let getuserId = JSON.parse(sessionStorage.getItem('userData'))

    
    this.api.getorder(getuserId.account_ID ? getuserId.account_ID  : getuserId.distributor_ID)
    .then(resp =>{
      this.listOfOrder =resp.data
    
      if (resp.data !== false){
        resolve(resp.data);
   
      }
      else{
        resolve(false);
      }
    });
  } )
  }
  
  staffAssigned = () => {
    return new Promise ((resolve,reject) =>{
    let getuserId = JSON.parse(sessionStorage.getItem('userData'))
  
    this.api.staffassigned(getuserId.account_ID,getuserId.distributor_ID)
    .then(resp =>{
   
      this.listOfOrder =resp.data
          
      if (resp.data !== false){
        resolve(resp.data);
    
      }
      else{
        resolve(false);
      }
    });
  } )
  }


  // getReport = () => {
  //   this.api.getreport()
  //   .then(resp => {

  //    this.listOfReport=resp.data
    
  
  //   })
  // }

  
  getReport = () => {
           
    return new Promise ((resolve,reject) =>{
    
      
      
      this.api.getreport(this.report.order_ID)
      .then(resp =>{
        this.listOfReport =resp.data

        if (resp.data !== false){
          resolve(resp.data);
     
        }
        else{
          resolve(false);
        }
      });
    } )

  }


}

decorate(OrderStore, {

    report:observable,
    account :observable,
    product:observable,
    distributor:observable,
    order :observable,
    listOfUsers :observable,
    listOfDistributors :observable,
    listofProducts :observable,
    listOfOrder :observable,
    listOfReport:observable,
    staffAssigned:action,
    getOrder:action,
    getDistributors:action,
    getProducts:action,
    getAccounts:action,
    getReport:action,
 


  
});

export default OrderStore;
