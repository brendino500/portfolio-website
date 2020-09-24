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
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Neuton',
    fontSize: '42px',
    letterSpacing: '10px',
    color: '#d3c9c0',
    textAlign: 'center',
    marginBottom: 25
  }
}))

function Projects() {
  const classes = useStyles()

  return (
    <Container maxWidth="md">
      <Box>
        <Grid>
          <Typography className={classes.title}>
            PROJECTS
          </Typography>
          <br />
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