import React,{Component} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { lighten, makeStyles } from '@material-ui/core/styles';
import {Table,TableBody,TableCell,TableContainer,TableHead,TablePagination,TableRow,TableSortLabel,
  Toolbar,Typography,Paper,Checkbox,IconButton,Tooltip,FormControlLabel,Switch,Grid} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import {inject,observer} from 'mobx-react';
import ArchiveIcon from '@material-ui/icons/Archive';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import moment  from "moment"



import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import EditForm from './EditForm.js'
const useStyles = makeStyles(theme => ({
  appBar2: {
    position: 'relative',
    backgroundColor:"#208769"
  },
  title2: {
    marginLeft: theme.spacing(2),
    flex: 1,
    fontWeight:"bold",
    color:"white"

  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class staffTable extends Component{
  state = { }
  


  render(){
    let {startingStore:{listOfUsers,account,editAccount}}=this.props;
 
    let listofstaff = listOfUsers.filter(user=> user.account_accessType === "staff")
  

  
function createData(shop, name, address, contact, email,status,action) {
  return { shop, name, address, contact, email,status,action };
}


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
  { id: 'address', numeric: true, disablePadding: false, label: 'Address' },
  { id: 'contact', numeric: true, disablePadding: false, label: 'Contact No.' },
  { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
  { id: 'action', numeric: true, disablePadding: false, label: 'Action' },
];

function StaffListTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead style={{textAlign:"left"}}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            style={{fontWeight:"bold"}}
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

StaffListTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const StaffListTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle">
          Staff Profile
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

StaffListTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
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
// ////////////////////////////////////////////////////
 function StaffListTable() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (user) => {
    console.log(user)
    setOpen(true);
    account.setProperty("account_ID", user.account_ID)
    account.setProperty("account_fName", user.account_fName)
    account.setProperty("account_lName", user.account_lName)
    account.setProperty("account_mName", user.account_mName)
    account.setProperty("account_suffix", user.account_suffix)
    account.setProperty("account_address", user.account_address)
    account.setProperty("account_dateRegistered", user.account_dateRegistered)
    account.setProperty("account_emailAddress", user.account_emailAddress)
    account.setProperty("account_contactNo", user.account_contactNo)
    account.setProperty("account_contract", user.account_contract)
    account.setProperty("account_accessType", user.account_accessType)
    account.setProperty("account_birthday", user.account_birthday)
    account.setProperty("account_staffRole", user.account_staffRole)
    account.setProperty("account_username", user.account_username)
    account.setProperty("account_password", user.account_password)
    account.setProperty("account_status", user.account_status)
    console.log(moment(user.account_birthday.split(",")[0].replace("th", "")).format("YYYY-MM-DD") , user.account_birthday.split(",")[0].replace("th", ""));

  };
  const handleOk = () => {
   
       editAccount();
  

    // setTimeout(() => {
    //   this.setState({ loading: false, visible: false });
    // }, 3000);
  };


  
  let rows = listofstaff.map(user => {
    //  rows.push(createData(user.account_ID))
     return(createData(user.account_ID ,`${user.account_fName}  ${user.account_mName}  ${user.account_lName}`,user.account_contactNo,user.account_address,user.account_emailAddress,"active",<div><IconButton  onClick={()=>{handleClickOpen(user)}} size="medium" style={{backgroundColor:"#31AF91"}} > <EditIcon /> </IconButton> <IconButton size="medium" style={{backgroundColor:"#31AF91"}}> <ArchiveIcon /> </IconButton></div> ))
    
    })


  const handleClose = () => {
    setOpen(false);
  };                  
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('shop');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
      <Paper className={classes.paper}>
        <Grid container xs={12}>
        <StaffListTableToolbar numSelected={selected.length} />
        <Grid container xs={12}>
        <TableContainer>
        <Grid >
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <StaffListTableHead
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
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
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
          </Grid>
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

<Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
  
        <AppBar className={classes.appBar2} style={{backgroundColor:"#208769"}}>
          <Toolbar>
            <IconButton style={{backgroundColor:"#1E7A60"}} edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title2} style={{color:"white" , marginLeft:"8px"}}>
              Edit Account Information
            </Typography>
            <Button style={{ marginRight:"8px",backgroundColor:"#1E7A60",position:"absolute",right:1}} autoFocus color="inherit" onClick={()=> {handleOk()}}  >
              Submit
            </Button>
          </Toolbar>
        </AppBar>






        <List >
          <EditForm/>
        </List>
      </Dialog>

    </div>
  );
}
return ( 
       
  <StaffListTable/>


 );
}}

export default inject("startingStore")(observer(staffTable));