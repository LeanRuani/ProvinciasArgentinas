import React from "react";

import { Link } from "react-router-dom";
import Provincia_Cartel from "./Provincia_Cartel";
import Header from "./header";

class Provincia extends React.Component {
  state = {
    carga: true,
    error: null,
    data: {
      provincias: {
        centroide: []
      }
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
        <Header />
        <div className="row m-2 ">
          {this.state.data.provincias.map(p => (
            <div className="w-25" key={p.id}>
              <Link
                className=" text-reset text-decoration-none"
                to={`/${p.nombre}`}
              >
                <Provincia_Cartel
                  id={p.id}
                  nombre={p.nombre}
                  lat={p.centroide.lat}
                  lon={p.centroide.lon}
                />
              </Link>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Provincia;
