import React, { useEffect } from "react";
import hoverEffect from "hover-effect";

import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  IconButton,
} from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#394651",
    padding: 20,
    width: 400,
    margin: 8,
  },
  title: {
    fontSize: 50,
    fontFamily: "Neuton",
    color: "#d3c9c0",
    letterSpacing: 5,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 28,
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 36,
    },
  },
  subtitle: {
    fontSize: 25,
    fontFamily: "Libre Baskerville",
    color: "#d3c9c0",
    letterSpacing: 2,
    marginTop: 10,
    marginBottom: 10,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 20,
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 22,
    },
  },
  text: {
    flexGrow: 1,
    fontFamily: "Work Sans",
    color: "#d3c9c0",
    fontSize: 18,
    letterSpacing: 1,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 11,
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 15,
    },
  },
  image: {
    [theme.breakpoints.between("xs", "sm")]: {
      paddingLeft: "-6%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      marginLeft: "7%",
    },
    [theme.breakpoints.between("md", "lg")]: {
      width: 200,
    },
  },
  profileLinks: {
    color: "#d3c9c0",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 20,
    },
  },
}));

function Nalu() {
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
      imagesRatio: 350 / 400,
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
        <div>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <CardContent>
              <Typography className={classes.title}>Nalu</Typography>
              <Typography className={classes.subtitle}>
                Group Project • 7 Days
              </Typography>
              <Typography className={classes.text}>
                'Nalu' is a <i>social website</i> for the surfing community.
                Users can add a surf location as well as rate and comment on
                other users surf locations. For each surf spot, we{" "}
                <i>pulled from two weather APIs</i>- one for the local weather
                and one for the marine weather.
                <br />
                <br />
                This was the first project{" "}
                <i>
                  collaborating with three other developers and simultaneously
                  using Git.{" "}
                </i>
                It was also a{" "}
                <i>HUGE learning curve debugging other developers code.</i> That
                was incredibly difficult at first, but it was the best lesson I
                took from the whole project.
              </Typography>
            </CardContent>
            <Grid container justify="space-between">
              <Grid>
                <IconButton
                  href="https://github.com/Zarathustrah/SEI-Project-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon
                    className={("github-link", classes.profileLinks)}
                    fontSize="large"
                  />
                </IconButton>
                <IconButton
                  href="https://naluwave.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon
                    className={("github-link", classes.profileLinks)}
                    fontSize="large"
                  />
                </IconButton>
              </Grid>
              <Grid>
                <i className="devicon-javascript-plain project-icon"></i>
                <i className="devicon-html5-plain project-icon"></i>
                <i className="devicon-css3-plain project-icon"></i>
                <i className="devicon-sass-original project-icon"></i>
                <i className="devicon-mongodb-plain-wordmark project-icon"></i>
                <i className="devicon-express-original project-icon"></i>
                <i className="devicon-npm-original-wordmark project-icon"></i>
                <i className="devicon-react-original project-icon"></i>
                <i className="devicon-nodejs-plain project-icon"></i>
              </Grid>
            </Grid>
          </Grid>
        </div>

        <a
          href="https://naluwave.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div id="nalu"></div>
        </a>
      </Grid>
    </Card>
  );
}

export default Nalu;
