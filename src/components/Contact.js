import React from 'react'
import ColorTheme from '../ColorTheme'
import { makeStyles, TextField, Paper, Button, ThemeProvider, Typography, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  // '& > *': {
  //     margin: theme.spacing(1),
  //     width: theme.spacing(16),
  //     height: theme.spacing(16)
  // },
  button: {
    fontFamily: 'Bitter',
    color: '#4ecdc4',
    fontSize: '30px'
  },
  title: {
    flexGrow: 1,
    fontSize: '30px',
    fontFamily: 'Bitter'
  },
  paper: {
    backgroundColor: '#152031',
    height: '50%'
  }
}))

function Contact() {
  const classes = useStyles()

    return (
      <ThemeProvider theme={ColorTheme}>
        <div className={classes.root}>
          <Paper elevation={3}>
          <Container maxWidth="lg">
            <Typography varient="h1" className={classes.title}>
              Wanna get in touch? Fill out the form below.
            </Typography>
            <form noValidate autoComplete="off">
              <div>
                <TextField
                  required
                  id="standard-required"
                  label="Name"
                  fullWidth
                />
                <br />
                <TextField
                  required
                  id="standard-required"
                  label="Email"
                  fullWidth
                />
                <br />
                <TextField
                  id="standard-textarea-required"
                  label="Please write to me?"
                  multiline
                  rows={5}
                  fullWidth
                />
                <Button className={classes.button}
                  fullWidth
                  
                >
                  Say Hello!
                </Button>
              </div>
            </form>
          </Container>
          </Paper>
        </div>
      </ThemeProvider>
    )
}

export default Contact