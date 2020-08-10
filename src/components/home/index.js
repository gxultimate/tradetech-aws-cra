
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { spacing } from '@material-ui/system';
import Navbar from '../navbar';
import "../../css/style.css";
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import Icon3 from "../../assets/icon3.png";
import TT3 from "../../assets/tt3.png";
import TT3BG from "../../assets/tt3_bg.png";
import TT5 from "../../assets/mobile.png";
import TTLogo from "../../assets/tradetechwhite.png";
import EmailIcon from '@material-ui/icons/Email';
import Footer from "../home/footer";
import {withRouter} from 'react-router-dom'

import React, { Component } from 'react'

 class Homepage extends Component {
  render() {




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "Poppins, sans-serif",
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

 function Home() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  const theme = {
  spacing: 8,
}

  return (
    <div className={classes.root}>
      <Navbar/>

      {/* Section 1 */}
      {/* <Grid container spacing={0} className="tt-1" id="home">
        <Grid item xs={12} className="tt-1-container">
          <div className="tt-1-title">
            Stay Home
          </div>
          <div className="tt-1-content">
            And Get Your Needs
          </div>
        </Grid>
      </Grid> */}

      {/* Section 1b */}
      <Grid container spacing={0} className="tt-1b" id="home">
      <Grid item sm={6} className="tt-1b-img-container">
        <div className="tt-1b-img"> </div>
      </Grid>
      <Grid item sm={6} className="tt-1b-container">
        <div className="tt-1b-title">
            Welcome to <br/><span style={{ fontWeight: 'bold'}}>TRADETECH</span>
        </div>
        <div className="tt-1b-content">
          TradeTech, your number one source for all grocery items needed for your retail store. We're dedicated to give you the very best service of delivering your order in your area. By just one app, you can easily order your grocery products from our distributor partners.
        </div>
      </Grid>
      </Grid>

      {/* Section 2 */}
      <Grid container spacing={0} className="tt-2" id="howItWorks">
        <Grid item sm={12} className="tt-2-container">
          <div className="tt-2-title">How it Works</div>
        </Grid>
        <Grid item sm={4} style={{margin: "3% 0%"}}>
          <div className="tt-2-icon"><img src={Icon1} height="160" width="160" /></div>
          <div className="tt-2-icon-title">Ordering Online</div>
          <div className="tt-2-icon-content">Retail store owners can purchase the products through the Tradetech App.</div>
        </Grid>
        <Grid item sm={4} style={{margin: "3% 0%"}}>
          <div className="tt-2-icon"><img src={Icon2} height="160" width="160" /></div>
          <div className="tt-2-icon-title">Payment</div>
          <div className="tt-2-icon-content">Retail store owners can pay through COD, GCash, TTech Coins.</div>
        </Grid>
        <Grid item sm={4} style={{margin: "3% 0%"}}>
          <div className="tt-2-icon"><img src={Icon3} height="160" width="160" /></div>
          <div className="tt-2-icon-title">Delivery</div>
          <div className="tt-2-icon-content">After successful transaction, package will be scheduled for delivery.</div>
        </Grid>
      </Grid>
      
      {/* Section 3 */}
      <Grid container spacing={0} className="tt-3" id="aboutUs">
        <Grid item sm={12} className="tt-3-container">
          <div className="tt-3-bg-img">
            <Grid container>
            <Grid item sm={5}></Grid>
              <Grid item sm={7}>
                <div className="tt-3-title">About Us</div>
                 <div className="tt-3-content">
                 We create an eCommerce that will help our partners, the retail stores to have a convenient way of ordering grocery items that they need. By creating a system, we offer solutions that are capable of catering to numerous retail store owners.<br/><br/>
                 As a Service platform, we will meet clients' satisfaction through seamless user experience. We intend to offer it to the remote areas and far-flung from the center of businesses. Not just giving them our services but help them bring their business in Digital platform.  Tradetech have multiple warehouses all over Cebu. We envision by 2025, Cebu will be a top city of digital business in our country. We are the partner in building and achieving the digital world we visualize.
                 </div>
            </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>

      {/* Section 4 */}
      <Grid container spacing={0} className="tt-4" id="partner"> 
      <Grid item md={7} className="">
      <div className="tt-4-title">Our<br/>Partnership</div>
          <div className="tt-4-content">We are thrilled to partner with people who has the passion in creating and innovating businesses into a digital platform, wherein they can explore the techpreneurship. Discover the new era of technology to help boost the businesses in Cebu and bring the country into tech world.</div>
      </Grid>
      <Grid item md={5} className="tt-4-container"></Grid>
      </Grid>

      {/* Footer */}
      <Footer/>
      
    </div>
  );
}

return (
  <Home/>
)
}
}

export default withRouter(Homepage)
