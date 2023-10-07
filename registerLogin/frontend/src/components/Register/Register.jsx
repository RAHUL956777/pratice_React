import { useState } from "react";
import "./Register.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleRegister = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios.post("http://localhost:8000/register", user).then((res) => {
        alert(res.data.message);
      });
      <Link to="/login" />;
    } else {
      alert("All field are requeirs");
    }
  };

  return (
    <div className="register">
      <h1>Register Now</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="what's your name"
        onChange={handleChange}
        autoComplete="off"
      />
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your webaddress"
        onChange={handleChange}
        autoComplete="off"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your password"
        onChange={handleChange}
        autoComplete="off"
      />
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-Enter your password"
        onChange={handleChange}
        autoComplete="off"
      />
      <div className="button" onClick={handleRegister}>
        Register
      </div>
      <div>or</div>
      <Link to="/login">
        <button className="button">Login</button>
      </Link>
    </div>
  );
};

export default Register;
