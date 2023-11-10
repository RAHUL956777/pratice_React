import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({ start }) => {
  return (
    <Carousel fade>
      {start.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item} alt="banner" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
