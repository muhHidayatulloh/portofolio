import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/PortoStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
      }}
    >
      <App />
    </BrowserRouter>
  </StrictMode>
);
