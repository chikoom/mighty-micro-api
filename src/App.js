import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import mightyTheme from './components/theme';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={mightyTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;

//   POST - https://b13gd54k3g.execute-api.eu-central-1.amazonaws.com/dev/send
//   GET - https://b13gd54k3g.execute-api.eu-central-1.amazonaws.com/dev/users
//   POST - https://b13gd54k3g.execute-api.eu-central-1.amazonaws.com/dev/users
//   PUT - https://b13gd54k3g.execute-api.eu-central-1.amazonaws.com/dev/users/{id}
//   DELETE - https://b13gd54k3g.execute-api.eu-central-1.amazonaws.com/dev/users/{id}
//   POST - https://b13gd54k3g.execute-api.eu-central-1.amazonaws.com/dev/signup ✅
//   POST - https://b13gd54k3g.execute-api.eu-central-1.amazonaws.com/dev/login ✅
