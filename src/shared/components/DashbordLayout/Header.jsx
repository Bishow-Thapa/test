import { Avatar, Layout, Dropdown, Button, Space, Typography } from "antd";
import {
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

import Logo from "@assets/antd-logo.svg";

const { Text, Title } = Typography;
const { Header, Content } = Layout;

const items = [
  {
    key: "1",
    label: <a>Logout</a>,
  },
];

const CustomHeader = ({ height, width, collapsed, toggleSidebar }) => (
  <Layout>
    <Header
      className="custom-header"
      style={{
        height,
      }}
    >
      <Title className="title" style={{ width }}>
        <img src={Logo} alt="Logo" style={{ height: "28px" }} />
      </Title>

      <Content className="content">
        <Button
          className="content-button"
          type="text"
          icon={
            collapsed ? (
              <MenuUnfoldOutlined aria-label="Expand Sidebar" />
            ) : (
              <MenuFoldOutlined aria-label="Collapse Sidebar" />
            )
          }
          onClick={toggleSidebar}
        />
        <Dropdown
          className="content-dropdown"
          menu={{
            items,
          }}
          placement="bottomLeft"
        >
          <Button
            color="default"
            variant="text"
            style={{ padding: "18px 8px" }}
          >
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
      </Content>
    </Header>
  </Layout>
);

export default CustomHeader;
