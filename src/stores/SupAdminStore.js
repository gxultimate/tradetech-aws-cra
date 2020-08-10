import { decorate } from 'mobx';
class SupAdminStore {
	api = undefined;

	constructor(api) {
		this.api = api;
	}
}

decorate(SupAdminStore, {});

export default SupAdminStore;
