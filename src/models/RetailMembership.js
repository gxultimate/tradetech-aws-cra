import Joi from "joi";
import { decorate, observable } from "mobx";
import Model from "./Model";

class RetailMembership extends Model {
  constructor(props) {
    const defaults = {
        membership_ID:"",
        distributor_ID:"",
        distributor_wHouse:"",
        account_ID:"",
        access_Token :"",

    };
    super({ ...defaults, ...props });
  }


}

decorate(RetailMembership, {
    membership_ID:observable,
    distributor_ID:observable,
    distributor_wHouse:observable,
    account_ID:observable,
    access_Token:observable,

});

export default RetailMembership;