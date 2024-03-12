import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import "../styles/Trips.css";

const DomesicTrip = () => {
  const [domesticTrips, setDomesticTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllTrips = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/trips/all-trips"
        );
        const allTripsData = response.data.message;

        const domesticTripsData = allTripsData.filter(
          (trip) => trip.type === "domestic"
        );
        // const internationalTripsData = allTripsData.filter(trip => trip.type === 'international');

        setDomesticTrips(domesticTripsData);
      } catch (error) {
        console.error("Error fetching all trips:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllTrips();
  }, []);
  return (
    <div className="trips">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        domesticTrips.map((trip) => (
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
  );
};

export default DomesicTrip;
