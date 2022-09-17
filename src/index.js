import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserContextProvider } from "./context/userContext";
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);