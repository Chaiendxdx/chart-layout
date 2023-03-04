import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";

const items = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Navigation Two",
    key: "app",
    icon: <AppstoreOutlined />,
    disabled: true,
  },
];
export default function MenuChart() {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div style={{ display: "flex" }}>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode={"horizontal"}

        // items={items}
      >
        <Menu.Item key="mail">mail</Menu.Item>

        <Menu.Item key="app">app</Menu.Item>
      </Menu>
    </div>
  );
}
