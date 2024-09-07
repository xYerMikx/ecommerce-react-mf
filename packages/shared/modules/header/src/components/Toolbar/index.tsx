import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Flex, Layout, MenuProps, Space, Typography } from "antd";

import { SelectableDropdown } from "@/components/SelectableDropdown";
import { CURRENCIES, LANGUAGES } from "@/constants/toolbarDropdowns";

import styles from "./styles.module.scss";

const { Header: ToolbarHeader } = Layout;

const DEFAULT_CURRENCY = "USD";
const DEFAULT_LANGUAGE = "English";

export const Toolbar = () => {
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  const onSelectCurrency: MenuProps["onSelect"] = ({ key }) => {
    setCurrency(key);
  };

  const onSelectLanguage: MenuProps["onSelect"] = ({ key }) => {
    setLanguage(key);
  };

  return (
    <ToolbarHeader className={styles.toolbar}>
      <Flex>
        <Space size="large">
          <SelectableDropdown
            items={CURRENCIES}
            value={currency}
            onSelect={onSelectCurrency}
          />
          <SelectableDropdown
            items={LANGUAGES}
            value={language}
            onSelect={onSelectLanguage}
          />
        </Space>
      </Flex>
      <Typography.Text className={styles.text}>
        Free delivery on orders above $50
      </Typography.Text>
      <Flex>
        <Space size="large">
          <Link to="/returns-policy">Returns Policy</Link>
          <Link to="/help-and-contact">Help & Contact</Link>
        </Space>
      </Flex>
    </ToolbarHeader>
  );
};
