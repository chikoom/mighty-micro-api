import React, { useState } from 'react';

import { Button, FormControl, makeStyles, TextField } from '@material-ui/core';

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
  const { userData, updateUser } = props;
  const classes = useStyles();

  const [userValues, setUserValues] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
  });

  const handleUserInput = (e) => {
    console.log(e.target.name);
    setUserValues({
      ...userValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateSubmit = () => {
    updateUser(userValues);
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
          <Button
            variant="contained"
            className={classes.submitBtn}
            color="primary"
            onClick={handleUpdateSubmit}
          >
            UPDATE
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default UpdateUser;
