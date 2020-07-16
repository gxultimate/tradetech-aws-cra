import { action, observable, decorate, computed } from "mobx";
import Account from "../models/Account";
import Product from "../models/Product";
import Distributor from "../models/Distributor";
import Stock from "../models/Stock";
import Token from './../models/AccessCode'
import MyCart from './../models/MyCart'
import Order from './../models/Order'
import CustomerLogs from './../models/CustomerLogs'
import Notification from '../models/Notification'
import ProductFavorite from '../models/ProductFavorite'
import RetailMembership from '../models/RetailMembership'
import Report from './../models/Report'
class CustomerStore {
    account =new Account();
    product = new Product();
    distributor = new Distributor();
    token = new Token();
    stock = new Stock();
    cart = new MyCart();
    order = new Order();
    cLogs = new CustomerLogs();
    notif =new  Notification();
    favorite =new ProductFavorite();
    membership = new RetailMembership();
    report = new Report();
    listOfReport= [];
    listOfMembership =[];
    listOfFavorite=[];
    listOfNotif =[];
    listOfUsers = [];
  listOfDistributors =[];
  listofProducts =[];
  listOfCart = [];
  productStocks=[];
  listOfUserDocs = [];
  listOfOrder =[];
  listOfDistributorDocs = [];
  listOfToken = [];
  listOfClogs=[];

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
            
      let getIdR = JSON.parse(sessionStorage.getItem('distData'))

   
      this.api.getproducts(getId.distributor_ID || getIdR.distributor_ID)
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


      createToken = (data) => { 
        return new Promise((resolve, reject) => {   
          this.api.logintoken(data)
          .then(resp => {    
      
       
             if (resp.data !== false ) {   
                      resolve(resp.data);       
                      } 
             else {         
               resolve(false);      
               }  
               });
              })
        }
    
