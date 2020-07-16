import Joi from "joi";
import { decorate, observable } from "mobx";
import Model from "./Model";

class Notification extends Model {
  constructor(props) {
    const defaults = {
       
        notif_ID:"",
        account_ID:"",
        distributor_ID:"",
        order_ID:"",
        sender_ID:"",
        recipient_ID:"",
        notif_subject :"",
        notif_description:"",
        notif_date:"",
        notif_status:"",

    };
    super({ ...defaults, ...props });
  }


}

decorate(Notification, {
    
    notif_ID:observable,
    account_ID:observable,
    distributor_ID:observable,
    order_ID:observable,
    sender_ID:observable,
    recipient_ID:observable,
    notif_subject:observable,
    notif_description:observable,
    notif_date:observable,
    notif_status:observable

});

export default Notification;
