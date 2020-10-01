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
    backgroundColor: "#394651",
    padding: 20,
  },
  title: {
    fontSize: 50,
    fontFamily: "Neuton",
    color: "#d3c9c0",
    letterSpacing: 5,
  },
  subtitle: {
    fontSize: 25,
    fontFamily: "Libre Baskerville",
    color: "#d3c9c0",
    letterSpacing: 2,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    flexGrow: 1,
    fontFamily: "Work Sans",
    color: "#d3c9c0",
    fontSize: 18,
    letterSpacing: 1,
    maxWidth: 600,
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
                Out of the whole of General Assembly, this was, by far, the most
                fun project! I was paried with a crazy French man and we've had
                the most intense coding relationship since. We wanted to create
                an app with geolocation (if the user accepted) could create a
                homepage of the local time and weather. The other pages were
                linked to the current London Tube line services, the TfL Bike
                Points as well as the Air Quality Index in London.
              </Typography>
            </CardContent>
            <Grid container justify="space-between">
              <Grid>
                <IconButton
                  href="https://github.com/brendino500/sei-project-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon fontSize="large" className="github-link" />
                </IconButton>
                <IconButton
                  href="https://weather-bike-tube.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon fontSize="large" className="github-link" />
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
