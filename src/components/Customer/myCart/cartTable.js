import { Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, TableRow } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MuiAlert from '@material-ui/lab/Alert';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import EditForm from './editCart';


class MyCart extends React.Component {



 


  
  constructor(props){

    
    super(props)
    this.state = {
      listOfProducts : [],
      listOfProductImg : [],
      listOfCart:[],
    }
  }

image
arrayBufferToBase64 (buffer) {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => binary += String.fromCharCode(b));
  return window.btoa(binary);
};



  render() { 
    let {customerStore:{listOfCart,editCart,deleteCart,cart }}=this.props;
    let getuname = JSON.parse(sessionStorage.getItem('userData'))
    let dist = JSON.parse(sessionStorage.getItem('distData'))
    let date = new Date();
    function getHash(input){
      var hash = 0, len = input.length;
      for (var i = 0; i < len; i++) {
        hash  = ((hash << 5) - hash) + input.charCodeAt(i);
        hash |= 0; 
      }



      return hash;
    }

    let cartID =  listOfCart.map(cart => {
  
      return(
        cart.cart_ID
      )
    
     })


     let quantity =  listOfCart.map(cart => {
  
      return(
        cart.product_Quantity
      )
    
     })



     const shop =()=>{
      // let getuname = JSON.parse(sessionStorage.getItem('userData'))
      setTimeout(() => {
        // openNotificationSucess();
        this.props.history.push("/Customer")
      }, 500);
     }

function createData( 
  // image,
   name, quantity, price, edit, del) {
  return {  
    // image,
     name, quantity, price, edit,del };
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
        order_quantity:quantity[0] }} )
    }, 500);

 }

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const headCells = [
 
  // { id: 'image', numeric:false, disablePadding:false, label: 'Image' },
  { id: 'name', numeric: false, disablePadding: false, label: 'Product' },
  { id: 'quantity', numeric: true, disablePadding: true, label: 'Qty' },
  { id: 'price', numeric: true, disablePadding: false, label: 'Amount' },
  { id: 'edit', numeric:true,  disablePadding: false, label: 'Mod' },
  { id: 'del', numeric:true,  disablePadding: false, label: 'Rem' },
];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#208769',
    color: theme.palette.common.white,
   
    padding:'1px',
   
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function CartTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead >
      <TableRow >
  
        {headCells.map(headCell => (
          <StyledTableCell
        
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            // padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

CartTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};





const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: '200',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
 function CartTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  let getuname = JSON.parse(sessionStorage.getItem('userData'))
  const [opens, setOpens] = React.useState(false);
  const handleClickOpen = (prod) => {
  
    setOpen(true);
 
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
    // cart.setProperty("product_TotalAmount", prod.product_TotalAmount)

  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOk = (e) => {
  
    editCart();



};

const handleDelete = (del) => {


  cart.setProperty("cart_ID",del.cart_ID)
  cart.setProperty("account_ID", del.account_ID)
 
  //  setTimeout(() => {
  //  this.setState({ loading: false, visible: false });
  deleteCart();
  //  setTimeout(() => {
  setOpens(true);
//  }, 2000);

 
}

let rowss =  listOfCart.map(product => {

  return (

    listOfCart.filter((amount) => amount.account_ID === getuname.account_ID && amount.distributor_ID === dist.distributor_ID)
    .reduce((sum, record) => parseInt(sum) + parseInt(record.product_TotalAmount) , 0)



    );

 })



  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  let filcart = listOfCart.filter(carts => carts.account_ID === getuname.account_ID && carts.distributor_ID === dist.distributor_ID)

  let rows =  filcart.map(cart => {
  
    return(createData(
  // <img style={{width:"35px" , height:"35px"}} src={cart.product_Img} />,
  cart.product_Name,
    cart.product_Quantity,<span>&#8369;{cart.product_TotalAmount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>,<div><IconButton  onClick={()=>{handleClickOpen(cart)}}  size="medium" style={{backgroundColor:"#31AF91"}} > <EditIcon style={{fontSize:"12px"}}/> </IconButton></div>,<div><IconButton  onClick={()=> {handleDelete(cart)}}  size="medium" style={{backgroundColor:"#FFA500"}} > <DeleteIcon style={{fontSize:"14px"}}/> </IconButton></div>))
   
   })

 


 

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = event => {
    setDense(event.target.checked);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);



 

  return (
   
    <div className={classes.root}>
      <Snackbar open={opens} autoHideDuration={3000}  anchorOrigin={{vertical:'center',horizontal:'center'}}>
        <Alert  severity="success">
          Item successfully removed!
        </Alert>
      </Snackbar>

      <Paper className={classes.paper}>
    
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <CartTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody >
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                    
                      role="checkbox"
                  
                      tabIndex={-1}
                    
                    
                    >
                 
                      {/* <TableCell component="th" id={labelId} scope="row" align="left"  padding='none'>
                       <span style={{paddingleft:"10px"}}> {row.image}</span>
                      </TableCell> */}
                      <TableCell component="th" id={labelId} scope="row" align="left" style={{fontSize:"12px"}} >{row.name}</TableCell>
                      <TableCell align="right" style={{fontSize:"12px"}} padding='none'>{row.quantity}</TableCell>
                      <TableCell align="right" style={{fontSize:"12px"}} padding='none'>{row.price}</TableCell>
                    
                      <TableCell align="right" padding='none'>{row.edit}</TableCell>
                      <TableCell align="center" padding='none'>{row.del}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>


      <Dialog
        // fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" style={{backgroundColor:"#208769"}}><Typography variant="h5" style={{color:"white"}}>Modify Quantity</Typography></DialogTitle>
          <Divider/>
        <DialogContent>
       <EditForm/>
        </DialogContent>
        <DialogActions>
        <Button autoFocus onClick={()=> {handleOk()}} style={{backgroundColor:"#208769",color:"white"}} >
          <span style={{paddingLeft:"8px",paddingRight:"8px"}}>  Submit</span>
          </Button>
    
          <Button onClick={handleClose}  autoFocus style={{backgroundColor:"#F8B701",color:"white"}}>
          <span style={{paddingLeft:"8px",paddingRight:"8px"}}>  Close</span>
          </Button>
        </DialogActions>
      </Dialog>



 <Grid container sm={12} xs={12} style={{marginBottom:"80px"}}>
  <Grid item sm={12} xs={12} style={{textAlign:"center"}}>
<Typography variant="p">Total : <span style={{color:"#208769",fontWeight:"bold"}}> &#8369; {rowss.pop()}</span></Typography>
  </Grid>

  <Grid item sm={12} xs={12} style={{marginTop:"16px",marginBottom:"16px"}}>
    <Grid container sm={12} xs={12}>
            <Grid item sm={6} xs={7} style={{textAlign:"center"}}>
            <Button variant="contained" style={{backgroundColor:"#208769",color:"white"}} 
            onClick={()=>{shop()}}
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
    
    </div>
  );
}
return ( 
  


  <CartTable />
 );
}
}

export default withRouter(inject("customerStore")(observer(MyCart)));





