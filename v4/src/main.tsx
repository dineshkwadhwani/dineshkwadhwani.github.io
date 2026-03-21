import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { HashRouter } from "react-router-dom";  // 👈 ADD THIS

createRoot(document.getElementById("root")!).render(
  <HashRouter>   {/* 👈 WRAP APP */}
    <App />
  </HashRouter>
);