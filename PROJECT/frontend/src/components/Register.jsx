import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    avatar: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const isPasswordStrong = (password) => {
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasMinimumLength = password.length >= 6;

    return hasSpecialChar && hasCapitalLetter && hasNumber && hasMinimumLength;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "avatar") {
      setUser({
        ...user,
        avatar: files[0],
      });
    } else {
      setUser({
        ...user,
        [name]: value,
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const { avatar, username, email, password, confirmpassword } = user;
      if (password !== confirmpassword) {
        alert("Password do not match");
        return;
      }
      if (isPasswordStrong(password) === false) {
        toast.error(
          "Password should have at least one special character, one capital letter, one number, and a minimum length of 6 characters."
        );
        return;
      }

      const formData = new FormData();
      formData.append("avatar", avatar);
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);

      const res = await axios.post(
        "http://localhost:8000/api/v1/users/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const userData = res.data;
      console.log(userData);
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <div className="registerwrapper">
      <div className="register">
        <h2>Register Now</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <div className="register-form-group">
            <label htmlFor="username">Avatar: </label>
            <div className="input_avatar">
              <input
                type="file"
                id="avatar"
                name="avatar"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="register-form-group">
            <label htmlFor="username">Username: </label>
            <div className="input_username">
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="Username"
                autoComplete="off"
                value={user.username}
                onChange={handleChange}
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
                autoComplete="off"
                value={user.email}
                onChange={handleChange}
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
                autoComplete="off"
                value={user.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="register-form-group">
            <label htmlFor="confirmpassword">Confirm Password: </label>
            <div className="input_confirmpassword">
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                required
                placeholder="Confirm Password"
                autoComplete="off"
                value={user.confirmpassword}
                onChange={handleChange}
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
      <Toaster />
    </div>
  );
};

export default Register;
