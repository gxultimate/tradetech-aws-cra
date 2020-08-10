import Joi from "joi";
import { decorate, observable } from "mobx";
import Model from "./Model";

class StockOut extends Model {
  constructor(props) {
    const defaults = {
        stock_ID:"",
        product_ID: "",
        distributor_ID: "",
        product_Name: "",
        product_Category:"",
        product_UoM: "",
        product_Barcode: "",
        product_Brand: "",
    
        product_stockoutDate: "",
     
        stock_Detail:"",
        stock_Out:"",
        

    };
    super({ ...defaults, ...props });
  }

}

decorate(StockOut, {
    stock_ID:observable,
    product_ID: observable,
    distributor_ID:observable,
    product_Name: observable,
    product_Category:observable,
    product_UoM: observable,
    product_Barcode: observable,
    product_Brand: observable,
 
    product_stockoutDate: observable,
    
    stock_Detail:observable,
    stock_Out:observable,
   

});

export default StockOut;
