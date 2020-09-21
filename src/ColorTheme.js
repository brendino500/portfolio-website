import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    primary: {
      main: '#cdb34e'
    },
    secondary: {
      main: '#37908d'
    },
    typography: {
      fontFamily: '\'Bitter\', serif',
      textTransform: 'none',
      h1: {
        fontSize: 20
      },
      p: {
        fontSize: 10
      },
      subtitle1: {
        fontSize: 15
      }
    },
    overrides: {
      MuiTypography: {
        text: {
          fontFamily: 'Libre Baskerville'
        }
      }
    }
  }
})