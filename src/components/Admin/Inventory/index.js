import React, { Component} from 'react';

import {withRouter} from 'react-router-dom'
import {inject,observer} from 'mobx-react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Grid,CssBaseline,Typography,Divider,Paper, Button} from '@material-ui/core';

import AddButton from './NewProd/index.js';
import Stock from './Replenish/index.js';
import AddItemGroupBtn from './NewItemGroup'


import UploadBulk from './UploadBulk';
import InventoryTab from './tab.js'

import ImportExportIcon from '@material-ui/icons/ImportExport';

class InventDrawer extends Component{

render(){
  let {inventoryStore:{getProducts}}=this.props;

  function Inventory()  {
    
   

    React.useEffect(() => {
    
          getProducts();
    

    },[])
  

  
    return (
      <div >
       
      
        <Grid container direction="row" lg={12} sm={12} xs={12}>
          <Grid item lg={12} sm={12} xs={12} style={{marginBottom:"10px"}}>
          <Typography variant="h5" style={{marginBottom:"5px"}}>
           Inventory Management
        </Typography>
        </Grid>
         
          
        <Grid item lg={12} sm={12} xs={12}>
            <Grid container direction="row" alignItems="right" justify="right" lg={12} sm={12} xs={12} style={{textAlign:'right',float:'right'}}>
     
          
            
    <Grid item xs={12}>  <AddButton/></Grid>
       
             
        
               
          </Grid >
          </Grid>
             <Grid container xs={12} sm={12} lg={12}>
           <InventoryTab/>
         </Grid>
         
         </Grid>

      </div>
    );
  }

  
return (     
  <Inventory/> 
)
}
}
export default withRouter(inject("inventoryStore")(observer(InventDrawer)));
