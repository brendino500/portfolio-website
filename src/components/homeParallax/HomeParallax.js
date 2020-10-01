import React, { useState } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

import About from "../About";
import HomeInfo from "../HomeInfo";
import Skills from "../Skills";
import Projects from "../projects/Projects";
import Experience from "../experience/Experience";
import Contact from "../Contact";
import photo_for_website from "../../assets/photo_for_website.jpg";
import materialUI from "../../assets/materialUI.png";
import jest_icon from "../../assets/jest_icon.png";
import AOS from "aos";
import "aos/dist/aos.css";

import { makeStyles } from "@material-ui/core/styles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import MoreIcon from "@material-ui/icons/MoreVert";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {
  IconButton,
  Button,
  Toolbar,
  AppBar,
  Menu,
  MenuItem,
  Badge,
} from "@material-ui/core";

let parallax = null;

AOS.init();

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    color: "#d3c9c0",
    position: "absolute",
    bottom: -15,
    left: -15,
  },
  text: {
    fontfamily: "Neuton",
    color: "#d3c9c0",
    fontSize: 15,
  },
  title: {
    flexGrow: 1,
    fontFamily: "Neuton",
    color: "#d3c9c0",
    fontSize: 25,
    letterSpacing: 4,
  },
  projectTitle: {
    flexGrow: 1,
    fontFamily: "Neuton",
    color: "#d3c9c0",
    fontSize: 40,
    letterSpacing: 12,
  },
  button: {
    fontFamily: "Neuton",
    fontSize: 17,
    color: "#d3c9c0",
    letterSpacing: 4,
  },
  arrows: {
    color: "#d3c9c0",
    fontSize: 50,
    textAlign: "center",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function HomeParallax() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (e) => {
    setMobileMoreAnchorEl(e.currentTarget);
  };

  const menuId = "primary-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My Account</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = "primary-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      {/* <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}
    </Menu>
  );

  return (
    <>
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{
            background: "transparent",
            boxShadow: "none",
          }}
        >
          {/* <div className={classes.sectionDesktop}> */}
          <Toolbar>
            <span
              className={classes.title}
              onClick={() => parallax.scrollTo(0)}
            >
              BRENDA TY
            </span>

            <Button
              className={classes.button}
              onClick={() => parallax.scrollTo(2)}
            >
              Projects
            </Button>
            <Button
              className={classes.button}
              onClick={() => parallax.scrollTo(3)}
            >
              Experience
            </Button>
            <Button
              className={classes.button}
              onClick={() => parallax.scrollTo(4)}
            >
              About
            </Button>
            <Button
              className={classes.button}
              onClick={() => parallax.scrollTo(5)}
            >
              Stalk
            </Button>

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
          {/* </div> */}
          {renderMobileMenu}
          {renderMenu}
        </AppBar>
      </div>

      <Parallax pages={6} ref={(ref) => (parallax = ref)}>
        <ParallaxLayer
          offset={0.3}
          speed={1.6}
          style={{
            pointerEvents: "none",
            backgroundSize: "10%",
          }}
        >
          <HomeInfo />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            pointerEvents: "none",
            backgroundSize: "10%",
          }}
        >
          <Skills />
        </ParallaxLayer>

        <ParallaxLayer offset={1.2} speed={4} style={{ pointerEvents: "none" }}>
          <i
            className="devicon-sass-original"
            style={{ display: "block", marginLeft: "35%" }}
          ></i>
          <i
            className="devicon-javascript-plain"
            style={{ display: "block", marginLeft: "55%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.3}
          speed={2.4}
          style={{ pointerEvents: "none" }}
        >
          <i
            className="devicon-react-original"
            style={{ display: "block", marginLeft: "65%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={2} style={{ pointerEvents: "none" }}>
          <i
            className="devicon-html5-plain"
            style={{ display: "block", marginLeft: "15%" }}
          ></i>
          <i
            className="devicon-mongodb-plain"
            style={{ display: "block", marginLeft: "65%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.1}
          speed={2.5}
          style={{ pointerEvents: "none" }}
        >
          <i
            className="devicon-git-plain"
            style={{ display: "block", marginLeft: "45%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={3} style={{ pointerEvents: "none" }}>
          <i
            className="devicon-github-plain"
            style={{ display: "block", marginLeft: "45%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.3}
          speed={3.5}
          style={{ pointerEvents: "none" }}
        >
          <i
            className="devicon-python-plain"
            style={{ display: "block", marginLeft: "75%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer offset={1.7} speed={8} style={{ pointerEvents: "none" }}>
          <img
            src={materialUI}
            alt="materialui"
            style={{ display: "block", marginLeft: "3%" }}
            className="materialui"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.2} speed={2} style={{ pointerEvents: "none" }}>
          <img
            src={jest_icon}
            alt="jestIcon"
            style={{ display: "block", marginLeft: "3%" }}
            className="jestIcon"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.8}
          speed={2.2}
          style={{ pointerEvents: "none" }}
        >
          <i
            className="devicon-django-plain"
            style={{ display: "block", marginLeft: "90%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.2}
          speed={2.8}
          style={{ pointerEvents: "none" }}
        >
          <i
            className="devicon-css3-plain"
            style={{ display: "block", marginLeft: "10%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1} style={{ pointerEvents: "none" }}>
          <i
            className="devicon-intellij-plain"
            style={{ display: "block", marginLeft: "10%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={3} style={{ pointerEvents: "none" }}>
          <i
            className="devicon-trello-plain"
            style={{ display: "block", marginLeft: "80%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.2}
          speed={1.2}
          style={{ pointerEvents: "none" }}
        >
          <i
            className="devicon-java-plain"
            style={{ display: "block", marginLeft: "80%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.1}
          speed={1.6}
          style={{ pointerEvents: "none" }}
        >
          <i
            className="devicon-nodejs-plain"
            style={{ display: "block", marginLeft: "60%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.4}
          speed={1.6}
          style={{ pointerEvents: "none" }}
        >
          <i
            className="devicon-postgresql-plain"
            style={{ display: "block", marginLeft: "30%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.7}
          speed={1.7}
          style={{ pointerEvents: "none" }}
        >
          <i
            className="devicon-slack-plain"
            style={{ display: "block", marginLeft: "20%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.2}
          speed={2.6}
          style={{ pointerEvents: "none" }}
        >
          <i
            className="devicon-visualstudio-plain"
            style={{ display: "block", marginLeft: "90%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={7} style={{ pointerEvents: "none" }}>
          <i
            className="devicon-typescript-plain"
            style={{ display: "block", marginLeft: "34%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer offset={1.2} speed={5} style={{ pointerEvents: "none" }}>
          <i
            className="devicon-npm-original-wordmark"
            style={{ display: "block", marginLeft: "22%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.7}
          speed={6.5}
          style={{ pointerEvents: "none" }}
        >
          <i
            className="devicon-express-original"
            style={{ display: "block", marginLeft: "57%" }}
          ></i>
        </ParallaxLayer>

        <div data-aos="fade-down"></div>

        <ParallaxLayer offset={1.99} speed={1}>
          <div data-aos="fade-down">
            <KeyboardArrowDownIcon
              className={classes.arrows}
              style={{ display: "block", marginLeft: "50%" }}
            />
            <br />
            <KeyboardArrowDownIcon
              className={classes.arrows}
              style={{ display: "block", marginLeft: "50%" }}
            />
            <br />
            <KeyboardArrowDownIcon
              className={classes.arrows}
              style={{ display: "block", marginLeft: "50%" }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={2}>
          <Projects />
        </ParallaxLayer>

        <ParallaxLayer offset={3.2} speed={3}>
          <Experience />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={2.5}>
          <About />
        </ParallaxLayer>

        <ParallaxLayer offset={4.4} speed={2} style={{ pointerEvents: "none" }}>
          <img
            src={photo_for_website}
            alt="profile"
            className="profile-photo"
            style={{ display: "block", marginLeft: "5%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={5} speed={4.5}>
          <Contact />
        </ParallaxLayer>
      </Parallax>

      <IconButton
        className={classes.margin}
        onClick={() => parallax.scrollTo(0)}
      >
        <ArrowUpwardIcon fontSize="large" aria-label="sticky-up" />
      </IconButton>
      {/* </Menu> */}
    </>
  );
}
