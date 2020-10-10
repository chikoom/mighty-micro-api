import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import mightyTheme from './components/theme';
import Home from './components/Home';
import './App.css';
import UpdateUser from './components/UpdateUser';
import UserList from './components/UserList';

function App() {
  return (
    <ThemeProvider theme={mightyTheme}>
      <UserList />
    </ThemeProvider>
  );
}

export default App;

//   POST - https://b13gd54k3g.execute-api.eu-central-1.amazonaws.com/dev/users
//   PUT - https://b13gd54k3g.execute-api.eu-central-1.amazonaws.com/dev/users/{id}
//   GET - https://b13gd54k3g.execute-api.eu-central-1.amazonaws.com/dev/users ✅
//   DELETE - https://b13gd54k3g.execute-api.eu-central-1.amazonaws.com/dev/users/{id} ✅
//   POST - https://b13gd54k3g.execute-api.eu-central-1.amazonaws.com/dev/signup ✅
//   POST - https://b13gd54k3g.execute-api.eu-central-1.amazonaws.com/dev/login ✅
