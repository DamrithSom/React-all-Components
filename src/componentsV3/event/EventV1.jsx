import React from "react";
const EventV1 = () => {
//   const onChangeHandler = (e) => {
//     console.log(e.target.value);
//   };
//   const onClickMe = () => {
//     console.log("Click me");
//   };
  //   const onSubmitHandler = (e) => {
  //     e.preventDefault()
  //     console.log(e);
  //   };
  return (
    <>
      <form>
        <input type="text" />
        <button
          onClick={(e) => {
            e.preventDefault();
            return console.log(e);
          }}
        >
          Ckick Me
        </button>
      </form>
    </>
  );
};

export default EventV1;
