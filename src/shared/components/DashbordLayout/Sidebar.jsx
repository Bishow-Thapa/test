import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const Sidebar = ({ collapsed, width }) => {
  const location = useLocation();

  const items = [
    {
      key: "dashboard",
      icon: <PieChartOutlined />,
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: "balance",
      icon: <DesktopOutlined />,
      label: <Link to="/balance">Balance</Link>,
    },
    {
      key: "spending",
      icon: <ContainerOutlined />,
      label: <Link to="/spending">Spending</Link>,
    },
    {
      key: "chat",
      icon: <MessageOutlined />,
      label: <Link to="/chat">Chat</Link>,
    },
    {
      key: "report",
      label: "Reports",
      icon: <MailOutlined />,
      children: [
        {
          key: "monthly",
          label: "Monthly",
        },
        {
          key: "yearly",
          label: "Yearly",
        },
      ],
    },
    {
      key: "profile",
      label: "Profile",
      icon: <AppstoreOutlined />,
      children: [
        {
          key: "editProfile",
          label: <Link to="/profile/edit">Edit Profile</Link>,
        },
        {
          key: "changePassword",
          label: <Link to="/profile/change-password">Change password</Link>,
        },
      ],
    },
  ];

  const findSelectedKey = (items) => {
    for (const item of items) {
      if (item.children) {
        const selectedChild = findSelectedKey(item.children);
        if (selectedChild) return selectedChild;
      }
      if (
        React.isValidElement(item.label) &&
        item.label.props.to === location.pathname
      ) {
        return item.key;
      }
    }
    return null;
  };

  const selectedKey = findSelectedKey(items);

  return (
    <Menu
      mode="inline"
      inlineCollapsed={collapsed}
      selectedKeys={[selectedKey]}
      items={items}
      style={{ width: `${width}px` }}
    />
  );
};

export default Sidebar;
