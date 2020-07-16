import { Button, FormControlLabel, Grid, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { HashRouter as Router, withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    maxWidth: '90%',
    backgroundColor: theme.palette.background.paper,
    marginTop:"10px",
    marginLeft:"25px",
  
  },

}));



class Distributors extends React.Component {

  componentDidMount() {
    let {customerStore:{getDistributors,getCart }}=this.props;
  
getDistributors();
getCart();
  
    
  }

    render() { 

 let {customerStore:{listOfDistributors,distributor,listOfUsers}}=this.props;
 let getDisId = JSON.parse(sessionStorage.getItem('userData'))
 let listOfDis = listOfDistributors.filter(distributor => distributor.distributor_ID === getDisId.distributor_ID)

let MyDist =listOfDis.map(distributorss =>{

 const viewProducts = (distributorss)=>{

   
   
   distributor.setProperty("distributor_ID",distributorss.distributor_ID)


   setTimeout(() => {

    this.props.history.push({"pathname":"/Customer", state:{ id: distributorss.distributor_ID}} )
  }, 500);

  }
return(

<div >



   




<ExpansionPanel  >
  
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{color:"white"}}/>}
          
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{backgroundColor:"#208769"}}
        >
    
          <Typography variant="h6" style={{color:"white"}}>{distributorss.distributor_warehouseName}</Typography>
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={event => event.stopPropagation()}
            onFocus={event => event.stopPropagation()}
            control={ <Button
              variant="contained"
             
              size="small"
              style={{color:"white",marginLeft:"20px",backgroundColor:"#FFA500"}}
              // startIcon={<VisibilityOutlinedIcon />}
              onClick={()=>{viewProducts(distributorss)}}
            >
              View Products
            </Button>}
           
          />
         
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{backgroundColor:"#ffffff"}} >
          <Grid container direction="row" sm={12} >
            <Grid item sm={12} style={{paddingTop:"8px"}}>
              <Grid container direction="row" >
                <Grid sm={6}>
          <Typography variant="subtitle1" gutterBottom ><span style={{fontWeight:"bold"}}>Admin : </span><span> {distributorss.distributor_lName},{distributorss.distributor_fName} {distributorss.distributor_mName} </span></Typography> 
          </Grid>
          <Grid sm={6}>
          <Typography variant="subtitle1"  gutterBottom><span style={{fontWeight:"bold"}}>Tier No :</span> <span> {distributorss.distributor_tierNo} </span></Typography> 
          </Grid>
          </Grid>
          </Grid>
          <Grid item sm={12}>
          <Grid container direction="row">
                <Grid sm={6}>
          <Typography variant="subtitle1"  ><span style={{fontWeight:"bold"}}>Address : </span><span> {distributorss.distributor_address} </span></Typography> 
          </Grid>
       
                <Grid sm={6}>
          <Typography variant="subtitle1" ><span style={{fontWeight:"bold"}}>Contact No : </span><span> {distributorss.distributor_contactNo} </span></Typography> 
          </Grid>
          </Grid> </Grid>
          <Grid item sm={12}>
          <Grid container direction="row">
                <Grid sm={6}>
          
          <Typography variant="subtitle1" ><span style={{fontWeight:"bold"}}>Email : </span><span> {distributorss.distributor_emailAddress} </span></Typography> 
          </Grid>
          <Grid sm={6}>
          <Typography variant="subtitle1" ><span style={{fontWeight:"bold"}}>Status :</span> <span> {distributorss.distributor_status} </span></Typography> 
          </Grid></Grid></Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      

</div>


)

})






 function DistGrid() {
  const classes = useStyles();

  return (
    <Router>
      {/* <Grid>
        <Header/>
      </Grid> */}
  
 
        <div style={{margin:"auto",marginTop:"20px"}}>
          <Typography variant="h5" style={{margin:"auto"}}>My Distributor</Typography>
          <Divider style={{marginBottom:"30px"}}/>
      {MyDist}



      </div>
  
  



    </Router>
  );
}
return ( <DistGrid/> );
}
}

export default withRouter(inject("customerStore")(observer(Distributors)));
