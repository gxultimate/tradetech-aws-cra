import DateFnsUtils from "@date-io/date-fns";
import { Grid, IconButton, Paper } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import PropTypes from "prop-types";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import theme from "./../../theme";
import DCollection from "./Table/DCollectionTbl";
import Invoice from "./Table/Invoice";
import TotalSales from "./Table/TotalSales";
import TransactionTbl from "./Table/TransactionTbl";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },

  search: {
    // padding: '2px 4px',
    display: "flex",
    alignItems: "right",
    width: "100%",
    float: "right",
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const [filter, setFilter] = React.useState("");
  //Delivery Collection
  const [DCfilter, DCsetFilter] = React.useState("");
  // Orders
  const [Ofilter, OsetFilter] = React.useState("");
  // Sales
  const [Sfilter, SsetFilter] = React.useState("");
  // Invoice & Receipts
  const [IRfilter, IRsetFilter] = React.useState("");

  const [selectedStartDate, setSelectedStartDate] = React.useState();
  const [selectedEndDate, setSelectedEndDate] = React.useState();

  const [filterDate, setFilterDate] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleDateChangeStart = (date) => {
    setSelectedStartDate(date);
  };
  const handleDateChangeEnd = (date) => {
    setSelectedEndDate(date);
  };

  return (
    <div className={classes.root}>
      <Grid container lg={12} sm={12} xs={12}>
        <ThemeProvider theme={theme}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              style={{ color: "white", backgroundColor: "#208769" }}
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Transactions" {...a11yProps(0)} />
              <Tab label="Delivery" {...a11yProps(1)} />

              <Tab label="Sales" {...a11yProps(2)} />
              <Tab label="Invoice & Receipts" {...a11yProps(3)} />
            </Tabs>
          </AppBar>
        </ThemeProvider>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              lg={12}
              sm={12}
              xs={12}
            >
              <Grid item lg={12} sm={12} xs={12}>
                <Paper className={classes.paper}>
                  <Grid container direction="row" spacing={2} sm={12} xs={12}>
                    <Grid item sm={9} xs={9}>
                      {" "}
                      <Typography variant="subtitle2">
                        {" "}
                        Transaction as of &nbsp;
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <ThemeProvider theme={theme}>
                            <KeyboardDatePicker
                              margin="normal"
                              id="date-picker-dialog"
                              format="MMM/dd/yyyy"
                              value={selectedStartDate}
                              color="primary"
                              onChange={handleDateChangeStart}
                              KeyboardButtonProps={{
                                "aria-label": "change date",
                              }}
                            />
                          </ThemeProvider>
                        </MuiPickersUtilsProvider>
                        &nbsp; to &nbsp;
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <ThemeProvider theme={theme}>
                            <KeyboardDatePicker
                              margin="normal"
                              id="date-picker-dialog"
                              format="MMM/dd/yyyy"
                              value={selectedEndDate}
                              color="primary"
                              onChange={handleDateChangeEnd}
                              KeyboardButtonProps={{
                                "aria-label": "change date",
                              }}
                            />
                          </ThemeProvider>
                        </MuiPickersUtilsProvider>
                      </Typography>{" "}
                    </Grid>
                    <Grid
                      item
                      lg={3}
                      sm={3}
                      xs={3}
                      style={{
                        textAlign: "right",
                        float: "right",
                        marginTop: "8px",
                      }}
                    >
                      <Paper component="form" className={classes.search}>
                        <InputBase
                          className={classes.input}
                          placeholder="Search"
                          inputProps={{ "aria-label": "search customers" }}
                          onChange={(e) => setFilter(e.target.value)}
                        />
                        <span
                          style={{
                            backgroundColor: "#FFA500",
                            borderRadius: "3px",
                          }}
                        >
                          <IconButton
                            type="submit"
                            className={classes.iconButton}
                            aria-label="search"
                          >
                            <SearchIcon style={{ color: "white" }} />
                          </IconButton>
                        </span>
                      </Paper>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              <Grid item lg={12} sm={12} xs={12} style={{ marginTop: "1%" }}>
                <TransactionTbl
                  mysearch={filter}
                  startdate={selectedStartDate}
                  enddate={selectedEndDate}
                />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Grid
              container
              lg={12}
              sm={12}
              xs={12}
              style={{ marginTop: "10px" }}
            >
              <Grid item lg={12} sm={12} xs={12}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2} lg={12} sm={12} xs={12}>
                    <Grid item sm={9} xs={9} style={{ textAlign: "left" }}>
                      {" "}
                      <Typography variant="subtitle2">
                        {" "}
                        Delivery Collection as of &nbsp;
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <ThemeProvider theme={theme}>
                            <KeyboardDatePicker
                              margin="normal"
                              id="date-picker-dialog"
                              format="MMM/dd/yyyy"
                              value={selectedStartDate}
                              color="primary"
                              onChange={handleDateChangeStart}
                              KeyboardButtonProps={{
                                "aria-label": "change date",
                              }}
                            />
                          </ThemeProvider>
                        </MuiPickersUtilsProvider>
                        &nbsp; to &nbsp;
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <ThemeProvider theme={theme}>
                            <KeyboardDatePicker
                              margin="normal"
                              id="date-picker-dialog"
                              format="MMM/dd/yyyy"
                              value={selectedEndDate}
                              color="primary"
                              onChange={handleDateChangeEnd}
                              KeyboardButtonProps={{
                                "aria-label": "change date",
                              }}
                            />
                          </ThemeProvider>
                        </MuiPickersUtilsProvider>
                      </Typography>{" "}
                    </Grid>
                    <Grid
                      item
                      lg={3}
                      sm={3}
                      xs={3}
                      style={{
                        textAlign: "right",
                        float: "right",
                        marginBottom: "10px",
                      }}
                    >
                      <Paper component="form" className={classes.search}>
                        <InputBase
                          className={classes.input}
                          placeholder="Search"
                          inputProps={{ "aria-label": "search customers" }}
                          onChange={(e) => DCsetFilter(e.target.value)}
                        />
                        <span
                          style={{
                            backgroundColor: "#FFA500",
                            borderRadius: "3px",
                          }}
                        >
                          <IconButton
                            type="submit"
                            className={classes.iconButton}
                            aria-label="search"
                          >
                            <SearchIcon style={{ color: "white" }} />
                          </IconButton>
                        </span>
                      </Paper>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item lg={12} sm={12} xs={12} style={{ marginTop: "20px" }}>
                <DCollection
                  mysearch={DCfilter}
                  startdate={selectedStartDate}
                  enddate={selectedEndDate}
                />
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={value} index={2} dir={theme.direction}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              lg={12}
              sm={12}
              xs={12}
            >
              <Grid item lg={12} sm={12} xs={12} style={{ width: "100%" }}>
                <Paper className={classes.paper}>
                  <Grid
                    container
                    direction="row"
                    spacing={2}
                    lg={12}
                    sm={12}
                    xs={12}
                  >
                    <Grid item sm={9} xs={9}>
                      {" "}
                      <Typography variant="subtitle2">
                        {" "}
                        Sales as of &nbsp;
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <ThemeProvider theme={theme}>
                            <KeyboardDatePicker
                              margin="normal"
                              id="date-picker-dialog"
                              format="MMM/dd/yyyy"
                              value={selectedStartDate}
                              color="primary"
                              onChange={handleDateChangeStart}
                              KeyboardButtonProps={{
                                "aria-label": "change date",
                              }}
                            />
                          </ThemeProvider>
                        </MuiPickersUtilsProvider>
                        &nbsp; to &nbsp;
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <ThemeProvider theme={theme}>
                            <KeyboardDatePicker
                              margin="normal"
                              id="date-picker-dialog"
                              format="MMM/dd/yyyy"
                              value={selectedEndDate}
                              color="primary"
                              onChange={handleDateChangeEnd}
                              KeyboardButtonProps={{
                                "aria-label": "change date",
                              }}
                            />
                          </ThemeProvider>
                        </MuiPickersUtilsProvider>
                      </Typography>{" "}
                    </Grid>
                    <Grid
                      item
                      sm={3}
                      xs={3}
                      style={{
                        textAlign: "right",
                        float: "right",
                        marginBottom: "10px",
                      }}
                    >
                      <Paper component="form" className={classes.search}>
                        <InputBase
                          className={classes.input}
                          placeholder="Search"
                          inputProps={{ "aria-label": "search customers" }}
                          onChange={(e) => SsetFilter(e.target.value)}
                        />
                        <span
                          style={{
                            backgroundColor: "#FFA500",
                            borderRadius: "3px",
                          }}
                        >
                          <IconButton
                            type="submit"
                            className={classes.iconButton}
                            aria-label="search"
                          >
                            <SearchIcon style={{ color: "white" }} />
                          </IconButton>
                        </span>
                      </Paper>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item lg={12} sm={12} xs={12} style={{ marginTop: "1%" }}>
                <TotalSales
                  mysearch={Sfilter}
                  startdate={selectedStartDate}
                  enddate={selectedEndDate}
                />
              </Grid>{" "}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              lg={12}
              sm={12}
              xs={12}
            >
              <Grid item lg={12} sm={12} xs={12} style={{ width: "100%" }}>
                <Paper className={classes.paper}>
                  <Grid
                    container
                    direction="row"
                    spacing={2}
                    lg={12}
                    sm={12}
                    xs={12}
                  >
                    <Grid item sm={9} xs={9}>
                      {" "}
                      <Typography variant="subtitle2">
                        {" "}
                        Invoice and Receipt as of &nbsp;
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <ThemeProvider theme={theme}>
                            <KeyboardDatePicker
                              margin="normal"
                              id="date-picker-dialog"
                              format="MMM/dd/yyyy"
                              value={selectedStartDate}
                              color="primary"
                              onChange={handleDateChangeStart}
                              KeyboardButtonProps={{
                                "aria-label": "change date",
                              }}
                            />
                          </ThemeProvider>
                        </MuiPickersUtilsProvider>
                        &nbsp; to &nbsp;
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <ThemeProvider theme={theme}>
                            <KeyboardDatePicker
                              margin="normal"
                              id="date-picker-dialog"
                              format="MMM/dd/yyyy"
                              value={selectedEndDate}
                              color="primary"
                              onChange={handleDateChangeEnd}
                              KeyboardButtonProps={{
                                "aria-label": "change date",
                              }}
                            />
                          </ThemeProvider>
                        </MuiPickersUtilsProvider>
                      </Typography>{" "}
                    </Grid>
                    <Grid
                      item
                      sm={3}
                      xs={3}
                      style={{
                        textAlign: "right",
                        float: "right",
                        marginBottom: "10px",
                      }}
                    >
                      <Paper component="form" className={classes.search}>
                        <InputBase
                          className={classes.input}
                          placeholder="Search"
                          inputProps={{ "aria-label": "search customers" }}
                          onChange={(e) => IRsetFilter(e.target.value)}
                        />
                        <span
                          style={{
                            backgroundColor: "#FFA500",
                            borderRadius: "3px",
                          }}
                        >
                          <IconButton
                            type="submit"
                            className={classes.iconButton}
                            aria-label="search"
                          >
                            <SearchIcon style={{ color: "white" }} />
                          </IconButton>
                        </span>
                      </Paper>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              <Grid item style={{ marginTop: "1%" }} lg={12} sm={12} xs={12}>
                <Invoice
                  mysearch={IRfilter}
                  startdate={selectedStartDate}
                  enddate={selectedEndDate}
                />
              </Grid>
            </Grid>
          </TabPanel>
        </SwipeableViews>
      </Grid>
    </div>
  );
}
