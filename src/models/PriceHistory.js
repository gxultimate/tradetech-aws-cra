
import { decorate, observable } from "mobx";
import Model from "./Model";


class PriceHist extends Model {
  constructor(props) {
    const defaults = {
       
        priceHistID:"",
        product_ID:"",
        priceFrom :"",
        priceTo:"",
        dateCreated:"",
       

    };
    super({ ...defaults, ...props });
  }


}

decorate(PriceHist, {
    
    priceHistID:observable,
    productID:observable,
        priceFrom :observable,
        priceTo:observable,
        dateCreated:observable,

        

});

export default PriceHist;
