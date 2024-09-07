import React, { useEffect, useRef } from "react";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { renderHeader } from "header/Header";
import { renderHome } from "home/Home";

import "./index.css";

const App = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (headerRef.current) {
      renderHeader(headerRef.current.id);
    }
    if (homeRef.current) {
      renderHome(homeRef.current.id);
    }
  }, []);

  return (
    <Suspense
      fallback={
        <Spin indicator={<LoadingOutlined spin />} size="large">
          Loading...
        </Spin>
      }
    >
      <div id="header" ref={headerRef} />
      <div id="home" ref={homeRef} />
    </Suspense>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
