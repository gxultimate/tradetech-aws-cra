

// import Grid from '@material-ui/core/Grid';


// import ManagersTable from './ManagerTable'
// import AddManager from './AddManager'


// import React, { Component,Fragment } from 'react'

//  class ManagerGrid extends Component {
//   render() {



//  function AdminGrid() {
 

//   return (
//     <Fragment>
//     <div >
//       <Grid container spacing={2}  sm={12} xs={12}>
    


//         <Grid item  sm={12} xs={12} style={{textAlign:"right"}}>
//     <AddManager/>
//         </Grid>
//         <Grid item  sm={12} xs={12}>
//         <ManagersTable/>
//         </Grid>
        


//       </Grid>
//     </div>
//     </Fragment>
//   );
// }

// return (
// <AdminGrid/>
// )
// }
// }

// export default ManagerGrid


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddManager from './AddManager/index.js'
import ManagersTable from './ManagerTable'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <AddManager/>
        </Grid>
        <Grid item xs={12} sm={12}>
        <ManagersTable/>
        </Grid>

      </Grid>
    </div>
  );
}

