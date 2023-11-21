import "../styles/nav.css";
import { logo } from "../data/data.json";
import { searchIcon } from "../assets/index";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" id="logoImage"/>
        </a>
        </div>
        <a className="navlinks" href="/miphones">
          Mi Phones
        </a>
        <a className="navlinks" href="/redmiphones">
          Redmi Phones
        </a>
        <a className="navlinks" href="/tv">
          TV
        </a>
        <a className="navlinks" href="/laptops">
          Laptops
        </a>
        <a className="navlinks" href="/lifestyle">
          Fitness & Lifestyle
        </a>
        <a className="navlinks" href="/home">
          {" "}
          Home
        </a>
        <a className="navlinks" href="/audio">
          {" "}
          Radio
        </a>
        <a className="navlinks" href="/accessories">
          {" "}
          Accessories
        </a>

        <div className="searchbox">
          <input type="text" placeholder="Search products" />
          {searchIcon}
        </div>
      
    </div>
  );
};

export default Navbar;
