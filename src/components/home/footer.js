import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import "../../css/style.css";
import TTLogo from "../../assets/tradetechwhite.png";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

export default function Footer() {
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
      <Grid container spacing={0} className="tt-footer" style={{textAlign: "center"}}>
        <Grid item sm={6} className="tt-footer-container"> 
         <div className="footer-partner-title"><EmailIcon className="tt-5-icon" style={{fontSize: "60px", color: "white"}} />Be Our Partner</div>
         <div className="tt-footer-content">
         Subscribe to our newsletter to get our news & deals delivered in your inbox!
         </div>
         <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Email Address" variant="filled" style={{backgroundColor: "white", border: "none!important", width: "270px" , margin: "3% 0%"}} /><span><Button variant="contained" style={{marginTop: "3%", height: "56px", padding: "0% 5%", backgroundColor: "#1f8869", color: "white", fontWeight: "bold", fontSize: "18px"}}>OK</Button></span>
            </form>
         <ul id="social">
          <li><FacebookIcon className="social-icon" style={{fontSize: "50px", color: "#f6bd0e", backgroundColor: "#1f8869", borderRadius: "50%", padding: "1%"}} /></li>
          <li><InstagramIcon className="social-icon" style={{fontSize: "50px", color: "#f6bd0e", backgroundColor: "#1f8869", borderRadius: "50%", padding: "1%"}} /></li>
          <li><TwitterIcon className="social-icon" style={{fontSize: "50px", color: "#f6bd0e", backgroundColor: "#1f8869", borderRadius: "50%", padding: "1%"}} /></li>
          <li><EmailIcon className="social-icon" style={{fontSize: "50px", color: "#f6bd0e", backgroundColor: "#1f8869", borderRadius: "50%", padding: "1%"}} /></li>
        </ul>  
        </Grid>
        <Grid item sm={6} className="tt-footer-container">
        <Grid container spacing={0} className="tt-footer" style={{textAlign: "center"}}>
        <Grid item xs={4} className="tt-footer-container">
            <div className="tt-footer-title">Need Help?</div>
            <List component="nav">
                <ListItem button>
                  <ListItemText className="tt-footer-link-list" primary="Support" />
                </ListItem>
                <ListItemLink href="#simple-list">
                  <ListItemText className="tt-footer-link-list" primary="Get Started" />
                </ListItemLink>
                <ListItemLink href="#simple-list">
                  <ListItemText className="tt-footer-link-list" primary="Terms of Use" />
                </ListItemLink>
                <ListItemLink href="#simple-list">
                  <ListItemText className="tt-footer-link-list" primary="Privacy Policy" />
                </ListItemLink>
                <ListItemLink href="#simple-list">
                  <ListItemText className="tt-footer-link-list" primary="Contact Us" />
                </ListItemLink>
            </List>
        </Grid>
        <Grid item xs={4} className="tt-footer-container">
            <div className="tt-footer-title">Learn More</div>
            <List component="nav">
                <ListItem button>
                  <ListItemText className="tt-footer-link-list" primary="About Us" />
                </ListItem>
                <ListItemLink href="#simple-list">
                  <ListItemText className="tt-footer-link-list" primary="Our Story" />
                </ListItemLink>
                <ListItemLink href="#simple-list">
                  <ListItemText className="tt-footer-link-list" primary="Projects" />
                </ListItemLink>
                <ListItemLink href="#simple-list">
                  <ListItemText className="tt-footer-link-list" primary="Pricing" />
                </ListItemLink>
                <ListItemLink href="#simple-list">
                  <ListItemText className="tt-footer-link-list" primary="Features" />
                </ListItemLink>
            </List>
        </Grid>
        <Grid item xs={4} className="tt-footer-container">
            <div className="tt-footer-title">Contact Us</div>
            <List component="nav">
                <ListItem button>
                  <ListItemText className="tt-footer-link-list" primary="Support" />
                </ListItem>
                <ListItemLink href="#simple-list">
                  <ListItemText className="tt-footer-link-list" primary="Get Started" />
                </ListItemLink>
                <ListItemLink href="#simple-list">
                  <ListItemText className="tt-footer-link-list" primary="Terms of Use" />
                </ListItemLink>
                <ListItemLink href="#simple-list">
                  <ListItemText className="tt-footer-link-list" primary="Privacy Policy" />
                </ListItemLink>
                <ListItemLink href="#simple-list">
                  <ListItemText className="tt-footer-link-list" primary="Contact Us" />
                </ListItemLink>
            </List>
        </Grid>
        </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="tt-footer-copyright">
          Copyright © 2020 TradeTech. All Rights Reserved.
        </Grid>
    </div>
  );
}
