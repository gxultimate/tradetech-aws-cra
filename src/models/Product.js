import Joi from "joi";
import { decorate, observable } from "mobx";
import Model from "./Model";

class Product extends Model {
  constructor(props) {
    const defaults = {
        product_ID: "",
        distributor_ID: "",
        product_Name: "",
        product_Category:"",
        product_Description: "",
        product_Price: "",
        product_UoM: "",
        
        product_Img: undefined,
        // product_Barcode: "",
        product_Brand: "",
        product_Stocks:"",
        product_DateReceived: "",
        product_ExpirationDate: "",
        product_Remarks: "",
        product_Status:"",
        product_Favorite:"",
        product_Packaging:"",
        product_Variant:"",

    };
    super({ ...defaults, ...props });
  }


}

decorate(Product, {
    product_ID: observable,
    distributor_ID:observable,
    product_Name: observable,
    product_Category:observable,
    product_Description: observable,
    product_Price: observable,
    product_UoM: observable,
    product_Img: observable,
    product_Stocks:observable,
    // product_Barcode: observable,
    product_Brand: observable,
    product_DateReceived: observable,
    product_ExpirationDate: observable,
    product_Remarks: observable,
    product_Status:observable,
    product_Favorite:observable,
    product_Packaging:observable,
    product_Variant:observable,

});

export default Product;
