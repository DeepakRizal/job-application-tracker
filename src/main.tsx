import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import React from "react";
import { JobProvider } from "./context/JobContext.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <JobProvider>
      <App />
    </JobProvider>
  </React.StrictMode>
);
