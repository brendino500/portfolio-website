import React, { useEffect } from "react";
import materialUI from "../assets/materialUI.png";
import hoverEffect from "hover-effect";

import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  IconButton,
  CardMedia,
} from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    // minWidth: 300,
    // maxWidth: 800,
    backgroundColor: "#394651",
    padding: 20,
  },
  title: {
    fontSize: 50,
    fontFamily: "Neuton",
    color: "#d3c9c0",
    letterSpacing: 5,
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
  content: {
    flex: "1 0 auto",
  },
}));

function APPerture() {
  const classes = useStyles();

  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector("#nalu"),
      intensity: 0.3,
      image1: "https://i.ibb.co/ccfsnPW/nalu-screenshot.png",
      image2: "https://i.ibb.co/y0fgrmk/Screenshot-2020-09-28-at-14-20-21.png",
      displacementImage: "https://i.ibb.co/306vvr1/7.jpg",
      speedIn: 1.5,
      speedOut: 1.5,
    });
  }, []);

  return (
    <Card className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <CardContent>
          <Typography className={classes.title}>Nalu</Typography>
        </CardContent>
        <div id="nalu"></div>
      </Grid>
    </Card>
  );
}

export default APPerture;
