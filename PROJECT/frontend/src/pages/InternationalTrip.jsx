import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import "../styles/Trips.css";

const InternationalTrip = () => {
  const [internationalTrip, setInterNationalTrip] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllTrips = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/trips/all-trips"
        );
        const allTripsData = response.data.message;

        const internationalTrip = allTripsData.filter(
          (trip) => trip.type === "international"
        );
        setInterNationalTrip(internationalTrip);
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
        internationalTrip.map((trip) => (
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

export default InternationalTrip;
