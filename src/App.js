import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
// import Map from "./components/Maps";
// import credencial from "./components/credenciales";
import Departamento from "./components/departamentos";

import Provincia from "./components/provincias";
import Header from "./components/header";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Provincia} />
          <Route exact path="/:id_provincia" component={Departamento} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;
