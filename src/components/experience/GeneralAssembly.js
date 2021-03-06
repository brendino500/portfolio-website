import React from "react";

import { Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#394651",
    width: 400,
    padding: 30,
    margin: 8,
    [theme.breakpoints.between("sm", "md")]: {
      width: 250,
    },
    [theme.breakpoints.between("md", "lg")]: {
      width: 400,
    },
  },
  title: {
    fontSize: 35,
    fontFamily: "Neuton",
    color: "#d3c9c0",
    letterSpacing: 5,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 25,
      marginTop: 0,
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 25,
    },
    [theme.breakpoints.between("md", "lg")]: {
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
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 16,
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 16,
    },
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: 18,
    },
  },
  text: {
    flexGrow: 1,
    fontFamily: "Work Sans",
    color: "#d3c9c0",
    fontSize: 18,
    letterSpacing: 1,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 12,
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 15,
    },
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: 15,
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
          This was a 12-week intense coding course that recreated many aspects
          of a developers{" "}
          <i>
            typical daily routine including morning stand ups, pair programming
            and accountability for self-managed deadlines.
          </i>
          {<br />}
          {<br />}
          The skills that I have learnt through four main projects include:{" "}
          <i>
            planning and wireframes, leading projects, time management and self
            study.
          </i>
          {<br />}
          {<br />}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default GeneralAssembly;
