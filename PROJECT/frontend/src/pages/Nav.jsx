import { FiPhoneCall } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import "../styles/Nav.css";
import logo from "../../src/assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-data">
        <div className="nav-top">
          <div className="nav-top-data">
            <a href="mailto:dasr16583@gmail.com">
              <IoMdMail className="icon" />
              <span>dasr16583@gmail.com</span>
            </a>
          </div>
          <div className="nav-top-data">
            <a href="tel:+">
              <FiPhoneCall className="icon" />
              <span>+91 (0999999999)</span>
            </a>
          </div>
          <div className="nav-top-data">
            <a href="tel:+">
              <IoLogoWhatsapp className="icon " />
              <span> 9999999999</span>
            </a>
          </div>
          <div className="nav-top-data">
            {user && user._id ? (
              <div>
                <img src={user.avatar} alt="" />
              </div>
            ) : (
              <Link to="/login" className="login">
                Login
              </Link>
            )}
            {/* <Link to={"/login"} className="login">
              Login
            </Link> */}
          </div>
        </div>
        <div className="nav-bottom">
          <div className="nav-bottom-first">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to="/hotel">Hotel Membership</Link>
              </li>
              <li>
                <a href="">Resorts</a>
              </li>
              <li>
                <a href="">Domestic Holidays</a>
              </li>
              <li>
                <Link to={"/international-holiday"}>
                  International Holidays
                </Link>
              </li>
              <li>
                <a href="">Get Quote</a>
              </li>
            </ul>
          </div>
          <div className="nav-bottom-last">
            <button>Plan My Holiday</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
