import React from 'react'
import ColorTheme from '../ColorTheme'

import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, ThemeProvider, IconButton, MenuIcon} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

function Navbar() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={ColorTheme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Brenda Ty
            </Typography>
            <Button color="inherit">About</Button>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">Experience</Button>
            <Button color="inherit">Contact</Button>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  )

}

export default Navbar