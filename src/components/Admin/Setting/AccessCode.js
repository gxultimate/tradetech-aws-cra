import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {inject,observer} from 'mobx-react'
class accessCode extends React.Component {
    state = {  }



    componentDidMount(){
      let {startingStore:{getToken}}=this.props;

      getToken();
    }
    render() { 

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});

function createData(token, date) {
  return { token, date };
}

let {startingStore:{listOfToken}}=this.props;
let myid = JSON.parse(sessionStorage.getItem('userData'))
let filtoken =listOfToken.filter(tken => tken.distributor_ID === myid.distributor_ID)
let rows = filtoken.map(tokenz => {

  return(createData(

    tokenz.access_Token,tokenz.date_Generated


  ))
})

 function AccessCode() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead style={{backgroundColor:"#208769",color:"white"}}>
          <TableRow>
            <TableCell style={{color:"white",fontWeight:"bolder"}}>My Access Code</TableCell>
            <TableCell align="right" style={{color:"white",fontWeight:"bolder"}}>Date Generated</TableCell>
    
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.token}>
              <TableCell component="th" scope="row">
                {row.token}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
     
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

return ( 
    <AccessCode/>
 );
}
}

export default inject("startingStore")(observer(accessCode));