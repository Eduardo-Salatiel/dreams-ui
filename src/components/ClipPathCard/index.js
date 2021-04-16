import clipImage from "./../../assets/img/clippathCard.jpg";
import './style.scss';

const ClipPathCard = () => {
  return (
    <div className="clip-path-card">
      <div className="clip-path-card-image">
        <img src={clipImage} alt="dreams ui" />
      </div>
      <div className="clip-path-card-content">
        <h2>Memories</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
          consequuntur suscipit v Lorem ipsum dolor sit amet consectetur.
        </p>
        <button type="button">Aceptar</button>
      </div>
    </div>
  );
};

export default ClipPathCard;
