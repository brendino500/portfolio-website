import React from "react";

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
    minWidth: 300,
    maxWidth: 800,
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
  },
}));

function APPerture() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>Nalu</Typography>
        <Typography className={classes.subtitle}>
          Group Project • 7 Days
        </Typography>
        <Typography className={classes.text}>
          'Nalu' is a social website for the surfing community. Users can add a
          surf location, rate and comment on other users surf locations. For
          each surf location, we pulled from two weather APIs- one for the local
          weather and one for the marine weather.
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
          <IconButton href="#" target="_blank" rel="noopener noreferrer">
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
    </Card>
  );
}

export default APPerture;
