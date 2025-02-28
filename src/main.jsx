import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/React-routing">
    <App />
  </BrowserRouter>
);
