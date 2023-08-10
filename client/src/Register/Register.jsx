import React from "react";
import "./Register.css";

const Register = () => {
  return (
      <form method="#">
        <div className="box">
          <div className="container">
            <div className="top">
              <span>New user? Register here</span>
              <header>Register Here</header>
            </div>
            <div className="input-field">
              <input type="text" className="input" placeholder="Username" id />
              <i className="bx bx-user" />
            </div>
            <div className="input-field">
              <input
                type="email"
                className="input"
                placeholder="example@gmail.com"
                id
              />
              <i className="bx bx-user" />
            </div>
            <div className="input-field">
              <input
                type="Password"
                className="input"
                placeholder="Password"
                id
              />
              <i className="bx bx-lock-alt" />
            </div>
            <div className="input-field">
              <button type="submit" className="submit">
                submit
              </button>
            </div>
          </div>
        </div>
      </form>

  );
};

export default Register;
