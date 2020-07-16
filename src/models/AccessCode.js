import Joi from "joi";
import { decorate, observable } from "mobx";
import Model from "./Model";

class Token extends Model {
  constructor(props) {
    const defaults = {
       
        distributor_ID:"",
        distributor_wHouse:"",
        access_Token :"",

    };
    super({ ...defaults, ...props });
  }


}

decorate(Token, {
    
    distributor_ID:observable,
    distributor_wHouse:observable,
    access_Token:observable,

});

export default Token;
