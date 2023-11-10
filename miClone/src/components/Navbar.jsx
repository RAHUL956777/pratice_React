import "../styles/nav.css";
import { logo } from "../data/data.json";
import { Link } from "react-router-dom";
import { searchIcon } from "../assets/index";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" id="logoImage"/>
        </Link>
        </div>
        <Link className="navlinks" to="/miphones">
          Mi Phones
        </Link>
        <Link className="navlinks" to="/redmiphones">
          Redmi Phones
        </Link>
        <Link className="navlinks" to="/tv">
          TV
        </Link>
        <Link className="navlinks" to="/laptops">
          Laptops
        </Link>
        <Link className="navlinks" to="/lifestyle">
          Fitness & Lifestyle
        </Link>
        <Link className="navlinks" to="/home">
          {" "}
          Home
        </Link>
        <Link className="navlinks" to="/audio">
          {" "}
          Radio
        </Link>
        <Link className="navlinks" to="/accessories">
          {" "}
          Accessories
        </Link>

        <div className="searchbox">
          <input type="text" placeholder="Search products" />
          {searchIcon}
        </div>
      
    </div>
  );
};

export default Navbar;
