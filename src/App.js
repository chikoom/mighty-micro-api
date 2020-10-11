import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import mightyTheme from './styles/theme';
import Home from './components/Home';
import './styles/App.css';

function App() {
  return (
    <ThemeProvider theme={mightyTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
