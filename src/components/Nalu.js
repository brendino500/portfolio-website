import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Grid } from '@material-ui/core'

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

function Nalu() {
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
            NALU
          </Typography>
          <br />
          <Typography className={classes.text}>
            Full stack project with 4 people completed in 7 days. 
          </Typography>
        </Grid>
      </Box>
      <h1>NALU</h1>
    </Container>
  )
}