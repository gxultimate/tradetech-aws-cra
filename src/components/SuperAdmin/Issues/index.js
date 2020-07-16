import { Divider, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { withRouter } from 'react-router-dom';
import Tabs from './tab'


 class IssuesGrid extends React.Component {
componentWillMount(){
  let {startingStore:{getReport}}=this.props;
  getReport();
}

    render() {


      
      

          
           function IssuesGrid() {
          
          
            return (
              <div>
                <Grid container spacing={3} lg={12} md={12} xs={12}>
                  <Grid item lg={12} md={12} xs={12}>
                  <Typography variant="h5" >
           Help/Support
        </Typography>
        <Divider/>
                  </Grid>
                  <Grid item lg={12} md={12} xs={12}>
                 <Tabs/>
                  </Grid>
                  
                </Grid>
              </div>
            );
          }
          

          
        return (
            <IssuesGrid/>
        )
    }
}

export default withRouter(inject('startingStore')(observer(IssuesGrid)))




