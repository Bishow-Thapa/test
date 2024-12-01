import React from "react";
import { Layout, Select, Row, Col, Typography } from "antd";
import { UserOutlined, GlobalOutlined } from "@ant-design/icons";
import Logo from "@assets/logo.png";

const { Header } = Layout;
const { Text } = Typography;

const LoginHeader = () => {
  const handleLanguageChange = (value) => {
    // Add your language change logic here (e.g., change language in your i18n library)
  };

  return (
    <Header
      style={{ padding: "0 50px", width: "100%", backgroundColor: "#ffffff" }}
    >
      <Row justify="space-between" align="middle">
        <Col>
          <img src={Logo} alt="My Image" />
        </Col>

        <Col>
          <GlobalOutlined style={{ fontSize: "20px" }} />
        </Col>
      </Row>
    </Header>
  );
};

export default LoginHeader;
