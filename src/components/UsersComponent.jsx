import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/users";
import Card from "./CardComponent";

const Users = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users.loading);
  const users = useSelector((state) => state.users.users);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      {users.length > 0 &&
        users.map((user) => <Card user={user} key={user.id} />)}
      {users.length === 0 && !loading && <p>Not available!</p>}
      {error && !loading && <p>{error}</p>}
    </>
  );
};

export default Users;
