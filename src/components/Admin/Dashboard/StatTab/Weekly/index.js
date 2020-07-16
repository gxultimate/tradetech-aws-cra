import React, { Component } from 'react'
import {inject,observer} from 'mobx-react'
import {Bar} from 'react-chartjs-2'
export class StatBar extends Component {
    render() {


function StatChart(){

    const data ={
        labels:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
            label: 'Paid (Weekly)',
            backgroundColor: '#208769',
            borderColor: '#208769',
            data: [3, 10, 5, 2, 20, 30, 45]
        },
        {
            label :'Unpaid (Weekly)',
            backgroundColor:'#F7A31C',
            borderColor:'#F7A31C',
            data:[43,23,12,47,34,3,76]
        }
    ]
    
    }
return(
<Bar data={data}/>




)




}
     return (
        <StatChart/>
        )
    }
}

export default inject('startingStore')(observer(StatBar));
