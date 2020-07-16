import { action, observable, decorate, computed } from "mobx";

import Account from "../models/Account";
import Product from "../models/Product";
import Distributor from "../models/Distributor";
import MyCart from './../models/MyCart'
import Order from './../models/Order'
import Report from './../models/Report'
import Notification from '../models/Notification'
class StaffStore {
    account =new Account();
    product = new Product();
    distributor = new Distributor();
    cart = new MyCart();
  order = new Order();
  report = new Report();

  listOfUsers = [];
  listOfDistributors =[];
  listofProducts =[];
  listOfCart = [];
  listOfReport= [];
  listOfUserDocs = [];
  listOfOrder =[];
  listOfDistributorDocs = [];

  notif =new  Notification();
  listOfNotif =[];

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
    getProductsR = () => { 
 
      return new Promise((resolve, reject) => {   
     

      
        this.api.getproducts(this.product.distributor_ID )
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

 editAccount = () => {
    let doc = this.listOfUserDocs.filter(data=> {
      if (data.account_ID === this.account.account_ID){
          return data._id
      }
    })

 
    this.api.editaccount(this.account , doc[0]._id)
    .then(resp => {
   
      this.listOfUsers=resp.data
    })
  }


editProduct = () => {
          let prod = this.listofProducts.filter(data=> {
            if (data.product_ID === this.product.product_ID){
                return data._id
            }
          })
   
       
      this.api.editproduct(this.product, prod[0]._id)
          .then(resp => {
         
            this.listofProducts=resp.data
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

            getCart = () => {
                return new Promise ((resolve,reject) =>{
                let getuserId = JSON.parse(sessionStorage.getItem('userData'))
                
                this.api.getcart(getuserId.account_ID)
                .then(resp =>{
                  this.listOfCart =resp.data
    
                  if (resp.data !== false){
                    resolve(resp.data);
    
                  }
                  else{
                    resolve(false);
                  }
                });
              } )
              }
    
              editCart = () => {
    
                let getuserId = JSON.parse(sessionStorage.getItem('userData'))
                let cartz = this.listOfCart.filter(data=> {
                  if (data.cart_ID === this.cart.cart_ID){
                      return data._id
                  }
    
                })
           
             
                this.api.editcart(this.cart , cartz[0]._id,getuserId.account_ID, getuserId.distributor_ID)
                .then(resp => {
                 
                  this.listOfCart=resp.data
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

              getOrderD = () => {
           
                return new Promise ((resolve,reject) =>{
                  let getuserId = JSON.parse(sessionStorage.getItem('userData'))
                  
                  
                  this.api.getorder(this.order.account_ID ? this.order.account_ID  : getuserId.distributor_ID)
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


              addReport = () => { 
                return new Promise((resolve, reject) => {   
                  this.api.addreport(this.report)
                  .then(resp => {    
                     this.listOfReport = resp.data
                    
                     if (resp.data !== false ) {   
                              resolve(resp.data);       
                              } 
                     else {         
                       resolve(false);      
                       }  
                       });
                      })
                }

                getReport = () => {
                    this.api.getreport()
                    .then(resp => {
                
                     this.listOfReport=resp.data
                    
                  
                    })
                  }



                  assignOrder = () => {
                    let dis = this.listOfOrder.filter(data=> {
                    
                      if (data.orderID === this.order.orderID){
                          return data._id
                      }
                    })
             
                 
                    this.api.assignorder(this.order , dis[0]._id)
                    .then(resp => {
                   
                      this.listOfOrder=resp.data
                    })
                  }

              
                  addNotif = () => { 
                    return new Promise((resolve, reject) => {   
                      this.api.addnotif(this.notif)
                      .then(resp => {    
                         this.listOfNotif = resp.data
                   
                         if (resp.data !== false ) {   
                                  resolve(resp.data);       
                                  } 
                         else {         
                           resolve(false);      
                           }  
                           });
                          })
                    }
                
                
                    getNotif = () => { 
                   
                        return new Promise((resolve, reject) => {   
                          let getId = JSON.parse(sessionStorage.getItem('userData'))
                                
                         
                    
                        
                          this.api.getnotif(getId.distributor_ID)
                          .then(resp => {    
                             this.listOfNotif = resp.data
                       
                             if (resp.data !== false ) {   
                                      resolve(resp.data);       
                                      } 
                             else {         
                               resolve(false);      
                               }  
                               });
                              })
                        }



}


decorate(StaffStore, {
 
    account:observable,
    product :observable,
    distributor:observable,
    cart :observable,
  order :observable,
  report :observable,

  listOfUsers :observable,
  listOfDistributors :observable,
  listofProducts :observable,
  listOfCart :observable,
  listOfReport:observable,
  listOfUserDocs :observable,
  listOfOrder :observable,
  listOfDistributorDocs :observable,
  assignOrder:action,
  getAccounts:action,
  getProducts:action,
  getProductsR:action,
  editAccount:action,
  editProduct:action,
  getDistributors :action,
  getCart:action,
  editCart:action,
  getOrder:action,
  getOrderD:action,
  staffAssigned:action,
  addReport:action,
  getReport:action,

  notif :observable,
    listOfNotif :observable,
    addNotif:action,
    getNotif:action,

});

export default StaffStore;
