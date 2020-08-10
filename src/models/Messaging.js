import Joi from "joi";
import { decorate, observable } from "mobx";
import Model from "./Model";
import { observer } from "mobx-react";

class Message extends Model {
  constructor(props) {
    const defaults = {
       
        date_Created:"",
        message_Subject:"",
        message_Body :"",
        sender_Name:"",
        recipient_Name:"",
        sender_ID:"",
        recipient_ID:"",
        message_ID :"",
        message_Status:"",
       

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
        sender_ID:observable,
        recipient_ID:observable,
        message_ID :observable,
        message_Status:observable,
        

});

export default Message;
