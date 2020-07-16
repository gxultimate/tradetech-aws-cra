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
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
class DrawerList extends React.Component{

       componentDidMount(){
       let{managerStore:{getOrder}}=this.props;
       getOrder();
       }
      
render(){
       let getId = JSON.parse(sessionStorage.getItem('userData'))
       let{managerStore:{listOfOrder}}=this.props;
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
       function  logout() {
              sessionStorage.clear();
              window.location.href = '/';
          }
//   let {managerStore:{ getProducts}}=this.props;


return (


    <List >
           <ListItem style={{textAlign:"center"}} > 
           <img src={logo} style={{height:"60px",margin:"auto"}} /> 
     
 
    </ListItem>
    <Divider  />



        <ListItem button >
        
      <ListItemIcon style={{color:"white"}} onClick={()=>{

         this.props.history.push("/Manager");
 
  }}><Badge color="secondary" badgeContent={count}><ListAltIcon/></Badge></ListItemIcon>
   
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