import {decorate, observable} from 'mobx';
import Model from "./Model";

class Report extends Model {
constructor(props){
 const defaults ={
 report_ID:"",
 order_ID:"",
 distributor_ID:"",
 account_ID:"",
 report_Type:"",
 report_Detail:"",
 report_Note:"",
 report_Date:"",
 report_Sender:"",
 report_Status:"",

 };
 super({...defaults,...props});
}

}
decorate(Report,{

    report_ID:observable,
    order_ID:observable,
    distributor_ID:observable,
    account_ID:observable,
    report_Type:observable,
    report_Detail:observable,
    report_Note:observable,
    report_Date:observable,  
    report_Sender:observable,
    report_Status:observable,
 

});


export default Report;