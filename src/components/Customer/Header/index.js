import { AppBar, Grid, IconButton, InputBase, Paper, Typography, CssBaseline } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React from 'react';
import {HashRouter as Router, withRouter } from 'react-router-dom';


class CHeader extends React.Component {
  state = {  }
  render() { 

    let mycart=()=>{
      setTimeout(()=>{
     this.props.history.push("/Customer/MyCart");
      },500)
    }
const styles = {
    backgroundColor:"#208769",
    
    
  };


function Header(){
 
  function  logout() {
    localStorage.clear();
    window.location.href = '/#/Login';
}



return(
<React.Fragment>
<CssBaseline/>

<AppBar position="static" maxWidth="100"  style={styles}>
        <Grid container maxWidth="100" spacing={2} style={{marginTop:"25px",backgroundColor:"#208769",borderBottom:"5px solid orange"}}>
          <Grid item xs={12} sm={2} style={{width:"150px",float:"left",textAlign:"center",margin:"auto"}}>
            <Typography variant="h5" style={{color:"white",fontWeight:"bolder"}}>
          <span style={{color:"orange"}}>TRADE</span>TECH
           </Typography>
          </Grid>


        <Grid item xs={11} sm={4} style={{margin:"auto"}}>
        <Paper component="form" className={styles.root} style={{margin:"auto",height:"38px"}}>
    
      <InputBase 
      type="search"
      
       fullWidth={false} 
       style={{marginTop:"1.5px",
       width:"80%",
       marginLeft:"10px"}}
        placeholder="Search "
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit"  aria-label="search" style={{backgroundColor:"orange",borderRadius:"4px",height:"38px",float:"right"}}>
        <  SearchIcon style={{color:"white",marginTop:'-15%',float:"right"}}/>
      </IconButton>
    
    </Paper >
        </Grid>

        <Grid item xs={12} sm={3} style={{margin:"auto"}}>
 
        

      
<div style={{textAlign:"center",marginTop:"-2px"}}>
<IconButton style={{backgroundColor:"#1E7A60",marginRight:"12px"}}>
  <MailOutlineIcon style={{color:"white"}}/>
</IconButton>

<IconButton onClick={mycart} style={{backgroundColor:"#1E7A60",marginRight:"12px"}}>
  <ShoppingCartOutlinedIcon style={{color:"white"}}/>
</IconButton>
<IconButton onClick={logout} style={{backgroundColor:"#1E7A60",marginRight:"12px"}}>
  <ExitToAppIcon style={{color:"white"}}/>
</IconButton>
</div>
        </Grid>

        </Grid>

      </AppBar >






      </React.Fragment>


);



}



return ( <Header/> );
}
}

export default withRouter(CHeader);