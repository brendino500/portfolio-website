import React from 'react'
import GeneralAssembly from './GeneralAssembly'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Container, GridList, CardContent, GridListTile, Card } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // overflow: 'hidden',
    // backgroundColor: '#394651'
  },
  // gridList: {
  //   height: 500,
  //   width: 350
  // },
  card: {
    flexGrow: 1,
    minWidth: 200,
    maxWidth: 500,
    backgroundColor: '#394651',
    padding: 20
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Neuton',
    fontSize: 42,
    letterSpacing: 10,
    color: '#d3c9c0',
    textAlign: 'center',
    marginBottom: 25
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
    // <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography className={classes.title}>
          EXPERIENCE
        </Typography>
        <br />
        <GeneralAssembly />
      </Container>
    // </div>
  )
}

export default Experience 