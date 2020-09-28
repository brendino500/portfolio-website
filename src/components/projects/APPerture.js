import React, { useEffect } from "react";
import materialUI from "../../assets/materialUI.png";
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

function APPerture() {
  const classes = useStyles();

  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector("#apperture-project"),
      intensity: 0.3,
      image1: "https://i.ibb.co/mvYsY2Y/apperture-home.png",
      image2: "https://i.ibb.co/SJrrDH5/apperture-screenshot1.png",
      displacementImage: "https://i.ibb.co/jGFsy1r/8.jpg",
      speedIn: 1.5,
      speedOut: 1.5,
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
              <Typography className={classes.title}>APPerture</Typography>
              <Typography className={classes.subtitle}>
                Paired Project • 7 Days
              </Typography>
              <Typography className={classes.text}>
                Instagram x Unsplash
              </Typography>
              <Typography className={classes.text}>
                For this project, we really wanted to push ourselves with
                Material UI (we really had to prove our styling was better than
                in our Reactathon project... lol!) and learning Material UI was
                such a rewarding experience. We also implemented some sexy
                parallax.
              </Typography>
              <br />
              <Typography className={classes.text}>
                We made our own Python Django API using REST Framework and
                Postgres Database. Users can register, sign in, create a
                profile, follow other users and upload their own photos.
              </Typography>
            </CardContent>
            <Grid container justify="space-between">
              <Grid>
                <IconButton
                  href="https://github.com/brendino500/APPerture"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className="github-link" fontSize="large" />
                </IconButton>
                <IconButton href="#" target="_blank" rel="noopener noreferrer">
                  <LinkIcon className="github-link" fontSize="large" />
                </IconButton>
              </Grid>
              <Grid>
                <i className="devicon-javascript-plain project-icon"></i>
                <i className="devicon-html5-plain project-icon"></i>
                <i className="devicon-css3-plain project-icon"></i>
                <i className="devicon-sass-original project-icon"></i>
                <i className="devicon-python-plain project-icon"></i>
                <i className="devicon-django-plain project-icon"></i>
                <i className="devicon-postgresql-plain project-icon"></i>
                <i className="devicon-npm-original-wordmark project-icon"></i>
                <i className="devicon-react-original project-icon"></i>
                <i className="devicon-nodejs-plain project-icon"></i>
                <img
                  src={materialUI}
                  alt="materialui"
                  className="materialIcon"
                />
              </Grid>
            </Grid>
          </Grid>
        </div>

        <div id="apperture-project"></div>
      </Grid>
    </Card>
  );
}

export default APPerture;
