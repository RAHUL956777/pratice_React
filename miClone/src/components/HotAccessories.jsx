import HotItemCard from "./HotItemCard";
import "../styles/HotAccessories.css";

const HotAccessories = ({ music, musicCover }) => {
  return (
    <div className="HotAccessories">
      <div>
        <img src={musicCover} alt="cover" />
      </div>

      <div>
        {music.map((item, index) => (
          <HotItemCard
            key={item.name}
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default HotAccessories;
