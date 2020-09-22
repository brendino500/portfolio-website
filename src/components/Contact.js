import React from 'react'
import ColorTheme from '../ColorTheme'
import { makeStyles, TextField, Paper, Button, ThemeProvider, Typography, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  button: {
    fontFamily: 'Cormorant Garamond',
    color: '#323E47',
    fontSize: '30px'
  },
  title: {
    flexGrow: 1,
    fontSize: '30px',
    fontFamily: 'Cormorant Garamond'
  },
  paper: {
    backgroundColor: '#152031',
    height: '50%',
    opacity: '0'
  },
  form: {
    fontFamily: 'Nunito',
    color: '#00928E'
  }
}))

function Contact() {
  const classes = useStyles()

    return (
      <ThemeProvider theme={ColorTheme}>
        <div className={classes.root}>
          <Paper elevation={20}>
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
                  margin="normal"
                  fullWidth
                />
                <br />
                <TextField
                  required
                  id="standard-required"
                  label="Email"
                  margin="normal"
                  fullWidth
                />
                <br />
                <TextField
                  required
                  id="standard-required"
                  label="Subject"
                  margin="normal"
                  fullWidth
                />
                <br />
                <TextField
                  id="standard-required"
                  label="Please write to me? *"
                  multiline
                  margin="normal"
                  rows={5}
                  fullWidth
                  style={{
                    fontFamily: 'Nunito'
                  }}
                />
                <Button className={classes.button}
                  fullWidth
                >
                  Say Hello!
                </Button>
                <br />
              </div>
            </form>
          </Container>
          </Paper>
        </div>
      </ThemeProvider>
    )
}

export default Contact