import { useState } from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import "../styles/CardSlider.css";

const CardSlider = ({ cards }) => {
  const [activeCard, setActiveCard] = useState(0);

  const nextCard = () => {
    setActiveCard((prevActiveCard) =>
      prevActiveCard === cards.length - 1 ? 0 : prevActiveCard + 1
    );
  };

  const prevCard = () => {
    setActiveCard((prevActiveCard) =>
      prevActiveCard === 0 ? cards.length - 1 : prevActiveCard - 1
    );
  };

  return (
    <div className="card-slider">
      <div>
        <button onClick={prevCard}>Previous</button>
      </div>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${index === activeCard ? "active" : ""}`}
          >
            <Card {...card} />
          </div>
        ))}
      </div>
      <div>
        <button onClick={nextCard}>Next</button>
      </div>
    </div>
  );
};

CardSlider.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      btntext: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardSlider;
