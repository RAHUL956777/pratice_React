import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
} from "../assets/images/index.js";
import Card from "../components/Card";
import "../styles/CardScroller.css";


// eslint-disable-next-line react/prop-types
const CardScroller = ({ details }) => {

  const cardsData = [
    {
      img: img1,
      savings: "Save INR 30,000",
      destanition: "GOA",
      details: "starting price",
      price: " ₹22500",
    },
    {
      img: img1,
      savings: "Save INR 30,000",
      destanition: "GOA",
      details: "starting price",
      price: " ₹22500",
    },
    {
      img: img1,
      savings: "Save INR 30,000",
      destanition: "GOA",
      details: "starting price",
      price: " ₹22500",
    },
    {
      img: img1,
      savings: "Save INR 30,000",
      destanition: "GOA",
      details: "starting price",
      price: " ₹22500",
    },
    {
      img: img2,
      savings: "Save INR 30,000",
      destanition: "GOA",
      details: "starting price",
      price: " ₹22500",
    },
    {
      img: img3,
      savings: "Save INR 30,000",
      destanition: "GOA",
      details: "starting price",
      price: " ₹22500",
    },
    {
      img: img4,
      savings: "Save INR 30,000",
      destanition: "GOA",
      details: "starting price",
      price: " ₹22500",
    },
    {
      img: img5,
      savings: "Save INR 30,000",
      destanition: "GOA",
      details: "starting price",
      price: " ₹22500",
    },
    {
      img: img6,
      savings: "Save INR 30,000",
      destanition: "GOA",
      details: "starting price",
      price: " ₹22500",
    },
    {
      img: img7,
      savings: "Save INR 30,000",
      destanition: "GOA",
      details: "starting price",
      price: " ₹22500",
    },
    {
      img: img7,
      savings: "Save INR 30,000",
      destanition: "GOA",
      details: "starting price",
      price: " ₹22500",
    },
    {
      img: img7,
      savings: "Save INR 30,000",
      destanition: "GOA",
      details: "starting price",
      price: " ₹22500",
    },
  ];

  const [currentSet, setCurrentSet] = useState(0);

  const handleNextSet = () => {
    setCurrentSet((prevSet) => (prevSet + 1) % Math.ceil(cardsData.length / 4));
  };

  return (
    <>
      <div className="domesticdes">
        <div className="domesticfirst">
          <div className="domdata">
            <h3>{details}</h3>
          </div>
          <div className="cards">
            {cardsData
              .slice(currentSet * 4, currentSet * 4 + 4)
              .map((card, index) => (
                <Card key={index} {...card} className="card" />
              ))}
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
