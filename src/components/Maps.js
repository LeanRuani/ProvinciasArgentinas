import React, { useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { Link } from "react-router-dom";

const Map = (props) => {
  const [seleccion_provincia, setSelectedPark] = useState(null);

  return (
    <React.Fragment>
      <GoogleMap
        defaultZoom={5}
        defaultCenter={{ lat: -34.603722, lng: -58.381592 }}
      >
        {props.id_nombre.map((marker) => {
          return (
            <Marker
              title={marker.nombre}
              label={<p> {marker.nombre} </p>}
              position={{
                lat: parseFloat(marker.centroide.lat),
                lng: parseFloat(marker.centroide.lon),
              }}
              icon={{
                url: `https://freesvg.org/img/1426578732.png`,
                scaledSize: new window.google.maps.Size(25, 25),
              }}
              clickable={true}
              onClick={() => {
                setSelectedPark(marker);
              }}
            ></Marker>
          );
        })}

        {seleccion_provincia && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedPark(null);
            }}
            position={{
              lat: parseFloat(seleccion_provincia.centroide.lat),
              lng: parseFloat(seleccion_provincia.centroide.lon),
            }}
          >
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{seleccion_provincia.nombre}</h4>
                <h6 className="card-subtitle mb-2 text-muted">
                  Provincia Argentina
                </h6>
                <p className="text-danger">
                  Accede a los
                  <Link to={`/${seleccion_provincia.nombre}`}>
                    Departamentos
                  </Link>
                  para ver todas las ciudades de {seleccion_provincia.nombre}
                </p>
              </div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </React.Fragment>
  );
};

export default withScriptjs(withGoogleMap(Map));
