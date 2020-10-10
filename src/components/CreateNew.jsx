import React, { useState } from 'react';
import axios from 'axios';

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

const UpdateUser = (props) => {
  const { userData } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [user, setUser] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
  });

  const [value, setValue] = useState(0);

  const [userValues, setUserValues] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleUserInput = (e) => {
    console.log(e.target.name);
    setUserValues({
      ...userValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateSubmit = () => {
    console.log(userValues);
    console.log(userData.id);
    axios
      .post(
        `https://b13gd54k3g.execute-api.eu-central-1.amazonaws.com/dev/users/${userData.id}`,
        userValues
      )
      .then((res) => {
        console.log(res);
        const { firstName, lastName, email } = res.data;
        const user = { firstName: firstName, lastName: lastName, email: email };
        // setUser(user);
        console.log(user);
      });
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <FormControl fullWidth className={classes.margin}>
          <TextField
            name="firstName"
            label="firstName"
            value={userValues.firstName}
            onChange={handleUserInput}
          />
          <TextField
            name="lastName"
            label="lastName"
            value={userValues.lastName}
            onChange={handleUserInput}
          />
          <TextField
            name="email"
            label="email"
            value={userValues.email}
            onChange={handleUserInput}
          />
          <TextField
            name="password"
            label="password"
            type="password"
            value={userValues.password}
            onChange={handleUserInput}
          />
          <Button
            variant="contained"
            className={classes.submitBtn}
            color="primary"
            onClick={handleUpdateSubmit}
          >
            Create
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default UpdateUser;
