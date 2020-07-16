import { action, observable, decorate, computed } from "mobx";
import Account from "../models/Account";

import Distributor from "../models/Distributor";
class IssuesStore {


  account =new Account();
  distributor = new Distributor();

  listOfDistributors =[];
  listOfUsers = [];
  listOfUserDocs = [];
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
  
        
  


                getAccounts = () => {
                  this.api.getaccounts()
                  .then(resp => {
                
                   this.listOfUsers=resp.data
                   this.listOfUserDocs = resp.data
                
                  })
                }


}


decorate(IssuesStore, {
 
  listOfUsers:observable,
  account:observable,
  
  distributor :observable,
  listOfReport:observable,
  listOfDistributors:observable,
  listOfUserDocs:observable,
  
  getDistributors:action,
  getAccounts:action,
  addAccount:action,
  

  
});

export default IssuesStore;
