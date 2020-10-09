import React from "react";
import ColorTheme from "../ColorTheme";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, ThemeProvider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: "Neuton",
    fontSize: "42px",
    letterSpacing: "10px",
    color: "#d3c9c0",
    textAlign: "center",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 30,
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 38,
    },
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: 40,
    },
  },
}));

function Skills() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={ColorTheme}>
      <Container className={classes.root}>
        <Typography varient="h1" className={classes.title}>
          SKILLS
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default Skills;
