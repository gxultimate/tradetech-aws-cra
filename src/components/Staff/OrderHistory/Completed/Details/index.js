import { Grid, TableCell, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import { inject, observer } from 'mobx-react';
import React from 'react';
import OrdTable from './table';

 class Details extends React.Component {
  render() {

let {staffStore:{order}}=this.props;

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#208769',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Coke', 159, 6.0, 24,`${order.orderID}`),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
});

function Detailtable() {
  const classes = useStyles();

  return (
    <React.Fragment>
<Grid container xs={12} sm={12}>
  <Grid item  xs={12} sm={12} style={{marginBottom:"16px"}}>
    <Grid container  xs={12} sm={12}>
  <Grid item xs={12} sm={12}>
    <Typography variant='subtitle2'><span style={{fontWeight:"bold"}}>ID: </span>{order.orderID}</Typography></Grid>
    <Grid item xs={12} sm={12}><span style={{fontWeight:"bold"}}>Order Date: </span>{order.orderDate}</Grid>
      <Grid item xs={12} sm={12}><span style={{fontWeight:"bold"}}>Payment Mode: </span>{order.modeOfPayment}</Grid>

      <Grid item xs={12} sm={12}><span style={{fontWeight:"bold"}}>Order Status: </span>{order.orderStatus}</Grid>

      <Grid item xs={12} sm={12}><span style={{fontWeight:"bold"}}>Payment Status: </span>{order.paymentStatus}</Grid>
    </Grid>
  </Grid>

 <Grid item>
    <OrdTable ordID={order.orderID}/>
    
    </Grid>
    </Grid>
    </React.Fragment>
  );
}


return (
  <Detailtable/>
)
}
}

export default inject('staffStore')(observer(Details))
