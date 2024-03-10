import "../styles/Home.css";
import {
  partners1,
  partners2,
  partners3,
  partners4,
  partners5,
  partners6,
  partners7,
  partners8,
  partners9,
  partners10,
  partners11,
  partners12,
  partners13,
  partners14,
  partners15,
  partners16,
  partners17,
  partners18,
} from "../assets/partners/index.js";

import HappyTravelers from "./HappyTravelers.jsx";
import DomesicTrip from "./DomesicTrip.jsx";
import InternationalTrip from "./InternationalTrip.jsx";
const Home = () => {
  return (
    <div className="home">
      <div className="cardslider">
        <div className="cardslide">
        <DomesicTrip />
        </div>
        <div className="cardslide">
        <InternationalTrip />
        </div>
      </div>
      <div className="partners">
        <h2>Our Partners</h2>
        <div className="partnerimg">
          <div className="img">
            <img src={partners1} alt="partnears" />
          </div>
          <div className="img">
            <img src={partners2} alt="partnears" />
          </div>
          <div className="img">
            <img src={partners3} alt="partnears" />
          </div>
          <div className="img">
            <img src={partners4} alt="partnears" />
          </div>
          <div className="img">
            <img src={partners5} alt="partnears" />
          </div>
          <div className="img">
            <img src={partners6} alt="partnears" />
          </div>
          <div className="img">
            <img src={partners7} alt="partnears" />
          </div>
          <div className="img">
            <img src={partners8} alt="partnears" />
          </div>
          <div className="img">
            <img src={partners9} alt="partnears" />
          </div>
          <div className="img">
            <img src={partners10} alt="partnears" />
          </div>
          <div className="img">
            <img src={partners11} alt="partnears" />
          </div>
          <div className="img">
            <img src={partners12} alt="partnears" />
          </div>
          <div className="img">
            <img src={partners13} alt="partnears" />
          </div>
          <div className="img">
            <img src={partners14} alt="partnears" />
          </div>
          <div className="img">
            <img src={partners15} alt="partnears" />
          </div>
          <div className="img">
            <img src={partners16} alt="partnears" />
          </div>
          <div className="img">
            <img src={partners17} alt="partnears" />
          </div>
          <div className="img">
            <img src={partners18} alt="partnears" />
          </div>
        </div>
      </div>
      <div className="happytravelers">
        <HappyTravelers />
      </div>
    </div>
  );
};

export default Home;
