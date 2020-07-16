import React, { Component } from 'react'
import {inject,observer} from 'mobx-react'
import {Bar} from 'react-chartjs-2'
export class StatBar extends Component {
    render() {


function StatChart(){

    const data ={
        labels:['2020', '2021', '2022', '2023', '2024', '2025', '2026','2027','2028','2029','2030'],
        datasets: [
            {
            label: 'Paid (Yearly)',
            backgroundColor: '#208769',
            borderColor: '#208769',
            data: [3345, 10345, 5345, 2545, 20435, 30344, 45444,55234,23234,3434,4544]
        },
        {
            label :'Unpaid (Yearly)',
            backgroundColor:'#F7A31C',
            borderColor:'#F7A31C',
            data:[43434,2334,1243,4743,34432,3324,7634,32234,5543,86324,32324]
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
