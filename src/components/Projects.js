import React from 'react'
import Tetris from './Tetris'
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
  },
  // control: {
  //   padding: theme.spacing(7)
  // }
}))

function Projects() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <Box>
        <Grid
          spacing={9}
          direction="row"
          alignContent="space around"
          // container
          // justify="center"
          // spacing={classes.control.padding}
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
            <Tetris />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Projects