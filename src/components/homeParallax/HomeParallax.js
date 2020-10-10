import React, { useState } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

import About from "../About";
import HomeInfo from "../HomeInfo";
import Skills from "../Skills";
import Projects from "../projects/Projects";
import Experience from "../experience/Experience";
import Contact from "../Contact";
import Footer from "../Footer";
import photo_for_website from "../../assets/photo_for_website.jpg";
import materialUI from "../../assets/materialUI.png";
import jest_icon from "../../assets/jest_icon.png";
import AOS from "aos";
import "aos/dist/aos.css";

import { makeStyles } from "@material-ui/core/styles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import {
  IconButton,
  Button,
  Hidden,
  Toolbar,
  AppBar,
  Menu,
  MenuItem,
} from "@material-ui/core";

let parallax = null;

AOS.init();

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
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
    fontSize: 14,
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
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  mobileMenu: {
    Paper: {
      backgroundColor: "#d3c9c0",
    },
  },
  burgerIcon: {
    color: "#d3c9c0",
  },
  footer: {
    fontfamily: "Libre Baskerville",
    color: "#d3c9c0",
    fontSize: 15,
    marginLeft: "20%",
  },
  arrowsAfterAbout: {
    [theme.breakpoints.between("xs", "sm")]: {
      marginTop: "80%",
    },
    [theme.breakpoints.between("md", "lg")]: {
      marginTop: "20%",
    },
  },
  profilePhoto: {
    [theme.breakpoints.between("xs", "sm")]: {
      marginTop: 1000,
      paddingLeft: 50,
    },
    [theme.breakpoints.between("sm", "md")]: {
      marginTop: "45%",
      width: 175,
      paddingLeft: "30%",
    },
    [theme.breakpoints.between("md", "lg")]: {
      width: 175,
      paddingLeft: "1%",
      marginTop: "-1%",
    },
  },
  projectLayer: {
    [theme.breakpoints.between("xs", "sm")]: {
      marginTop: -300,
    },
  },
  experienceLayer: {
    [theme.breakpoints.between("xs", "sm")]: {
      marginTop: 700,
    },
  },
  aboutLayer: {
    [theme.breakpoints.between("xs", "sm")]: {
      marginTop: 400,
    },
  },
}));

