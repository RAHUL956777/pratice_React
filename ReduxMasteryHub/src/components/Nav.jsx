import "../styles/nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>RTK</h1>
      </div>
      <div className="text">
        <Link to="/">Create Post</Link>
        <Link to="/read">All Post</Link>
      </div>
      <div className="search">
        <input type="text" placeholder="serach here" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Nav;
