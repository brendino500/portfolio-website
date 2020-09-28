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

function Tetris() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>Tetris</Typography>
        <Typography className={classes.subtitle}>
          Solo Project • 7 Days
        </Typography>
        <Typography className={classes.text}>
          This is my first ever deployed project using only HTML, CSS and
          JavaScript. This was built in a week. I'm pretty sure it's not buggy
          (...lol) and the music is worth a listen!
        </Typography>
        <br />
        <Typography className={classes.text}>
          As Tetris is such a well known game, I wanted to recreate as much of
          the original game functionalities as possible. I wanted to implement a
          mini grid to see the next tetromino (yes, the shapes are called
          tetrominos!), the 'fast down' movement and the original SEGA scoring system.
        </Typography>
      </CardContent>
      <Grid container justify="space-between">
        <Grid>
          <IconButton
            href="https://github.com/brendino500/sei-project-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="github-link" fontSize="large" />
          </IconButton>
          <IconButton
            href="https://brendino500.github.io/sei-project-1/"
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
        </Grid>
      </Grid>
    </Card>
  );
}

export default Tetris;
