import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import About from '../About'
import Contact from '../Contact'

import { makeStyles } from '@material-ui/core/styles'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import { IconButton } from '@material-ui/core'

let parallax = null

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  }
}))

export default function HomeParallax() {
  const classes = useStyles()

    return (
      <>
        <Parallax pages={3} ref={ref => (parallax = ref)}>
          {/* <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73 ' }} />
          <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} >
          <img src="https://images.unsplash.com/photo-1600195076446-435ebd85d816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="image" />
          </ParallaxLayer> */}
          <ParallaxLayer offset={1} speed={1} style={{ pointerEvents: 'none' }}>
          {/* <img src='https://images.unsplash.com/photo-1600195076446-435ebd85d816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80' style={{ width: '15%', marginLeft: '70%' }} /> */}
            <Contact />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5}>
            <span onClick={() => parallax.scrollTo(1)}>Layers can contain anything</span>
          </ParallaxLayer>
        </Parallax>

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
