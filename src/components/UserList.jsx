import React, { useState, useEffect } from 'react';
import User from './User';
import axios from 'axios';
import { Button } from '@material-ui/core';
import CreateNew from './CreateNew';

const UserList = (props) => {
  const { user, setUser } = props;
  const [list, setList] = useState([]);
  const [isCreate, setIsCreate] = useState(false);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () =>
    axios
      .get(
        'https://b13gd54k3g.execute-api.eu-central-1.amazonaws.com/dev/users'
      )
      .then((res) => {
        const usersList = res.data;
        setList(usersList);
      });

  const removeUser = (id) => {
    axios
      .delete(
        `https://b13gd54k3g.execute-api.eu-central-1.amazonaws.com/dev/users/${id}`
      )
      .then((res) => {
        const index = list.findIndex((user) => user.id === id);
        const updatedList = [...list];
        updatedList.splice(index, 1);
        setList(updatedList);
      })
      .catch((err) => {
        alert('something went wrong ' + err);
      });
  };

  const toggleCreate = () => {
    setIsCreate(!isCreate);
  };

  const creteNewUser = (values) => {
    axios
      .post(
        `https://b13gd54k3g.execute-api.eu-central-1.amazonaws.com/dev/users`,
        values
      )
      .then((res) => {
        const user = res.data;
        const newList = [...list];
        newList.unshift(user);
        setList(newList);
      })
      .catch((err) => {
        alert('something went wrong ' + err + ' try using deferent email');
      });
    toggleCreate();
  };

  const logOut = () => {
    setUser({});
  };

  return (
    <>
      <Button
        style={{ margin: '7px' }}
        variant="contained"
        color="primary"
        onClick={logOut}
      >
        LogOut
      </Button>
      <Button
        style={{ margin: '7px' }}
        variant="contained"
        color="primary"
        onClick={toggleCreate}
      >
        Add New User
      </Button>
      {isCreate && <CreateNew creteNewUser={creteNewUser} />}
      <h1>All Users:</h1>
      <div
        style={{
          display: 'grid',
          // flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="list-container"
      >
        {list.map((user) => (
          <User key={user.id} userData={user} removeUser={removeUser} />
        ))}
      </div>
    </>
  );
};
export default UserList;
