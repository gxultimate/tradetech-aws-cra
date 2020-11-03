import axios from "axios";
import { action, decorate } from "mobx";

// import multer from 'multer'

class Api {
  api = axios.create({
    baseURL: "/api"
  });

  getUsers = () => {
    return this.api.get("accounts")
  }
  addaccount = (data)=>{
    return this.api.post("accounts",{
      mode: 'cors',
      data:data,
    })

  }
  getaccounts = ()=>{
    return this.api.get("accounts")

  }
  editaccount = (data ,docID)=>{
    return this.api.put(`accounts/${docID}`,{
    mode:'cors',
    data:data,
  })
  }


  addproduct = (data)=>{
    return this.api.post("product",{
      mode: 'cors',
      data:data,
    })


  }

  addproductImg = (data) => {
    return this.api.post('upload', data, {
      mode:'cors'
    })

  }
  getproductImg  = (data)=>{

    return this.api.post("getproductImg" ,{
      mode:'cors',
      data:data,
    })


  }



  getproducts = (id) =>{
    return this.api.get(`products/${id}`)

  }



  fileupload = (data)=>{
    return this.api.post("product",{
      mode: 'cors',
      data:data,


    })

  }

  loginaccount = async data => {
    return this.api.post("accounts/login" , {
      mode: 'cors',
      data: data
    })
  }

  logintoken = (id) => {
    return this.api.post(`createtoken/${id}`)
  }
 


  adddistributor = (data)=>{
    return this.api.post("distributors",{
      mode: 'cors',
      data:data,


    })

  }
  getdistributors = ()=>{
    return this.api.get("distributors")
  }

  editdistributor = (data ,distributor_ID)=>{
    return this.api.put(`distributors/${distributor_ID}`,{
    mode:'cors',
    data:data,
  })
  }


  archivedistributor = (data ,distributor_ID)=>{
    return this.api.put(`distributors/${distributor_ID}`,{
    mode:'cors',
    data:data,
  })
  }


  editproduct = (data ,product_ID)=>{
    return this.api.put(`product/${product_ID}`,{
    mode:'cors',
    data:data,
  })
  }





  addstock = (data ,product_ID)=>{
    console.log(product_ID,'idd')
    return this.api.post(`stock/${product_ID}`,{
    mode:'cors',
    data:data,
  })
  }

  getstock = (id) =>{
    return this.api.get(`stock/${id}`)

  }



  addtocart = (data)=>{
    return this.api.post("cart",{
      mode: 'cors',
      data:data,
    })
  }

  editcart = (data ,cart_ID,account_ID)=>{
    return this.api.put(`cart/${cart_ID}/${account_ID}`,{
    mode:'cors',
    data:data,
  })
  }

  getcart = (id) =>{
    return this.api.get(`cart/${id}`)
  }

  deletecart = (data,id,account_ID) =>{
    return this.api.delete(`cart/${id}/${account_ID}`,{
      data:data,
    })
  }

  addorder =(data)=> {
    return this.api.post("order",{
      mode:'cors',
      data:data,
    })
  }

  getorder =(id) =>{
   
    return this.api.get(`order/${id}`)
  }


  assignorder = (data ,id)=>{
    return this.api.patch(`order/${id}`,{
    mode:'cors',
    data:data,
  })
  }

  staffassigned =(id,distributor_ID) =>{
    return this.api.get(`order/${id}/${distributor_ID}`)
  }

  addtoken = (data) => {
    return this.api.post("token/",{
      mode:'cors',
      data:data,
    })
  }

  deletetoken = (id) =>{
    return this.api.delete(`token/${id}`)
  }

  gettoken =(id) =>{

    return this.api.get(`token/${id}`)
  }
  gettokenR =() =>{

    return this.api.get(`token/`)
  }

  accessdistributor = (id) => {
    return this.api.get(`token/${id}`)
  }

  addreport =(data)=> {
    return this.api.post("/report",{
      mode:'cors',
      data:data,
    })
  }
  getreport =(id) =>{
  
    return this.api.get(`report/${id}`)
  }
  getreportsup =() =>{
  
    return this.api.get(`report/`)
  }

  addclogs =(data)=> {
    return this.api.post("/log",{
      mode:'cors',
      data:data,
    })
  }

  getclogs = dis_id =>{
    return this.api.get(`log/${dis_id}`)
  }

  archiveaccount = (data ,account_ID)=>{
    return this.api.put(`accounts/${account_ID}`,{
    mode:'cors',
    data:data,
  })
  }

  addnotif = (data)=>{
    return this.api.post("notification",{
      mode: 'cors',
      data:data,
    })


  }
  getnotif = (id) =>{
    return this.api.get(`notification/${id}`)

  }
  addfavorite = (data)=>{
    return this.api.post("productfavorite",{
      mode: 'cors',
      data:data,


    })

  }
  deletefavorite = (id) =>{
    return this.api.delete(`productfavorite/${id}`)
  }

  addmembership = (data)=>{
    return this.api.post("membership",{
      mode: 'cors',
      data:data,


    })

  }
  getmembership = (id) =>{
    return this.api.get(`membership/${id}`)

  }

  addmessage = (data)=>{
    return this.api.post("message",{
      mode: 'cors',
      data:data,


    })

  }
  getmessage = () =>{
    return this.api.get(`message/`)

  }
  
  addstockout = (data ,product_ID)=>{
   
    return this.api.post(`stockout/${product_ID}`,{
    mode:'cors',
    data:data,
  })
  }

  addpricehistory = (data)=>{
    console.log(data,'dataprice')
    return this.api.post("pricehistory",{
      mode: 'cors',
      data:data,


    })

  }

  getpricehistory = () =>{
    return this.api.get(`getpricehistory/`)

  }

}


decorate(Api, {
  getUsers: action,
  addaccount:action,
  getaccounts:action,
  loginaccount:action,
  logintoken:action,
  editaccount:action,
  addproduct:action,
  getproducts:action,
  adddistributor:action,
  getdistributors:action,
  editdistributor:action,
  addproductImg:action,
  getproductImg:action,
  editproduct:action,
  addstock:action,
  getstock:action,
  addcart:action,
  getcart:action,
  editcart:action,
  deletecart:action,
  addorder:action,
  getorder:action,
  addtoken:action,
  deletetoken:action,
  gettoken:action,
  accessdistributor:action,
  assignorder:action,
  staffassigned:action,
  addreport:action,
  getreport:action,
  getreportsup:action,
  archivedistributor:action,
  addclogs:action,
  getclogs:action,
  archiveaccount:action,
  addnotif:action,
  getnotif:action,
  addfavorite:action,
  deletefavorite:action,
  addmembership:action,
  getmembership:action,
  gettokenR:action,
  addmessage:action,
  getmessage:action,
  addpricehistory:action,
  getpricehistory:action,


});

export default Api;
