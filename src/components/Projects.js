import React from 'react'
import ProjectTetris from './ProjectTetris'
import APPerture from './APPerture'
import Nalu from './Nalu'
import Reactathon from './Reactathon'


import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Grid, Box } from '@material-ui/core'

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
    <Container maxWidth="lg">
      <Box>
        <Grid
          spacing={2}
          direction="row"
          alignContent="space around"
        >
          <Grid>
            <APPerture />
          </Grid>
          <Grid>
            <Nalu />
          </Grid>
          <Grid>
            <Reactathon />
          </Grid>
          <Grid>
            <ProjectTetris />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Projects