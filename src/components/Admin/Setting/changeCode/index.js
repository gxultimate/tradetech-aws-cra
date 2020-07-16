import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import {inject,observer} from 'mobx-react'
class Change extends React.Component {
    state = {  }
    render() { 
 

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const changecode =()=>{
  let getId = JSON.parse(sessionStorage.getItem('userData'))
  let {startingStore:{addToken,token}}=this.props;
  token.setProperty("distributor_ID",getId.distributor_ID)
  token.setProperty("distributor_warehouseName",getId.distributor_warehouseName)
  // deleteToken();
  addToken();
}





 function ChangeButton() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        style={{backgroundColor:'#FFA500',color:'white'}}
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={()=>changecode()}
      >
        Generate Access Code
      </Button>

    </div>
  );
}


return ( 
    <ChangeButton/>
 );
}
}

export default inject("startingStore")(observer(Change));
