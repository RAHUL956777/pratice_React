import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <input type="text" placeholder="Enter your Email" />
      <input type="password" placeholder="Enter your password" />
      <div className="button">Login</div>
      <div>or</div>
      <div className="button">Register</div>
    </div>
  );
};

export default Login;
