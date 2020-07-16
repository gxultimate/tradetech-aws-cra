import React, { Component } from 'react'
import {inject,observer} from 'mobx-react'
import {Bar} from 'react-chartjs-2'
export class OrderBar extends Component {
    render() {


function OrderChart(){

    const data ={
        labels:['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
        datasets: [
            {
            label: 'Completed (Month)',
            backgroundColor: '#208769',
            borderColor: '#208769',
            data: [232, 453, 456, 543, 233, 306, 485,555,232,344,545,180]
        },
        {
            label :'Failed (Month)',
            backgroundColor:'#F7A31C',
            borderColor:'#F7A31C',
            data:[443,123,112,147,324,133,476,232,355,186,232,175]
        }
    ]
    
    }
return(
<Bar data={data}/>




)




}
     return (
        <OrderChart/>
        )
    }
}

export default inject('startingStore')(observer(OrderBar));
