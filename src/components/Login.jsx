import React, { useState } from 'react';
import axios from 'axios';
import UserList from './UserList';
import SwipeableViews from 'react-swipeable-views';
import TabPanel from './TabPanel';

import {
  Button,
  FormControl,
  makeStyles,
  Paper,
  Tab,
  Tabs,
  TextField,
  useTheme,
} from '@material-ui/core';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  submitBtn: {
    marginTop: '2em',
    marginBottom: '2em',
  },
}));

const Login = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [user, setUser] = useState({});

  const [value, setValue] = useState(0);
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: '',
  });
  const [signupValues, setSignupValues] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleLoginInput = (e) => {
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupInput = (e) => {
    setSignupValues({
      ...signupValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = () => {
    axios
      .post(
        `https://b13gd54k3g.execute-api.eu-central-1.amazonaws.com/dev/login`,
        loginValues
      )
      .then((res) => {
        const { firstName, lastName, email } = res.data;
        const user = { firstName: firstName, lastName: lastName, email: email };
        setUser(user);
      })
      .catch((err) => {
        alert('something went wrong ' + err + ' check your email and password');
      });
  };

  const handleSignUpSubmit = () => {
    axios
      .post(
        `https://b13gd54k3g.execute-api.eu-central-1.amazonaws.com/dev/signup`,
        signupValues
      )
      .then((res) => {
        const { firstName, lastName, email } = res.data;
        const user = { firstName: firstName, lastName: lastName, email: email };
        setUser(user);
      })
      .catch((err) => {
        alert('something went wrong ' + err + ' try using deferent email');
      });
  };

  return user.email ? (
    <UserList />
  ) : (
    <Paper elevation={2}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Login" {...a11yProps(0)} />
        <Tab label="Signup" {...a11yProps(1)} />
      </Tabs>

      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <form className={classes.root} noValidate autoComplete="off">
            <FormControl fullWidth className={classes.margin}>
              <TextField
                name="email"
                label="email"
                value={loginValues.email}
                onChange={handleLoginInput}
              />
              <TextField
                name="password"
                label="password"
                type="password"
                value={loginValues.password}
                onChange={handleLoginInput}
              />
              <Button
                variant="contained"
                className={classes.submitBtn}
                color="primary"
                onClick={handleLoginSubmit}
              >
                LOGIN
              </Button>
            </FormControl>
          </form>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <form className={classes.root} noValidate autoComplete="off">
            <FormControl fullWidth className={classes.margin}>
              <TextField
                name="firstName"
                label="firstName"
                value={signupValues.firstName}
                onChange={handleSignupInput}
              />
              <TextField
                name="lastName"
                label="lastName"
                value={signupValues.lastName}
                onChange={handleSignupInput}
              />
              <TextField
                name="email"
                label="email"
                value={signupValues.email}
                onChange={handleSignupInput}
              />
              <TextField
                name="password"
                label="password"
                type="password"
                value={signupValues.password}
                onChange={handleSignupInput}
              />
              <Button
                variant="contained"
                className={classes.submitBtn}
                color="primary"
                onClick={handleSignUpSubmit}
              >
                SIGNUP
              </Button>
            </FormControl>
          </form>
        </TabPanel>
      </SwipeableViews>
    </Paper>
  );
};

export default Login;
