import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const vrPink = '#d84987'
const vrBlue = '#306ca0'

let mightyTheme = createMuiTheme({
  palette: {
    common: {
      digiPink: vrPink,
      digiBlue: vrBlue,
    },
    primary: {
      main: vrBlue,
    },
    secondary: {
      main: vrPink,
    },
  },
  typography: {
    h1: {
      fontSize: '3em',
      fontWeight: 900,
      fontFamily: 'Roboto',
    },
    h2: {
      fontWeight: 900,
      fontFamily: 'Raleway',
    },
    h3: {
      fontWeight: 900,
      fontFamily: 'Raleway',
    },
    h4: {
      fontWeight: 900,
      fontFamily: 'Raleway',
    },
    h5: {
      fontWeight: 900,
      fontFamily: 'Raleway',
    },
    h6: {
      fontWeight: 900,
      fontFamily: 'Raleway',
    },
  },
  custom: {
    spacer: {
      display: 'block',
      marginTop: '5em',
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: vrBlue,
        fontSize: '1rem',
      },
    },
  },
})

mightyTheme = responsiveFontSizes(mightyTheme)
export default mightyTheme
