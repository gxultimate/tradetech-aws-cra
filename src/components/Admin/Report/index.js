import React, { Component } from 'react'
import {inject, observer} from 'mobx-react';
import { makeStyles,ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';

import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';


import Checkbox from '@material-ui/core/Checkbox';
import {toJS} from 'mobx';
import SalesByCustomer from './Sales/SalesByCustomer'
import SalesByItem from './Sales/SalesByItem'
import SalesReturn from './Sales/SalesReturn'
import Invoice from './Payments&Receivables/InvoiceDetails'
import SalesOrder from './Payments&Receivables/SalesOrder'
import Payments from './Payments&Receivables/PaymentsReceived/index'
import Balances from './Payments&Receivables/CustomerBalance/index'
import InventorySummary from './Inventory/Summary/index'
import Evaluation from './Inventory/Evaluation/index'
import Packing from './Sales/PackingHistory/index'
import Delivery from './Inventory/Deliver/index'
import theme from './../../theme'
import PriceHistory from './PriceChangesHistory'
import { Divider } from '@material-ui/core';
class Reports extends Component {
    render() {
        const useStyles = makeStyles((theme) => ({
            root: {
              
         
              width:'100%',
              minWidth:'1450px',
              maxWidth:'1500px'
            },
            paper: {
              padding: theme.spacing(1),
              textAlign: 'center',
              color: theme.palette.text.secondary,
            },
            table: {
                width:'auto'
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



          function createData(name) {
            return { name };
          }

          const rows = [
            createData('Sales By Customer'),
            createData('Sales By Item'),
            createData('Sales Return'),
            createData('Invoice Details'),
           
            createData('Payments Received'),
            createData('Customer Balance'),
            createData('Inventory Summary'),
            createData('Evaluation Report'),
            createData('Packing History'),
            createData('Delivery History'),
            createData('Price Change History'),
          ];



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
            { id: 'name', numeric: false, disablePadding: true, label: 'Reports' },
       
          ];
          
          function EnhancedTableHead(props) {
            const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
            const createSortHandler = (property) => (event) => {
              onRequestSort(event, property);
            };
          
            return (
              <TableHead >
                <TableRow>
                  <TableCell padding="checkbox">
               
                  </TableCell>
                  {headCells.map((headCell) => (
                    <TableCell
                      key={headCell.id}
                      align={headCell.numeric ? 'right' : 'left'}
                      padding={headCell.disablePadding ? 'none' : 'default'}
                      sortDirection={orderBy === headCell.id ? order : false}
                      style={{fontSize:'20px',fontWeight:'bold',color:'white'}}
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
          
          EnhancedTableHead.propTypes = {
            classes: PropTypes.object.isRequired,
            numSelected: PropTypes.number.isRequired,
            onRequestSort: PropTypes.func.isRequired,
            onSelectAllClick: PropTypes.func.isRequired,
            order: PropTypes.oneOf(['asc', 'desc']).isRequired,
            orderBy: PropTypes.string.isRequired,
            rowCount: PropTypes.number.isRequired,
          };
          
 
          
      



       function ReportGrid() {
            const classes = useStyles();
            const [order, setOrder] = React.useState('asc');
            const [orderBy, setOrderBy] = React.useState('name');
            const [selected, setSelected] = React.useState([]);
            const [page, setPage] = React.useState(0);
            const [dense, setDense] = React.useState(false);
            const [rowsPerPage, setRowsPerPage] = React.useState(12);
           
          
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
          
    
          
            const isSelected = (name) => selected.indexOf(name) !== -1;
          
     
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  


  let ReportDisplay =(Rselected)=>{


    let RS = Rselected.map(rselect =>
 
        {
        
              
            if(rselect === 'Customer Balance'){
                return(<div> <Balances/></div>)
            }else if(rselect === 'Delivery History'){
                return(<div> <Delivery/></div>)
            }else if(rselect === 'Evaluation Report'){
                return(<div> <Evaluation/></div>)
            }else if(rselect === 'Inventory Summary'){
                return(<div> <InventorySummary/></div>)
            }
            else if(rselect === 'Sales By Customer'){
                return(<div> <SalesByCustomer/></div>)
            }
            
            
            else if(rselect === 'Invoice Details'){
                return(<div> <Invoice/></div>)
            }
            else if(rselect === 'Packing History'){
                return(<div> <Packing/></div>)
            }
            else if(rselect === 'Payments Received'){
                return(<div> <Payments/></div>)
            }
            else if(rselect === 'Price Change History'){
                return(<div> <PriceHistory/></div>)
            }
            else if(rselect === 'Sales By Item'){
                return(<div> <SalesByItem/></div>)
            }
           
            else if(rselect === 'Order Details'){
                return(<div> <SalesOrder/></div>)
            }
            else if(rselect === 'Sales Return'){
                return(<div> <SalesReturn/></div>)
            }
            else{
                console.log('error')
            }
            
    
        
        
        }
    )
        
   return toJS(RS)


        
        
   
  }


            return (
              <div className={classes.root}>
                <Grid container spacing={3}>
                 
                  <Grid item xs={1.5} sm={1.5}>
                    <Paper className={classes.paper}>

                    <TableContainer>
                    <ThemeProvider theme={theme}>
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
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.name}
                      </TableCell>
                    
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
          </ThemeProvider>
        </TableContainer>


                    </Paper>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    {(selected == '')?( 
                      <p></p>
                    ):(     
                       <Paper className={classes.paper}>

                { ReportDisplay(selected)}

                       </Paper>)}
              
                  </Grid>
                </Grid>
              </div>
            );
          }


        return (
    <ReportGrid/>
        )
    }
}

export default inject('reportStore')(observer(Reports))