export default function HomeParallax() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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
    ></Menu>
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
      <MenuItem>
        <p
          className={classes.button}
          onClick={() => {
            handleMobileMenuClose();
            parallax.scrollTo(2);
          }}
        >
          PROJECTS
        </p>
      </MenuItem>
      <MenuItem>
        <p
          className={classes.button}
          onClick={() => {
            handleMobileMenuClose();
            parallax.scrollTo(3);
          }}
        >
          EXPERIENCE
        </p>
      </MenuItem>
      <MenuItem>
        <p
          className={classes.button}
          onClick={() => {
            handleMobileMenuClose();
            parallax.scrollTo(4);
          }}
        >
          ABOUT
        </p>
      </MenuItem>
      <MenuItem>
        <p
          className={classes.button}
          onClick={() => {
            handleMobileMenuClose();
            parallax.scrollTo(5);
          }}
        >
          STALK
        </p>
      </MenuItem>
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
          <Toolbar>
            <span
              className={classes.title}
              onClick={() => parallax.scrollTo(0)}
            >
              BRENDA TY
            </span>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
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
            </div>

            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon className={classes.burgerIcon} />
              </IconButton>
            </div>
          </Toolbar>
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
            className="devicon-sass-original skills-icons"
            style={{ display: "block", marginLeft: "35%" }}
          ></i>
          <i
            className="devicon-javascript-plain skills-icons"
            style={{ display: "block", marginLeft: "55%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.3}
          speed={2.4}
          style={{ pointerEvents: "none" }}
        >
          <i
            className="devicon-react-original skills-icons"
            style={{ display: "block", marginLeft: "65%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={2} style={{ pointerEvents: "none" }}>
          <i
            className="devicon-html5-plain skills-icons"
            style={{ display: "block", marginLeft: "15%" }}
          ></i>
          <i
            className="devicon-mongodb-plain skills-icons"
            style={{ display: "block", marginLeft: "65%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.1}
          speed={2.5}
          style={{ pointerEvents: "none" }}
        >
          <i
            className="devicon-git-plain skills-icons"
            style={{ display: "block", marginLeft: "45%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={3} style={{ pointerEvents: "none" }}>
          <i
            className="devicon-github-plain skills-icons"
            style={{ display: "block", marginLeft: "45%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.3}
          speed={3.5}
          style={{ pointerEvents: "none" }}
        >
          <i
            className="devicon-python-plain skills-icons"
            style={{ display: "block", marginLeft: "75%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer offset={1.7} speed={8} style={{ pointerEvents: "none" }}>
          <img
            src={materialUI}
            alt="materialui"
            style={{ display: "block", marginLeft: "3%" }}
            className="materialui skills-icons"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.2} speed={2} style={{ pointerEvents: "none" }}>
          <img
            src={jest_icon}
            alt="jestIcon"
            style={{ display: "block", marginLeft: "3%" }}
            className="jestIcon skills-icons"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.8}
          speed={2.2}
          style={{ pointerEvents: "none" }}
        >
          <i
            className="devicon-django-plain skills-icons"
            style={{ display: "block", marginLeft: "90%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.2}
          speed={2.8}
          style={{ pointerEvents: "none" }}
        >
          <i
            className="devicon-css3-plain skills-icons"
            style={{ display: "block", marginLeft: "10%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1} style={{ pointerEvents: "none" }}>
          <i
            className="devicon-intellij-plain skills-icons"
            style={{ display: "block", marginLeft: "10%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={3} style={{ pointerEvents: "none" }}>
          <i
            className="devicon-trello-plain skills-icons"
            style={{ display: "block", marginLeft: "80%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.2}
          speed={1.2}
          style={{ pointerEvents: "none" }}
        >
          <i
            className="devicon-java-plain skills-icons"
            style={{ display: "block", marginLeft: "80%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.1}
          speed={1.6}
          style={{ pointerEvents: "none" }}
        >
          <i
            className="devicon-nodejs-plain skills-icons"
            style={{ display: "block", marginLeft: "60%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.4}
          speed={1.6}
          style={{ pointerEvents: "none" }}
        >
          <i
            className="devicon-postgresql-plain skills-icons"
            style={{ display: "block", marginLeft: "30%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.7}
          speed={1.7}
          style={{ pointerEvents: "none" }}
        >
          <i
            className="devicon-slack-plain skills-icons"
            style={{ display: "block", marginLeft: "20%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.2}
          speed={2.6}
          style={{ pointerEvents: "none" }}
        >
          <i
            className="devicon-visualstudio-plain skills-icons"
            style={{ display: "block", marginLeft: "90%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={7} style={{ pointerEvents: "none" }}>
          <i
            className="devicon-typescript-plain skills-icons"
            style={{ display: "block", marginLeft: "34%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer offset={1.2} speed={5} style={{ pointerEvents: "none" }}>
          <i
            className="devicon-npm-original-wordmark skills-icons"
            style={{ display: "block", marginLeft: "22%" }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.7}
          speed={6.5}
          style={{ pointerEvents: "none" }}
        >
          <i
            className="devicon-express-original skills-icons"
            style={{ display: "block", marginLeft: "57%" }}
          ></i>
        </ParallaxLayer>

        <div data-aos="fade-down"></div>

        <ParallaxLayer offset={1.99} speed={1}>
          <div data-aos="fade-down">
            <KeyboardArrowDownIcon
              className={classes.arrows}
              onClick={() => parallax.scrollTo(2)}
              style={{ display: "block", marginLeft: "50%" }}
            />

            <br />
            <KeyboardArrowDownIcon
              className={classes.arrows}
              onClick={() => parallax.scrollTo(2)}
              style={{ display: "block", marginLeft: "50%" }}
            />
            <br />
            <KeyboardArrowDownIcon
              className={classes.arrows}
              onClick={() => parallax.scrollTo(2)}
              style={{ display: "block", marginLeft: "50%" }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={2} className={classes.projectLayer}>
          <Projects />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.15}
          speed={4}
          className={classes.experienceLayer}
        >
          <Experience />
        </ParallaxLayer>

        <Hidden smDown>
          <ParallaxLayer offset={3.99} speed={1}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div data-aos="fade-down">
              <KeyboardArrowDownIcon
                className={classes.arrows}
                onClick={() => parallax.scrollTo(4)}
                style={{ display: "block", marginLeft: "50%" }}
              />

              <br />
              <KeyboardArrowDownIcon
                className={classes.arrows}
                onClick={() => parallax.scrollTo(4)}
                style={{ display: "block", marginLeft: "50%" }}
              />
              <br />
              <KeyboardArrowDownIcon
                className={classes.arrows}
                onClick={() => parallax.scrollTo(4)}
                style={{ display: "block", marginLeft: "50%" }}
              />
            </div>
          </ParallaxLayer>
        </Hidden>

        <ParallaxLayer offset={4} speed={2.5} className={classes.aboutLayer}>
          <About />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.45}
          speed={2}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={photo_for_website}
            alt="profile"
            className={("profile-photo", classes.profilePhoto)}
            style={{ display: "block", marginLeft: "5%" }}
          />
        </ParallaxLayer>

        <Hidden smDown>
          <ParallaxLayer
            offset={4.99}
            speed={1}
            className={classes.arrowsAfterAbout}
          >
            <div data-aos="fade-down">
              <KeyboardArrowDownIcon
                className={classes.arrows}
                onClick={() => parallax.scrollTo(5)}
                style={{ display: "block", marginLeft: "50%" }}
              />

              <br />
              <KeyboardArrowDownIcon
                className={classes.arrows}
                onClick={() => parallax.scrollTo(5)}
                style={{ display: "block", marginLeft: "50%" }}
              />
              <br />
              <KeyboardArrowDownIcon
                className={classes.arrows}
                onClick={() => parallax.scrollTo(5)}
                style={{ display: "block", marginLeft: "50%" }}
              />
            </div>
          </ParallaxLayer>
        </Hidden>

        <ParallaxLayer offset={5} speed={4.5}>
          <Contact />
        </ParallaxLayer>

        <ParallaxLayer offset={5.8} speed={3}>
          <Footer />
        </ParallaxLayer>
      </Parallax>

      <IconButton
        className={classes.margin}
        onClick={() => parallax.scrollTo(0)}
      >
        <ArrowUpwardIcon fontSize="large" aria-label="sticky-up" />
      </IconButton>
    </>
  );
}
