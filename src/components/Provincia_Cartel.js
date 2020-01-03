import React from "react";

function Provincia_Cartel(props) {
  return (
    <div className="card m-2 shadow-lg">
      <div className="card-header">Provincia Argentina :: ID {props.id}</div>
      <div className="card-body">
        <h4 className="card-title font-weight-bold">{props.nombre} </h4>
        <p className="card-text">Latitud {props.lat}</p>
        <p className="card-text">Longitud {props.lon}</p>
      </div>
    </div>
  );
}

export default Provincia_Cartel;
