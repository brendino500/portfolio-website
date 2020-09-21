import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    primary: {
      main: '#4ecdc4'
    },
    secondary: {
      main: '#cdb34e'
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