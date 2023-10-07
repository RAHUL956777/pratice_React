import { useState } from "react";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    axios
      .post("http://localhost:8000/login", user)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="email"
        name="email"
        value={user.value}
        onChange={handleChange}
        autoComplete="off"
        required
        placeholder="Enter your Email"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        autoComplete="off"
        required
        placeholder="Enter your password"
      />
      <div className="button" onClick={handleLogin}>
        Login
      </div>
      <div>or</div>
      <div className="button">Register</div>
    </div>
  );
};

export default Login;
