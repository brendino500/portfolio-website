import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import About from '../About'
import HomeInfo from '../HomeInfo'
import Contact from '../Contact'
import ProjectTetris from '../ProjectTetris'

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
        <Parallax pages={5} ref={ref => (parallax = ref)}>
          {/* <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73 ' }} />
          <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} >
          <img src="https://images.unsplash.com/photo-1600195076446-435ebd85d816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="image" />
          </ParallaxLayer> */}
          <ParallaxLayer offset={0.3} speed={1.6} style={{ pointerEvents: 'none' }}>
            <HomeInfo />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={4} style={{ pointerEvents: 'none' }}>
            <About />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={3} style={{ pointerEvents: 'none' }}>
            <ProjectTetris />
          </ParallaxLayer>
          <ParallaxLayer offset={3.5} speed={1} style={{ pointerEvents: 'none' }}>
            <Contact />
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={2} style={{ pointerEvents: 'none' }}>
            <img src="../../../assets/photo_for_website.jpg" alt="profile-photo"/>
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.5}>
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
