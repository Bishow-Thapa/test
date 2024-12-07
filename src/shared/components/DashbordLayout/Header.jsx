import { Avatar, Layout, Dropdown, Button, Space, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

import Logo from "@assets/antd-logo.svg";

const { Text } = Typography;
const { Header } = Layout;

const items = [
  {
    key: "1",
    label: <a>Logout</a>,
  },
];

const CustomHeader = ({ height }) => (
  <Layout>
    <Header
      className="header-xxx"
      style={{
        height,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#FFFFFF",
        borderBlockEnd: "1px solid rgba(5, 5, 5, 0.06)",
        padding: "0 28px",
      }}
    >
      <img src={Logo} alt="Logo" style={{ height: "28px" }} />
      <Dropdown
        className="dp"
        menu={{
          items,
        }}
        placement="bottomLeft"
      >
        <Button color="default" variant="text" style={{ padding: "18px 8px" }}>
          <Space>
            <Avatar
              icon={<UserOutlined />}
              size={30}
              style={{
                backgroundColor: "#87d068",
              }}
            />
            <Text type="secondary">Bishow Thapa</Text>
          </Space>
        </Button>
      </Dropdown>
    </Header>
  </Layout>
);

export default CustomHeader;
