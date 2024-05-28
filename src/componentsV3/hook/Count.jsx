import React from "react";
import sound from "../sound/Tiny Button Push-SoundBible.com-513260752.wav";
const Count = () => {
  const [count, setCount] = React.useState(0);

  const Incre = () => {
    setCount(count + 1);
    const audio = new Audio(sound).play();
  };
  const Decre = () => {
    setCount(count - 1);
    const audio = new Audio(sound).play();
  };
  return (
    <div className="countStyle">
      <h3>{count}</h3>
      <button onClick={Incre}>Increment</button>
      <button onClick={Decre} className="xBtn">
        Decrement
      </button>
    </div>
  );
};

export default Count;
