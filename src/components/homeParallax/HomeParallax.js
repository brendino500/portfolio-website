import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
// import Navbar from '../Navbar'
import About from '../About'
import HomeInfo from '../HomeInfo'
import Contact from '../Contact'
import Skills from '../Skills'
import Tetris from '../Tetris'
import APPerture from '../APPerture'
import Projects from '../Projects'
import tetris_screenshot from '../../assets/tetris_screenshot.png'

import { makeStyles } from '@material-ui/core/styles'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import { IconButton, Button, Toolbar, AppBar, Typography } from '@material-ui/core'

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
        <Parallax pages={5} ref={ref => (parallax = ref)}>

          <div className={classes.root} >
            <AppBar 
            position="static"
            style={{
              background: 'transparent',
              boxShadow: 'none'
            }}>
              <Toolbar>
                <span 
                  variant="h6" 
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
                  onClick={() => parallax.scrollTo(4.5)}
                >
                  Contact
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

          {/* <ParallaxLayer offset={1.7} speed={9} style={{ pointerEvents: 'none' }}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFH0lEQVRoge2ZX0xTdxTHv+e2vYAu6tyAPSxxLy6yEhwIVaciNYoZyxTruE97UzQL2cPQRN/AN0gWHpagEfFpbwVLwcUJLLagsrYw2YCGZL64+FAcG+ucgNDbe/YgdV0pvfe2ty5L+Lw0aX9/zvn9Od/T8wPWWWed/z+Tfu/MtO/urv9q/u/c7vf6e1yP0+krrHwWyhQdnfB5v2ZmMtA2VfrdrjYFyiQR3tba55bTmT/gdjmBfxwAACLCp1P+od+Cvnv7Dbc0gds3bpQNul0zBHyRYEdKBnpddeYccxBAHQCYV7UgbGWShycDQz3Tj55IkiRFDbMaQHNzs7B3584rJKBez27fcjrzzaK5HfzC8BhJPWcGgdmxY1vBaHB0qDRTo2Pc7uu2fvB+yX0iPgMdxieuejyrdyAOAkoVhf1Tfk9bztbFpu3ba5bSsBtjV69a5grzG6HgEoAc3QMwnGv9pOXsWRh0YXFuww8/+Tx79M492NtdOldY4AfQgnSMVyHlDsRDgJWI7k8FvJ00z+esdvuzVO1HnM68Z6K5iRnnATZlbmpyNN/+WHtmnOENNDnp8x5Zq1F/743KZ6L5RwAXABhvPGEWBAnQsQPxMPAOCANTfm+XCfJnRbsP/w4Anp6eLbKgtDJTPYBs6UmXvCQ31EjSLKDuQBQpVpCBOhnmygm/9/NQKPw8AuUymNQESYH+nX+x6kBD9XFHV/zXKQcSBKpgYFxl6EICnASlD1BV0yAJvE/d2lV0yUuyNdF4QMUBa8XB8WXTa7sZdBFAWiF0hQiAVlnM3XXk2Emf3s7VtQ4pdmQSUb0D5eXlEQCtwcCdbxQWOgHoDKU0ThQ9deT4J2o7mRaaz6LVdihYbDu4j5nOAkgZQldYBHAxvBypyJbxgM4oREQKgI7x7z0DZhN1gLFWKB0WFNQfdjh+ztzE1cTyoupah5RWGC3da38EoHrC760j4AqAN1Z+CjPThera2mtExIZZHMdAr6sOQDsY+UCaOhCjZHdVVzDguaso1A4GLKLcYP9ImknVp7m5WX8IxdrZaEYOAIDVZp8BcFJL29t93VZBETr1zpG46vFk7IAWsp6NEuEYgFDaFqYg29moAADFtqqbvGyyEqHDqIFHnM68AberhVkYBTjlnyJmfpmc6eXlhSo5cOCPYlvVWSN2Q2c22mViKkqWJmhh1R0otlXdfPBg2CdGlHa9g+nMRh8z4dTR445BvfPEk/QSl5VVzgL6trTf7f5YazZKxJ3mpeg5uyRpUfSUGBaFtr6+se/p03lEo0qqZkES+LSehE5NNwxzIDfXghxxM57+tYCFhVWJawRAmyzmNtXUaC8MaNENQ3WABMLmzRuRlyci/OcConIU6WSjenQjK0Imihbkv7kJz5ci3z56Eq6VJGlZa9/B3u7SOTZdVwu9MdLKS7RARMjLFT/csa3Ap6U4lq5uZM2BGHHFsZaHD28lPQ6Z6IZhlYNJv1c1fWYgyMynd+6x+wBjdMM4BwJDDjC3A3hLpWmUga9CobCHoFyGeiEgpW4YWrsZH/dssUSolRmqKxoKzWkZUlU3slJ8mggMVQrM1xh4d602Kg5o1o2svcaMjIzkbTItNTHoPJJczLUd0KcbWX9OCo4OlUYVvk7Av0JjEgcWAVwKL8tf6nlUeSXvYWNjYxYxOt9I4JfKmuBA2lWMV/qgFwzcscaKYysOZFzFyLqQxWO1HQpO//LrfgYawXBZLHLR0RMnOrJVgllnHQ38DRvESaAnBAyzAAAAAElFTkSuQmCC" alt="material-ui" className="materialUI" style={{ display: 'block', marginLeft: '3%' }}/>
          </ParallaxLayer> */}

          <ParallaxLayer offset={3} speed={5} style={{ pointerEvents: 'none' }}>
            <About />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={5} style={{ pointerEvents: 'none' }}>
            <Projects />
          </ParallaxLayer>

          {/* <ParallaxLayer offset={2} speed={3} style={{ pointerEvents: 'none' }}>
            <Tetris />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={4} style={{ pointerEvents: 'none' }}>
              <Typography className={classes.projectTitle} style={{ display: 'block', marginLeft: '30%' }}>
                TETRIS
              </Typography>
          </ParallaxLayer>

          <ParallaxLayer offset={2.8} speed={3} style={{ pointerEvents: 'none' }}>
            <APPerture />
          </ParallaxLayer>

          <ParallaxLayer offset={2.8} speed={4} style={{ pointerEvents: 'none' }}>
              <Typography className={classes.projectTitle} style={{ display: 'block', marginLeft: '30%' }}>
                APPerture
              </Typography>
          </ParallaxLayer> */}

          <ParallaxLayer offset={3.5} speed={1} style={{ pointerEvents: 'none' }}>
            <Contact />
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={2} style={{ pointerEvents: 'none' }}>
            <img src="../../../assets/photo_for_website.jpg" alt="profile"/>
          </ParallaxLayer>

          <ParallaxLayer offset={4} speed={0.5}>
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
