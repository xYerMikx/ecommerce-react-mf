import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Provider } from "react-redux";
import store from "@/redux/store/store";
import { ProductsList } from "@/components/ProductsList";

const App = () => (
  <Provider store={store}>
    <ProductsList />
  </Provider>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
