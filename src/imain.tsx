import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import IApp from "./iapp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IApp />
  </StrictMode>
);
