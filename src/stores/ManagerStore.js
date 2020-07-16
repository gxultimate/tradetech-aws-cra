import { action, observable, decorate, computed } from "mobx";
import Account from "../models/Account";
import Report from '../models/Report'
import Distributor from "../models/Distributor";
import Order from './../models/Order'
import Notification from '../models/Notification'
class IssuesStore {

  report = new Report();
  account =new Account();
  distributor = new Distributor();
  order = new Order();
  listOfReport= [];
  listOfDistributors =[];
  listOfOrder =[];
  listOfUsers = [];
  listOfUserDocs = [];

  notif =new  Notification();
  listOfNotif =[];
  api = undefined
  

  constructor(api) {
    this.api = api
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
      
        
  

                getReport = () => {
                  this.api.getreport()
                  .then(resp => {
              
                   this.listOfReport=resp.data
                  
                
                  })
                }

                getAccounts = () => {
                  this.api.getaccounts()
                  .then(resp => {
                
                   this.listOfUsers=resp.data
                   this.listOfUserDocs = resp.data
                
                  })
                }

                getOrder = () => {
       
                  return new Promise ((resolve,reject) =>{
                  let getuserId = JSON.parse(sessionStorage.getItem('userData'))
                  
                  
                  this.api.getorder(getuserId.distributor_ID)
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

}


decorate(IssuesStore, {
 
  listOfUsers:observable,
  account:observable,
  order:observable,
  report :observable,
  distributor :observable,
  listOfOrder:observable,
  listOfReport:observable,
  listOfDistributors:observable,
  listOfUserDocs:observable,
  addReport:action,
  getReport:action,
  getDistributors:action,
  getAccounts:action,
  editAccount:action,
  getOrder:action,
  assignOrder:action,
  getOrderD:action,
  staffAssigned:action,
      notif :observable,
    listOfNotif :observable,
    addNotif:action,
    getNotif:action,

  
});

export default IssuesStore;
