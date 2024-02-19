import PropTypes from "prop-types";
import "../styles/Card.css";
import { GoTag } from "react-icons/go";

const Card = ({ img, savings, destanition,details, price }) => {
  return (
    <div className="card">
      <div className="cardimg">
        <img src={img} alt="image" />
      </div>
      <div className="cardinfo">
        <div className="cardtop">
          <GoTag className="tag" />

          <span>{savings}</span>
        </div>
        <div className="cardbottom">
          <h2>{destanition}</h2>
          <p className="cardprice">
            <span>{details}</span>
            <strong>{price}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.object.isRequired,
  savings: PropTypes.string.isRequired,
  destanition: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Card;
