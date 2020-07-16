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
import {inject,observer} from 'mobx-react'
import moment from 'moment';



 class ProdExpiry extends React.Component {
  componentDidMount() {
    
    let {inventoryStore:{getProducts ,getStock}}=this.props;

    getProducts();
   getStock()

  }

  render() {
    let getId = JSON.parse(sessionStorage.getItem('userData'))
    let {inventoryStore:{product,editProduct,getStock ,listofProducts,stock,productStocks,addStock }}=this.props;


function createData(image, item, category, brand, uom, price, stocks,dayss, action) {
  return { image, item, category, brand, uom, price, stocks,dayss, action };
}
let today = moment().format('MMM/DD/YYYY');

let filProds = listofProducts.filter(prod =>{ 
  let a = moment(today).diff(prod.product_ExpirationDate,'days');
  if(  a === 15 || a === 14|| a === 13 || a === 12||a === 11 || a === 10
    || a === 9 || a === 8 || a === 7 || a === 6 || a === 5 || a === 4 ||  a === 3 ||  a === 2 ||  a === 1){
   
    // console.log( moment(today).diff(prod.product_ExpirationDate,'days'),'eday')
    return prod
  }else{
    return null
  }
})

let rows = filProds.map(product => {
  return(createData(
 

<img style={{width:"35px" , height:"35px"}} src={product.product_Img}></img>
 ,product.product_Name,product.product_Category,product.product_Brand,
product.product_UoM,<span>&#8369;{(product.product_Price).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>,

productStocks.filter((stock) => stock.product_ID === product.product_ID)
.reduce((sum, record) => sum + record.product_replenishQty , 0).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")  < 100 ? <span style={{color:"white",backgroundColor:"#FFA500",padding:"4px",borderRadius:"5px"}}> 
{ productStocks.filter((stock) => stock.product_ID === product.product_ID)
.reduce((sum, record) => sum + record.product_replenishQty , 0).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") } </span> :  
<span style={{color:"white",backgroundColor:"#208769",padding:"4px",borderRadius:"5px"}}>{  productStocks.filter((stock) => stock.product_ID === product.product_ID)
.reduce((sum, record) => sum + (record.product_replenishQty) , 0).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") } </span>,moment(today).diff(product.product_ExpirationDate,'days')

  ))
 
 })


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
  { id: 'item', numeric: true, disablePadding: false, label: 'Item' },
  { id: 'category', numeric: true, disablePadding: false, label: 'Category' },
  { id: 'brand', numeric: true, disablePadding: false, label: 'Brand' },
  { id: 'uom', numeric: true, disablePadding: false, label: 'UoM' },
  { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
  { id: 'stocks', numeric: true, disablePadding: false, label: 'Stocks' },
  { id: 'dayss', numeric: true, disablePadding: false, label: 'Expired In' },
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

function ExpiryTableHead(props) {
  
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

ExpiryTableHead.propTypes = {
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

 function ExpiryTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
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

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
       
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <ExpiryTableHead
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
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      // onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.item}
                      selected={isItemSelected}
                    >
                 
                      <TableCell component="th" id={labelId} scope="row">
                        {row.image}
                      </TableCell>
                      <TableCell align="right">{row.item}</TableCell>
                      <TableCell align="right">{row.category}</TableCell>
                      <TableCell align="right">{row.brand}</TableCell>
                      <TableCell align="right">{row.uom}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">{row.stocks}</TableCell>
                      <TableCell align="right">{row.dayss}days</TableCell>
                      <TableCell align="right">{row.action}</TableCell>
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
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}


return (
 <ExpiryTable/>
)
}
}

export default inject('inventoryStore')(observer(ProdExpiry))
