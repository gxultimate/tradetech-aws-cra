import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import PropTypes from 'prop-types';
import React from 'react';
  import { inject, observer } from 'mobx-react';
import EditIcon from '@material-ui/icons/Edit';
import Slide from '@material-ui/core/Slide';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import { Button, DialogTitle, Divider, Grid,InputBase,Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import ReplenishForm from './../Replenish/form.js';
import EditForm from './EditForm.js';
class InventoryTable extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      listofProducts : []
    }
  }
  componentDidMount() {
    
    let {inventoryStore:{getProducts,getStock }}=this.props;

    getProducts().then(res =>{
      this.setState({listofProducts : res})
    });
    getStock();

  }




  render(){
    
    let getId = JSON.parse(sessionStorage.getItem('userData'))
    let {inventoryStore:{product,editProduct,getStock ,listofProducts,stock,productStocks,addStock,getProducts }}=this.props;



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function createData(prodId,image, item, category, brand, uom, price, stocks, action) {
  return {prodId, image, item, category, brand, uom, price, stocks, action };
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
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'image', numeric: false, disablePadding: false, label: 'Image' },
  { id: 'item', numeric: false, disablePadding: false, label: 'Item' },
  { id: 'category', numeric: false, disablePadding: false, label: 'Category' },
  { id: 'brand', numeric: false, disablePadding: false, label: 'Brand' },
  { id: 'uom', numeric: true, disablePadding: false, label: 'UoM' },
  { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
  { id: 'stocks', numeric: true, disablePadding: false, label: 'Stocks' },
  { id: 'action', numeric: true, disablePadding: false, label: 'Action' },
  
];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#208769',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function EnhancedTableHead(props) {
  
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead >
      <TableRow >
   
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
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

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};







const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: '100%',
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

