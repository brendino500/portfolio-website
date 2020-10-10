import React, { useEffect } from "react";
import hoverEffect from "hover-effect";

import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  IconButton,
} from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#394651",
    padding: 20,
    width: 400,
    margin: 8,
  },
  title: {
    fontSize: 50,
    fontFamily: "Neuton",
    color: "#d3c9c0",
    letterSpacing: 5,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 28,
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 36,
    },
  },
  subtitle: {
    fontSize: 25,
    fontFamily: "Libre Baskerville",
    color: "#d3c9c0",
    letterSpacing: 2,
    marginTop: 10,
    marginBottom: 10,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 20,
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 22,
    },
  },
  text: {
    flexGrow: 1,
    fontFamily: "Work Sans",
    color: "#d3c9c0",
    fontSize: 18,
    letterSpacing: 1,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 11,
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 15,
    },
  },
  image: {
    [theme.breakpoints.between("xs", "sm")]: {
      paddingLeft: "-2%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      marginLeft: "7%",
    },
    [theme.breakpoints.between("md", "lg")]: {
      width: 200,
    },
  },
  profileLinks: {
    color: "#d3c9c0",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 20,
    },
  },
}));

function Reactathon() {
  const classes = useStyles();

  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector("#weather-tfl"),
      intensity: 0.3,
      image1: "https://i.ibb.co/6cMwRTD/reactathon-screenshot.png",
      image2: "https://i.ibb.co/K6qvsp0/tfl-bikes.png",
      displacementImage: "https://i.ibb.co/6yGCdRr/4.png",
      speedIn: 1.5,
      speedOut: 1.5,
      imagesRatio: 350 / 400,
    });
  }, []);

  return (
    <Card className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <div>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <CardContent>
              <Typography className={classes.title}>Weather x TfL</Typography>
              <Typography className={classes.subtitle}>
                Paired Project • 48 Hours
              </Typography>
              <Typography className={classes.text}>
                Out of the whole of the General Assembly course, this was, by
                far, the <i>most fun project!</i> I was paired with a crazy
                French man and we've had the most intense coding relationship
                since.
                <br />
                <br />
                We wanted to create an app with geolocation (if the user
                accepted) which would gather the local weather and time for
                their current location. The other pages were linked to the
                current London Tube line services, the TfL Bike Points as well
                as the Air Quality Index in London.
              </Typography>
            </CardContent>
            <Grid container justify="space-between">
              <Grid>
                <IconButton
                  href="https://github.com/brendino500/sei-project-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.icons}
                >
                  <GitHubIcon
                    fontSize="large"
                    className={("github-link", classes.profileLinks)}
                  />
                </IconButton>
                <IconButton
                  href="https://weather-bike-tube.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon
                    fontSize="large"
                    className={("github-link", classes.profileLinks)}
                  />
                </IconButton>
              </Grid>
              <Grid>
                <i className="devicon-javascript-plain project-icon"></i>
                <i className="devicon-html5-plain project-icon"></i>
                <i className="devicon-css3-plain project-icon"></i>
                <i className="devicon-sass-original project-icon"></i>
                <i className="devicon-npm-original-wordmark project-icon"></i>
                <i className="devicon-react-original project-icon"></i>
                <i className="devicon-nodejs-plain project-icon"></i>
              </Grid>
            </Grid>
          </Grid>
        </div>

        <a
          href="https://weather-bike-tube.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div id="weather-tfl"></div>
        </a>
      </Grid>
    </Card>
  );
}

export default Reactathon;
