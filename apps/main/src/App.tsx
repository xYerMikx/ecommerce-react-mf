import { lazy } from "react";
import ReactDOM from "react-dom/client";

const Header = lazy(() => import("header/Header"));

import "./index.css";

const App = () => (
  <div className="container">
    <Header />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
