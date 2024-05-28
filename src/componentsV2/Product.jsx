import React from "react";
import Card from "./Card";
import "./Product.css";
function Product() {
  const pro = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600",
      heard: "Espresso",
      discription:
        "ipsum dolor sit amet consectetur adipisicing elit. Provident, non.",
      coust: "2.78$",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/14704657/pexels-photo-14704657.jpeg?auto=compress&cs=tinysrgb&w=600",
      heard: "Latte",
      discription:
        "ipsum dolor sit amet consectetur adipisicing elit. Provident, non.",
      coust: "2.05$",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/12756108/pexels-photo-12756108.jpeg?auto=compress&cs=tinysrgb&w=600",
      heard: "Lungo",
      discription:
        "ipsum dolor sit amet consectetur adipisicing elit. Provident, non.",
      coust: "2.78$",
    },
  ];
  const filterPro = pro.filter((fs) => {
    return fs.coust == "2.78$";
  });
  // console.log(filterPro)
  return (
    <div className="allProduct">
      {filterPro.map((n) => {
        const { image, heard, discription, coust, id } = n;
        return (
          <Card
            key={id}
            image={image}
            heard={heard}
            discription={discription}
            coust={coust}
          ></Card>
        );
      })}
    </div>
  );
}

export default Product;
