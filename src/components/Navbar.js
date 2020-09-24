import React from 'react'
import ColorTheme from '../ColorTheme'

import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, ThemeProvider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Neuton',
    color: '#d3c9c0',
    fontSize: '25px',
    letterSpacing: '2px'
  },
  button: {
    fontFamily: 'Neuton',
    fontSize: '17px',
    color: '#d3c9c0'
  }
}))


function Navbar() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={ColorTheme}>
      <div className={classes.root} >
        <AppBar 
        position="static"
        style={{
          background: 'transparent',
          boxShadow: 'none'
        }}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              BRENDA TY
            </Typography>
            <Button className={classes.button}>About</Button>
            <Button className={classes.button}>Projects</Button>
            <Button className={classes.button}>Experience</Button>
            <Button className={classes.button}>Contact</Button>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  )

}

export default Navbar


{/* <ParallaxLayer offset={4} speed={0.5}>
<span onClick={() => parallax.scrollTo(1)}>Go skills</span>
</ParallaxLayer> */}