
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
        TradeTech, the MSME enterprise resource planner that gives you, and your customers the convenience that B2C platforms can provide. We're dedicated to giving you the most efficient way to manage your sales, inventory, and fulfillment through our platform.
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
                 Co founded in 2019 by Aaron Espina, a distributor of fast moving consumer goods, together with Ace Velarde and Tara Mae Flores of Startup Venture Projects Philippines. Tradetech aims to solve the issues in the current traditional supplier and distributor market of the Philippines.<br/><br/>
                 With 4 years of experience in trying to make the product journey more efficient, Tradetech was formulated as a B2B Inventory management system that provides eCommerce convenience to your customers. As a service and data platform, we meet clients' satisfaction through our seamless user experience. Sales data analysis, inventory management, and customer relationship management. With our platform, your business will be able to get the necessary data real time, with the tech needed to automate your product sales journey, gather real time data on sales, and manage your inventory with ease.
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
