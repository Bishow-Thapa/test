import { Button, Table } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "@features/auth/services/authSlice";
import {
  useGetPostsQuery,
  useGetMeQuery,
} from "@features/dashboard/services/dashboardApi";
import logger from "@shared/utils/logger";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: jsonData,
    error: jsonError,
    isLoading: jsonLoading,
  } = useGetPostsQuery();

  const { data, error, isLoading } = useGetMeQuery();

  const handleLogout = () => {
    dispatch(logout());

    navigate("/");
  };

  const handleClick = () => {
    let testObj = {
      listOfA: [{ nickName: "john" }, { nickName: "wick" }],
    };
    let anotherArray = ["apple", "ball", "cat"];
  };

  // logger.info({ msg: "Dashboard Data", data, jsonData });

  let columns = [
    {
      title: "S.N",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "id",
    },
  ];

  return (
    <>
      Dashboard
      <Button type="primary" onClick={handleLogout}>
        Logout
      </Button>
      <Button type="secondary" onClick={handleClick}>
        Click Me
      </Button>
      <Table columns={columns} dataSource={jsonData} loading={jsonLoading} />
    </>
  );
};

export default Dashboard;
