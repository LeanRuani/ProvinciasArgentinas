import React from "react";
import Map_depto from "./mapDepartamentos";
import credencial from "./credenciales";

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credencial.mapsKey}`;

class Departamento extends React.Component {
  state = {
    data: {
      provincias: {
        centroide: [],
      },
      departamentos: [],
    },
  };

  componentDidMount() {
    this.fetchDepto();
  }

  fetchDepto = async () => {
    const respuesta = await fetch(
      `https://apis.datos.gob.ar/georef/api/departamentos?provincia=${this.props.match.params.id_provincia}&max=200`
    );
    const data = await respuesta.json();

    this.setState({
      data: data,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Map_depto
          key={this.state.data.departamentos.map((p) => p.id)}
          className="map"
          id_nombre={this.state.data.departamentos.map((p) => p)}
          googleMapURL={mapURL}
          containerElement={<div style={{ height: `600px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          loadingElement={<div style={{ height: `100%` }} />}
        />
      </React.Fragment>
    );
  }
}

export default Departamento;
