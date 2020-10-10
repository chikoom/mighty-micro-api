import React, { useState, useEffect } from 'react';
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
  return <div>Hello</div>;
};
export default UserList;
