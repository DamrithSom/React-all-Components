import React from "react";
import data from "./data";
const Users = (props) => {
const {img, name, age, getID, id} = props
const handerClick = ()=>{
  getID(id)
}
  return (
    <article class="styleProfiles">
      <div class="profile-info">
        <img src={img} alt="my-Profile1" />
        <h3 class="header-name">{name}</h3>
        <h3 class="age">{age}</h3>
      </div>
      <button onClick={handerClick} class="btn-Remove">Remove</button>
    </article>
  );
};

export default Users;
