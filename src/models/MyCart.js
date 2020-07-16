import Joi from "joi";
import { decorate, observable } from "mobx";
import Model from "./Model";

class MyCart extends Model {
  constructor(props) {
    const defaults = {
        cart_ID: "",
        account_ID:"",
        product_ID: "",
        distributor_ID: "",
        product_Name: "",
        product_Category:"",
        product_SubCategory:"",
        product_Description: "",
        product_Price: "",
        product_UoM: "",
        product_Img: undefined,
        product_Barcode: "",
        product_Brand: "",
        product_Stocks:"",
        product_DateReceived: "",
        product_ExpirationDate: "",
        product_Remarks: "",
        product_Quantity:"",
        product_TransactionDate :"",
        product_TotalAmount :"",

    };
    super({ ...defaults, ...props });
  }

}

decorate(MyCart, {
    cart_ID: observable,
        account_ID:observable,
        product_ID: observable,
        distributor_ID: observable,
        product_Name: observable,
        product_Category:observable,
        product_SubCategory:observable,
        product_Description: observable,
        product_Price: observable,
        product_UoM: observable,
        product_Img: observable,
        product_Barcode: observable,
        product_Brand: observable,
        product_Stocks:observable,
        product_DateReceived: observable,
        product_ExpirationDate: observable,
        product_Remarks: observable,
        product_Quantity:observable,
        product_TransactionDate :observable,
        product_TotalAmount :observable,

});

export default MyCart;
