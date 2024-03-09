import { useState, useEffect } from "react";
import axios from "axios";
import { FaAngleRight } from "react-icons/fa6";
import Card from "../components/Card";
import "../styles/CardScroller.css";

const CardScroller = ({ details }) => {
  const [trip, setTrip] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(trip)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/trips/all-trips"
        );
        setTrip(response.data.message);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const [currentSet, setCurrentSet] = useState(0);

  const handleNextSet = () => {
    setCurrentSet((prevSet) => (prevSet + 1) % Math.ceil(trip.length / 4));
  };

  return (
    <>
      <div className="domesticdes">
        <div className="domesticfirst">
          <div className="domdata">
            <h3>{details}</h3>
          </div>
          <div className="cards">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              trip.map((card, index) => (
                <Card key={index} {...card} className="card" />
              ))
            )}
          </div>
        </div>
        <div className="domesticsecond">
          <div className="round">
            <FaAngleRight className="arrow-button" onClick={handleNextSet} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardScroller;
