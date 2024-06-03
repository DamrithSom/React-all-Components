import React from "react";
import Users from "./Users";
import data from "../componentsV4/data";

const UserList = () => {
  const [userX, setUserX] = React.useState(data);
  const userID = (id) => {
    const newData = userX.filter(uf=>uf.id !==id)
    setUserX(newData)
  };

  const click_Remove = () => {
    setUserX([]);
  };
  return (
    <div>
      {userX.map((n) => (
        <Users {...n} getID={userID} key={n.id} />
      ))}
      <button
        onClick={click_Remove}
        className="text-2xl text-white bg-red-700 px-6 py-1 rounded-lg"
      >
        Remove All
      </button>
    </div>
  );
};

export default UserList;
