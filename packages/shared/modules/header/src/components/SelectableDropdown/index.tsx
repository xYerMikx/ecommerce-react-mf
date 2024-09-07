import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space, Typography } from "antd";

type Props = {
  items: MenuProps["items"];
  onSelect: MenuProps["onSelect"];
  value: string;
};

export const SelectableDropdown = ({ items, onSelect, value }: Props) => {
  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        onSelect,
      }}
    >
      <Typography.Link style={{ color: "#ffffff" }}>
        <Space>
          {value}
          <DownOutlined />
        </Space>
      </Typography.Link>
    </Dropdown>
  );
};
