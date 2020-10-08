import React from "react";
import GeneralAssembly from "./GeneralAssembly";
import Freelance from "./Freelance";
import Craft from "./Craft";
import Department from "./Department";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, GridList } from "@material-ui/core";
import MancUni from "./MancUni";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tiles: {
    margin: 5,
  },
  title: {
    flexGrow: 1,
    fontFamily: "Neuton",
    fontSize: 42,
    letterSpacing: 10,
    color: "#d3c9c0",
    textAlign: "center",
    marginBottom: 25,
  },
  subtitle: {
    fontSize: 25,
    fontFamily: "Libre Baskerville",
    color: "#d3c9c0",
    letterSpacing: 2,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    flexGrow: 1,
    fontFamily: "Work Sans",
    color: "#d3c9c0",
    fontSize: 18,
    letterSpacing: 1,
  },
  grid: {},
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
        {/* <Department /> */}
        <MancUni />
      </GridList>
    </Container>
  );
}

export default Experience;
