import React from "react";

const Login = () => {
  return (
    <form method="#">
      <div className="box">
        <div className="container">
          <div className="top">
            <header>Login Now</header>
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
              Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
