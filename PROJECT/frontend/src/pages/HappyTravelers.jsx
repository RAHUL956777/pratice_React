import { RiStarSFill } from "react-icons/ri";
import cp1 from "../assets/cp1.jpg";
import cp2 from "../assets/cp2.jpg";
import "../styles/HappyTravelers.css";

const HappyTravelers = () => {
  return (
    <div className="travelerdetails">
      <div className="travelerdetails-first">
        <h1>Over 40 Lac+ Happy Travelers</h1>
        <p>
          Real travelers, Real stories. Real opinions to help you to make right
          choice.
        </p>
      </div>
      <div className="travelerdetails-second">
        <button>Nihant&apos;s Maurititius vacation</button>
        <button>Ankit&apos;s perfect maldives honeymoon</button>
        <button>Akash&apos;s luxurious honeymoon</button>
        <button>Neha&apos;s romantic adventure</button>
        <button>Falak&apos;s Romantic Holiday in Europe</button>
        <button className="bg-lightskyblue">
          A Magnificent Greek Honeymoon
        </button>
        <button>Double delight honeymoon</button>
        <button className="lightskyblue">View All</button>
      </div>
      <div className="travelerdetails-last">
        <div className="travelerdetails-last-image">
          <img src={cp1} alt="image" />
          <img src={cp2} alt="image" />
        </div>
        <div className="travelerdetails-last-data">
          <h2>Sonali&apos;s Mediterranean Romantic Trip To Greece</h2>
          <div className="travelerdetails-last-data-button">
            <button>#Sea</button>
            <button>#Romantic</button>
            <button>#Beach</button>
            <button>#Nightlife</button>
          </div>
          <p>
            Sonali and her husband went on a glamorous romantic trip to greece
            and it was truly special in every manner.They enjoyed the
            magnificient charm of the Aegean Sea and the old-world charm of
            Santorini.
          </p>
          <div className="travelerdetails-last-data-author">
            <div className="first">
              <div className="firstimg">
                <img src={cp1} alt="image" />
              </div>
              <div className="firstdata">
                <h3>Sonali Mahajan</h3>
                <p>On 12th May, 2021</p>
              </div>
            </div>
            <div className="second">
              <div className="second-stars">
                <RiStarSFill className="icons"/>
                <RiStarSFill className="icons"/>
                <RiStarSFill className="icons"/>
                <RiStarSFill className="icons"/>
              </div>
              <p>Trip to Europe</p>
            </div>
          </div>
          <div className="travelerdetails-last-buttons">
          <button id="btn1">Read Full Story</button>
          <button id="btn2">Get Quotes For This Package</button>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default HappyTravelers;
