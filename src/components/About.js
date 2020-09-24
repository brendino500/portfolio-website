import React from 'react'
import ColorTheme from '../ColorTheme'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, ThemeProvider, Container, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Cormorant Garamond',
    fontSize: '45px',
    letterSpacing: '2px'
  },
  header: {
    fontFamily: 'Neuton',
    fontSize: '25px',
    fontWeight: 'bold',
    letterSpacing: '1px'
  },
  text: {
    fontFamily: 'Neuton',
    fontSize: '22px',
    letterSpacing: '1px'
  }
}))

function About() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={ColorTheme}>
      <Container>
        <Typography 
          varient="h1" 
          color="primary"
          className={classes.title}
        >
            About
        </Typography>
        <br />
        <Typography 
          varient="subtitle1" 
          color="primary"
          className={classes.title}
        >
            Hey, I'm Brenda Ty, a frontend developer living in London. 
        </Typography>
        <br />
        <Grid 
          maxWidth="md">
          <Typography 
            varient="subtitle1" 
            color="primary"
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