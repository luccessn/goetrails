import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n.js";
import { HeroUIProvider } from "@heroui/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HeroUIProvider>
    <App />
  </HeroUIProvider>
);
