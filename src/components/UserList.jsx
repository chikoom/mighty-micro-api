import React, { useState, useEffect } from 'react';
import User from './User';
import axios from 'axios';
import { Button } from '@material-ui/core';

const UserList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () =>
    axios
      .get(
        'https://b13gd54k3g.execute-api.eu-central-1.amazonaws.com/dev/users'
      )
      .then((res) => {
        console.log(res);
        const usersList = res.data;
        setList(usersList);
      });

  const removeUser = (id) => {
    axios
      .delete(
        `https://b13gd54k3g.execute-api.eu-central-1.amazonaws.com/dev/users/${id}`
      )
      .then((res) => {
        console.log(res);
        const index = list.findIndex((user) => user.id === id);
        const updatedList = [...list];
        updatedList.splice(index, 1);
        setList(updatedList);
      });
  };

  const updateUser = () => {};

  console.log(list);
  return (
    <>
      <Button>Add New User</Button>

      <h1>All Users:</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="list-container"
      >
        {list.map((user) => (
          <User
            key={user.id}
            userData={user}
            removeUser={removeUser}
            updateUser={updateUser}
          />
        ))}
      </div>
    </>
  );
};
export default UserList;
