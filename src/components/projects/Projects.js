import React from "react";
import Tetris from "./Tetris";
import APPerture from "./APPerture";
import Nalu from "./Nalu";
import Reactathon from "./Reactathon";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, GridList, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tiles: {
    margin: 5,
  },
  box: {
    display: "flex",
    direction: "row",
    alignContent: "space around",
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
}));

function Projects() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Box>
        <Typography className={classes.title}>PROJECTS</Typography>
        <br />
        <GridList>
          <APPerture />
          <Nalu />
          <Reactathon />
          <Tetris />
        </GridList>
      </Box>
    </Container>
  );
}

export default Projects;
