import React from 'react'

import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  container: {
    maxWidth: 1000
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Neuton',
    fontSize: '42px',
    letterSpacing: '10px',
    color: '#d3c9c0',
    textAlign: 'center',
    marginBottom: 25
  },
  subtitle: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Libre Baskerville',
    color: '#d3c9c0',
    letterSpacing: 2,
    marginTop: 10,
    marginBottom:10
  },
  text: {
    flexGrow: 1,
    fontFamily: 'Work Sans',
    color: '#d3c9c0',
    fontSize: 20,
    letterSpacing: 2
  },
  icon: {
    padding: 10
  }
}))

function Contact() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Typography className={classes.subtitle}>
        <s>STALK ME...</s>
      </Typography>
      <Typography className={classes.title}>
        CONTACT
      </Typography>
      <Typography className={classes.text}>
        <EmailIcon fontSize="large" className={classes.icon}/> brenda.ty@live.com
      </Typography>
      <Typography className={classes.text}>
        <GitHubIcon fontSize="large" className={classes.icon}/> github.com/brendino500 
      </Typography>
      <Typography className={classes.text}>
        <LinkedInIcon fontSize="large" className={classes.icon}/> linkedIn.com/brendaty 
      </Typography>
    </Container>
  )
}

export default Contact