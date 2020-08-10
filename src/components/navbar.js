
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MoreIcon from '@material-ui/icons/MoreVert';
import PersonIcon from '@material-ui/icons/Person';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from "react-scroll";
import TTLogo from "../assets/tradetechwhite.png";
import "../css/style.css";
import {withRouter} from 'react-router-dom'


class HomeNavbar extends Component {
  render() {

let loginpage= ()=>{
 
  this.props.history.push("/AdminLogin");
}


function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: '#1f8869',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 2,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function Navbar(props) {
const classes = useStyles();
const [anchorEl, setAnchorEl] = React.useState(null);
const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

const isMenuOpen = Boolean(anchorEl);
const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

const handleProfileMenuOpen = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleMobileMenuClose = () => {
  setMobileMoreAnchorEl(null);
};

const handleMenuClose = () => {
  setAnchorEl(null);
  handleMobileMenuClose();
};

const handleMobileMenuOpen = (event) => {
  setMobileMoreAnchorEl(event.currentTarget);
};

const menuId = 'primary-search-account-menu';
const renderMenu = (
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={menuId}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isMenuOpen}
    onClose={handleMenuClose}
  >
    <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
    <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
  </Menu>
);

const mobileMenuId = 'primary-search-account-menu-mobile';
const renderMobileMenu = (
  <Menu
    anchorEl={mobileMoreAnchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={mobileMenuId}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isMobileMenuOpen}
    onClose={handleMobileMenuClose}
  >
    <MenuItem>
    <Link className="navbar-link-mobile" to="home" activeClass="active" spy={true} smooth={true} offset={0} duration={500}>
        Home
    </Link>
    </MenuItem>
    <MenuItem>
    <Link className="navbar-link-mobile" to="howItWorks" activeClass="active" spy={true} smooth={true} offset={-170} duration={500}>
        How it Works
    </Link>
    </MenuItem>
    <MenuItem>
    <Link className="navbar-link-mobile" to="aboutUs" activeClass="active" spy={true} smooth={true} offset={-90} duration={500}>
        About Us
    </Link>
    </MenuItem>
    <MenuItem>
    <Link className="navbar-link-mobile" to="partner" activeClass="active" spy={true} smooth={true} offset={-60} duration={500}>
        Be a Partner
    </Link>
    </MenuItem>
    <MenuItem>
    <Link className="navbar-link-mobile">
        Login
    </Link>
    </MenuItem>
  </Menu>
);
  return (
    
    <React.Fragment>
      <div className={classes.grow}>
        <CssBaseline />
          <ElevationScroll {...props}>
            <AppBar className={classes.navbar}>
              <Toolbar>
                <img className={classes.title} noWrap src={TTLogo} height="50" width="220" />
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                  <Link className="navbar-link" to="home" activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>
                  <div className="navbar-link-item">Home</div>
                  </Link>
                  <Link className="navbar-link" to="howItWorks" activeClass="active" spy={true} smooth={true} offset={-170} duration={500}>
                  <div className="navbar-link-item">How it Works</div>
                  </Link>
                  <Link className="navbar-link" to="aboutUs" activeClass="active" spy={true} smooth={true} offset={-90} duration={500}>
                    <div className="navbar-link-item">About Us</div>
                  </Link>
                  <Link className="navbar-link" to="partner" activeClass="active" spy={true} smooth={true} offset={-60} duration={500}>
                  <div className="navbar-link-item">Be a Partner</div>
                  </Link>
                  <Link className="navbar-link" onClick={()=>loginpage()}>
                    <div className="navbar-link-item"><PersonIcon style={{fontSize: "22px", paddingTop: "3%" }} /> Login </div>
                  </Link>
                </div>
                <div className={classes.sectionMobile}>
                  <IconButton
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    <MoreIcon />
                  </IconButton>
                </div>
              </Toolbar>
            </AppBar>
        </ElevationScroll>
        {renderMobileMenu}
        {renderMenu}
      </div>
  </React.Fragment>
  );
}

return (
  <Navbar/>
)
}
}

export default withRouter(HomeNavbar)