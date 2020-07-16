import { FormControlLabel, Grid, IconButton, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { lighten, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import ArchiveIcon from '@material-ui/icons/Archive';
import InfoIcon from '@material-ui/icons/Info';
// import EditIcon from '@material-ui/icons/Edit';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import theme from './../../../theme';



class custTable extends Component{
  state = { }
  
  render(){
    let {crmStore:{listOfUsers,account,editAccount}}=this.props;
let myID = JSON.parse(sessionStorage.getItem('userData'));
    let listOfcustomer = listOfUsers.filter(user => user.account_accessType === "customer" && user.distributor_ID === myID.distributor_ID && user.account_status === 'active');

function createData(shop, name, address, contact, email,status,action) {
  return { shop, name, address, contact, email ,status,action};
}

const profile = custprof => {
  console.log(custprof.account_ID,'getaccount')
  setTimeout(() => {
  
   this.props.history.push({"pathname":"/Admin/CustomerProfile", state:{ id: custprof.account_ID}} )
 }, 500);
  
 };




function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headCells = [
  { id: 'shop', numeric: false, disablePadding: true, label: 'ID' },
  { id: 'name', numeric: true, disablePadding: false, label: 'Full Name' },
  { id: 'address', numeric: true, disablePadding: false, label: 'Contact No.' },
  { id: 'contact', numeric: true, disablePadding: false, label: 'Address' },
  { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
  { id: 'action', numeric: true, disablePadding: false, label: 'Action' },
];

function CustListTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead style={{textAlign:"left",color:'white'}}>
      <TableRow>
        <TableCell padding="checkbox" style={{fontWeight:"bold",color:'white',backgroundColor:"#208769"}}>
    
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            style={{fontWeight:"bold",color:'white',backgroundColor:"#208769"}}
            key={headCell.id}
            align={headCell.numeric ? 'left' : 'left'}
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
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

CustListTableHead.propTypes = {
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
let mysearch = props =>{
  return this.props.mysearch
}
 function CustListTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('shop');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const filter = mysearch();


  const handleClickOpen =(arc)=>{
    setOpen(true);
    account.setProperty("account_ID", arc.account_ID)
    account.setProperty("account_status",'archived')
  }

  const handleArchive = () => {

   
    editAccount();
  

  };

  const handleClose = () => {
    setOpen(false);
  };

// table Data
let rows = listOfcustomer.map(user => {

  return(createData(user.account_ID ,`${user.account_fName}  ${user.account_mName}  ${user.account_lName}`,user.account_contactNo,user.account_address,user.account_emailAddress,user.account_status,<div><IconButton   size="medium" style={{backgroundColor:"#31AF91"}} onClick={()=>{profile(user)}}> <InfoIcon /> </IconButton> <IconButton size="medium" style={{backgroundColor:"#FFA500"}} onClick={()=>{handleClickOpen(user)}}> <ArchiveIcon /> </IconButton></div>  ))
 
 })


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

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
      {/* Deactivate Dialog */}
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Deactivate this account?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ThemeProvider theme={theme}>
          <Button onClick={handleClose} color="secondary" variant='contained' style={{color:'white'}}>
            Cancel
          </Button>
          <Button onClick={handleArchive} color="primary" autoFocus variant='contained' style={{color:'white'}}>
            Agree
          </Button>
          </ThemeProvider>
        </DialogActions>
      </Dialog>

      <Paper className={classes.paper}>
      <Grid container xs={12}>
        {/* <CustListTableToolbar numSelected={selected.length} /> */}
        <Grid container xs={12} sm={12} >
        <TableContainer xs={12}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
            xs={12}
         
          >
            <CustListTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  // const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  if(filter.length !== 0){
                    if(row.shop.startsWith(filter) || row.name.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) || row.address.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) || row.status.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase())){
                  return (
                    <TableRow
                      hover
                      // onClick={event => handleClick(event, row.name)}
                      // role="checkbox"
                      // aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      // selected={isItemSelected}
                    >
                      <TableCell >
                        {/* <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        /> */}
                      </TableCell>
                      <TableCell component="th" align="left" id={labelId} scope="row" padding="none">
                        {row.shop}
                      </TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.address}</TableCell>
                      <TableCell align="left">{row.contact}</TableCell>
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left">{row.status}</TableCell>
                      <TableCell align="left">{row.action}</TableCell>
                    </TableRow>
                    );

                  }
                  else{
                    return null
                 
                }
  
                  }
                  return (
                    <TableRow
                      hover
                      // onClick={event => handleClick(event, row.name)}
                      // role="checkbox"
                      // aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      // selected={isItemSelected}
                    >
                      <TableCell >
                    
                      </TableCell>
                      <TableCell component="th" align="left" id={labelId} scope="row" padding="none">
                        {row.shop}
                      </TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.address}</TableCell>
                      <TableCell align="left">{row.contact}</TableCell>
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left">{row.status}</TableCell>
                      <TableCell align="left">{row.action}</TableCell>
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
        </Grid>
       
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          
        />   
       </Grid>
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
   


    </div>
  );
}
return ( 
       
  <CustListTable/>


 );
}}

export default withRouter(inject("crmStore")(observer(custTable)));