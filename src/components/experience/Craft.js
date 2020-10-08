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
    display: "flex",
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
      fontSize: 15,
    },
  },
}));

function Craft() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>Craft London</Typography>
        <Typography className={classes.subtitle}>
          June 2018 ~ May 2020
        </Typography>
        <Typography className={classes.text}>
          Selecting seasonal green beans from different suppliers by cupping
          samples and holding cuppings with the cafe team. I roasted single
          origin espresso and filter for the cafe and two sister restaurants.
          {<br />}
          {<br />}I also QC each roast by production cupping to develop and
          analyse the roasts further.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Craft;
