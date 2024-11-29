import { Button } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "@features/auth/services/authSlice";
import {
  useGetPostsQuery,
  useGetMeQuery,
} from "@features/dashboard/services/dashboardApi";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: jsonData,
    error: jsonError,
    isLoading: jsonLoading,
  } = useGetPostsQuery();

  const { data, error, isLoading } = useGetMeQuery();

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
