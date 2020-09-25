import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, ThemeProvider, Container, GridList, CardContent, GridListTile, Card } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#394651'
  },
  gridList: {
    height: 500,
    width: 350
  },
  card: {
    flexGrow: 1,
    minWidth: 200,
    maxWidth: 500,
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
    letterSpacing: 2,
    marginTop: 10,
    marginBottom:10
  },
  text: {
    flexGrow: 1,
    fontFamily: 'Work Sans',
    color: '#d3c9c0',
    fontSize: 18,
    letterSpacing: 1
  }
}))

function Experience() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">

      </Container>
    </div>
  )
}

export default Experience 