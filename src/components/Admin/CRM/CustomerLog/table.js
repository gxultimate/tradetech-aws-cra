import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
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
import { inject, observer } from 'mobx-react';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import Slide from '@material-ui/core/Slide';
class CustlogsTBL extends React.Component {


  componentDidMount() {
    let {crmStore:{getcLogs}}=this.props;
    getcLogs();
  }


  
  render() { 
    let {crmStore:{listOfClogs,notif,addNotif,addReport,report}}=this.props
    let mysearch = props =>{
      return this.props.mySearch
    }
    
    function getHash(input){
      var hash = 0, len = input.length;
      for (var i = 0; i < len; i++) {
        hash  = ((hash << 5) - hash) + input.charCodeAt(i);
        hash |= 0; // to 32bit integer
      }
    
              
    
      return hash;
    }
    let date = new Date();
    

    
    let disID =JSON.parse(sessionStorage.getItem('userData'));


    function createData(clog_id,id, act, date, moreinfo, report) {
      return {clog_id, id, act, date, moreinfo, report };
    }

    const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
    });

    const profile = custprof => {
 
  setTimeout(() => {
  
   this.props.history.push({"pathname":"/Admin/CustomerProfile", state:{ id: custprof.account_ID}} )
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
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'id', numeric: false, disablePadding: false, label: 'ID#' },
  { id: 'act', numeric: true, disablePadding: false, label: 'Activity' },
  { id: 'date', numeric: true, disablePadding: false, label: 'Date' },
  { id: 'moreinfo', numeric: true, disablePadding: false, label: 'More Info' },
  { id: 'report', numeric: true, disablePadding: false, label: 'Report' },
];


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor:'#208769',
    color: theme.palette.common.white,
  },

}))(TableCell);

function CLogTableHead(props) {
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

CLogTableHead.propTypes = {
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

function CLogTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);

  const filter = mysearch();
  const reports =accounts =>{

   
    report.setProperty('report_ID',`${getHash(date.getFullYear())}-${ Math.floor(1000 + Math.random() * 9000)}`)
   
    report.setProperty('distributor_ID',disID.distributor_ID)
 
    report.setProperty('report_Type','Account Report')
    report.setProperty('report_Detail','Access store without permission')
    report.setProperty('report_Sender',disID.distributor_ID)
    report.setProperty('report_Date',moment().format('MMM/DD/YYYY,hh:mm:ssa'))
    report.setProperty('report_Status','Pending')
    report.setProperty('account_ID',accounts.account_ID)

    notif.setProperty('notif_ID',`${getHash(date.getFullYear())}-${ Math.floor(1000 + Math.random() * 9000)}`)
    notif.setProperty('account_ID',accounts.account_ID)
    notif.setProperty('sender_ID',disID.distributor_ID)
    notif.setProperty('notif_subject','Account Report')
    notif.setProperty('notif_description','Access store without permission')
    notif.setProperty('notif_date',moment().format('MMM/DD/YYYY,hh:mm:ssa'))
    notif.setProperty('notif_status',"unread")

    setOpen(true); 
  }
  const handleClose = () => {
    setOpen(false);
  };

  const agree = ()=>{
 addReport();
 addNotif();
 setOpen(false); 
  }





  let rows = listOfClogs.map(clogs => {
    // let clog = listOfClogs.filter((cl) => cl.account_ID === clogs.account_ID)
    return(createData(
  
     
  
  clogs.log_ID,clogs.account_ID
  ,clogs.log_activity,clogs.log_Date,
      <div> <Button
          variant="contained"
          style={{backgroundColor:"#208769",color:"white"}}
         size='small'
          startIcon={<InfoOutlinedIcon />}
          onClick={()=>{profile(clogs)}}
        >
          more info
        </Button></div>,
        <div> <Button
        variant="contained"
        style={{backgroundColor:"#FFA500",color:"white"}}
       size='small'
       onClick={()=>{reports(clogs)}}
        startIcon={<ReportProblemOutlinedIcon />}
      >
        Report
      </Button></div>
    ))
    
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
      <Paper className={classes.paper}>
      
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <CLogTableHead
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
                  const isItemSelected = isSelected(row.clog_id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  if(filter.length !== 0){
                    if( row.id.startsWith(filter.toLocaleLowerCase()) || 
                    row.date.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase())){
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.clog_id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.clog_id}
                      selected={isItemSelected}
                    >
                    
                      <TableCell component="th" id={labelId} scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.act}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                      <TableCell align="right">{row.moreinfo}</TableCell>
                      <TableCell align="right">{row.report}</TableCell>
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
                onClick={(event) => handleClick(event, row.clog_id)}
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={row.clog_id}
                selected={isItemSelected}
              >
              
                <TableCell component="th" id={labelId} scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.act}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.moreinfo}</TableCell>
                <TableCell align="right">{row.report}</TableCell>
              </TableRow>
                )
          
              } )}
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
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title" style={{backgroundColor:"#208769"}}><Typography variant='h5' style={{color:"white"}}>Confirm Report</Typography></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
         <Typography>   Let TradeTech help to determine anonymous accounts. </Typography>
         <Typography>  Report this account for accessing your store without permission.</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='contained' style={{backgroundColor:"#FFA500",color:"white"}}>
            Cancel
          </Button>
          <Button onClick={agree} variant='contained' color="primary"   style={{backgroundColor:"#208769",color:"white"}}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}
return ( 
  <CLogTable/>
 );
}
}

export default withRouter(inject('crmStore')(observer(CustlogsTBL)));