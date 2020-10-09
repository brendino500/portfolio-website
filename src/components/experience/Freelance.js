import React from "react";

import { Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#394651",
    width: 400,
    // height: 450,
    padding: 30,
    margin: 8,
  },
  title: {
    fontSize: 35,
    fontFamily: "Neuton",
    color: "#d3c9c0",
    letterSpacing: 5,
    [theme.breakpoints.down("md")]: {
      fontSize: 30,
    },
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "Libre Baskerville",
    color: "#d3c9c0",
    letterSpacing: 2,
    marginTop: 10,
    marginBottom: 20,
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
    [theme.breakpoints.down("md")]: {
      fontSize: 15,
    },
  },
  smallerText: {
    flexGrow: 1,
    fontFamily: "Libre Baskerville",
    color: "#d3c9c0",
    fontSize: 15,
    letterSpacing: 1,
    [theme.breakpoints.down("md")]: {
      fontSize: 10,
    },
  },
}));

function Freelance() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>
          Freelance Photographer
        </Typography>
        <Typography className={classes.subtitle}>
          July 2016 ~ February 2020
        </Typography>
        <Typography className={classes.text}>
          I am <i>completely self taught</i> in photography. My interest began
          when I was 16 because I was jealous of the photography A level class
          developing their own photos in the schools lightroom.
          {<br />}
          {<br />}
          I've been <i>published in the Telegraph and Caffeine Magazine</i>{" "}
          multiple times. I focus on digital photography (but my heart lies in
          analogue). I have been{" "}
          <i>commissioned by companies and individuals, </i>
          mainly shooting portraiture and taking photos for coffee shops social
          media.
          {<br />}
          {<br />}
          My past clients include Kaffeine, Rosslyn, The Attendant, V69 Coffee,
          Midas Coffee and The Roasting Party.
          {<br />}
          {<br />}
        </Typography>
        <Typography className={classes.smallerText}>
          Digital: Fuji XT-1, Fuji 35mm f1.4
          {<br />}
          Analogue: Canon AV-1, Canon 50mm f1.2
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Freelance;
