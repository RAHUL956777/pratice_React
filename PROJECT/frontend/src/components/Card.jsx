import PropTypes from "prop-types";
import "../styles/Card.css";
import { GoTag } from "react-icons/go";

const Card = ({ image, location, price, saveprice }) => {
  return (
    <div className="card">
      <div className="cardimg">
        <img src={image} alt="image" />
      </div>
      <div className="cardinfo">
        <div className="cardtop">
          <GoTag className="tag" />

          <span>Save INR ₹{saveprice}</span>
        </div>
        <div className="cardbottom">
          <h2>{location}</h2>
          <p className="cardprice">
            <span>Starting Price</span>
            <strong>₹{price}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  savings: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  saveprice: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Card;
