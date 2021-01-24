import React, { Component } from 'react'
import {Typography} from '@material-ui/core'
 class TotalAmount extends Component {
    render() {
        return (
            <React.Fragment>
                <Typography variant="subtitle1" style={{color:"white",textDecoration:"underlined",paddingRight:"20px"}}>Total Sales : <span style={{fontWeight:"bold"}}>{Number(this.props.amount).toLocaleString('en')}</span> </Typography>
            </React.Fragment>
        )
    }
}

export default TotalAmount
