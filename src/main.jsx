import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

import { BirthdayProvider } from "./context/BirthdayContext.jsx";

window.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x", `${e.clientX}px`);
  document.body.style.setProperty("--y", `${e.clientY}px`);
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BirthdayProvider>
      <App />
    </BirthdayProvider>
  </React.StrictMode>
);