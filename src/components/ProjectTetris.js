import React from 'react'
import tetris_screenshot from '../../src/assets/tetris_screenshot.png'
import { Container, Box, Grid, Typography } from '@material-ui/core'

export default function ProjectTetris() {
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
            <Typography>
              Tetris
            </Typography>
            </Grid>
        </Grid>
      </Box>
    </Container>
  )
}