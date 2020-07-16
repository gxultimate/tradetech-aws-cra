import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from './../../Logo/logowhite.png'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import Badge from '@material-ui/core/Badge';
class DrawerList extends React.Component{
       componentDidMount(){

              let {staffStore:{getOrder}}=this.props;
             
              getOrder();
          
            }
render(){
       let {staffStore:{listOfOrder}}=this.props;
let getuserId = JSON.parse(sessionStorage.getItem('userData'))

let filterOrder = listOfOrder.filter(order =>{
  

       if(order.packer_ID === getuserId.account_ID && order.orderStatus ==='Packing' ? order.packer_ID === getuserId.account_ID && order.orderStatus ==='Packing' : order.dispatcher_ID === getuserId.account_ID && order.orderStatus ==='Dispatch'){
         return order
       }
     
     })

       function  logout() {
              sessionStorage.clear();
              window.location.href = '/';
          }
//   let {startingStore:{ getProducts}}=this.props;

let count =filterOrder.length
return (


    <List >
           <ListItem style={{textAlign:"center"}} > 
           <img src={logo} style={{height:"60px",margin:"auto"}} /> 
     
 
    </ListItem>
    <Divider  />



        <ListItem button >
      <ListItemIcon style={{color:"white"}} onClick={()=>{

         this.props.history.push("/Staff");
 
  }}><Badge color="secondary" badgeContent={count}><ListAltIcon/></Badge></ListItemIcon>
     <ListItemText style={{color:"white"}} onClick={()=>{
         
         this.props.history.push("/Staff");
 
  }}> My Orders</ListItemText> 
    </ListItem>
    <Divider  />

    <ListItem button  style={{color:"white"}}>
      <ListItemIcon style={{color:"white"}} onClick={()=>{
      
         this.props.history.push("/Staff/MyProfile");
 
  }}><FaceIcon/></ListItemIcon>
     <ListItemText onClick={()=>{
         
         this.props.history.push("/Staff/MyProfile");
 
  }}> My Profile</ListItemText> 
    </ListItem>
    <Divider />

    <ListItem button  style={{color:"white"}}>

      <ListItemIcon style={{color:"white"}} onClick={()=>{
         
         this.props.history.push("/Staff/OrderHistory");
 
  }}><LibraryBooksOutlinedIcon/></ListItemIcon>
     <ListItemText onClick={()=>{
         
         this.props.history.push("/Staff/OrderHistory");
 
  }}> Order History</ListItemText> 
    </ListItem>
    <Divider />


    <ListItem button  style={{color:"white"}}>

<ListItemIcon style={{color:"white"}} onClick={logout}><ExitToAppOutlinedIcon/></ListItemIcon>
<ListItemText onClick={logout}> Logout</ListItemText> 
</ListItem>
<Divider />



</List>




);




}





}
export default withRouter(inject("staffStore")(observer(DrawerList)));