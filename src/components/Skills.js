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
    fontFamily: 'Cormorant Garamond',
    fontSize: '38px',
    letterSpacing: '2px',
    color: '#C8CFDB'
  }
}))

function Skills() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={ColorTheme}>
    <Container>
      <Typography 
        varient="h1"
        className={classes.title}
      >
        Skills
      </Typography>
    </Container>
    </ThemeProvider>
  )
}

export default Skills