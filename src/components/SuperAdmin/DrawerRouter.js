import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';

import { inject, observer } from 'mobx-react';
import React from 'react';
import { withRouter } from 'react-router-dom';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import ReportIcon from '@material-ui/icons/Report';






class DrawerList extends React.Component{

render(){
  


return (


    <List>
        
    <ListItem button >
      <ListItemIcon onClick={()=>{
         
         this.props.history.push("/SuperAdmin");
 
  }} ><DashboardIcon style={{color:"white"}}/></ListItemIcon>
     <ListItemText onClick={()=>{
         
         this.props.history.push("/SuperAdmin");
 
  }} style={{color:"white"}}> Dashboard</ListItemText> 
    </ListItem>
    <Divider />

    <ListItem button>
      <ListItemIcon onClick={()=>{
         
         this.props.history.push("/SuperAdmin/DistributorManagement");
 
  }}><HomeWorkIcon style={{color:"white"}}/></ListItemIcon>
     <ListItemText onClick={()=>{
         
         this.props.history.push("/SuperAdmin/DistributorManagement");
 
  }} style={{color:"white"}}> Distributor management </ListItemText> 
    </ListItem>
    <Divider />

    <ListItem button>
      <ListItemIcon onClick={()=>{
         
         this.props.history.push("/SuperAdmin/Issues");
 
  }}><ReportIcon style={{color:"white"}}/></ListItemIcon>
     <ListItemText onClick={()=>{
         
         this.props.history.push("/SuperAdmin/Issues");
 
  }} style={{color:"white"}}> Issues </ListItemText> 
    </ListItem>
    <Divider />


</List>




);




}





}
export default withRouter(inject("startingStore")(observer(DrawerList)));