import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Grid } from '@material-ui/core'

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
  },
  text: {
    flexGrow: 1,
    fontFamily: 'Neuton',
    color: '#d3c9c0',
    fontSize: '30px',
    letterSpacing: '2px'
  },
  text2: {
    flexGrow: 1,
    fontFamily: 'Neuton',
    color: '#d3c9c0',
    fontSize: '20px',
    letterSpacing: '2px'
  }
}))

function HomeInfo() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <Typography className={classes.title}>
        Hey, I'm Brenda. 
      </Typography>
      <br/>
      <Typography className={classes.title}>
        Frontend developer • Plant hoarder
      </Typography>
      {/* <Typography className={classes.text}>
        Piano player
      </Typography>
      <Typography className={classes.text2}>
        Lifetime student
      </Typography> */}
    </Container>
  )
}

export default HomeInfo
