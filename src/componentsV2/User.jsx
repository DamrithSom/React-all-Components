import React from "react";

const names = [" Lin", " Sok", " Ty", "Ra"];

const User = () => {
  return (
    <div>
      {names.map((n) => (
        <h3>{n}</h3>
      ))}
    </div>
  );
};
export default User;
