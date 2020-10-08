import React from "react";

import { Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#394651",
    // width: 500,
    // height: 450,
    padding: 30,
    margin: 8,
  },
  title: {
    fontSize: 35,
    fontFamily: "Neuton",
    color: "#d3c9c0",
    letterSpacing: 5,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "Libre Baskerville",
    color: "#d3c9c0",
    letterSpacing: 2,
    marginTop: 10,
    marginBottom: 20,
  },
  text: {
    flexGrow: 1,
    fontFamily: "Work Sans",
    color: "#d3c9c0",
    fontSize: 18,
    letterSpacing: 1,
  },
}));

function Department() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>
          Department of Coffee & Social Affairs
        </Typography>
        <Typography className={classes.subtitle}>
          February 2014 ~ June 2017
        </Typography>
        <Typography className={classes.text}>
          I was the company Barista Trainer and organised and held training
          sessions. The most fun events I organised for the company were Latte
          Art Smackdowns (honestly, really intense competitions!) where baristas
          from different sites would go head to head.
          {<br />}
          {<br />}I was also part of the operations where we built new sites and
          brand new teams.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Department;
