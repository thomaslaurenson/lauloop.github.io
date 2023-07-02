import {createTheme} from '@mui/material/styles';
import '@fontsource/montserrat';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';

let LightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

LightTheme = createTheme(LightTheme, {
  typography: {
    h2: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: 'Montserrat',
      },
    },
  },
});

export default LightTheme;
