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
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 45,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 45,
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
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 25,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 25,
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
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 18,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 18,
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
    [theme.breakpoints.up("xl")]: {},
  },
  profileLinks: {
    color: "#d3c9c0",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 20,
    },
  },
}));

function Tetris() {
  const classes = useStyles();

  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector("#tetris"),
      intensity: 0.3,
      image1: "https://i.ibb.co/LZcsFxy/tetris2.png",
      image2: "https://i.ibb.co/sHP8ZrB/tetris1.png",
      displacementImage: "https://i.ibb.co/8YhT8P9/6.jpg",
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
              <Typography className={classes.title}>Tetris</Typography>
              <Typography className={classes.subtitle}>
                Solo Project • 7 Days
              </Typography>
              <Typography className={classes.text}>
                This is my first ever deployed project using only HTML, CSS and
                JavaScript. This was built in a week. I'm pretty sure it's not
                buggy (...lol) and the music is worth a listen!
              </Typography>
              <br />
              <Typography className={classes.text}>
                As Tetris is such a well known game, I wanted to recreate as
                much of the original game functionalities as possible. I wanted
                to implement a mini grid to see the next tetromino (yes, the
                shapes are called tetrominos!), the 'fast down' movement and the
                original SEGA scoring system.
              </Typography>
            </CardContent>
            <Grid container justify="space-between">
              <Grid>
                <IconButton
                  href="https://github.com/brendino500/sei-project-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon
                    className={("github-link", classes.profileLinks)}
                    fontSize="large"
                  />
                </IconButton>
                <IconButton
                  href="https://brendino500.github.io/sei-project-1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon
                    className={("github-link", classes.profileLinks)}
                    fontSize="large"
                  />
                </IconButton>
              </Grid>
              <Grid>
                <i className="devicon-javascript-plain project-icon"></i>
                <i className="devicon-html5-plain project-icon"></i>
                <i className="devicon-css3-plain project-icon"></i>
              </Grid>
            </Grid>
          </Grid>
        </div>

        <a
          href="https://brendino500.github.io/sei-project-1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div id="tetris"></div>
        </a>
      </Grid>
    </Card>
  );
}

export default Tetris;
