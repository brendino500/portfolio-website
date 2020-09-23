import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import About from '../About'
import HomeInfo from '../HomeInfo'
import Contact from '../Contact'
import Skills from '../Skills'
import ProjectTetris from '../ProjectTetris'

import { makeStyles } from '@material-ui/core/styles'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import { IconButton, Typography } from '@material-ui/core'

let parallax = null

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  },
  text: {
    fontfamily: 'Cormorant Garamond',
    color: '#e2e3e4',
    fontSize: '15px'
  }
}))

export default function HomeParallax() {
  const classes = useStyles()

    return (
      <>
        <Parallax pages={5} ref={ref => (parallax = ref)}>

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

          <ParallaxLayer offset={1.6} speed={2.2} style={{ pointerEvents: 'none' }}>
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

          <ParallaxLayer offset={1.1} speed={1.7} style={{ pointerEvents: 'none' }}>
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

          <ParallaxLayer offset={1.5} speed={6} style={{ pointerEvents: 'none', marginLeft: '3%' }}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFMUlEQVRoge2ZW2gUZxTH/2fGXE2yYkm1d7Wmrd0ibGZ3U7D41kKFXrBkmmjS1HqjSH1QQd8S3wwUHwpRjPGSaHbTCVhQacE+FKRKzHyTLciWmqAUBJsarA21bJPszOlDsrLZ7O7M7MVSyO9lYef75vufOfOdc+Z8wCKLLPL/RwgxbhiG8l+tf17TXu89F7qby1xp7ncFM+uGYZxjZiqgNlv6+sNHzWnzJoiedzrntKbV9p4PawCwJOl/YuYWIcQmIcQHfr//x4KrTRYxMFAvxflbZqxwM6+vf6CRp8wuEGqB+QYAAIhoORFdNQzjm9u3b6uqqpqFEg0AHR0d0qq6145TnHcCcOzt05pWK0+bXczcmDxLSjeYmYmZN69Zs0bXdd2Xt+o5zoZC3tVrX71GzLvgQnxf/0CjPGVGATSmXlvggRR8RHRDCHHU4/G019XVTbnUDAA4ceJESXlVzT6YOAxCmdv5zKxlMjetB1IoAXBwcnLSMAzjTbeL94bDvvLKmhtgHMlFvB12HkjGy8zXdF3vqays3O/1eh9lG6xpWkVsymyHiQMgyHnqzIgTD8wbT0S7YrHYTV3X38406Gz/1xtjM+ZPIBwEiiCeMUFEKuDOA8msIqIrQohB0zQ/b2hoeAAAZ86cWSYvKe9ktlxFGJcMmmXyns9UdQKwN8BE9ifYKMvyRiHEFz+Pjv7DFh1jwC4hWXDv+dmnLtGeT7Y2DSb/nfVGzBwAELG59QoAGlt0EfbioxZog63YhQyaZbI3VTxgY0AgEIgAaABwCEBOIXSOGTA6J//wKNtamobcTm5raVYTr0wqtnvA7/fPAOgcHh6+LElSDwB3oZQRwRJsb2tutvNkTjh+F4PBYFRRlA1EtBtA1hA6RwyEQxVlcqBY4gGXUYiILADdkUjkimma3QAyhFK+ClPa2dbWNJq/xIUk6qK2lmY1pzDq8/l+BfCOEKIRwHEAT81eoT+ZcLBtS9NJIuKCKU4itRp1H86S8Pv9g5ZlvcHMFwBcsGakdZ9uberOJr6joyOnNRPfAHN1UW3i/1wT2WOCweA4gI+cjD0bCnnJoh63a6Q+9WTyNsAJRa9Gieh9AL/lpTIDxa5GJQBQFOVSaWmpl5m7C3VjTdMqes+Fj8CEDkLWjyJOKs7c8nhDrV+//mEgENhdCG+4rEYHyZpel65McMKCPaAoyqWRkZEhy7K63N7MZTV6V2Le3tq65Xu36ySTdhPX19dPAHDl0r5Q6D2n1SgxesrL5P2qqjrJ6FkpWBR64dnnLt4bv494PJ5tWNQC7djW6rygs8sbeSWyZKqrlmLt6hexfJkn3eWcqtFEFyPbmILmAVmW8czKp1FTU417479jenomp2rUTd4oSiJbWlmBl1e/hL8e/f3dg4n7H6qqOu10bm847EMcp8DwOfkoLVomlojgqa5611NdNaTr+va5j6OMuOliMGNCkmgPUMA9kIVEc+zI2NhY2tchn7xRsM6BEMJJ+Rwloh2KogwBSXmDkHPeKJgBhmFsZuYuACtthppE9FX01q0f2KJjyDNvFLR3E4lElsXj8U4isn2i0V/GnNxyNm9kCb1FaT6NjIxstCzrJIBXMirLbsAMGEcnH3ra9+7dlLUbUrTTmOvXr1eUlpa2AziANBszowEu80bRj5N0XfcR0SlgfkmdxoAYCIcrSuQv3RyqPJHzMCFECYB9AA4Ds5l1vgG5dzGe6IHe8PCwN9EcmzUg0cX4OOcuxpNIZI8JBoPRO3fuvMXM++Cwi7HIIkXmX3d+RS2G+4aCAAAAAElFTkSuQmCC" alt="materialUI" />
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={5} style={{ pointerEvents: 'none' }}>
            <About />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={3} style={{ pointerEvents: 'none' }}>
            <ProjectTetris />
          </ParallaxLayer>

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
