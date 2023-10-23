import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={1500}
        showThumbs={false}
        // showIndicators={false}
      >
        <div>
          <img src={img1} alt="images1" />
          <p className="legend">Fullstack</p>
        </div>
        <div>
          <img src={img2} alt="images2" />
          <p className="legend ">Peer-to-peer Support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
