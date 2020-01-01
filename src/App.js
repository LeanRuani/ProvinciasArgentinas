import React from "react";

import "./App.css";

class App extends React.Component {
  state = {
    data: {
      provincias: []
    }
  };

  componentDidMount() {
    this.fetchProvincia();
    console.log(this.state.data.respuesta);
  }

  fetchProvincia = async () => {
    const respuesta = await fetch(
      "https://apis.datos.gob.ar/georef/api/provincias"
    );
    const data = await respuesta.json();

    //Guardo los datos
    this.setState({
      data: data
    });
  };

  render() {
    return (
      <ul>
        {this.state.data.provincias.map(p => (
          <li key={p.id}>
            <p>{p.nombre}</p>
          </li>
        ))}
        ;
      </ul>
    );
  }
}

export default App;
