import { useState, useEffect } from "react";
import { Layout } from "antd";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

import CustomHeader from "./Header";
import Sidebar from "./Sidebar";

const { Content } = Layout;

const styleName = {
  position: "absolute",
  top: "8px",
  left: "-8px",
  zIndex: 10,
  fontSize: "18px",
  cursor: "pointer",
  color: "#1890ff",
  background: "#ffffff",
  transition: "all 0.3s ease",
};

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarWidth = collapsed ? 80 : 240;
  const contentWidth = `calc(100% - ${sidebarWidth}px)`;
  const headerHeight = 60;

  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const toggleSidebar = () => setCollapsed((prev) => !prev);

  useEffect(() => {
    if (isSmallScreen) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [isSmallScreen]);

  return (
    <>
      <Layout>
        <CustomHeader height={headerHeight} />
        <Layout style={{ display: "flex", flexDirection: "row" }}>
          <Sidebar collapsed={collapsed} width={sidebarWidth} />
          <Content style={{ width: contentWidth, position: "relative" }}>
            {collapsed ? (
              <RightCircleOutlined
                style={styleName}
                onClick={toggleSidebar}
                aria-label="Expand Sidebar"
              />
            ) : (
              <LeftCircleOutlined
                style={styleName}
                onClick={toggleSidebar}
                aria-label="Collapse Sidebar"
              />
            )}
            {children}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
