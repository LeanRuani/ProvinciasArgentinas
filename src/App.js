import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Provincia from "./components/provincias";
import Departamento from "./components/departamentos";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Provincia} />
        <Route exact path="/:depId" component={Departamento} />
        {/* <Route component={NotFound}/> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
