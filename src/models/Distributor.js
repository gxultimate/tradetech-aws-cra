import Joi from "joi";
import { decorate, observable } from "mobx";
import Model from "./Model";

class Distributor extends Model {
  constructor(props) {
    const defaults = {
        distributor_ID: "",
        distributor_username: "",
        distributor_password: "",
        distributor_fName: "",
        distributor_mName: "",
        distributor_lName: "",
        distributor_warehouseName: "",
        distributor_address: '',
        distributor_emailAddress :"",
        distributor_contactNo :"",
        distributor_status: "",
        distributor_dateRegistered :"",
        distributor_tierNo :"",
        distributor_accessType:"",
        termsCondition:""
    };
    super({ ...defaults, ...props });
  }

}

decorate(Distributor, {
    distributor_ID: observable,
    distributor_username: observable,
    distributor_password:observable,
    distributor_fName: observable,
    distributor_mName: observable,
    distributor_lName: observable,
    distributor_address: observable,
    distributor_emailAddress: observable,
    distributor_contactNo :observable,
    distributor_status:observable,
    distributor_dateRegistered :observable,
    distributor_tierNo:observable,
    distributor_accessType:observable,
    termsCondition:observable,
   
});

export default Distributor;
