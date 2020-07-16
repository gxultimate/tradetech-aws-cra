import { action, observable, decorate, computed } from "mobx";
import User from "../models/User";
import Account from "../models/Account";
import Product from "../models/Product";
import Distributor from "../models/Distributor";

import Stock from "../models/Stock";
import Token from './../models/AccessCode'
import MyCart from './../models/MyCart'
import Order from './../models/Order'
import Report from './../models/Report'
import CustomerLogs from './../models/CustomerLogs'
import Notification from '../models/Notification'
class StartingStore {
  account =new Account();
  product = new Product();
  distributor = new Distributor();
  token = new Token();
  stock = new Stock();
  currentUser = new User();
  cart = new MyCart();
  order = new Order();
  report = new Report();
  cLogs = new CustomerLogs();
  notif =new  Notification();
  listOfNotif =[];

  welcomeMessage = "Welcome!";
  listOfUsers = [];
  listOfDistributors =[];
  listofProducts =[];
  listOfCart = [];
  listOfReport= [];
  productStocks=[];
  listofProductImg =[];
  listOfUserDocs = [];
  listOfOrder =[];
  listOfDistributorDocs = [];
  listOfToken = [];
  listOfClogs=[];
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

      

    getProductImg = () => {

      return new Promise((resolve,reject)=>{
       
 let getId = JSON.parse(sessionStorage.getItem('userData'))
            
     

    
   
        this.api.getproductImg(getId.distributor_ID)
        .then(resp => {
          this.listofProductImg = resp.data
  
          if (resp.data !== false ) {   
            resolve(resp.data);       
            } 
   else {         
     resolve(false);      
     }  
        })

      })
     
    }
    getProductImgR = () => {

      return new Promise((resolve,reject)=>{
       
 
        this.api.getproductImg(this.product.distributor_ID)
        .then(resp => {
          this.listofProductImg = resp.data
  
          if (resp.data !== false ) {   
            resolve(resp.data);       
            } 
   else {         
     resolve(false);      
     }  
        })

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



        addProduct = () => { 
          return new Promise((resolve, reject) => {   
            this.api.addproduct(this.product)
            .then(resp => {    
              console.log(resp.data,'return')
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


        addProductImg = (img) => {
    
          this.api.addproductImg(img)
          .then(resp => {
           
            this.product.setProperty('product_Img' , resp.data.url )
            this.addProduct()
           
          }).catch(err=>{
            console.log(err)
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




        
        fileUpload = data => {
          let local = JSON.parse(localStorage.getItem("Inventory"));
          return new Promise((resolve, reject) => {
            this.api.fileupload(data, local.product_ID).then(resp => {
              console.log(resp.data);
              if (resp.data !== false) {
                resolve(1);
              } else {
                resolve(false);
              }
            });
          });
        };

        addDistributor = () => {
          this.api.adddistributor(this.distributor)
          .then(resp => {
         this.listOfDistributors=resp.data;
      
           
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

        editDistributor = () => {
          let dis = this.listOfDistributors.filter(data=> {
            if (data.distributor_ID === this.distributor.distributor_ID){
                return data._id
            }
          })
    
       
          this.api.editdistributor(this.distributor , dis[0]._id)
          .then(resp => {
         
            this.listOfDistributors=resp.data
          })
        }

        // getDistributors = () => { 
        //   return new Promise((resolve, reject) => {   
        //     this.api.getdistributors()
        //     .then(resp => {    
        //        this.listOfDistributors = resp.data
         
        //        if (resp.data !== false ) {   
        //                 resolve(resp.data);       
        //                 } 
        //        else {         
        //          resolve(false);      
        //          }  
        //          });
        //         })
        //   }
        archiveDistributor = () => {
          let dis = this.listOfDistributors.filter(data=> {
            if (data.distributor_ID === this.distributor.distributor_ID){
                return data._id
            }
          })
          
       
          this.api.archivedistributor(this.distributor , dis[0]._id)
          .then(resp => {
         
            this.listOfDistributors=resp.data
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
              console.log(resp.data)
        
             
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

          getCartD = () => {
            return new Promise ((resolve,reject) =>{
            let getuserId = JSON.parse(sessionStorage.getItem('userData'))
            
            this.api.getcart(getuserId.distributor_ID)
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
               console.log(resp.data,"editt")
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


          addToken = () => {
            this.api.addtoken(this.token)
            .then(resp => {
              this.listOfToken =resp.data
    
             
            })
          }

          deletetoken =() =>{
            let mytoken =this.listOfCart.filter(data =>{
              if (data.distributor_ID === this.token.distributor_ID){
                return data._id
              }
            })
            this.api.deletetoken(this.token ,mytoken[0]._id)
            .then(resp => {

              this.listOfToken=resp.data
            })
          }

          getToken = () => {
            return new Promise ((resolve,reject) =>{
            let getuserId = JSON.parse(sessionStorage.getItem('userData'))
            
            this.api.gettoken(getuserId.distributor_ID)
            .then(resp =>{
              this.listOfToken =resp.data

              if (resp.data !== false){
                resolve(resp.data);

              }
              else{ 
                resolve(false);
              }
            });
          } )
          }



          accessDistributor = () => { 
            
            return new Promise((resolve, reject) => {   
              this.api.accessdistributor(this.token.access_Token)
              .then(resp => {        
                

                  sessionStorage.setItem("distributorData",JSON.stringify(resp.data));
            
           
               
               let getdisId = JSON.parse(sessionStorage.getItem('distributorData'))
            
                
         
              
             
                if (resp.data[0].access_distributor_ID === getdisId.distributor_ID  ) {   
                         
                          resolve(resp.data[0].distributor_ID)   
                          } 
                  
                 else {         
                  console.log("false")     
                   }  

                   });
             });
       
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

                // getReport = () => { 
   
                //   return new Promise((resolve, reject) => {   
                //     let getId = JSON.parse(sessionStorage.getItem('userData'))
                          
                   
              
                  
                //     this.api.getreport(getId.distributor_ID)
                //     .then(resp => {    
                //        this.listofProducts = resp.data
                 
                //        if (resp.data !== false ) {   
                //                 resolve(resp.data);       
                //                 } 
                //        else {         
                //          resolve(false);      
                //          }  
                //          });
                //         })
                //   }

                getReport = () => {
                  this.api.getreport()
                  .then(resp => {
              
                   this.listOfReport=resp.data
                  
                
                  })
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

decorate(StartingStore, {
  welcomeMessage: observable,
  listName: observable,
  currentUser: observable,
  changeMessage: action,
  resetMessage: action,
  pushToArray: action,
  getName: action,
  addAccount:action,
  getAccounts:action,
  editAccount:action,
  account : observable,
  listOfUsers:observable,
  addProduct:action,
  product :observable,
  listofProducts:observable,
  getProducts:action,
  fileUpload:action,
  listofProductImg:observable,
  addDistributor:action,
  distributor:observable,
  listOfDistributors:observable,
  getDistributors:action,
  addProductImg:action,
  getProductImg:action,
  editProduct:action,
  addStock:action,
  productStocks:observable,
 getStock:action,
  stock:observable,
  notif :observable,
    listOfNotif :observable,

 
  cart : observable,
  addtoCart:action,
  listOfCart:observable,
  getCart:action,
  getCartD:action,
  deleteCart:action,
  addOrder:action,
  order:observable,
  listOfOrder:observable,
  getOrder:action,
  getOrderD:action,
  token:observable,
  listOfToken:observable,
  addToken:action,
  deleteToken:action,
  getToken:action,
  accessDistributor:action,
  assignOrder:action,
  staffAssigned:action,
  report:observable,
  addReport:action,
  listOfReport:observable,
  getReport:action,
  archiveDistributor:action,
  cLogs:observable,
  addcLogs:action,
  listOfClogs:observable,
  getcLogs:action,
  archiveAccount:action,
  getProductsR:action,
  getProductImgR:action,
  createToken:action,
  getNotif:action,
  
});

export default StartingStore;
