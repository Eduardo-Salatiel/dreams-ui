import productImg from "./../../assets/img/headphones.png";
import "./style.scss";

const SimpleProductCard = () => {
  return (
    <div className="simple-product-card">
      <div className="product-img">
        <img src={productImg} alt="product" />
      </div>
      <div className="content">
        <h3>Wireless Headphones</h3>
        <h2 className="price">
          $40.<small>99</small>
        </h2>
        <a href="*" className="buy">
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default SimpleProductCard;