      loginAccount = () => { 
        return new Promise((resolve, reject) => {   
             this.api.loginaccount(this.account)
             .then(resp => {        
          
         
                 sessionStorage.setItem("userData",JSON.stringify(resp.data));
       
             
                this.createToken(this.account.account_username);
             
              let access = resp.data.account_accessType ? resp.data.account_accessType : resp.data.distributor_accessType
                if (access === "superadmin"  ) {   
                         resolve(1);       
                         } 
                  else if (access === "distributor"){
    
                    resolve(2);
                  }
                  else if (access === "customer"){
                    resolve(3);
                  }
                  else if (access === "Staff"){
                   
                    resolve(4);
                  }else if (access === 'manager'){
                    
                    resolve(5);
                  }
    
                else {         
                  resolve(false);      
                  }  
                  });
            });
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
            addStock = () => {
            
              let dis = this.listofProducts.filter(data=> {
                if (data.product_ID === this.product.product_ID){
                    return data._id
                }
              })
        
           
              this.api.addstock(this.stock , dis[0]._id)
              .then(resp => {
           
                this.listofProducts=resp.data
              })
            }

            addStockC = () => {
            console.log(this.product.product_ID,'dds')
            console.log(this.listofProducts,'prod')
            
              let dis = this.listofProducts.filter(data=> {
                
               if( this.product.product_ID.length )
                if (data.product_ID === this.product.product_ID){
                    return data
                }
              })
        console.log(dis,'dis')
           
              this.api.addstock(this.stock , dis._id)
              .then(resp => {
           
                this.listofProducts=resp.data
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



addtoCart = () => {
            this.api.addtocart(this.cart)
            .then(resp => {
         this.listOfCart=resp.data;
        
             
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
      
         
            this.api.editcart(this.cart , cartz[0]._id,getuserId.account_ID)
            .then(resp => {
          
              this.listOfCart=resp.data
            })
          }


          deleteCart =() =>{
            let getuserId = JSON.parse(sessionStorage.getItem('userData'))
            let cartz = this.listOfCart.filter(data=> {
              if (data.cart_ID === this.cart.cart_ID){
                  return data._id
              }

            })
       
            this.api.deletecart(this.cart , cartz[0]._id,getuserId.account_ID)
            .then(resp => {
            
              this.listOfCart=resp.data
            })
          }

          addOrder = () => {
            return new Promise((resolve, reject) => {
            this.api.addorder(this.order)
           
             .then(resp => {
              this.listOfOrder = resp.data
              if (resp.data !== false ) {   
                resolve(resp.data);       
                } 
       else {         
         resolve(false);      
         }  
       
             })
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

   

          // getToken = () => { 
          //   return new Promise ((resolve,reject) =>{
          //   let getuserId = JSON.parse(sessionStorage.getItem('userData'))
            
          //   this.api.gettokenR(getuserId.distributor_ID)
          //   .then(resp =>{
          //     this.listOfToken =resp.data

          //     if (resp.data !== false){
          //       resolve(resp.data);

          //     }
          //     else{ 
          //       resolve(false);
          //     }
          //   });
          // } )
          // }

          getToken = () => {
            this.api.gettokenR()
            .then(resp => {
        
             this.listOfToken=resp.data
            
          
            })
          }


         


          accessDistributor = () => { 
            
            return new Promise((resolve, reject) => {   
              this.api.accessdistributor(this.token.access_Token)
              .then(resp => {        
          

                  sessionStorage.setItem("distData",JSON.stringify(resp.data[0]));
            
           
               if(resp.data[0] != null){
               
               }
              
            
             
           
           
         if(resp.data[0] == 'undefined'){
                  console.log("false")     

                }
                  
                //  else if(resp.data[0].distributor_ID != null  ){    
                //   // let getdisId = JSON.parse(sessionStorage.getItem('distData'))     
                
                   
                   else{
                    resolve(resp.data[0])  
                   }

                   });
             });
       
              }

              addcLogs = () => {
         
                return new Promise((resolve,reject)=>{
                  this.api.addclogs(this.cLogs)
                  .then(resp =>{
                    this.listOfClogs =resp.data;
                
                    if(resp.data !== false){
                      resolve(resp.data);
                    }
                    else{
                      resolve(false);
                    }

                  })




                })
              }
             


              addNotif = () => { 
                console.log(this.notif,'lol')
                return new Promise((resolve, reject) => {   
                  this.api.addnotif(this.notif)
                  .then(resp => {    
                    console.log(resp.data,'notif')
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
                          
                   
              
                  
                    this.api.getnotif(getId.distributor_ID || getId.account_ID)
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

                  
          addFavorite = () => {
            return new Promise((resolve, reject) => {
            this.api.addfavorite(this.favorite)
           
             .then(resp => {
              this.listOfFavorite = resp.data
              if (resp.data !== false ) {   
                resolve(resp.data);       
                } 
       else {         
         resolve(false);      
         }  
       
             })
            })
          }

          deleteFavorite =() =>{
            let getuserId = JSON.parse(sessionStorage.getItem('userData'))
            let fave = this.listOfFavorite.filter(data=> {
              if (data.favorite_ID === this.favorite.favorite_ID){
                  return data._id
              }

            })
       
            this.api.deletefavorite(this.favorite , fave[0]._id,getuserId.account_ID)
            .then(resp => {
            
              this.listOfFavorite=resp.data
            })
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


          
          addMembership = () => {
         
            return new Promise((resolve,reject)=>{
              this.api.addmembership(this.membership)
              .then(resp =>{
                this.listOfMembership =resp.data;
            
                if(resp.data !== false){
                  resolve(resp.data);
                }
                else{
                  resolve(false);
                }

              })




            })
          }

          
          getMembership = () => { 
            return new Promise((resolve, reject) => {   
              let getDistId = JSON.parse(sessionStorage.getItem('userData'))
              this.api.getmembership(getDistId.account_ID)
              .then(resp => {    
                 this.listOfMembership = resp.data
           
                 if (resp.data !== false ) {   
                          resolve(resp.data);       
                          } 
                 else {         
                   resolve(false);      
                   }  
                   });
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
          
}


decorate(CustomerStore, {
 
    account :observable,
    product :observable,
    distributor :observable,
    token :observable,
    stock :observable,
    cart :observable,
    order :observable,
    cLogs:observable,
    notif :observable,
    report:observable,
    listOfReport:observable,
    listOfUsers :observable,
membership:observable,
listOfMembership:observable,
    favorite:observable,
  listOfDistributors :observable,
  listofProducts :observable,
  listOfCart :observable,
  productStocks:observable,
  listOfUserDocs :observable,
  listOfOrder :observable,
  listOfDistributorDocs :observable,
  listOfToken :observable,
  listOfClogs:observable,

  listOfNotif :observable,
  listOfFavorite:observable,
  addAccount:action,
  getAccounts:action,
  getProducts:action,
  getProductsR:action,
  editAccount:action,
  createToken:action,
  loginAccount:action,
  editProduct:action,
  getDistributors:action,
  addStock:action,
  addStockC:action,
  getStock:action,
  addtoCart:action,
  editCart:action,
  deleteCart:action,
  addOrder:action,
  getOrder:action,
  staffAssigned:action,
  getToken:action,
  accessDistributor:action,
  addcLogs :action,
  addNotif:action,
  getNotif:action,
  addFavorite:action,
  deleteFavorite:action,

  addMembership:action,
  getMembership:action,
  addReport:action,
  assignOrder:action,



});

export default CustomerStore;
