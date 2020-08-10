import { action, decorate, observable } from 'mobx';
import Account from '../models/Account';
import Distributor from '../models/Distributor';
import CustomerLogs from './../models/CustomerLogs';
import Order from './../models/Order';
class IssuesStore {
	account = new Account();
	distributor = new Distributor();
	order = new Order();
	cLogs = new CustomerLogs();
	listOfDistributors = [];
	listOfUsers = [];
	listOfClogs = [];
	listOfUserDocs = [];
	listOfOrder = [];
	api = undefined;

	constructor(api) {
		this.api = api;
	}

	addAccount = () => {
		return new Promise((resolve, reject) => {
			this.api.addaccount(this.account).then((resp) => {
				if (resp.data !== false) {
					resolve(true);
				} else {
					resolve(false);
				}
			});
		});
	};

	getDistributors = () => {
		return new Promise((resolve, reject) => {
			this.api.getdistributors().then((resp) => {
				this.listOfDistributors = resp.data;

				if (resp.data !== false) {
					resolve(resp.data);
				} else {
					resolve(false);
				}
			});
		});
	};

	getAccounts = () => {
		this.api.getaccounts().then((resp) => {
			this.listOfUsers = resp.data;
			this.listOfUserDocs = resp.data;
		});
	};

	editAccount = () => {
		let doc = this.listOfUserDocs.filter((data) => {
			if (data.account_ID === this.account.account_ID) {
				return data._id;
			}
		});

		this.api.editaccount(this.account, doc[0]._id).then((resp) => {
			this.listOfUsers = resp.data;
		});
	};

	getOrderD = () => {
		return new Promise((resolve, reject) => {
			let getuserId = JSON.parse(sessionStorage.getItem('userData'));

			this.api
				.getorder(
					getuserId.distributor_ID,
					this.order.packer_ID ? this.order.packer_ID : this.order.dispatcher_ID
				)
				.then((resp) => {
					this.listOfOrder = resp.data;

					if (resp.data !== false) {
						resolve(resp.data);
					} else {
						resolve(false);
					}
				});
		});
	};

	getcLogs = () => {
		return new Promise((resolve, reject) => {
			let getuserId = JSON.parse(sessionStorage.getItem('userData'));

			this.api.getclogs(getuserId.distributor_ID).then((resp) => {
				this.listOfClogs = resp.data;

				if (resp.data !== false) {
					resolve(resp.data);
				} else {
					resolve(false);
				}
			});
		});
	};
}

decorate(IssuesStore, {
	listOfUsers: observable,
	account: observable,
	order: observable,
	cLogs: observable,
	listOfClogs: observable,
	distributor: observable,
	listOfReport: observable,
	listOfDistributors: observable,
	listOfUserDocs: observable,
	listOfOrder: observable,
	getDistributors: action,
	getAccounts: action,
	editAccount: action,
	addAccount: action,
	getOrderD: action,
	getcLogs: action
});

export default IssuesStore;
