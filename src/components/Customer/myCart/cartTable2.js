import { Button, Grid, Table, Typography } from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import React from 'react';






 class cartTable2 extends React.Component {
    render() {
        let {startingStore:{listOfCart,editCart,deleteCart,cart }}=this.props;


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#208769',
    color: theme.palette.common.white,
    fontSize: 12,
  },
  body: {
    fontSize: 11,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles1 = makeStyles((theme) => ({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  }));
  
  function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onChangePage(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onChangePage(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onChangePage(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <div className={classes.root}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };


function createData(img, item, qty, amount, change, remove) {
  return { img, item, qty, amount, change, remove };
}


let rows2 =  listOfCart.map(cart => {
  
    return(
  <img style={{width:"35px" , height:"35px"}} src={cart.product_Img} />,cart.product_Name,
    cart.product_Quantity,cart.product_TotalAmount.toLocaleString())
   
   })
  const checkOut = () =>{
    let getuname = JSON.parse(sessionStorage.getItem('userData'))
  
  
  
      // addOrder();
      //  deleteCart();
     
      setTimeout(() => {
        // openNotificationSucess();
        this.props.history.push({"pathname":"/Customer/CheckOut", state:{ 
          account_id: getuname.account_ID,
          distributor_id:getuname.distributor_ID,
           order_items:rows2,
          order_quantity:qty[0] }} )
      }, 500);
  
   }


const handleClickOpen = (prod) => {
  
    // setOpen(true);
  
    cart.setProperty("cart_ID", prod.cart_ID)
    cart.setProperty("account_ID", prod.account_ID)
    cart.setProperty("product_ID", prod.product_ID)
    cart.setProperty("distributor_ID", prod.distributor_ID)
    cart.setProperty("product_Name", prod.product_Name)
    cart.setProperty("product_Category", prod.product_Category)
    cart.setProperty("product_Price", prod.product_Price)
    cart.setProperty("product_UoM", prod.product_UoM)
    
    cart.setProperty("product_Img", prod.product_Img)
    cart.setProperty("product_Quantity", prod.product_Quantity)
    cart.setProperty("product_TotalAmount", prod.product_TotalAmount)

  };

  const handleClose = () => {
    // setOpen(false);
  };

  const handleOk = () => {
   
    editCart();



};

const handleDelete = (del) => {


  cart.setProperty("cart_ID",del.cart_ID)
  cart.setProperty("account_ID", del.account_ID)

  //  setTimeout(() => {
  //  this.setState({ loading: false, visible: false });
  deleteCart();
//  }, 3000);

 
}

let rowss =  listOfCart.map(product => {
  let getuname = JSON.parse(sessionStorage.getItem('userData'))
  return (

    listOfCart.filter((amount) => amount.account_ID === getuname.account_ID)
    .reduce((sum, record) => parseInt(sum) + parseInt(record.product_TotalAmount) , 0)



    );

 })

 let rows =  listOfCart.map(cart => {
  
    return(createData(
  <img style={{width:"35px" , height:"35px"}} src={cart.product_Img} />,cart.product_Name,
    cart.product_Quantity,<span>&#8369;{cart.product_TotalAmount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>,<div><IconButton  onClick={()=>{handleClickOpen(cart)}}  size="medium" style={{backgroundColor:"#31AF91"}} > <EditIcon /> </IconButton></div>,<div><IconButton  onClick={()=> {handleDelete(cart)}}  size="medium" style={{backgroundColor:"#FFA500"}} > <DeleteIcon /> </IconButton></div>))
   
   })

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
});

function CartTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };







  return (
    <React.Fragment>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell align="left">Product</StyledTableCell>
            <StyledTableCell align="left">Qty</StyledTableCell>
            <StyledTableCell align="left">Amount</StyledTableCell>
            <StyledTableCell align="left">Change</StyledTableCell>
            <StyledTableCell align="left">Remove</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <StyledTableRow key={row.img}>
              <StyledTableCell component="th" scope="row">
                {row.img}
              </StyledTableCell>
              <StyledTableCell align="left">{row.item}</StyledTableCell>
              <StyledTableCell align="left">{row.qty}</StyledTableCell>
              <StyledTableCell align="left">{row.amount}</StyledTableCell>
              <StyledTableCell align="left">{row.change}</StyledTableCell>
              <StyledTableCell align="left">{row.remove}</StyledTableCell>
            </StyledTableRow>
          ))}
           {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>

      </Table>
    </TableContainer>

<Grid container sm={12} xs={12} style={{marginBottom:"80px"}}>
<Grid item sm={12} xs={12} style={{textAlign:"center"}}>
<Typography variant="p">Total : <span style={{color:"#208769",fontWeight:"bold"}}> &#8369; {rowss.pop()}</span></Typography>
</Grid>

<Grid item sm={12} xs={12} style={{marginTop:"16px",marginBottom:"16px"}}>
  <Grid container sm={12} xs={12}>
          <Grid item sm={6} xs={7} style={{textAlign:"center"}}>
          <Button variant="contained" style={{backgroundColor:"#208769",color:"white"}} 
          // onClick={()=>{shop()}}
          >
      continue shopping
    </Button >
          </Grid>
          <Grid item sm={6} xs={5} style={{textAlign:"center"}}>
          <Button variant="contained" style={{backgroundColor:"#FFA500",color:"white"}} onClick={()=>{checkOut()}}>
      checkout
    </Button>
          </Grid>
  </Grid>
</Grid>
  </Grid>
  </React.Fragment>
  );
}

return (
  <CartTable/>
)
}
}

export default inject('startingStore')(observer(cartTable2))
