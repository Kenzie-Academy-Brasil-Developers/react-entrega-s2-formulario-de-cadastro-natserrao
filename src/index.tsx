import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { UserProviders } from "./contexts/UserContext";
import { TechProviders } from "./contexts/TechContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProviders>
        <TechProviders>
          <GlobalStyle />
          <App />
        </TechProviders>
      </UserProviders>
    </BrowserRouter>
  </React.StrictMode>
);
