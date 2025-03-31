import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css"; // 👈 make sure this line is here!


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
