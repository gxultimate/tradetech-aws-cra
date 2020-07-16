import Joi from "joi";
import { decorate, observable } from "mobx";
import Model from "./Model";

class ProductFavorite extends Model {
  constructor(props) {
    const defaults = {
       
        favorite_ID:"",
        account_ID:"",
        distributor_ID:"",
        product_ID:"",

    };
    super({ ...defaults, ...props });
  }


}

decorate(ProductFavorite, {
    
    favorite_ID:observable,
    account_ID:observable,
    distributor_ID:observable,
    product_ID:observable,

});

export default ProductFavorite;
