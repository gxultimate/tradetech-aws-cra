// import React from 'react';
// import { withStyles, makeStyles,useTheme } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import {inject,observer} from 'mobx-react'
// import PropTypes from 'prop-types';
// import TableFooter from '@material-ui/core/TableFooter';
// import TablePagination from '@material-ui/core/TablePagination';

// import IconButton from '@material-ui/core/IconButton';
// import FirstPageIcon from '@material-ui/icons/FirstPage';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import LastPageIcon from '@material-ui/icons/LastPage';

//  class TransactionsTable extends React.Component {


//   componentDidMount(){
//     let{crmStore:{getOrderD,order}}=this.props;
//     console.log(this.props.account_ID,'mymy')
//     order.setProperty('account_ID',this.props.account_ID)
//     getOrderD();
//   }



//   render() {
  
// let {crmStore:{listOfOrder}}=this.props;






//     const useStyles1 = makeStyles((theme) => ({
//       root: {
//         flexShrink: 0,
//         marginLeft: theme.spacing(2.5),
//       },
//     }));
    
//     function TablePaginationActions(props) {
//       const classes = useStyles1();
//       const theme = useTheme();
//       const { count, page, rowsPerPage, onChangePage } = props;
    
//       const handleFirstPageButtonClick = (event) => {
//         onChangePage(event, 0);
//       };
    
//       const handleBackButtonClick = (event) => {
//         onChangePage(event, page - 1);
//       };
    
//       const handleNextButtonClick = (event) => {
//         onChangePage(event, page + 1);
//       };
    
//       const handleLastPageButtonClick = (event) => {
//         onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//       };
    
//       return (
//         <div className={classes.root}>
//           <IconButton
//             onClick={handleFirstPageButtonClick}
//             disabled={page === 0}
//             aria-label="first page"
//           >
//             {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
//           </IconButton>
//           <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
//             {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//           </IconButton>
//           <IconButton
//             onClick={handleNextButtonClick}
//             disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//             aria-label="next page"
//           >
//             {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//           </IconButton>
//           <IconButton
//             onClick={handleLastPageButtonClick}
//             disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//             aria-label="last page"
//           >
//             {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//           </IconButton>
//         </div>
//       );
//     }
    
//     TablePaginationActions.propTypes = {
//       count: PropTypes.number.isRequired,
//       onChangePage: PropTypes.func.isRequired,
//       page: PropTypes.number.isRequired,
//       rowsPerPage: PropTypes.number.isRequired,
//     };


// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: "#208769",
//     color: theme.palette.common.white,
//     fontSize: 12,
//     fontWeight:"bold"
//   },
//   body: {
//     fontSize: 12,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.background.default,
//     },
//   },
// }))(TableRow);

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }


// let rows =listOfOrder.filter(tran => tran.account_ID === this.props.account_ID).map(order => {

// return (createData(

// order.orderDate,order.orderID,order.orderStatus,order.account_ID,order.paymentStatus


// ))
// })

// const useStyles = makeStyles({
//   table: {
//     minWidth: '100%',
//   },
// });

//  function TransactionTable() {
//   const classes = useStyles();
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} size='small' aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Date/Time </StyledTableCell>
//             <StyledTableCell align="left">Reference #</StyledTableCell>
//             <StyledTableCell align="left">Status</StyledTableCell>
//             <StyledTableCell align="left">User ID</StyledTableCell>
//             <StyledTableCell align="left">Payment</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {(rowsPerPage > 0
//             ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             : rows
//           ).map((row) => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell component="th" scope="row">
//                 {row.name}
//               </StyledTableCell>
//               <StyledTableCell align="left">{row.calories}</StyledTableCell>
//               <StyledTableCell align="left">{row.fat}</StyledTableCell>
//               <StyledTableCell align="left">{row.carbs}</StyledTableCell>
//               <StyledTableCell align="left">{row.protein}</StyledTableCell>
//             </StyledTableRow>
//           ))}

// {emptyRows > 0 && (
//             <TableRow style={{ height: 53 * emptyRows }}>
//               <TableCell colSpan={6} />
//             </TableRow>
//           )}

//         </TableBody>
//         <TableFooter>
//           <TableRow>
//             <TablePagination
//               rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//               colSpan={5}
//               count={rows.length}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               SelectProps={{
//                 inputProps: { 'aria-label': 'rows per page' },
//                 native: true,
//               }}
//               onChangePage={handleChangePage}
//               onChangeRowsPerPage={handleChangeRowsPerPage}
//               ActionsComponent={TablePaginationActions}
//             />
//           </TableRow>
//         </TableFooter>
//       </Table>
      
//     </TableContainer>
//   );
// }

// return (
//   <TransactionTable/>
// )
// }
// }

// export default inject('crmStore')(observer(TransactionsTable));







import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles ,withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import {inject,observer} from 'mobx-react'


class TransactionsTable extends React.Component {


  componentDidMount(){
    let{crmStore:{getOrderD,order}}=this.props;
    console.log(this.props.account_ID,'mymy')
    order.setProperty('account_ID',this.props.account_ID)
    getOrderD();
  }



  render() {
  
let {crmStore:{listOfOrder}}=this.props;

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

let rows =listOfOrder.filter(tran => tran.account_ID === this.props.account_ID).map(order => {

  return (createData(
  
  order.orderDate,order.orderID,order.orderStatus,order.account_ID,order.paymentStatus
  
  
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
  { id: 'name', numeric: false, disablePadding: false, label: 'Date/Time' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Reference #' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Status' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'User ID' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Payment' },
];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#208769',
    color: theme.palette.common.white,
  },

}))(TableCell);
function TransactionTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>

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

TransactionTableHead.propTypes = {
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
    minWidth: 750,
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

function TransactionTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
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
            <TransactionTableHead
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
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
            
                      <TableCell component="th" id={labelId} scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
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
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </div>
  );
}
return (
  <TransactionTable/>
)
}
}

export default inject('crmStore')(observer(TransactionsTable));