import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import UnarchiveIcon from '@material-ui/icons/Unarchive';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import React from 'react';






class ArchivedTable extends React.Component {
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
    let {startingStore:{listOfDistributors,distributor,archiveDistributor}}=this.props;


 
   

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
  return stabilizedThis.map(el => el[0]);
}

const headCells = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Warehouse Name' },
  { id: 'tier', numeric: true, disablePadding: false, label: 'Tier No.' },
  { id: 'address', numeric:true, disablePadding: false, label: 'Address' },
  { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'contact_no', numeric: true, disablePadding: false, label: 'Contact No.' },
  { id: 'date_registered', numeric: true, disablePadding: false, label: 'Date Registered' },
  { id: 'action', numeric: true, disablePadding:false, label: 'Restore' },
];

function ArchivedDisTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
  
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align="{headCell.numeric ? 'right' : 'left'}"
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{backgroundColor:"#208769",fontWeight:"bold",color:"white"}}
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

ArchivedDisTableHead.propTypes = {
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
    minWidth: "100%",
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
let filter=this.props.mysearch;
// ////////////////////////////////////////////////////
 function ArchivedDisTable() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();


  const handleClose = () => {
    setOpen(false);
  };



const handleArchive = (dis) => {
  distributor.setProperty("distributor_ID", dis.distributor_ID)
   distributor.setProperty("distributor_status",'active')
   setOpen(true);


// setTimeout(() => {
//   this.setState({ loading: false, visible: false });
// }, 3000);
};

let restore =()=>{
  archiveDistributor();
}

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  //table
  let filterDis =listOfDistributors.filter(dis => dis.distributor_status === 'archived')
  let rows = filterDis.map(distributor => {
    return(createData(distributor.distributor_warehouseName,distributor.distributor_tierNo,distributor.distributor_address,distributor.distributor_emailAddress,distributor.distributor_contactNo,distributor.distributor_dateRegistered,
    <div style={{textAlign:'left'}}> <IconButton onClick={()=>{handleArchive(distributor)}} size="medium" style={{backgroundColor:"#F8B701"}}> <UnarchiveIcon /> </IconButton></div>  ))
   
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
      <Paper className={classes.paper}>
       
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
            
          >
            <ArchivedDisTableHead
              classes={classes}
              // numSelected={selected.length}
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
                  // const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  if(filter.length !== 0){
                    if( row.tier.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) || row.address.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) || row.email.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) || row.date_registered.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) ||  row.name.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase())){
                     
                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, row.name)}
                      role="checkbox"
                      // aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      // selected={isItemSelected}
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
  onClick={event => handleClick(event, row.name)}
  role="checkbox"
  // aria-checked={isItemSelected}
  tabIndex={-1}
  key={row.name}
  // selected={isItemSelected}
>

  <TableCell component="th" id={labelId} scope="row" >
    {row.name}
  </TableCell>
  <TableCell align="left">{row.tier}</TableCell>
  <TableCell align="left">{row.address}</TableCell>
  <TableCell align="left">{row.email}</TableCell>
  <TableCell align="left">{row.contact_no}</TableCell>
  <TableCell align="left">{row.date_registered}</TableCell>
  <TableCell align="center">{row.action}</TableCell>
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
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Restore this account?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='contained' style={{backgroundColor:"#F8B701",color:"white"}}>
            Close
          </Button>
          <Button onClick={restore}  autoFocus autoFocus variant='contained' style={{backgroundColor:"#208769",color:"white"}}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}
return (  
  <ArchivedDisTable/>
);
}
}

export default inject("startingStore")(observer(ArchivedTable));
