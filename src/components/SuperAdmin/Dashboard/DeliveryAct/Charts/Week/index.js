import React, { Component } from 'react'
import {inject,observer} from 'mobx-react'
import {Line} from 'react-chartjs-2'
export class DeliveryBar extends Component {
    render() {


function DeliveryChart(){

    const data ={
        labels:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
            label: 'Completed (Weekly)',
            backgroundColor: 'rgba(32,135,105, 0.3)',
            borderColor: 'rgba(32,135,105, 0.3)',
            pointBackgroundColor: '#208769',
            pointBorderColor: '#208769',
            data: [232, 453, 456, 543, 233, 306,234]
        },
        {
            label :'Failed (Weekly)',
            backgroundColor:'rgba(247,163,28, 0.3)',
            pointBackgroundColor:'#F7A31C',
            borderColor:'rgba(247,163,28, 0.3)',
            pointBorderColor:'#F7A31C',
            data:[443,123,112,147,324,133,476]
        }
    ]
    
    }
return(
<Line data={data}/>




)




}
     return (
        <DeliveryChart/>
        )
    }
}

export default inject('startingStore')(observer(DeliveryBar));
