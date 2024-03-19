import { Link } from "react-router-dom";
import "../styles/Register.css";

const Register = () => {
  return (
    <div className="registerwrapper">
      <div className="register">
        <h2>Register Now</h2>
        <form className="register-form">
          <div className="register-form-group">
            <label htmlFor="username">Username: </label>
            <div className="input_username">
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="Username"
              />
            </div>
          </div>
          <div className="register-form-group">
            <label htmlFor="email">Email: </label>
            <div className="input_email">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
              />
            </div>
          </div>
          <div className="register-form-group">
            <label htmlFor="password">Password: </label>
            <div className="input_password">
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Password"
              />
            </div>
          </div>
          <div className="register-form-group">
            <label htmlFor="confirm_password">Confirm Password: </label>
            <div className="input_confirm_password">
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                required
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div className="form-group">
            <button type="submit">Register</button>
            <h3>Already Registered?</h3>
            <Link to={"/login"}>Login Now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
