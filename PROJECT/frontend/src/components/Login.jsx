import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginSuccess } from "../features/authSlice";
import "../styles/Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputType, setInputType] = useState("password");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    // dispatch(loginStart());

    try {
      const { email, password } = user;

      const res = await axios.post("http://localhost:8000/api/v1/users/login", {
        email,
        password,
      });
      console.log(res);
      const data = res.data;
      toast.success("Logged in successfully");
      dispatch(
        loginSuccess({
          user: data.message,
          isAuthenticated: true,
          loading: false,
          error: null,
        })
      );
      console.log(data);
      setUser({
        email: "",
        password: "",
      });
      navigate("/");
    } catch (error) {
      console.log(error.message);
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
