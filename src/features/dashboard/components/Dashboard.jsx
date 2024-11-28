import { Button } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "@features/auth/services/authSlice";
import { useGetPostsQuery } from "@features/dashboard/services/dashboardApi";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetPostsQuery();

  // console.log("Dashboard data: ", data);

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
