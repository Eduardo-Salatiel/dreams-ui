import nikeShoes from "./../../assets/img/nike_shoes.png";
import Tilt from "react-parallax-tilt";
import "./style.scss";

const MousemoveProductCard = () => {
  return (
    <Tilt className="mousemove-product-card" perspective={500}>
      <div className="card">
        <h2 className="name">Nike Shoes</h2>
        <a href="*" className="buy">
          Comprar
        </a>
        <div className="circle" />
        <img src={nikeShoes} alt="product" />
      </div>
    </Tilt>
  );
};

export default MousemoveProductCard;
