import React from "react";
import { Link } from "react-router-dom";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import credencial from "./credenciales";
const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credencial.mapsKey}`;

class Departamento extends React.Component {
  state = {
    data: {
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
    console.log(data);
  };

  render() {
    return (
      <React.Fragment>
        <div className="w-50 p-3">
          <table class="table">
            <thead>
              <tr>
                <th>N°</th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.departamentos.map((p) => (
                <tr>
                  <th key={p.id}>{p.id}</th>
                  <td>{p.nombre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Departamento;
