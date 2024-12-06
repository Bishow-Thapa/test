import { Flex, Layout, Dropdown, Button } from "antd";
import Logo from "@assets/antd-logo.svg";

const { Header } = Layout;

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Logout
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
];

const CustomHeader = ({ height }) => (
  <Layout>
    <Header
      style={{
        height,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img src={Logo} alt="Logo" />
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
        overlayStyle={{ borderRadius: "46px", backgroundColor: "#f0f0f0" }}
      >
        <Button>bottomLeft</Button>
      </Dropdown>
    </Header>
  </Layout>
);

export default CustomHeader;
