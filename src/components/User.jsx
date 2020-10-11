import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UpdateUser from './UpdateUser';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const User = (props) => {
  const classes = useStyles();

  const { userData, removeUser } = props;

  const [editor, setEditor] = useState(false);

  const [user, setUser] = useState(userData);

  const toggleEdit = () => {
    setEditor(!editor);
  };
  const onRemove = () => {
    removeUser(userData.id);
  };

  const onUpdate = (values) => {
    axios
      .put(
        `https://b13gd54k3g.execute-api.eu-central-1.amazonaws.com/dev/users/${userData.id}`,
        values
      )
      .then((res) => {
        const { firstName, lastName, email } = res.data;
        const user = { firstName: firstName, lastName: lastName, email: email };
        setUser(user);
        toggleEdit();
      });
  };

  return (
    <>
      <Card style={{ margin: '12px' }} className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {`Name:`}
          </Typography>
          <Typography variant="h5" component="h2">
            {` ${user.firstName} ${user.lastName}`}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {`${user.email}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={toggleEdit}
            size="small"
          >
            Update
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={onRemove}
            size="small"
          >
            Remove
          </Button>
        </CardActions>
      </Card>
      {editor && <UpdateUser userData={user} updateUser={onUpdate} />}
    </>
  );
};

export default User;
