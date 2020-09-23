import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Container, Box, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  text: {
    flexGrow: 1,
    fontFamily: 'Work Sans',
    color: '#d3c9c0',
    fontSize: '20px',
    letterSpacing: '1px'
  }
}))

function APPerture() {
  const classes = useStyles()

  return (
    <Container maxWidth="md">
      <Box>
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <br />
        <Typography className={classes.text}>
          Unsplash x Instagram
        </Typography>
        <br />
        <Typography className={classes.text}>
          Over the space of a 7 days this social media app was created in a paired project.
        </Typography>
      </Grid>
    </Box>
    </Container>
  )
}

export default APPerture