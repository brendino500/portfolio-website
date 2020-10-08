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
      fontSize: 25,
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
      fontSize: 13,
    },
  },
}));

function GeneralAssembly() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>General Assembly</Typography>
        <Typography className={classes.subtitle}>
          June 2020 ~ September 2020
        </Typography>
        <Typography className={classes.text}>
          This was a 12 week intense coding course that specifically focuses on
          teaching the knowledge and skills necessary to successfully start a
          new career in tech.
          {<br />}
          {<br />}
          All technologies and soft skills that I have developed during this
          time were selected based on up to date hiring trends.
          {<br />}
          {<br />}I gained skilled working in groups and pairs as well as
          leading projects.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default GeneralAssembly;
