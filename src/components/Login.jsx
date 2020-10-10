import React, { useState } from 'react';
import axios from 'axios';
import SwipeableViews from 'react-swipeable-views';
import TabPanel from './TabPanel';

import {
  Box,
  Button,
  FormControl,
  Grid,
  makeStyles,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography,
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
    console.log(e.target.name);
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupInput = (e) => {
    console.log(e.target.name);
    setSignupValues({
      ...signupValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = () => {
    console.log(loginValues);
    axios
      .post(
        `https://b13gd54k3g.execute-api.eu-central-1.amazonaws.com/dev/login`,
        loginValues
      )
      .then((res) => {
        console.log(res);
        const { firstName, lastName, email } = res.data;
        const user = { firstName: firstName, lastName: lastName, email: email };
        setUser(user);
        console.log(user);
      });
  };

  const handleSignUpSubmit = () => {
    console.log(signupValues);
    axios
      .post(
        `https://b13gd54k3g.execute-api.eu-central-1.amazonaws.com/dev/signup`,
        signupValues
      )
      .then((res) => {
        console.log(res);
        const { firstName, lastName, email } = res.data;
        const user = { firstName: firstName, lastName: lastName, email: email };
        setUser(user);
        console.log(user);
      });
  };

  return (
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
