import Joi from "joi";
import { decorate, observable } from "mobx";
import Model from "./Model";

class Account extends Model {
  constructor(props) {
    const defaults = {
        account_ID: "",
        distributor_ID:"",
        account_fName: "",
        account_lName:"",
        account_mName: "",
        account_suffix: "",
        account_address: "",
        account_emailAddress: "",
        account_contactNo :"",
        account_contract :"",
        account_username: "",
        account_password: "",
        account_birthday:"",
        account_dateRegistered :"",
        account_storeName :"",
        account_storeAddress :"",
        staff_Role :"",
        account_accessType:"",
        account_status:"",
    };
    super({ ...defaults, ...props });
  }


}

decorate(Account, {
  account_ID: observable,
  distributor_ID:observable,
  account_fName: observable,
  account_lName:observable,
  account_mName: observable,
  account_suffix: observable,
  account_address: observable,
  account_emailAddress: observable,
  account_contactNo :observable,
  account_contract :observable,
  account_username: observable,
  account_password: observable,
  account_birthday:observable,
  account_dateRegistered :observable,
  account_storeName :observable,
  account_storeAddress :observable,
  staff_Role :observable,
  account_accessType:observable,
  account_status:observable,
});

export default Account;
