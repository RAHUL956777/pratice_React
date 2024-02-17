import {
  explore,
  dubai,
  rajasthan,
  bali,
  meghalaya,
  singapore,
  switzerland,
  thailand,
  kashmir,
  vietnam,
  spitivalley,
  turkey,
  australia,
  ladakh,
  japan,
  bhutan,
  srilanka,
  sikkim,
  italy,
  kerala,
} from "../icons/index.js";
import "../styles/Navicon.css";

const Navicon = () => {
  return (
    <div className="naviconwrapper">
      <div className="search">
        <input type="text" placeholder="Search Holiday by Destination, Theme" />
        <div className="line"></div>
        <button>Search</button>
      </div>
      <div className="navicons">
        <div className="icondiv">
          <img src={explore} alt="image" />
          <span>Explore</span>
        </div>
        <div className="icondiv">
          <img src={dubai} alt="image" />
          <span>Dubai</span>
        </div>
        <div className="icondiv">
          <img src={rajasthan} alt="image" />
          <span>Rajasthan</span>
        </div>
        <div className="icondiv">
          <img src={bali} alt="image" />
          <span>Bali</span>
        </div>
        <div className="icondiv">
          <img src={meghalaya} alt="image" />
          <span>Meghalaya</span>
        </div>
        <div className="icondiv">
          <img src={singapore} alt="image" />
          <span>Singapore</span>
        </div>
        <div className="icondiv">
          <img src={switzerland} alt="image" />
          <span>Switzerland</span>
        </div>
        <div className="icondiv">
          <img src={thailand} alt="image" />
          <span>Thailand</span>
        </div>
        <div className="icondiv">
          <img src={kashmir} alt="image" />
          <span>Kashmir</span>
        </div>
        <div className="icondiv">
          <img src={vietnam} alt="image" />
          <span>Vietnam</span>
        </div>
        <div className="icondiv">
          <img src={spitivalley} alt="image" />
          <span>Splitvalley</span>
        </div>
        <div className="icondiv">
          <img src={turkey} alt="image" />
          <span>Turkey</span>
        </div>
      </div>
      <div className="navicons">
        <div className="icondiv">
          <img src={australia} alt="image" />
          <span>Australia</span>
        </div>
        <div className="icondiv">
          <img src={ladakh} alt="image" />
          <span>Ladakh</span>
        </div>
        <div className="icondiv">
          <img src={japan} alt="image" />
          <span>Japan</span>
        </div>
        <div className="icondiv">
          <img src={bhutan} alt="image" />
          <span>Bhutan</span>
        </div>
        <div className="icondiv">
          <img src={srilanka} alt="image" />
          <span>Sri Lanka</span>
        </div>
        <div className="icondiv">
          <img src={sikkim} alt="image" />
          <span>Sikkim</span>
        </div>
        <div className="icondiv">
          <img src={italy} alt="image" />
          <span>Italy</span>
        </div>
        <div className="icondiv">
          <img src={kerala} alt="image" />
          <span>Kerala</span>
        </div>
      </div>
    </div>
  );
};

export default Navicon;
