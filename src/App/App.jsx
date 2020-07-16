import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

// Pages init
import DistGrid from '../components/Customer';
import Login from '../components/Admin/Login';
import CustLogin from '../components/Customer/Login';
import AdminDrawer from '../components/Admin';
import StaffGrid from '../components/Staff';
import ManagerGrid from '../components/Manager';
import Register from '../components/Customer/RegisterS/UserForm';
import SupAdminDrawer from '../components/SuperAdmin';
import MiniDrawer from '../components/SuperAdmin/drawer.js';
import AccessDist from '../components/Customer/AccessDistributor';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ScopedCssBaseline>
					<Router>
						<Switch>
							{/* JUST ADD Additional Routes here */}
							<Route exact path="/" component={Login} />
							<Route path="/Admin" component={AdminDrawer} />
							<Route path="/SuperAdmin" component={SupAdminDrawer} />
							<Route path="/Login" component={CustLogin} />
							<Route path="/Register" component={Register} />
							<Route path="/AccessDistributor" component={AccessDist} />
							<Route path="/Customer" component={DistGrid} />
							<Route path="/Drawer" render={() => <MiniDrawer />} />
							<Route path="/Staff" component={StaffGrid} />
							<Route path="/Manager" component={ManagerGrid} />
						</Switch>
					</Router>
				</ScopedCssBaseline>
			</div>
		);
	}
}
export default App;
