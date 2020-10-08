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
    [theme.breakpoints.down("md")]: {
      fontSize: 30,
    },
  },
  subtitle: {
    fontSize: 25,
    fontFamily: "Libre Baskerville",
    color: "#d3c9c0",
    letterSpacing: 2,
    marginTop: 10,
    marginBottom: 10,
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
    },
  },
  text: {
    flexGrow: 1,
    fontFamily: "Work Sans",
    color: "#d3c9c0",
    fontSize: 18,
    letterSpacing: 1,
    // maxWidth: 600,
    [theme.breakpoints.down("md")]: {
      fontSize: 15,
    },
  },
}));

function Nalu() {
  const classes = useStyles();

  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector("#nalu"),
      intensity: 0.3,
      image1: "https://i.ibb.co/ccfsnPW/nalu-screenshot.png",
      image2: "https://i.ibb.co/y0fgrmk/Screenshot-2020-09-28-at-14-20-21.png",
      displacementImage: "https://i.ibb.co/306vvr1/7.jpg",
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
              <Typography className={classes.title}>Nalu</Typography>
              <Typography className={classes.subtitle}>
                Group Project • 7 Days
              </Typography>
              <Typography className={classes.text}>
                'Nalu' is a social website for the surfing community. Users can
                add a surf location as well as rate and comment on other users
                surf locations. For each surf spot, we pulled from two weather
                APIs- one for the local weather and one for the marine weather.
              </Typography>
            </CardContent>
            <Grid container justify="space-between">
              <Grid>
                <IconButton
                  href="https://github.com/Zarathustrah/SEI-Project-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className="github-link" fontSize="large" />
                </IconButton>
                <IconButton
                  href="https://naluwave.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon className="github-link" fontSize="large" />
                </IconButton>
              </Grid>
              <Grid>
                <i className="devicon-javascript-plain project-icon"></i>
                <i className="devicon-html5-plain project-icon"></i>
                <i className="devicon-css3-plain project-icon"></i>
                <i className="devicon-sass-original project-icon"></i>
                <i className="devicon-mongodb-plain-wordmark project-icon"></i>
                <i className="devicon-express-original project-icon"></i>
                <i className="devicon-npm-original-wordmark project-icon"></i>
                <i className="devicon-react-original project-icon"></i>
                <i className="devicon-nodejs-plain project-icon"></i>
              </Grid>
            </Grid>
          </Grid>
        </div>

        {/* <Grid container direction="row" justify="center" alignItems="center"> */}
        <a
          href="https://naluwave.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div id="nalu"></div>
        </a>

        {/* </Grid> */}
      </Grid>
    </Card>
  );
}

export default Nalu;
