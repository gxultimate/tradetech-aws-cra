import { action, observable, decorate, computed } from "mobx";
import Account from "../models/Account";
import Report from '../models/Report'
import Distributor from "../models/Distributor";
class IssuesStore {

  report = new Report();
  account =new Account();
  distributor = new Distributor();
  listOfReport= [];
  listOfDistributors =[];
  listOfUsers = [];
  listOfUserDocs = [];
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


}


decorate(IssuesStore, {
 
  listOfUsers:observable,
  account:observable,
  report :observable,
  distributor :observable,
  listOfReport:observable,
  listOfDistributors:observable,
  listOfUserDocs:observable,
  getReport:action,
  getDistributors:action,
  getAccounts:action,
  

  
});

export default IssuesStore;
