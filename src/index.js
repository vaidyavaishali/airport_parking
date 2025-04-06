import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "tailwindcss/tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

// Initialize AOS
AOS.init();

// Disable context menu (right-click)
// document.addEventListener("contextmenu", (event) => event.preventDefault());

// Disable common developer tool shortcuts
// document.addEventListener("keydown", (event) => {
//   // F12 or Ctrl+Shift+I (Inspect Tools)
//   if (
//     event.key === "F12" ||
//     (event.ctrlKey && event.shiftKey && event.key === "I") ||
//     (event.ctrlKey && event.key === "U") || // Ctrl+U (View Source)
//     (event.ctrlKey && event.shiftKey && event.key === "J") // Ctrl+Shift+J (Console)
//   ) {
//     event.preventDefault();
//     // alert("Inspect Element is disabled.");
//   }
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);

// Measure performance
reportWebVitals();
