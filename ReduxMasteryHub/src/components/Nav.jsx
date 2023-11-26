import { useDispatch, useSelector } from "react-redux";
import "../styles/nav.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchUser } from "../features/userDetailsSlice";

const Nav = () => {
  const allusers = useSelector((state) => state.app.users);
  const dispacth = useDispatch();

  const [searchData, setSearchData] = useState("");

  useEffect(()=>{
    dispacth(searchUser(searchData))
  },[searchData,dispacth])

  return (
    <div className="navbar">
      <div className="logo">
        <h1>RTK</h1>
      </div>
      <div className="text">
        <Link to="/">Create Post</Link>
        <Link to="/read">All Post ({allusers.length})</Link>
      </div>
      <div className="search">
        <input
          type="search"
          placeholder="serach here"
          onChange={(e) => setSearchData(e.target.value)}
        />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Nav;
