import React, { useState, useEffect } from 'react';
import User from './User';
import axios from 'axios';
import { Button } from '@material-ui/core';
import CreateNew from './CreateNew';
import '../styles/App.css';

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
      <div className="btn-container">
        <Button variant="contained" color="default" onClick={logOut}>
          LogOut
        </Button>
        <Button variant="contained" color="primary" onClick={toggleCreate}>
          Add New User
        </Button>
      </div>
      {isCreate && <CreateNew creteNewUser={creteNewUser} />}
      <h1>All Users:</h1>
      <div className="list-container">
        {list.map((usr) => (
          <User key={usr.id} userData={usr} removeUser={removeUser} />
        ))}
      </div>
    </>
  );
};
export default UserList;
