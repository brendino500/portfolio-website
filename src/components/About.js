import React from 'react'
import ColorTheme from '../ColorTheme'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, ThemeProvider, Container, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  container: {
    maxWidth: 1000
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Neuton',
    fontSize: '42px',
    letterSpacing: '10px',
    color: '#d3c9c0',
    textAlign: 'center',
    marginBottom: 25
  },
  subtitle: {
    fontSize: 25,
    fontFamily: 'Libre Baskerville',
    color: '#d3c9c0',
    letterSpacing: 2,
    marginTop: 10,
    marginBottom:10
  },
  text: {
    flexGrow: 1,
    fontFamily: 'Work Sans',
    color: '#d3c9c0',
    fontSize: 20,
    letterSpacing: 2
  },
  listTitle: {
    flexGrow: 1,
    fontFamily: 'Libre Baskerville',
    color: '#d3c9c0',
    fontSize: 20,
    letterSpacing: 2,
    marginLeft: '20%'
  },
  list: {
    flexGrow: 1,
    fontFamily: 'Work Sans',
    color: '#d3c9c0',
    fontSize: 20,
    letterSpacing: 2,
    marginLeft: '20%'
  }
}))

function About() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={ColorTheme}>
      <Container className={classes.container}>
        <Typography className={classes.title}>
          WHO AM I?
        </Typography>
        <br />
        <Typography className={classes.subtitle}
        >
            Hey, I'm Brenda Ty, a frontend developer living in London. 
        </Typography>
        <br />
        <Grid 
          maxWidth="md">
          <Typography className={classes.text}
          >
            As a classical musician who turned into a professional barista (yes, that is a thing!), I'm a recent graduate of General Assembly's Software Engineering Immersive course.
          </Typography>
          <br />
          <Typography className={classes.listTitle}>
            I'm currently learning: 
          </Typography>
            <ul className={classes.list}>TypeScript</ul>
            <ul className={classes.list}>Jest</ul>
            <ul className={classes.list}>Chopin Nocturne in D♭ major, Op. 27 No. 2</ul>
            <ul className={classes.list}>Korean</ul>
            <ul className={classes.list}><s>Buzzword</s></ul>
            <ul className={classes.list}>Cello</ul>
          <br />
          <Typography className={classes.text}>
            I hope to continue my learning and bring my creativity into the workplace. 
          </Typography>
          <br />
          <Typography className={classes.text}>
            When I'm not coding you'll find me brewing a tasty filter coffee, taking photos, or {<s>not</s>} fighting the urge to spend all my money on plants.
          </Typography>
          </Grid>
      </Container>
    </ThemeProvider>

  )
}

export default About