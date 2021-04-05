import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/users";
import Card from "./CardComponent";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(
      getUsers([
        {
          id: 1,
          name: "Leanne Graham",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
          },
        },
      ])
    );
  }, []);

  return (
    <>
      {users.length > 0 &&
        users.map((user) => <Card user={user} key={user.id} />)}
        {users.length === 0 && <p>Not available!</p>}
    </>
  );
};


export default Users;