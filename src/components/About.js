import React from 'react'
import ColorTheme from '../ColorTheme'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, ThemeProvider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Cormorant Garamond',
    color: '#C8CFDB',
    fontSize: '45px'
  },
  text: {
    fontFamily: 'Cormorant Garamond',
    color: '#C8CFDB',
    fontSize: '25px'
  }
}))

function About() {
  const classes = useStyles()

  return (
    <>
      <Typography>
      <h1>About</h1>

      </Typography>
    </>
  )
}

export default About