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
    fontSize: 40,
    fontFamily: 'Neuton',
    color: '#d3c9c0',
  },
  text: {
    flexGrow: 1,
    fontFamily: 'Work Sans',
    color: '#d3c9c0',
    fontSize: 20,
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
                APPerture
              </Typography>
              <Typography className={classes.text}>
                Instagram X Unsplashed
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
                <i className="devicon-python-plain project-icon"></i>
                <i className="devicon-django-plain project-icon"></i>
                <i className="devicon-postgresql-plain project-icon"></i>
                <i className="devicon-react-original project-icon"></i>
              </Grid>
            </Grid>
          </Card>
      </Box>
    </Container>
  )
}

export default APPerture