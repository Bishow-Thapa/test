import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@features/auth/components/Login/Login";
import Dashboard from "@features/dashboard/components/Dashboard";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  </Router>
);

export default AppRoutes;
