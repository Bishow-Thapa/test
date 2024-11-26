import { Button } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "@features/auth/services/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());

    navigate("/");
  };
  return (
    <>
      Dashboard
      <Button type="primary" onClick={handleLogout}>
        Logout
      </Button>
    </>
  );
};

export default Dashboard;
