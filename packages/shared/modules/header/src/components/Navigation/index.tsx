import React from "react";
import { Link } from "react-router-dom";
import {
  SearchOutlined,
  ShoppingOutlined,
  ShopTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import { Flex, Layout, Menu, Space } from "antd";

import { headerLinks } from "@/constants/headerLinks";

import styles from "./styles.module.scss";

const { Header: NavigationHeader } = Layout;

export const Navigation = () => {
  return (
    <NavigationHeader className={styles.navigation}>
      <Flex align="center">
        <Link to="/">
          <ShopTwoTone className={styles.logo} />
        </Link>
        <Menu items={headerLinks} mode="horizontal" />
        <Flex className={styles.icons}>
          <Space size="large">
            <SearchOutlined />
            <ShoppingOutlined />
            <UserOutlined />
          </Space>
        </Flex>
      </Flex>
    </NavigationHeader>
  );
};
