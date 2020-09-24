import React from 'react'
import ProjectTetris from './ProjectTetris'


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

function Projects() {
  const classes = useStyles()

  return (
    <Container maxWidth="md">
      <Box>
        <h1>Add all projects</h1>

      </Box>
    </Container>
  )
}

export default Projects