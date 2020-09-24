import React from 'react'
import Tetris from './Tetris'
import APPerture from './APPerture'
import Nalu from './Nalu'
import Reactathon from './Reactathon'


import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Grid, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  text: {
    flexGrow: 1,
    fontFamily: 'Work Sans',
    color: '#d3c9c0',
    fontSize: '20px',
    letterSpacing: '1px'
  },
  box: {
    display: 'flex',
    direction: 'row',
    alignContent: 'space around'
  }
}))

function Projects() {
  const classes = useStyles()

  return (
    <Container maxWidth="md">
      <Box>
        <Grid
          // spacing={9}
          // direction="row"
          // alignContent="space around"
        >
          <APPerture />
          <br />
          <Nalu />
          <br />
          <Reactathon />
          <br />
          <Tetris />
        </Grid>
      </Box>
    </Container>
  )
}

export default Projects