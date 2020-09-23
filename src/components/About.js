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
    color: '#C8CFDB',
    fontSize: '45px',
    letterSpacing: '2px'
  },
  header: {
    fontFamily: 'Neuton',
    color: '#C8CFDB',
    fontSize: '25px',
    fontWeight: 'bold',
    letterSpacing: '1px'
  },
  text: {
    fontFamily: 'Neuton',
    color: '#C8CFDB',
    fontSize: '22px',
    letterSpacing: '1px'
  }
}))

function About() {
  const classes = useStyles()

  return (
    <Container>
    <Typography varient="h1" className={classes.title}>
        About
      </Typography>
      <br />
      <Typography varient="subtitle1" className={classes.header}>
        Hey, I'm Brenda Ty, a frontend developer living in London. 
      </Typography>
      <br />
      <Typography varient="subtitle2" className={classes.text}>
        After teaching a student the piano, I couldn't find any fun and informative resources to learn music theory for adults. I then 
      </Typography>
    </Container>
  )
}

export default About