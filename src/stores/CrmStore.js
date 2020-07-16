import { action, observable, decorate, computed } from "mobx";
import User from "../models/User";
import Account from "../models/Account";
import Product from "../models/Product";
import Distributor from "../models/Distributor";

import Report from './../models/Report'
import CustomerLogs from './../models/CustomerLogs'
import MyCart from './../models/MyCart'
import Order from './../models/Order'
import Notification from '../models/Notification'

class CrmStore {
  account =new Account();
  product = new Product();
  distributor = new Distributor();
 

  cart = new MyCart();
  order = new Order();
  cLogs = new CustomerLogs();

  report = new Report();
  listOfUsers = [];
  listOfDistributors =[];
  listofProducts =[];
  listOfCart = [];
  listOfReport= [];

  listOfClogs=[];
  listOfUserDocs = [];
  listOfOrder =[];
  listOfDistributorDocs = [];

  notif =new  Notification();
  listOfNotif =[];

  api = undefined
  

  constructor(api) {
    this.api = api
  }

  addAccount = () => {

    return new Promise ((resolve,reject) =>{
    this.api.addaccount(this.account)
    .then(resp => {

      if (resp.data !== false ) {   
        resolve(true);       
        } 
else {         
 resolve(false);      
 }  
     
    })
  })
  }


  getAccounts = () => {     
    this.api.getaccounts()
    .then(resp => {

     this.listOfUsers=resp.data
     this.listOfUserDocs = resp.data
  
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


  
          getcLogs = () => {
            return new Promise ((resolve,reject) =>{
            let getuserId = JSON.parse(sessionStorage.getItem('userData'))
        
            this.api.getclogs(getuserId.distributor_ID)
            .then(resp =>{
           
              this.listOfClogs =resp.data

              if (resp.data !== false){
                resolve(resp.data);

              }
              else{
                resolve(false);
              }
            });
          } )
          }
          
          archiveAccount = () => {
            let user = this.listOfUsers.filter(data=> {
              if (data.account_ID === this.account.account_ID){
                  return data._id
              }
            })
            
         
            this.api.archiveaccount(this.account , user[0]._id)
            .then(resp => {
           
              this.listOfUsers=resp.data
            })
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
        
      
}

decorate(CrmStore, {
 
 
    addAccount:action,
  getAccounts:action,
 
  account : observable,
  listOfUsers:observable,
  editAccount:action,
  product :observable,
  listofProducts:observable,
  getProducts:action,
  
  distributor:observable,
  listOfDistributors:observable,
  getDistributors:action,
  cart : observable,
  addReport:action,
  listOfCart:observable,
  getCart:action,
  order:observable,
  listOfOrder:observable,
  getOrder:action,
  getOrderD:action,
 
  staffAssigned:action,

  cLogs:observable,
  
  listOfClogs:observable,
  getcLogs:action,
  archiveAccount:action,

  notif :observable,
  listOfNotif :observable,
  addNotif:action,
  
});

export default CrmStore;
