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
import { LiaGreaterThanSolid } from "react-icons/lia";
import axios from "axios";
import HappyTravelers from "./HappyTravelers.jsx";
import { useEffect, useState } from "react";
import Card from "../components/Card.jsx";

const Home = () => {
  const [domesticTrips, setDomesticTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [internationalTrips, setInternationalTrips] = useState([]);

  useEffect(() => {
    const fetchAllTrips = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/trips/all-trips"
        );
        const allTripsData = response.data.message;

        // Use Promise.all to wait for both filters to complete
        const [domesticTripsData, internationalTripsData] = await Promise.all([
          allTripsData.filter((trip) => trip.type === "domestic"),
          allTripsData.filter((trip) => trip.type === "international"),
        ]);

        setDomesticTrips(domesticTripsData);
        setInternationalTrips(internationalTripsData);
      } catch (error) {
        console.error("Error fetching all trips:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllTrips();
  }, []);

  return (
    <div className="home">
      <div className="cardslider">
        <div className="data">
          <div className="cardslide">
            <h3>Trending Domestic Destination</h3>
            <div className="tripdata">
              {loading ? (
                <h1>Loading...</h1>
              ) : (
                domesticTrips?.map((trip) => (
                  <Card
                    key={trip.id}
                    image={trip.image}
                    location={trip.location}
                    price={trip.price}
                    saveprice={trip.saveprice}
                  />
                ))
              )}
            </div>
          </div>
          <div className="cardslide">
            <h3>Trending International Destination</h3>
            <div className="tripdata">
              {loading ? (
                <h1>loading...</h1>
              ) : (
                internationalTrips?.map((trip) => (
                  <Card
                    key={trip.id}
                    image={trip.image}
                    location={trip.location}
                    price={trip.price}
                    saveprice={trip.saveprice}
                  />
                ))
              )}
            </div>
          </div>
        </div>
        <div className=" btnwrapper">
          <div className="btndiv">
            <LiaGreaterThanSolid
              className="btn"
              // onClick={() => handleLoadMore()}
            />
          </div>
          <div className="btndiv">
            <LiaGreaterThanSolid
              className="btn"
              // onClick={() => handleLoadMore()}
            />
          </div>
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
