import React from 'react'
// import { Parallax, ParallaxLayer } from 'react-spring/addons'
import About from '../About'
import Contact from '../Contact'

import { makeStyles } from '@material-ui/core/styles'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import { IconButton } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  }
}))

export default function HomeParallax() {
  const classes = useStyles()

    return (
      <>
        <h1>Home Page</h1>
        <IconButton>
          <ArrowUpwardIcon 
            fontSize="large"
            aria-label="sticky-up"
            className={classes.margin}
            />
        </IconButton>
      </>

    )
}
