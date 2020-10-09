import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: "Neuton",
    color: "#d3c9c0",
    fontSize: 45,
    letterSpacing: 2,
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
  },
}));

function HomeInfo() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Typography className={classes.title}>Hey, I'm Brenda.</Typography>
      <br />
      <Typography className={classes.title}>
        Frontend developer • Plant hoarder
      </Typography>
    </Container>
  );
}

export default HomeInfo;
