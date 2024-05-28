import "./Product.css";

const Card = ({ image, heard, discription, coust }) => {
  return (
    <div className="article">
      <img src={image} alt="my Coffee" />
      <h3>{heard}</h3>
      <p>{discription}</p>
      <span>{coust}</span>
    </div>
  );
};

export default Card;
