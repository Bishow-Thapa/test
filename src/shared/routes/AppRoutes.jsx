import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "@features/auth/components/Login/Login";
import Dashboard from "@features/dashboard/components/Dashboard";
import PrivateRoute from "./PrivateRoutes";
import RedirectRoute from "./RedirectRoutes";

const AppRoutes = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("isAuthenticated: ", isAuthenticated);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RedirectRoute>
              <Login />
            </RedirectRoute>
          }
        ></Route>
        {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
