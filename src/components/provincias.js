import React from "react";

import { Link } from "react-router-dom";
import Provincia_Cartel from "./Provincia_Cartel";

class Provincia extends React.Component {
  state = {
    carga: true,
    error: null,
    data: {
      provincias: []
    }
  };

  componentDidMount() {
    this.fetchProvincia();
  }

  fetchProvincia = async () => {
    this.setState({ carga: true, error: null });

    try {
      const respuesta = await fetch(
        "https://apis.datos.gob.ar/georef/api/provincias"
      );
      const data = await respuesta.json();
      this.setState({
        carga: false,
        data: data
      });
    } catch (error) {
      this.setState({
        carga: false,
        error: error
      });
    }
  };

  render() {
    if (this.state.carga === true) {
      return "Cargando...";
    }

    if (this.state.error) {
      return "Error";
    }
    return (
      <React.Fragment>
        <ul>
          {this.state.data.provincias.map(p => (
            <li key={p.id}>
              <Link to={`/${p.nombre}`}>
                <Provincia_Cartel nombre={p.nombre} />
              </Link>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Provincia;
