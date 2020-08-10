import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { withRouter } from 'react-router-dom';

import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import Badge from '@material-ui/core/Badge';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Tooltip from '@material-ui/core/Tooltip';
class DrawerList extends React.Component{

       componentDidMount(){
       let{managerStore:{getOrder,getMessage}}=this.props;
       getOrder();
       getMessage()
       }
      
render(){
       let getId = JSON.parse(sessionStorage.getItem('userData'))
       let{managerStore:{listOfOrder,listOfMessage}}=this.props;
       let orders = listOfOrder.filter((order) => {
  
  
              if (order.distributor_ID === getId.distributor_ID && order.orderStatus === 'Pending' ){
                if( getId.staff_Role==='Packer Manager'){
                   return  order
                 }
               } 
               else if (order.distributor_ID === getId.distributor_ID && order.orderStatus === 'Transfer' ){
                 if( getId.staff_Role==='Dispatcher Manager'){
                    return  order
                  }
                } 
            
            
            
            })

            let count =orders.length
            let messages = listOfMessage.filter (msg => msg.recipient_ID === getId.account_ID).length
       function  logout() {
              sessionStorage.clear();
              window.location.href = '/';
          }
//   let {managerStore:{ getProducts}}=this.props;


return (


    <List >
           <ListItem style={{textAlign:"center"}} > 
           <img src='https://res.cloudinary.com/startupprojectventuresph/image/upload/v1597019714/BackgroundImg/logowhite_ulnfx4.png' style={{height:"60px",margin:"auto"}} /> 
     
 
    </ListItem>
    <Divider  />



        <ListItem button >
       
       
      <ListItemIcon style={{color:"white"}} onClick={()=>{

         this.props.history.push("/Manager");
 
  }}> <Tooltip title={`${count} unassigned order(s)`} placement="right" arrow><Badge color="secondary" badgeContent={count}><ListAltIcon/></Badge></Tooltip></ListItemIcon> 
   
     <ListItemText style={{color:"white"}} onClick={()=>{
         
         this.props.history.push("/Manager");
 
  }}> Assign Orders</ListItemText> 
  
    </ListItem>
    <Divider  />

    <ListItem button >
        
        <ListItemIcon style={{color:"white"}} onClick={()=>{
  
           this.props.history.push("/Manager/MyStaff");
   
    }}><PeopleAltIcon/></ListItemIcon>
     
       <ListItemText style={{color:"white"}} onClick={()=>{
           
           this.props.history.push("/Manager/MyStaff");
   
    }}> My Staff</ListItemText> 
    
      </ListItem>

      <Divider  />


    <ListItem button  style={{color:"white"}}>
      <ListItemIcon style={{color:"white"}} onClick={()=>{
      
         this.props.history.push("/Manager/Messaging");
 
  }}><Tooltip title={`${messages} unread message(s)`} placement="right" arrow><Badge color="secondary" badgeContent={messages}><MailOutlineIcon/></Badge></Tooltip></ListItemIcon>
     <ListItemText onClick={()=>{
         
         this.props.history.push("/Manager/Messaging");
 
  }}> Messaging</ListItemText> 
    </ListItem>

      <Divider  />


    <ListItem button  style={{color:"white"}}>
      <ListItemIcon style={{color:"white"}} onClick={()=>{
      
         this.props.history.push("/Manager/MyProfile");
 
  }}><FaceIcon/></ListItemIcon>
     <ListItemText onClick={()=>{
         
         this.props.history.push("/Manager/MyProfile");
 
  }}> My Profile</ListItemText> 
    </ListItem>
    <Divider />

    <ListItem button  style={{color:"white"}}>

      <ListItemIcon style={{color:"white"}} onClick={()=>{
         
         this.props.history.push("/Manager/OrderHistory");
 
  }}><LibraryBooksOutlinedIcon/></ListItemIcon>
     <ListItemText onClick={()=>{
         
         this.props.history.push("/Manager/OrderHistory");
 
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
export default withRouter(inject("managerStore")(observer(DrawerList)));