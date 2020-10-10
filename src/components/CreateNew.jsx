import React, { useState } from 'react';

import { Button, FormControl, makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  submitBtn: {
    marginTop: '2em',
    marginBottom: '2em',
  },
}));

const UpdateUser = (props) => {
  const { creteNewUser } = props;
  const classes = useStyles();

  const [userValues, setUserValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleUserInput = (e) => {
    console.log(e.target.name);
    setUserValues({
      ...userValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateSubmit = () => {
    creteNewUser(userValues);
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
