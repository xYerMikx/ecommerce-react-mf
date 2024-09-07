import React from "react";

import { Navigation } from "@/components/Navigation";
import { Toolbar } from "@/components/Toolbar";

import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Toolbar />
      <Navigation />
    </div>
  );
};
