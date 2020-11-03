import { action, observable, decorate, computed } from "mobx";
import Account from "../models/Account";
import Report from '../models/Report'
import Distributor from "../models/Distributor";
import Message from '../models/Messaging'
import CustomerLogs from './../models/CustomerLogs'
class MessageStore {

  report = new Report();
  account =new Account();
  distributor = new Distributor();
  message = new Message();
  listOfMessage=[];
  listOfReport= [];
  listOfDistributors =[];
  listOfUsers = [];
  listOfUserDocs = [];
  cLogs = new CustomerLogs();
  listOfClogs=[];
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
   
                  return new Promise((resolve, reject) => {   
                    let getId = JSON.parse(sessionStorage.getItem('userData'))
                          
                   
              
                  
                    this.api.getreport(getId.distributor_ID)
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

                getAccounts = () => {
                  this.api.getaccounts()
                  .then(resp => {
                
                   this.listOfUsers=resp.data
                   this.listOfUserDocs = resp.data
                
                  })
                }

                getReportSup = () => {
                  this.api.getreportsup()
                  .then(resp => {
            
                   this.listOfReport=resp.data
                   
                
                  })
                }


                
                addMessage = () => {
                    this.api.addmessage(this.message)
                    .then(resp => {
                   this.listOfMessage=resp.data;
                
                     
                    })
                  }
                
                  // getMessage = () => {
                  //   this.api.getmessage()
                  //   .then(resp => {
                
                  //    this.listOfMessage=resp.data
                    
                  
                  //   })
                  // }

                  
getMessage = () => { 
  return new Promise((resolve, reject) => {   
    this.api.getmessage()
    .then(resp => {    
       this.listOfMessage= resp.data
 
       if (resp.data !== false ) {   
                resolve(resp.data);       
                }  
       else {         
         resolve(false);      
         }  
         });
        })
  }

                
                  getcLogs = () => {
                    return new Promise ((resolve,reject) =>{
                    let getuserId = JSON.parse(sessionStorage.getItem('userData'))
                
                    this.api.getclogs(getuserId.distributor_ID,{
                      params: {
                        _limit: 1
                       }
                    })
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

}


decorate(MessageStore, {
 
  listOfUsers:observable,
  account:observable,
  report :observable,
  distributor :observable,
  message:observable,
  listOfMessage:observable,
  listOfReport:observable,
  listOfDistributors:observable,
  listOfUserDocs:observable,
  getReport:action,
  getReportSup:action,
  getDistributors:action,
  getAccounts:action,
  addMessage:action,
  getMessage:action,

  cLogs:observable,
  
  listOfClogs:observable,
  getcLogs:action,

  
});

export default MessageStore;
