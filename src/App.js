import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
// import Map from "./components/Maps";
// import credencial from "./components/credenciales";
import Departamento from "./components/Departamentos";
import Provincia from "./components/Provincia";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Provincia} />
          <Route exact path="/:id_provincia" component={Departamento} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
