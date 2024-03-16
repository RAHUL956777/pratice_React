import { useDispatch } from "react-redux";
import { authSlice } from "../features/authSlice";
import axios from "axios";
import "../styles/Login.css";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const { loginStart, loginSuccess, loginFailure } = authSlice.actions;

const Login = () => {
  const dispatch = useDispatch();
  // const history = useHistory();

  const [inputType, setInputType] = useState("password");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (event) => {
    event.preventDefault();

    dispatch(loginStart());

    try {
      const { email, password } = user;

      const res = await axios.post("http://localhost:8000/api/v1/users/login", {
        email,
        password,
      });

      const data = res.data;
      dispatch(loginSuccess(data.user));
      // history.push("/");
      toast.success("Logged in successfully");
      console.log(data);
      setUser({
        email: "",
        password: "",
      });
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

  const togglePasswordVisiblity = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="loginwrapper">
      <div className="login">
        <h2>Login Now</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Email: </label>
            <div className="input_username">
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                required
                value={user.email}
                onChange={handleChange}
                placeholder="Username"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <div className="input_password">
              <input
                type={inputType}
                id="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                value={user.password}
                onChange={handleChange}
                required
              />
              {inputType === "password" ? (
                <FaEyeSlash
                  onClick={togglePasswordVisiblity}
                  className="eye_btn"
                />
              ) : (
                <FaRegEye
                  onClick={togglePasswordVisiblity}
                  className="eye_btn"
                />
              )}
            </div>
          </div>
          <div className="form-group">
            <button type="submit">Login</button>
            <h3>New User?</h3>
            <Link to={"/register"}>Register Now</Link>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
