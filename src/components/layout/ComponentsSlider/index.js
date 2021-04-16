import "./style.scss";
import { carouselArray } from "../../../constans/arrayComponents";
import { useState } from "react";

const ComponentsSlider = () => {
  const [currentComponent, setCurrentComponent] = useState(0);
  const carouselSize = carouselArray.length;

  const handleNextClick = () => {
    setCurrentComponent(
      currentComponent === carouselSize - 1 ? 0 : currentComponent + 1
    );
  };

  const handlePrevClick = () => {
    setCurrentComponent(
      currentComponent === 0 ? carouselSize - 1 : currentComponent - 1
    );
  };

  return (
    <div className="components-slider">
      <i class="fas fa-arrow-circle-left fa-2x" onClick={handlePrevClick}></i>
      {carouselArray.map((slide, index) => {
        return (
          <div className={index === currentComponent ? 'slide active' : 'slide'}>
            {currentComponent === index && slide.component}
          </div>
        );
      })}
      <i class="fas fa-arrow-circle-right fa-2x" onClick={handleNextClick}></i>
    </div>
  );
};

export default ComponentsSlider;
