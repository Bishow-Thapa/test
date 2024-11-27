import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RedirectRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? <Navigate to="/dashboard" /> : children;
};

export default RedirectRoute;