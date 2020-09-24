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

function Reactathon() {
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
            48h Reactathon
          </Typography>
          <br />
          <Typography className={classes.text}>
            48h Reactathon project pulling from 5 APIs
          </Typography>
        </Grid>
      </Box>
    </Container>
  )
}

export default Reactathon