import PropTypes from "prop-types";
import "../styles/Card.css";

const Card = ({ img, description, price, btntext, details }) => {
  return (
    <div className="card">
      <div className="imgBox">
        <img src={img} alt="cardimage" />
      </div>
      <div className="card-data">
        <div className="cardupper">
        <p>{details}</p>
        </div>
        <div className="cardbottom">
          <p>{description}</p>
          <h2>₹{price}</h2>
        <button>{btntext}</button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  btntext: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default Card;
