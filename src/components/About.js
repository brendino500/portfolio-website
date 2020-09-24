import React from 'react'
import ColorTheme from '../ColorTheme'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, ThemeProvider, Container } from '@material-ui/core'

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
        <Typography 
          varient="subtitle1" 
          color="primary"
          className={classes.text}
        >
            After teaching a student the piano, I couldn't find any fun and informative resources to learn music theory for adults. I then 
        </Typography>
      </Container>
    </ThemeProvider>

  )
}

export default About