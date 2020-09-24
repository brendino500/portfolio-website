import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Container, Box, Grid, Typography, Card, CardContent, CardActions } from '@material-ui/core'
import LinkIcon from '@material-ui/icons/Link'
import GitHubIcon from '@material-ui/icons/GitHub'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 300,
    backgroundColor: '#394651',
    padding: 20
  },
  title: {
    fontSize: 50,
    fontFamily: 'Neuton',
    color: '#d3c9c0',
    letterSpacing: 5
  },
  subtitle: {
    fontSize: 25,
    fontFamily: 'Libre Baskerville',
    color: '#d3c9c0',
    letterSpacing: 2
  },
  text: {
    flexGrow: 1,
    fontFamily: 'Work Sans',
    color: '#d3c9c0',
    fontSize: 18,
    letterSpacing: 1
  }
}))

function APPerture() {
  const classes = useStyles()

  return (
    <Container maxWidth="md">
      <Box>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title}>
                Weather x TfL
              </Typography>
              <Typography className={classes.subtitle}>
                Paired Project • 48 Hours
              </Typography>
              <Typography className={classes.text}>
                Out of the whole of General Assembly, this was, by far, the most fun project! I was paried with a crazy French man and we've had the most intense coding relationship since. We wanted to create an app with geolocation (if the user accepted) could create a homepage of the local time and weather. The other pages were linked to the current London Tube line services, the TfL Bike Points as well as the Air Quality Index in London.
              </Typography>
            </CardContent>
            <Grid container justify="space-between">
              <Grid>
                <GitHubIcon className="github-link" fontSize="large" />
                <LinkIcon className="github-link" fontSize="large"/>
              </Grid>
              <Grid>
                <i className="devicon-javascript-plain project-icon"></i>
                <i className="devicon-html5-plain project-icon"></i>
                <i className="devicon-css3-plain project-icon"></i>
                <i className="devicon-sass-original project-icon"></i>
                <i className="devicon-npm-original-wordmark project-icon"></i>
                <i className="devicon-react-original project-icon"></i>
                <i className="devicon-nodejs-plain project-icon"></i>
              </Grid>
            </Grid>
          </Card>
      </Box>
    </Container>
  )
}

export default APPerture