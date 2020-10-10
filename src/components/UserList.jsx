import React, { useState, useEffect } from 'react';
import User from './User';
import axios from 'axios';

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

  console.log(list);
  return (
    <>
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
        {list.map((user, index) => (
          <User key={index} userData={user} />
        ))}
      </div>
    </>
  );
};
export default UserList;
