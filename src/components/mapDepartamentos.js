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
  const [seleccion_departamento, setSelectedPark] = useState(null);

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
                url: `https://freesvg.org/img/ts-map-pin.png`,
                scaledSize: new window.google.maps.Size(25, 25),
              }}
              clickable={true}
              onClick={() => {
                setSelectedPark(marker);
              }}
            ></Marker>
          );
        })}

        {seleccion_departamento && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedPark(null);
            }}
            position={{
              lat: parseFloat(seleccion_departamento.centroide.lat),
              lng: parseFloat(seleccion_departamento.centroide.lon),
            }}
          >
            <div className="card">d</div>
          </InfoWindow>
        )}
      </GoogleMap>
    </React.Fragment>
  );
};

export default withScriptjs(withGoogleMap(Map));
