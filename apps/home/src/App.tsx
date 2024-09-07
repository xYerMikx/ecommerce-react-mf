import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { ProductsList } from "@/components/ProductsList";
import store from "@/redux/store/store";

import "./index.css";

const App = () => (
  <Provider store={store}>
    <ProductsList />
  </Provider>
);

export const renderHome = (containerId: string) => {
  const rootElement = document.getElementById(containerId);
  if (!rootElement)
    throw new Error(`Failed to find the container element: ${containerId}`);

  const root = ReactDOM.createRoot(rootElement as HTMLElement);
  root.render(<App />);
};
