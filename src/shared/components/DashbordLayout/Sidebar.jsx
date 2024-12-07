import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const Sidebar = ({ collapsed, width }) => {
  const items = [
    {
      key: "1",
      icon: <PieChartOutlined />,
      label: "Dashboard",
    },
    {
      key: "2",
      icon: <DesktopOutlined />,
      label: "Balance",
    },
    {
      key: "3",
      icon: <ContainerOutlined />,
      label: "Spending",
    },
    {
      key: "sub1",
      label: "Reports",
      icon: <MailOutlined />,
      children: [
        {
          key: "5",
          label: "PDF",
        },
        {
          key: "6",
          label: "EXCEL",
        },
      ],
    },
    {
      key: "sub2",
      label: "Settings",
      icon: <AppstoreOutlined />,
      children: [
        {
          key: "9",
          label: "Profile",
        },
        {
          key: "10",
          label: "Limit",
        },
        {
          key: "sub3",
          label: "Submenu",
          children: [
            {
              key: "11",
              label: "Option 11",
            },
            {
              key: "12",
              label: "Option 12",
            },
          ],
        },
      ],
    },
  ];
  return (
    <Menu
      mode="inline"
      inlineCollapsed={collapsed}
      items={items}
      style={{ width: `${width}px` }}
    />
  );
};

export default Sidebar;
