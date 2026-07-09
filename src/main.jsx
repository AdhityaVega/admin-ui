import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeContextProvider } from "./context/themeContext.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";
import { ModeContextProvider } from "./context/modeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <AuthContextProvider>
    <ThemeContextProvider>
      <ModeContextProvider>
        <App />
      </ModeContextProvider>
    </ThemeContextProvider>
  </AuthContextProvider>
  </React.StrictMode>
);
