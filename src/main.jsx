import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalContextProvider } from "./context/global.jsx";
import GlobalStyle from './Gloabalstyle.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </StrictMode>
);
