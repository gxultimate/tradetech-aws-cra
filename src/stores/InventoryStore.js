import { action, observable, decorate, computed } from "mobx";

import Product from "../models/Product";
import Distributor from "../models/Distributor";

import Stock from "../models/Stock";
class InventoryStore {

    product = new Product();
    distributor = new Distributor();
    stock = new Stock();
    
    listofProducts =[];
  listOfDistributors =[];
  productStocks=[];
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


      addProduct = () => { 
        return new Promise((resolve, reject) => {   
          this.api.addproduct(this.product)
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

        addStock = () => {
          console.log(this.listofProducts,'proo')
            let getId = JSON.parse(sessionStorage.getItem('userData'))
            let dis = this.listofProducts.filter(data=> {
              if (data.product_ID === this.product.product_ID){
                  return data._id
              }
            })
        console.log(dis)
         
            this.api.addstock(this.stock , dis[0]._id)
            .then(resp => {
           console.log(resp.data,"respss")
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
            editProduct = () => {
                let prod = this.listofProducts.filter(data=> {
                  if (data.product_ID === this.product.product_ID){
                      return data._id
                  }
                })
            console.log(this.product,"ID")
             
            this.api.editproduct(this.product, prod[0]._id)
                .then(resp => {
               
                  this.listofProducts=resp.data
                })
              }
         


}

decorate(InventoryStore, {


    product :observable,
    distributor :observable,
    stock :observable,
    
    listofProducts :observable,
  listOfDistributors :observable,
  productStocks:observable,

 
    getStock:action,
    addStock:action,
    addProduct:action,
    getDistributors:action,
    getProducts:action,
    editProduct:action,


  
});

export default InventoryStore;
