import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./main.css";
import { LanguageProvider } from "./context/language/LanguageContext";
import { PageProvider } from "./context/page/PageContext.jsx";
import { ThemeProvider } from "./context/theme/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <PageProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </PageProvider>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
