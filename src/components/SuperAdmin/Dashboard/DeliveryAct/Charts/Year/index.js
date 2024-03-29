import React, { Component } from 'react'
import {inject,observer} from 'mobx-react'
import {Line} from 'react-chartjs-2'
class DeliveryBar extends Component {
    render() {


function DeliveryChart(){

    const data ={
        labels:['2020', '2021', '2022', '2023', '2024', '2025', '2026','2027','2028','2029','2030'],
        datasets: [
            {
            label: 'Completed (Yearly)',
            backgroundColor: 'rgba(32,135,105, 0.3)',
            borderColor: 'rgba(32,135,105, 0.3)',
            pointBackgroundColor: '#208769',
            pointBorderColor: '#208769',
            data: [232, 453, 456, 543, 233, 306,234,112,147,324,133]
        },
        {
            label :'Failed (Yearly)',
            backgroundColor:'rgba(247,163,28, 0.3)',
            pointBackgroundColor:'#F7A31C',
            borderColor:'rgba(247,163,28, 0.3)',
            pointBorderColor:'#F7A31C',
            data:[443,123,112,147,324,133,476,232, 453, 456, 543]
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
