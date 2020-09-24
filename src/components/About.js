import React from 'react'
import ColorTheme from '../ColorTheme'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, ThemeProvider, Container, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  container: {
    maxWidth: 800
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
  }
}))

function About() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={ColorTheme}>
      <Container className={classes.container}>
        <Typography className={classes.title}>
          ABOUT
        </Typography>
        <br />
        <Typography className={classes.subtitle}
        >
            Hey, I'm Brenda Ty, a frontend developer living in London. 
        </Typography>
        <br />
        <Grid 
          maxWidth="md">
          <Typography 
            varient="subtitle1" 
            className={classes.text}
          >
            As a classical musician who turned into a professional barista, I took the Software Engineering Immersive course at General Assembly as I wanted to learn a new skill and merge my creativeness with coding.
          </Typography>
        <br />
          </Grid>
      </Container>
    </ThemeProvider>

  )
}

export default About