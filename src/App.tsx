import {ThemeProvider} from '@mui/material';

import Home from "./Home"
import LightTheme from './LightTheme';

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
