import React from "react";
// import { Switch, BrowserRouter, Route } from "react-router-dom";
// import Map from "./components/Maps";
// import credencial from "./components/credenciales";
// import Departamento from "./components/departamentos";

import Provincia from "./components/provincias";
import Header from "./components/header";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Provincia />
    </React.Fragment>
  );
}

export default App;
