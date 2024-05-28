import React from "react";

const Profiles = (props) => {
  const { id, name, position, getId} = props;
  const onClickbtn=()=>{
    getId(id)
  }
  return (
    <>
      {/* <h3>{id}</h3> */}
      <h3>{name}</h3>
      <h3>{position}</h3>
      <button onClick={onClickbtn}>Click</button>
    </>
  );
};

export default Profiles;
