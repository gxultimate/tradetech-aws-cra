
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Typography from '@material-ui/core/Typography';
import ArchiveIcon from '@material-ui/icons/Archive';
import EditIcon from '@material-ui/icons/Edit';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import React from 'react';
import EditForm from './../EditAccount';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

class DistributorsTable extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      listOfDistributors : []
    }
  }


  componentWillMount() {
      
    let {startingStore:{getDistributors }}=this.props;

    getDistributors().then(res => 
      this.setState({listOfDistributors : res})
    )
  }

  render() { 
    let {startingStore:{listOfDistributors,distributor,editDistributor,archiveDistributor}}=this.props;

function createData(name, tier, address, email, contact_no,date_registered,action) {
  return { name, tier, address, email, contact_no,date_registered,action };
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
  { id: 'name', numeric: false, disablePadding: false, label: 'Warehouse Name' },
  { id: 'tier', numeric: true, disablePadding: false, label: 'Tier No.' },
  { id: 'address', numeric: true, disablePadding: false, label: 'Address' },
  { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'contact_no', numeric: true, disablePadding: false, label: 'Contact No.' },
  { id: 'date_registered', numeric: true, disablePadding: false, label: 'Date Registered' },
  { id: 'action', numeric: true, disablePadding: false, label: 'Action' },
];


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#208769',
    color: theme.palette.common.white,
  },

}))(TableCell);


function DistributorTableHead(props) {
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

DistributorTableHead.propTypes = {
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
let filter =this.props.mysearch;

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
 function DistributorTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [open, setOpen] = React.useState(false);
  const [openD, setOpenD] = React.useState(false);
  const [openS, setOpenS] = React.useState(false);
  const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));



  const handleClickOpen = (distributors) => {
    setOpen(true);
    
    distributor.setProperty("distributor_ID", distributors.distributor_ID)
    distributor.setProperty("distributor_fName", distributors.distributor_fName)
    distributor.setProperty("distributor_mName", distributors.distributor_mName)
    distributor.setProperty("distributor_lName", distributors.distributor_lName)
    distributor.setProperty("distributor_warehouseName", distributors.distributor_warehouseName)
    distributor.setProperty("distributor_address", distributors.distributor_address)
    distributor.setProperty("distributor_emailAddress", distributors.distributor_emailAddress)
    distributor.setProperty("distributor_contactNo", distributors.distributor_contactNo)
    distributor.setProperty("distributor_status", distributors.distributor_status)
    distributor.setProperty("distributor_dateRegistered", distributors.distributor_dateRegistered)
    distributor.setProperty("distributor_tierNo", distributors.distributor_tierNo)
    distributor.setProperty("distributor_accessType", distributors.distributor_accessType)
    distributor.setProperty("distributor_username", distributors.distributor_username)
    distributor.setProperty("distributor_password", distributors.distributor_password)
  };

  const handleClose = () => {
    setOpen(false);
    setOpenD(false);
  };

  const handleOk = () => {
   
    editDistributor();
    setOpenS(true)

 // setTimeout(() => {
 //   this.setState({ loading: false, visible: false });
 // }, 3000);
};


const handleArchive = (dis) => {
  
  distributor.setProperty("distributor_ID", dis.distributor_ID)
   distributor.setProperty("distributor_status",'archived')
  
   setOpenD(true);

// setTimeout(() => {
//   this.setState({ loading: false, visible: false });
// }, 3000);
};
let deactivate =()=>{
  archiveDistributor();
}


  let rows = listOfDistributors.filter(dis => dis.distributor_status === 'active').map(distributor => {
    return(createData(distributor.distributor_warehouseName,distributor.distributor_tierNo,distributor.distributor_address,distributor.distributor_emailAddress,distributor.distributor_contactNo,distributor.distributor_dateRegistered,
    <div><IconButton  onClick={()=>{handleClickOpen(distributor)}}  size="medium" style={{backgroundColor:"#31AF91"}} > <EditIcon /> </IconButton> <IconButton onClick={()=>{handleArchive(distributor)}} size="medium" style={{backgroundColor:"#F8B701"}}> <ArchiveIcon /> </IconButton></div>  ))
    })

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
               <Snackbar open={openS} autoHideDuration={2000}  anchorOrigin={{vertical:'center',horizontal:'center'}}>
        <Alert  severity="success">
        Edit successful!
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
            <DistributorTableHead
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
                  if(filter.length !== 0){
                    if( row.tier.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) || row.address.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) || row.email.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) || row.date_registered.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) ||  row.name.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase())){
                     
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
                      
                      <TableCell component="th" id={labelId} scope="row" >
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.tier}</TableCell>
                      <TableCell align="right">{row.address}</TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                     <TableCell align="right">{row.contact_no}</TableCell>
                       <TableCell align="right">{row.date_registered}</TableCell>
                  <TableCell align="right">{row.action}</TableCell>
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
          onClick={(event) => handleClick(event, row.name)}
          role="checkbox"
          aria-checked={isItemSelected}
          tabIndex={-1}
          key={row.name}
          selected={isItemSelected}
        >
          
          <TableCell component="th" id={labelId} scope="row" >
            {row.name}
          </TableCell>
          <TableCell align="right">{row.tier}</TableCell>
          <TableCell align="right">{row.address}</TableCell>
          <TableCell align="right">{row.email}</TableCell>
         <TableCell align="right">{row.contact_no}</TableCell>
           <TableCell align="right">{row.date_registered}</TableCell>
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

 <Dialog
        
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" style={{backgroundColor:"#208769"}}><Typography variant="h5" style={{color:"white"}}>Edit Distributor's Account</Typography></DialogTitle>
          <Divider/>
        <DialogContent>
       <EditForm/>
        </DialogContent>
        <DialogActions>
        <Button autoFocus   variant='contained' onClick={()=> {handleOk()}} style={{backgroundColor:"#208769",color:"white"}}>
           Submit
          </Button>
    
          <Button onClick={handleClose}   variant='contained' style={{backgroundColor:"#F8B701",color:"white"}}>
         Close
          </Button>
        </DialogActions>
      </Dialog>


      <Dialog
        open={openD}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
  
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deactivate this account?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}   variant='contained' style={{backgroundColor:"#F8B701",color:"white"}}>
            Cancel
          </Button>
          <Button onClick={deactivate}  autoFocus variant='contained' style={{backgroundColor:"#208769",color:"white"}}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}

return (  
  <DistributorTable/>
);
}
}

export default inject("startingStore")(observer(DistributorsTable));
