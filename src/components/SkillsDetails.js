import React from "react";
import ColorTheme from "../ColorTheme";
import materialUI from "../assets/materialUI.png";
import jest_icon from "../assets/jest_icon.png";

import {
  Container,
  ThemeProvider,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#394651",
    margin: 10,
    [theme.breakpoints.between("xs", "sm")]: {
      margin: 5,
    },
    [theme.breakpoints.between("md", "lg")]: {
      margin: 10,
      maxWidth: 600,
      marginTop: 30,
    },
  },
  grid: {
    [theme.breakpoints.between("md", "lg")]: {
      direction: "column",
      justify: "center",
      alignItems: "center",
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
      textAlign: "center",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 18,
      textAlign: "center",
      letterSpacing: 2,
    },
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: 22,
      textAlign: "center",
      letterSpacing: 4,
      marginBottom: 20,
    },
  },
  text: {
    flexGrow: 1,
    fontFamily: "Work Sans",
    color: "#d3c9c0",
    fontSize: 18,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 11,
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 15,
    },
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: 12,
      letterSpacing: 2,
    },
  },
  iconAndText: {
    display: "flex",
    alignItems: "center",
    padding: 5,
  },
  icons: {
    color: "#d3c9c0",
    fontSize: 30,
    textAlign: "center",
  },
}));

function SkillsDetails() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={ColorTheme}>
      <Container maxWidth="sm">
        <Grid
          container
          // direction="row"
          // justify="space-evenly"
          // alignItems="center"
          className={classes.grid}
        >
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.subtitle}>CONFIDENT</Typography>
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >
                <Grid className={classes.iconAndText}>
                  <i className="devicon-javascript-plain skills-details-icon">
                    <Typography className={classes.text}>JavaScript</Typography>
                  </i>
                </Grid>
                <Grid className={classes.iconAndText}>
                  <i className="devicon-html5-plain skills-details-icon">
                    <Typography className={classes.text}>HTML</Typography>
                  </i>
                </Grid>
                <Grid className={classes.iconAndText}>
                  <i className="devicon-css3-plain skills-details-icon">
                    <Typography className={classes.text}>CSS</Typography>
                  </i>
                </Grid>
                <Grid className={classes.iconAndText}>
                  <i className="devicon-sass-original skills-details-icon">
                    <Typography className={classes.text}>SASS</Typography>
                  </i>
                </Grid>
                <Grid className={classes.iconAndText}>
                  <i className="devicon-react-original skills-details-icon">
                    <Typography className={classes.text}>React.js</Typography>
                  </i>
                </Grid>
                <Grid className={classes.iconAndText}>
                  <i className="devicon-nodejs-plain skills-details-icon">
                    <Typography className={classes.text}>Node.js</Typography>
                  </i>
                </Grid>
                <Grid className={classes.iconAndText}>
                  <div className="materialIconsSkills">
                    <img
                      src={materialUI}
                      alt="materialui"
                      className="materialIconSkillsDetails  material-skills"
                    />
                    <Typography className={classes.text}>
                      Material UI
                    </Typography>
                  </div>
                </Grid>
                <Grid className={classes.iconAndText}>
                  <i className="devicon-git-plain skills-details-icon">
                    <Typography className={classes.text}>Git</Typography>
                  </i>
                </Grid>
                <Grid className={classes.iconAndText}>
                  <i className="devicon-github-plain skills-details-icon">
                    <Typography className={classes.text}>GitHub</Typography>
                  </i>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.subtitle}>FAMILIAR</Typography>
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >
                <Grid className={classes.iconAndText}>
                  <i className="devicon-mongodb-plain skills-details-icon">
                    <Typography className={classes.text}>MongoDB</Typography>
                  </i>
                </Grid>
                <Grid className={classes.iconAndText}>
                  <i className="devicon-express-original skills-details-icon">
                    <Typography className={classes.text}>Express</Typography>
                  </i>
                </Grid>
                <Grid className={classes.iconAndText}>
                  <i className="devicon-typescript-plain skills-details-icon">
                    <Typography className={classes.text}>TypeScript</Typography>
                  </i>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.subtitle}>BEGINNER</Typography>
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >
                <Grid className={classes.iconAndText}>
                  <i className="devicon-java-plain skills-details-icon">
                    <Typography className={classes.text}>Java</Typography>
                  </i>
                </Grid>
                <Grid className={classes.iconAndText}>
                  <i className="devicon-python-plain skills-details-icon">
                    <Typography className={classes.text}>Python</Typography>
                  </i>
                </Grid>
                <Grid className={classes.iconAndText}>
                  <i className="devicon-django-plain skills-details-icon">
                    <Typography className={classes.text}>Django</Typography>
                  </i>
                </Grid>
                <Grid className={classes.iconAndText}>
                  <i className="devicon-postgresql-plain skills-details-icon">
                    <Typography className={classes.text}>PostgreSQL</Typography>
                  </i>
                </Grid>
                <Grid className={classes.iconAndText}>
                  <div className="materialIconsSkills">
                    <img
                      src={jest_icon}
                      alt="jestIcon"
                      className="materialIconSkillsDetails"
                    />
                    <Typography className={classes.text}>Jest</Typography>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default SkillsDetails;