let filter =this.props.mysearch;
 function InventTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('item');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openReplenish, setOpenReplenish] = React.useState(false);







  const handleClickOpen = (prods) => {
  
       
    setOpen(true);
        product.setProperty("product_ID", prods.product_ID)
        product.setProperty("product_Name", prods.product_Name)
        product.setProperty("product_Category", prods.product_Category)
        product.setProperty("product_Description", prods.product_Description)
        product.setProperty("product_Price", prods.product_Price)
        product.setProperty("product_UoM", prods.product_UoM)
        product.setProperty("product_Img", prods.product_Img)
        product.setProperty("product_Barcode", prods.product_Barcode)
        product.setProperty("product_Brand", prods.product_Brand)
        product.setProperty("product_DateReceived", prods.product_DateReceived)
        product.setProperty("product_ExpirationDate", prods.product_ExpirationDate)
        product.setProperty("product_Remarks", prods.product_Remarks)
        product.setProperty("product_Packaging", prods.product_Packaging)
        product.setProperty("product_Variant", prods.product_Variant)
        
      };  
    
      
        const handleReplenish = (products) => {
        
          
    
              setOpenReplenish(true);
            
              product.setProperty("product_ID", products.product_ID)
              product.setProperty("product_Stocks", products.product_Stocks)
              product.setProperty("product_Name", products.product_Name)
              product.setProperty("product_Category", products.product_Category)
              product.setProperty("product_UoM", products.product_UoM)
              // product.setProperty("product_Stocks", products.product_Stocks)
              product.setProperty("product_Brand", products.product_Brand)
              
              product.setProperty("product_Barcode",products.product_Barcode)
    
              
              
            };  
    
              const handleClose = () => {
        setOpen(false);
        setOpenReplenish(false);
      };  
        const handleOk = () => {
       
        editProduct();
    
    };
    const handleOkReplenish = () => {
    
      stock.setProperty("product_ID", product.product_ID)
      stock.setProperty("distributor_ID",getId.distributor_ID)
      stock.setProperty("product_Name",product.product_Name)
      stock.setProperty("product_Category",product.product_Category)
      stock.setProperty("product_UoM",product.product_UoM)
      stock.setProperty("product_Barcode",product.product_Barcode)
      stock.setProperty("product_Brand",product.product_Brand)
    
      
      setTimeout(() => {
        addStock();
        getProducts();
        setLoading(true)
      }, 1000);
    
    };

    


  let rows =  listofProducts.map(product => {
    return(createData(
   
  
  product.product_ID, <img style={{width:"35px" , height:"35px"}} src={product.product_Img}></img>
   ,product.product_Name,product.product_Category,product.product_Brand,
  product.product_UoM,Number(product.product_Price),
  
  // `${productStocks.filter((stock) => stock.product_ID === product.product_ID)
  // .reduce((sum, record) => Number(sum) + Number(record.product_replenishQty) , 0)+ Number(product.product_Stocks)}`  
  // < 100 ? <span style={{color:"white",backgroundColor:"#FFA500",padding:"4px",borderRadius:"5px"}}> 
  // { productStocks.filter((stock) => stock.product_ID === product.product_ID)
  // .reduce((sum, record) => Number(sum) + Number(record.product_replenishQty)  , 0)+ Number(product.product_Stocks) } </span> :  
  // <span style={{color:"white",backgroundColor:"#208769",padding:"4px",borderRadius:"5px"}}>{  productStocks.filter((stock) => stock.product_ID === product.product_ID)
  // .reduce((sum, record) => Number(sum) + Number(record.product_replenishQty) , 0)+ 
  Number(product.product_Stocks) 
  // } </span>
  
  ,<div><IconButton  onClick={()=>{handleClickOpen(product)}}  size="medium" style={{backgroundColor:"#31AF91"}} > <EditIcon /> </IconButton> <IconButton onClick={()=>{handleReplenish(product)}} size="medium" style={{backgroundColor:"#F8B701"}}> <AddToPhotosIcon /> </IconButton></div>  ))
   
   })

   const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.item);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, item) => {
    const selectedIndex = selected.indexOf(item);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, item);
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

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

   const isSelected = (item) => selected.indexOf(item) !== -1;

   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  return (
    <React.Fragment>
    <div className={classes.root}>
      <Paper className={classes.paper}>
       
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.prodId);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  if(filter.length !== 0){
                    if( row.item.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) ){
                  return (
                    <TableRow
                      hover
                      // onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.prodId}
                      selected={isItemSelected}
                    >
                 
                      <TableCell component="th" id={labelId} scope="row">
                        {row.image}
                      </TableCell>
                      <TableCell align="left">{row.item}</TableCell>
                      <TableCell align="left">{row.category}</TableCell>
                      <TableCell align="left">{row.brand}</TableCell>
                      <TableCell align="right">{row.uom}</TableCell>
                      <TableCell align="right">&#8369;{row.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
                      <TableCell align="right">{row.stocks}</TableCell>
                      <TableCell align="right">{row.action}</TableCell>
                    </TableRow>
                 )
                }
                else{
                  return null
                }
              }
              return (
                <TableRow
                hover
                // onClick={(event) => handleClick(event, row.name)}
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={row.prodId}
                selected={isItemSelected}
              >
           
                <TableCell component="th" id={labelId} scope="row">
                  {row.image}
                </TableCell>
                <TableCell align="left">{row.item}</TableCell>
                <TableCell align="left">{row.category}</TableCell>
                <TableCell align="left">{row.brand}</TableCell>
                <TableCell align="right">{row.uom}</TableCell>
                <TableCell align="right">&#8369;{row.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
                <TableCell align="right">{row.stocks}</TableCell>
                <TableCell align="right">{row.action}</TableCell>
              </TableRow>
                  )
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
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>

    
 <Dialog
          // fullScreen={fullScreen}
          open={open}
          TransitionComponent={Transition}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title" style={{backgroundColor:"#208769"}}><Typography variant="h5" style={{color:"white"}}>Edit Product Information</Typography></DialogTitle>
          <Divider/>
          <DialogContent >
          <EditForm 
          />
          </DialogContent>
          <DialogActions>
          <Button autoFocus onClick={()=> {handleOk()}} style={{backgroundColor:"#208769",color:"white"}}>
            <span style={{paddingLeft:"8px",paddingRight:"8px"}}>  Submit</span>
            </Button>
      
            <Button onClick={handleClose}  autoFocus style={{backgroundColor:"#F7A31C",color:"white"}}>
            <span style={{paddingLeft:"8px",paddingRight:"8px"}}>  Close</span>
            </Button>
          </DialogActions>
        </Dialog>

         {/* replenish dialog */}
        <Dialog
          // fullScreen={fullScreen}
          open={openReplenish}
          TransitionComponent={Transition}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title" style={{backgroundColor:"#208769"}}><Typography variant="h5" style={{color:"white"}}>Replenish Stock</Typography></DialogTitle>
          <Divider/>
          <DialogContent >
          <ReplenishForm 
          />
          </DialogContent>
          <DialogActions>
          <Button autoFocus onClick={()=> {handleOkReplenish()}} style={{backgroundColor:"#208769",color:"white"}}>
            <span style={{paddingLeft:"8px",paddingRight:"8px"}}>  Submit</span>
            </Button>
      
            <Button onClick={handleClose}  autoFocus style={{backgroundColor:"#F7A31C",color:"white"}}>
            <span style={{paddingLeft:"8px",paddingRight:"8px"}}>  Close</span>
            </Button>
          </DialogActions>
        </Dialog>
    </React.Fragment>
  );
}
return(
  <InventTable></InventTable> 
 )
   }}
 
 
   export default inject("inventoryStore")(observer(InventoryTable));
