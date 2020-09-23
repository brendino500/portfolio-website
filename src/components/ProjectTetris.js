import React from 'react'
import tetris_screenshot from '../../src/assets/tetris_screenshot.png'

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

function ProjectTetris() {
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
        <img src={tetris_screenshot} alt="tetris" />
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            {/* <Typography className={classes.title}>
              Tetris
            </Typography>
            <br /> */}
            <br />
            <Typography className={classes.text}>
              This is my first ever deployed project using only HTML, CSS and JavaScript. This was built in a week. I'm pretty sure it's not buggy (...) and the music is pretty funky!
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default ProjectTetris