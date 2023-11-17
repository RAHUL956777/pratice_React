import HotItemCard from "./HotItemCard";
import "../styles/HotAccessories.css";

const HotAccessories = ({
  music,
  musicCover,
  smartDevice,
  smartDeviceCover,
  home,
  homeCover,
  lifeStyle,
  lifeStyleCover,
  mobileAccessories,
  mobileAccessoriesCover,
}) => {
  return (
    <div className="HotAccessories">
      <div>
        <img
          src={
            musicCover ||
            smartDeviceCover ||
            homeCover ||
            lifeStyleCover ||
            mobileAccessoriesCover
          }
          alt="cover"
        />
      </div>

      <div>
        {music &&
          music.map((item, index) => (
            <HotItemCard
              key={item.name}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}
        {smartDevice &&
          smartDevice.map((item, index) => (
            <HotItemCard
              key={item.name}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}
        {home &&
          home.map((item, index) => (
            <HotItemCard
              key={item.name}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}
        {lifeStyle &&
          lifeStyle.map((item, index) => (
            <HotItemCard
              key={item.name}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}
        {mobileAccessories &&
          mobileAccessories.map((item, index) => (
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
