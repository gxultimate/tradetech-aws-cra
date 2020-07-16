import "antd/dist/antd.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { Provider } from "mobx-react";
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

// Pages init
import DistGrid from "./Customer";
import Login from "./Admin/Login";
import CustLogin from "./Customer/Login";
import AdminDrawer from "./Admin";
import StaffGrid from "./Staff"
import ManagerGrid from "./Manager"
import Register from "./Customer/RegisterS/UserForm"
import SupAdminDrawer from "./SuperAdmin";
import MiniDrawer from './SuperAdmin/drawer.js'
import AccessDist from './Customer/AccessDistributor'

// Store Init
import { 
  StartingStore,
  IssuesStore,
  AccountingStore,
  CrmStore,
  InventoryStore,
  OrderStore,
  ManagerStore,
  EmployeeStore,
  CustomerStore,
  StaffStore,
  ReportStore,
  NotificationStore,
  SupAdminStore,
  Api
} from "./../stores/";





const api = new Api()
const startingStore = new StartingStore(api);
const issuesStore = new IssuesStore(api);
const crmStore = new CrmStore(api);
const accountingStore = new AccountingStore(api);
const inventoryStore = new InventoryStore(api);
const orderStore = new OrderStore(api);
const managerStore = new ManagerStore(api);
const employeeStore = new EmployeeStore(api);
const customerStore = new CustomerStore(api);
const staffStore = new StaffStore(api);
const reportStore = new ReportStore(api);
const notificationStore = new  NotificationStore(api);
const supadminStore = new  SupAdminStore(api);

const stores = {
  startingStore,
  issuesStore,
  accountingStore,
  inventoryStore,
  crmStore,
  orderStore,
  managerStore,
  employeeStore,
  customerStore,
  staffStore,
  reportStore,
  notificationStore,
  supadminStore,
  
};


class App extends Component {
  render() {
    return (
<ScopedCssBaseline>
      <Router>
        <Provider {...stores}>
          <Switch>
             {/* JUST ADD Additional Routes here */}
          <Route exact path="/" component={Login} />
          <Route path="/Admin"    component={AdminDrawer}/>
          <Route path="/SuperAdmin"    component={SupAdminDrawer}/>
          <Route  path="/Login" component={CustLogin} />
          <Route  path="/Register" component={Register} />
          <Route  path="/AccessDistributor" component={AccessDist} />
          <Route  path="/Customer" component={DistGrid} />
          <Route  path="/Drawer" render={()=><MiniDrawer/>}/>
          <Route path="/Staff" component={StaffGrid} />
          <Route path="/Manager" component={ManagerGrid} />
         
        </Switch>
        </Provider>
      </Router>
      </ScopedCssBaseline>
    );
  }
}

export default App;
