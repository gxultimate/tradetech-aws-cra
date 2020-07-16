import { action, observable, decorate, computed } from "mobx";
import Account from "../models/Account";
import Report from '../models/Report'
import Distributor from "../models/Distributor";
import Notification from '../models/Notification'
class NotificationStore {



  notif =new  Notification();
  listOfNotif =[];
  api = undefined
  

  constructor(api) {
    this.api = api
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


decorate(NotificationStore, {
 
    notif :observable,
    listOfNotif :observable,
    addNotif:action,
    getNotif:action,
  

  
});

export default NotificationStore;
