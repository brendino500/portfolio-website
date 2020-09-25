import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
// import Navbar from '../Navbar'
import About from '../About'
import HomeInfo from '../HomeInfo'
import Contact from '../Contact'
import Skills from '../Skills'
import Projects from '../projects/Projects'
import Experience from '../experience/Experience'
import photo_for_website from '../../assets/photo_for_website.jpg'

import { makeStyles } from '@material-ui/core/styles'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import { IconButton, Button, Toolbar, AppBar } from '@material-ui/core'

let parallax = null

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  },
  text: {
    fontfamily: 'Neuton',
    color: '#d3c9c0',
    fontSize: '15px'
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Neuton',
    color: '#d3c9c0',
    fontSize: '25px',
    letterSpacing: '4px',
  },
  projectTitle: {
    flexGrow: 1,
    fontFamily: 'Neuton',
    color: '#d3c9c0',
    fontSize: '40px',
    letterSpacing: '12px'
  },
  button: {
    fontFamily: 'Neuton',
    fontSize: '17px',
    color: '#d3c9c0',
    letterSpacing: '4px'
  }
}))

export default function HomeParallax() {
  const classes = useStyles()

    return (
      <>
        <Parallax pages={6} ref={ref => (parallax = ref)}>

          <div className={classes.root} >
            <AppBar 
            position="static"
            style={{
              background: 'transparent',
              boxShadow: 'none'
            }}>
              <Toolbar>
                <span 
                  className={classes.title}
                  onClick={() => parallax.scrollTo(0)}
                  >
                  BRENDA TY
                </span>

                  <Button 
                  className={classes.button}
                  onClick={() => parallax.scrollTo(2)}
                  >
                    Projects
                  </Button>
                <Button 
                  className={classes.button}
                  onClick={() => parallax.scrollTo(3)}
                >
                  Experience
                </Button>
                <Button 
                  className={classes.button}
                  onClick={() => parallax.scrollTo(4)}
                >
                  About
                </Button>
                <Button 
                  className={classes.button}
                  onClick={() => parallax.scrollTo(5)}
                >
                  Stalk
                </Button>
              </Toolbar>
            </AppBar>
          </div>

          <ParallaxLayer offset={0.3} speed={1.6} style={{ pointerEvents: 'none' }}>
            <HomeInfo />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={1} style={{ pointerEvents: 'none' }}>
            <Skills /> 
          </ParallaxLayer>

          <ParallaxLayer offset={1.2} speed={4} style={{ pointerEvents: 'none' }}>
            <i className="devicon-sass-original" style={{ display: 'block', marginLeft: '35%' }}></i>
            <i className="devicon-javascript-plain" style={{ display: 'block', marginLeft: '55%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={1.3} speed={2.4} style={{ pointerEvents: 'none' }}>
            <i className="devicon-react-original" style={{ display: 'block', marginLeft: '65%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={2} style={{ pointerEvents: 'none' }}>
            <i className="devicon-html5-plain" style={{ display: 'block', marginLeft: '15%' }}></i>
            <i className="devicon-mongodb-plain" style={{ display: 'block', marginLeft: '65%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={1.1} speed={2.5} style={{ pointerEvents: 'none' }}>
            <i className="devicon-git-plain" style={{ display: 'block', marginLeft: '45%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={1.5} speed={3} style={{ pointerEvents: 'none' }}>
            <i className="devicon-github-plain" style={{ display: 'block', marginLeft: '45%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={1.3} speed={3.5} style={{ pointerEvents: 'none' }}>
            <i className="devicon-python-plain" style={{ display: 'block', marginLeft: '75%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={1.8} speed={2.2} style={{ pointerEvents: 'none' }}>
            <i className="devicon-django-plain" style={{ display: 'block', marginLeft: '90%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={1.2} speed={2.8} style={{ pointerEvents: 'none' }}>
            <i className="devicon-css3-plain" style={{ display: 'block', marginLeft: '10%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={1.5} speed={1} style={{ pointerEvents: 'none' }}>
            <i className="devicon-intellij-plain" style={{ display: 'block', marginLeft: '10%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={3} style={{ pointerEvents: 'none' }}>
            <i className="devicon-trello-plain" style={{ display: 'block', marginLeft: '80%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={1.2} speed={1.2} style={{ pointerEvents: 'none' }}>
            <i className="devicon-java-plain" style={{ display: 'block', marginLeft: '80%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={1.1} speed={1.6} style={{ pointerEvents: 'none' }}>
            <i className="devicon-nodejs-plain" style={{ display: 'block', marginLeft: '60%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={1.4} speed={1.6} style={{ pointerEvents: 'none' }}>
            <i className="devicon-postgresql-plain" style={{ display: 'block', marginLeft: '30%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={1.7} speed={1.7} style={{ pointerEvents: 'none' }}>
            <i className="devicon-slack-plain" style={{ display: 'block', marginLeft: '20%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={1.2} speed={2.6} style={{ pointerEvents: 'none' }}>
            <i className="devicon-visualstudio-plain" style={{ display: 'block', marginLeft: '90%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={7} style={{ pointerEvents: 'none' }}>
            <i className="devicon-typescript-plain" style={{ display: 'block', marginLeft: '34%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={1.2} speed={5} style={{ pointerEvents: 'none' }}>
            <i className="devicon-npm-original-wordmark" style={{ display: 'block', marginLeft: '22%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={1.7} speed={6.5} style={{ pointerEvents: 'none' }}>
            <i className="devicon-express-original" style={{ display: 'block', marginLeft: '57%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={4} speed={5} style={{ pointerEvents: 'none' }}>
            <About />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={5} style={{ pointerEvents: 'none' }}>
            <Projects />
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={5} style={{ pointerEvents: 'none' }}>
            <Experience />
          </ParallaxLayer>

          {/* <ParallaxLayer offset={3.5} speed={1} style={{ pointerEvents: 'none' }}>
            <Contact />
          </ParallaxLayer> */}

          <ParallaxLayer offset={4.25} speed={2} style={{ pointerEvents: 'none' }}>
            <img src={photo_for_website} alt="profile" className="profile-photo" style={{ display: 'block', marginLeft: '10%' }}/>
          </ParallaxLayer>

          <ParallaxLayer offset={5} speed={0.5}>
            <span onClick={() => parallax.scrollTo(1)}>Go skills</span>
          </ParallaxLayer>

        </Parallax>

        

        {/* <IconButton>
          <ArrowUpwardIcon 
            fontSize="large"
            aria-label="sticky-up"
            className={classes.margin}
            />
        </IconButton> */}
      </>
    )
}
