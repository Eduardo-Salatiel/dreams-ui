import { useRef, useState } from "react";
import "./style.scss";

const Carousel = ({ itemWidth = 300, children }) => {
  const cardsContainerRef = useRef();
  const [leftPosition, setLeftPosition] = useState(0);

  const handlePrevClick = () => {
    if (leftPosition > 0) {
      cardsContainerRef.current.style.left = `${
        -1 * (leftPosition - itemWidth)
      }px`;
      setLeftPosition(leftPosition - itemWidth);
    }
  };

  const handleNextClick = () => {
    if (
      leftPosition <
      cardsContainerRef.current.offsetWidth -
        cardsContainerRef.current.parentElement.offsetWidth
    ) {
      cardsContainerRef.current.style.left = `${
        -1 * (leftPosition + itemWidth)
      }px`;
      
    setLeftPosition(leftPosition + itemWidth);
    }
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        <button
          className="carousel-previous"
          type="button"
          onClick={handlePrevClick}
        ></button>
        <div className="carousel-cards-container" ref={cardsContainerRef}>
          {children}
        </div>
        <button
          className="carousel-next"
          type="button"
          onClick={handleNextClick}
        ></button>
      </div>
    </div>
  );
};

export default Carousel;
