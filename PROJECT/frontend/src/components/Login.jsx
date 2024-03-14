import { useDispatch } from "react-redux";
import { authSlice } from "../features/authSlice";
import axios from "axios";

const { loginStart, loginSuccess, loginFailure } = authSlice.actions;

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    dispatch(loginStart());

    try {
      const email = event.target.elements.username.value;
      const password = event.target.elements.password.value;

      const res = await axios.post("http://localhost:8000/api/v1/users/login", {
        email,
        password,
      });

      const data = res.data;
      dispatch(loginSuccess(data.user));
      console.log(data);
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

  return (
    <div className="login">
      <h2>Login Now</h2>
      <form onSubmit={handleLogin}>
        <input type="email" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
