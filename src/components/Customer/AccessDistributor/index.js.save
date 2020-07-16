import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Divider, Paper } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MuiAlert from '@material-ui/lab/Alert';
import { inject, observer } from 'mobx-react';
import moment from 'moment';
import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from './../../Logo/logowhite.png';
import AddDist from './addDistributor';
class MyDistributor extends React.Component {

  
  componentDidMount(){
    let {customerStore:{ getMembership,getToken}}=this.props;
    
    getToken();
    getMembership();
  }

  
 
  
   state = {
      
       
        snackbaropen:false,
      
       
        snackbarerror:"Incorrect access code",
    }
  
    
  
  

  render() {
    const {snackbaropen,snackbarerror}=this.state;
  
    let {customerStore:{accessDistributor,token,distributor,cLogs,addcLogs,listOfMembership}}=this.props;
    let getId = JSON.parse(sessionStorage.getItem('userData'))

    
    function Alert(props) {
      return <MuiAlert elevation={6} variant="filled" {...props} />;
    } 


       let date = new Date();
  function getHash (input)  {
    let hash = 0, len = input.length;
    for (let i = 0; i < len; i++) {
      hash  = ((hash << 5) - hash) + input.charCodeAt(i);
      hash |= 0; // to 32bit integer
    }
  
            
  
    return hash;
  }

  let  snackbarClose =()=>{
    this.setState({snackbaropen:false});
  }

  let accessD =(distD)=>{
    token.setProperty("access_Token",distD.access_Token.toString())



    accessDistributor().then(res =>{
console.log(res,'ress')

    if (res === undefined){
      
      setTimeout(() => {
        this.setState({ snackbaropen: true });
      //   openNotification();
        // this.props.history.push("/Customer")
      }, 500);

 
    }
    else{
      cLogs.setProperty("log_ID",`${date.getFullYear()}-${getHash(date.getDay())}-${ Math.floor(1000 + Math.random() * 9000)}`)
      cLogs.setProperty("account_ID",getId.account_ID)
      cLogs.setProperty("distributor_ID",res.distributor_ID)
      cLogs.setProperty("log_activity","Access Store")
      cLogs.setProperty("log_Date",moment().format('MMM/DD/YYYY,h:mm:ssa'))
      setTimeout(() => {
      addcLogs();
      distributor.setProperty("distributor_ID",res.distributor_ID)
      this.props.history.push("/Customer/Home" )
    }, 500);


 
    }
   })

  }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    marginTop:'16px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


let getDist = listOfMembership.filter(ace => ace.account_ID === getId.account_ID).map(dist =>{
  return (
<React.Fragment key={dist.membership_ID}>
<Snackbar anchorOrigin={{vertical:'top',horizontal:'center'}}    open={snackbaropen} autoHideDuration={2000} onClose={snackbarClose}  >   
    <Alert  severity="error">
     {snackbarerror}
      </Alert></Snackbar>
<ListItem button onClick={()=>accessD(dist)}>
        <ListItemText secondary={dist.distributor_wHouse} />
        <ListItemSecondaryAction>
                  <IconButton onClick={()=>accessD(dist)}  edge="end" aria-label="icon">
                    <ArrowForwardIosIcon />
                   
                  </IconButton>
                </ListItemSecondaryAction>
      </ListItem>
      <Divider />
</React.Fragment>
    
  )
})

function DistGrid() {
  const classes = useStyles();








  
  return (


    <div className={classes.root}>
  

<AppBar position="fixed" style={{backgroundColor:"#208769"}}>
        <Toolbar style={{textAlign:"center"}}>
            <img src={logo} style={{height:"120px",margin:"auto"}}></img>
        </Toolbar>
      </AppBar>
      <Toolbar />
                <Grid container direction="row" sm={10} xs={11} justify='center' alignItems='center' style={{marginTop:"95px"}}>
    <Grid item sm={12} xs={12} style={{textAlign:"center"}} justify='center'>
<Paper style={{marginLeft:'20px'}}>
    <Grid container sm={12} >
       <Grid item  sm={1} xs={1} style={{backgroundColor:"#208769",paddingRight:"10px"}}></Grid>
       <Grid item sm={10} xs={10} style={{paddingTop:"10px",paddingBottom:"10px",marginleft:"15px"}}><Typography variant="p" style={{fontWeight:"bold",width:"98%"}}>&nbsp;&nbsp;Access Distributor</Typography> </Grid>
      
       </Grid>
       </Paper>
    </Grid>
    </Grid>



      <Grid container direction="row" justify="center" alignItems="center">
                     <Grid item xs={10} sm={4}>
          <Paper className={classes.paper}>
          <List component="nav" aria-label="main mailbox folders" style={{backgroundColor:"#208769",color:"white"}}>
        <ListItem button>
       
          <ListItemText  primary="My Distributor" />
        </ListItem>
   
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
       {getDist}
      </List>
          </Paper>
        </Grid>
        </Grid>
               <div style={{margin:0, top: 'auto',right: 20,bottom: 70,left: 'auto',position: 'fixed'}}>
   <AddDist />
    </div>
   <Grid  item lg={12} sm={12} xs={12} style={{bottom: 0,position: 'absolute',border:'1px solid white',width:'100%'}}>
<Paper className={classes.paper}><Typography variant='subtitle2'> &copy; TradeTech 2020</Typography></Paper>
   </Grid>
    </div>
  );
}


return (
  <DistGrid/>
)
}
}

export default withRouter(inject('customerStore')(observer(MyDistributor)))
