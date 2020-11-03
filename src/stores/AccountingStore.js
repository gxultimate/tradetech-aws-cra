import { action, observable, decorate, computed } from "mobx";
import User from "../models/User";
import Account from "../models/Account";
import Product from "../models/Product";
import Distributor from "../models/Distributor";

import Stock from "../models/Stock";

import MyCart from './../models/MyCart'
import Order from './../models/Order'

class AccountingStore {
  account =new Account();
  product = new Product();
  distributor = new Distributor();
 

  cart = new MyCart();
  order = new Order();
 

 
  listOfUsers = [];
  listOfDistributors =[];
  listofProducts =[];
  listOfCart = [];
  listOfReport= [];
  productStocks=[];

  listOfUserDocs = [];
  listOfOrder =[];
  listOfDistributorDocs = [];

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




        
      
}

decorate(AccountingStore, {
 
 
  
  getAccounts:action,
 
  account : observable,
  listOfUsers:observable,
 
  product :observable,
  listofProducts:observable,
  getProducts:action,
  
  distributor:observable,
  listOfDistributors:observable,
  getDistributors:action,
  cart : observable,
 
  listOfCart:observable,
  getCart:action,
  order:observable,
  listOfOrder:observable,
  getOrder:action,
  getOrderD:action,
 
  staffAssigned:action,

  
});

export default AccountingStore;
