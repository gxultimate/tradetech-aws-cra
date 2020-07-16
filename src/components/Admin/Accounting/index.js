import { Divider, Grid, Typography } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Tabs from './tab.js';



class adDrawer extends Component {
  componentDidMount() {
    let { accountingStore: { getAccounts, getOrder } } = this.props;
    getAccounts();
    // getOrder();
  }

  render() {

    function Accounting() {
    
      return (
        <Fragment>
          <Grid container direction="row" lg={12} sm={12} xs={12}>
          

              <Grid item  lg={12} sm={12} xs={12}>
                <Typography variant="h5" >
                  Collection
        </Typography>

              </Grid>
              <Divider style={{ marginBottom: "15px" }} />
              <Grid item  lg={12} sm={12} xs={12}>
              <Tabs />
              </Grid>
           
          </Grid>
        </Fragment>
      );
    }
    return (

      <Accounting />


    );

  }
}
export default withRouter(inject("accountingStore")(observer(adDrawer)));





