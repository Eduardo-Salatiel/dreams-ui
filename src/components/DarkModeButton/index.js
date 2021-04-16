import { useRef } from "react";
import "./style.scss";

const DarkModeButton = () => {
  const darkModeRef = useRef();

  const handleToggleClick = () => {
    console.log();
    darkModeRef.current.classList.toggle("active");
    darkModeRef.current.parentElement.parentElement.parentElement.classList.toggle(
      "active"
    );
  };

  return (
    <div
      className="dark-mode-button"
      onClick={handleToggleClick}
      ref={darkModeRef}
    >
      <i className="indicator"></i>
    </div>
  );
};

export default DarkModeButton;
