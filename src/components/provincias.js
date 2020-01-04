import React from "react";

// import { Link } from "react-router-dom";
// import Provincia_Cartel from "./Provincia_Cartel";

import Map from "./Maps";
import credencial from "./credenciales";

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credencial.mapsKey}`;

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
        {/* {this.state.data.provincias.map(p => console.log(p.centroide.lat))} */}

        <Map
          id_nombre={this.state.data.provincias.map(p => p)}
          // nombre={this.state.data.provincias.map(p => p.nombre)}
          googleMapURL={mapURL}
          // coords={this.state.data.provincias.map(p => p.centroide)}
          containerElement={<div style={{ height: `600px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          loadingElement={<div style={{ height: `100%` }} />}
        />
      </React.Fragment>
    );
  }
}

export default Provincia;

// {/* <div className="row m-2 "> */}
// {this.state.data.provincias.map(p =>
//
//   ({
//     /*
//   })

//   // </div>
// )}
// {/* </div> */}
