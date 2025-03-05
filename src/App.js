import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ModalLoading from "./components/ModalLoading";
import Providers from "./hooks/Providers";
import Rotas from "./routes";
import "./styles/agGrid.css";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <Providers>
      <Router>
        <Rotas />
        <ModalLoading />
        <GlobalStyle />
      </Router>
    </Providers>
  );
}

export default App;
