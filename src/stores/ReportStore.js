import { action, observable, decorate, computed } from "mobx";

import Account from "../models/Account";
import Product from "../models/Product";
import Distributor from "../models/Distributor";
import Stock from "../models/Stock";
import Order from './../models/Order'
import Report from './../models/Report'
import MyCart from './../models/MyCart'

class ReportStore {
    account =new Account();
    product = new Product();
    distributor = new Distributor();
    stock = new Stock();
    order = new Order();
    report = new Report();
    cart = new MyCart();
    listOfUsers = [];
  listOfDistributors =[];
  listofProducts =[];
  listOfReport= [];
  productStocks=[];
  listOfUserDocs = [];
  listOfOrder =[];
  listOfDistributorDocs = [];
  listOfToken = [];
  listOfCart = [];
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

        getStock = () => { 
            return new Promise((resolve, reject) => {   
              let getDistId = JSON.parse(sessionStorage.getItem('userData'))
              this.api.getstock(getDistId.distributor_ID)
              .then(resp => {    
                 this.productStocks = resp.data
           
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

              getCart = () => {
                return new Promise ((resolve,reject) =>{
                let getuserId = JSON.parse(sessionStorage.getItem('userData'))
                
                this.api.getcart(getuserId.account_ID ? getuserId.account_ID  : getuserId.distributor_ID)
                .then(resp =>{
                  console.log(resp.data,'data')
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


          getReport = () => {
            this.api.getreport()
            .then(resp => {
        
             this.listOfReport=resp.data
            
          
            })
          }




}


decorate(ReportStore, {
 
    account:observable,
    product:observable,
    distributor:observable,
    stock :observable,
    order:observable,
    report :observable,
    listOfUsers :observable,
  listOfDistributors :observable,
  listofProducts :observable,
  listOfReport:observable,
  productStocks:observable,
  listOfUserDocs :observable,
  listOfOrder :observable,
  listOfDistributorDocs :observable,
  listOfToken :observable,
  listOfCart:observable,

  getCart:action,
  getAccounts:action,
  getProducts:action,
  getProductsR:action,
  getDistributors:action,
  getStock:action,
  getOrder :action,
  staffAssigned :action,
  getOrderD:action,
  getReport:action,


});

export default ReportStore;
