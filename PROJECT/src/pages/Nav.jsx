import { FiPhoneCall } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import "../styles/Nav.css";
const Nav = () => {
  return (
    <div className="header">
      <div className="upper-header">
        <div className="left">
          <div className="first">
            <FiPhoneCall className="icon" />
            <span>123456789</span>
          </div>
          <div className="second">
            <FiPhoneCall className="icon" />
            <span>abcdefghij</span>
          </div>
        </div>
        <div className="right">
          <FaUser className="icon"/>
          <span>Login</span>
        </div>
      </div>
      <div className="line"></div>
      <div className="bellow-header">
        <div className="bh-img">
          <h1>INFINITE HOLIDAYS</h1>
        </div>
        <div className="bh-links">
          <a href={"/hotel-membership"}>HOTEL MEMBERSHIP</a>
          <a href={"/domestic-holidays"}>DOMESTIC HOLIDAYS</a>
          <a href={"/international-holidays"}>INTERNATIONAL HOLIDAYS</a>
          <a href={"/hotel-packages"}>HOTEL PACKAgES</a>
          <a href={"/contact-us"}>CONTACT US</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
