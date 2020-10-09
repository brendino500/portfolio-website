import React from "react";
import GeneralAssembly from "./GeneralAssembly";
import Freelance from "./Freelance";
import Craft from "./Craft";
import MancUni from "./MancUni";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, GridList } from "@material-ui/core";
// import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontFamily: "Neuton",
    fontSize: 42,
    letterSpacing: 10,
    color: "#d3c9c0",
    textAlign: "center",
    marginBottom: 25,
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

function Experience() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Typography className={classes.title}>EXPERIENCE</Typography>
      <br />
      <GridList cellHeight={500}>
        <GeneralAssembly />
        <Freelance />
        <Craft />
        <MancUni />
      </GridList>
    </Container>
  );
}

export default Experience;
