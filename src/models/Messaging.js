import Joi from "joi";
import { decorate, observable } from "mobx";
import Model from "./Model";

class Message extends Model {
  constructor(props) {
    const defaults = {
       
        date_Created:"",
        message_Subject:"",
        message_Body :"",
        sender_Name:"",
        recipient_Name:"",
        distributor_ID:"",
        account_ID:"",
       

    };
    super({ ...defaults, ...props });
  }


}

decorate(Message, {
    
    date_Created:observable,
    message_Subject:observable,
        message_Body :observable,
        sender_Name:observable,
        recipient_Name:observable,
        distributor_ID:observable,
        account_ID:observable,
        

});

export default Message;
