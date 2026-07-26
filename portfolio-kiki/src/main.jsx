import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./app/AppRouter.jsx";
import LanguageProvider from "./features/language/LanguageProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <AppRouter />
    </LanguageProvider>
  </React.StrictMode>
);