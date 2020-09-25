import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#394651'
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

function GeneralAssembly() {
  const classes = useStyles()
  return (
    <h1>General Assembly</h1>
  )
}

export default GeneralAssembly