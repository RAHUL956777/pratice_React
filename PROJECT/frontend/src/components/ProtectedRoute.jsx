import { useSelector } from "react-redux";
import { loginSuccess } from "../features/authSlice.js";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ element, ...rest }) => {
  const isAuthenticated = useSelector(loginSuccess);

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="login" replace />
  );
};

export default ProtectedRoute;
