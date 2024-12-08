import { useState, useEffect } from "react";
import { Layout } from "antd";
import { useMediaQuery } from "react-responsive";

import CustomHeader from "./Header";
import Sidebar from "./Sidebar";

const { Content } = Layout;

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarWidth = collapsed ? 80 : 240;
  const contentWidth = `calc(100% - ${sidebarWidth}px)`;
  const headerHeight = 60;
  const layoutHight = `calc(100vh - ${headerHeight}px)`;

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
    <Layout class="root-layout">
      <CustomHeader
        height={headerHeight}
        width={sidebarWidth}
        collapsed={collapsed}
        toggleSidebar={toggleSidebar}
      />
      <Layout className="main-layout">
        <Sidebar collapsed={collapsed} width={sidebarWidth} />
        <Content
          className="main-content"
          style={{
            width: contentWidth,
            height: layoutHight,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
