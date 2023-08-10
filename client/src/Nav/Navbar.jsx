import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="leftNav">
        <img src="../../src/img/logo.png" alt="logo" />
      </div>
      <div className="rightnav ">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="https://github.com/RAHUL956777">Github</a>
          </li>
        </ul>
      </div>

        <Link to="/register" className="button-link">Register</Link>

        <Link to="/login" className="button-link">Login</Link>

    </div>
  );
};

export default Navbar;
