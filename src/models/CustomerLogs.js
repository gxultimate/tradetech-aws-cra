import Joi from "joi";
import { decorate, observable } from "mobx";
import Model from "./Model";

class CustomerLogs extends Model {
  constructor(props) {
    const defaults = {
       
        log_ID:"",
        account_ID:"",
        distributor_ID:"",
        log_activity:"",
        log_Date :"",

    };
    super({ ...defaults, ...props });
  }


}

decorate(CustomerLogs, {
    
    log_ID:observable,
    account_ID:observable,
    distributor_ID:observable,
    log_activity:observable,
    log_Date :observable,

});

export default CustomerLogs;