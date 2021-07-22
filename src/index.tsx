import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from 'pages/Home';
import * as serviceWorker from './serviceWorker';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const THEME = createMuiTheme({
  typography: {
    fontFamily: `"Lato", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    primary: {
      main: '#F9A825',
    },
    secondary: {
      main: '#4a6266',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
