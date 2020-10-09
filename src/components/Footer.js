import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    fontFamily: "Neuton",
    color: "#d3c9c0",
    fontSize: 15,
    marginLeft: "20%",
    letterSpacing: 2,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 10,
      marginLeft: "10%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 10,
      marginLeft: "5%",
    },
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: 15,
      marginLeft: "12%",
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Typography className={classes.footer}>
      I made this website all by myself using: React-Spring, Robin Dela's Hover
      Effect, React Hooks and Material UI.
    </Typography>
  );
}

export default Footer;
