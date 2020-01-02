import React from "react";
import { Link } from "react-router-dom";

class Departamento extends React.Component {
  state = {
    data: {
      departamentos: []
    }
  };

  componentDidMount() {
    this.fetchDepto();
  }

  fetchDepto = async () => {
    const respuesta = await fetch(
      `https://apis.datos.gob.ar/georef/api/departamentos?provincia=${this.props.match.params.depId}&max=200`
    );
    const data = await respuesta.json();

    this.setState({
      data: data
    });
  };

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.data.departamentos.map(p => (
            <li key={p.id}>
              <p>{p.nombre}</p>
              {/* <Link to={`/${p.nombre}`}>
                
              </Link> */}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Departamento;
