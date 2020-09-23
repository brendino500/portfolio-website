import React from 'react'
import ColorTheme from '../ColorTheme'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Container, ThemeProvider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Neuton',
    fontSize: '42px',
    letterSpacing: '10px',
    color: '#d3c9c0',
    textAlign: 'center'
  }
}))

function Skills() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={ColorTheme}>
    <Container className={classes.root}>
      <Typography 
        varient="h1"
        className={classes.title}
      >
        SKILLS
      </Typography>
    </Container>
    </ThemeProvider>
  )
}

export default Skills