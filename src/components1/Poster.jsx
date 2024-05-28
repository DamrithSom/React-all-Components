import React from "react";
import "./Poster.css";
const Poster = ({i, name, children}) => {
  return (
    <>
      <section>
        <article>
          <img
            className="myProfile"
            src={i}
            alt="profile"
          />
          <h2 className="myHeader">{name}</h2>
          {children}
          <p className="myText">
            Happy-go-lucky pup, always wagging tail, loves treats, fetch pro,
            snuggle expert, loyal companion, playful spirit, belly rub
            enthusiast, best friend foreve
          </p>
        </article>
      </section>
    </>
  );
};

export default Poster;
