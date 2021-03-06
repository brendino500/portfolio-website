import React from "react";

import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, IconButton, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    maxWidth: 1000,
  },
  title: {
    flexGrow: 1,
    fontFamily: "Neuton",
    fontSize: 42,
    letterSpacing: 10,
    color: "#d3c9c0",
    textAlign: "center",
    marginBottom: 25,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 28,
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 30,
    },
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: 35,
    },
  },
  subtitle: {
    fontSize: 25,
    textAlign: "center",
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
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: 24,
    },
  },
  text: {
    flexGrow: 1,
    fontFamily: "Work Sans",
    color: "#d3c9c0",
    fontSize: 20,
    letterSpacing: 2,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 16,
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 18,
    },
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: 18,
    },
  },
  icon: {
    padding: 10,
    color: "#d3c9c0",
  },
  grid: {
    marginTop: "10%",
    [theme.breakpoints.between("xs", "sm")]: {
      marginTop: "20%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      marginTop: "20%",
    },
    [theme.breakpoints.between("md", "lg")]: {
      marginTop: "5%",
    },
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography className={classes.subtitle}>
        <s>STALK ME...</s>
      </Typography>
      <Typography className={classes.title}>CONTACT</Typography>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="flex-start"
        className={classes.grid}
      >
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <IconButton
            href="mailto:brenda.ty@live.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon fontSize="large" className={classes.icon} />
          </IconButton>
          <Typography className={classes.text}>brenda.ty@live.com</Typography>
        </Grid>

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <IconButton
            href="https://github.com/brendino500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon fontSize="large" className={classes.icon} />
          </IconButton>
          <Typography className={classes.text}>
            github.com/brendino500
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <IconButton
            href="https://www.linkedin.com/in/brendaty/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon fontSize="large" className={classes.icon} />
          </IconButton>
          <Typography className={classes.text}>
            linkedin.com/in/brendaty
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
