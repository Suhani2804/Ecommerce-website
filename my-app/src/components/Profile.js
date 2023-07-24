import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const Profile = (props) => {
  const { name } = props;
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Use Effect Called");

    const timer = setInterval(() => {
      console.log("timer in functional component");
    }, 1000);

    fetchUsers();

    return () => {
      clearInterval(timer);
    };
  }, []);

  async function fetchUsers() {
    const result = await fetch("https://api.github.com/users");

    const usersData = await result.json();

    setUsers(usersData);

    console.log("users", users);
  }

  function updateCount() {
    setCount(count + 1);
    setCount1(10);
  }

  console.log("body is rendered");

  return (
    <>
      <h1>Profile Component</h1>
      <h2>{name}</h2>
      <h2>Count:{count}</h2>
      <h2>Count1: {count1}</h2>
      <button onClick={updateCount}>Update Count</button>
      <Outlet />
    </>
  );
};

export default Profile;