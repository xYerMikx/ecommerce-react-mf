import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Header } from "@/components/Header";

import "./app.scss";

export const renderHeader = (id: string) => {
  const rootElement = document.getElementById(id);
  if (!rootElement) throw new Error("Failed to find the root element");

  const root = ReactDOM.createRoot(rootElement as HTMLElement);

  root.render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};
