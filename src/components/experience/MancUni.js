import React from "react";

import { Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#394651",
    width: 500,
    height: 450,
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

function MancUni() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>
          Manchester University. MusB
        </Typography>
        <Typography className={classes.subtitle}>2010 ~ 2013</Typography>
        <Typography className={classes.text}>
          In my three years studying at Manchester University, I specialised in
          classical piano performance. Throughout the year I would play in
          various solo and ensemble performances.
          {<br />}
          {<br />}
          As well as performance I studied harmony, ethnomusicology, aesthetics
          and music and politics in the 19th century.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MancUni;
