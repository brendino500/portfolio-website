import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Neuton',
    color: '#d3c9c0',
    fontSize: '45px',
    letterSpacing: '2px'
  }
}))

function HomeInfo() {
  const classes = useStyles()

  return (
    <Container>
      <Typography className={classes.title}>
        Hey, I'm Brenda. 
      </Typography>
      <br/>
      <Typography className={classes.title}>
      A frontend developer.
      </Typography>
    </Container>
  )
}

export default HomeInfo
