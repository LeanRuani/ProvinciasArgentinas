import React, { useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { Link } from "react-router-dom";

const Map = props => {
  //   console.log(typeof parseFloat(props.coords));

  //   var myLatlng = {
  //     lat: parseFloat(props.coords.lat),
  //     lng: parseFloat(coords.lon)
  //   };

  const [seleccion_provincia, setSelectedPark] = useState(null);

  return (
    <React.Fragment>
      <GoogleMap
        defaultZoom={6}
        defaultCenter={{ lat: -34.603722, lng: -58.381592 }}
      >
        {props.id_nombre.map(marker => {
          return (
            <Marker
              title={marker.nombre}
              label={marker.nombre}
              position={{
                lat: parseFloat(marker.centroide.lat),
                lng: parseFloat(marker.centroide.lon)
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
              lng: parseFloat(seleccion_provincia.centroide.lon)
            }}
          >
            <div>
              <h2>{seleccion_provincia.nombre}</h2>
              <p>lorem ipsum</p>
              <Link to={`/${seleccion_provincia.id}`}>Departamentos</Link>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </React.Fragment>
  );
};

export default withScriptjs(withGoogleMap(Map));

// <Marker

// position={{
//   lat: props.coords.lat,
//   lng: props.coords.lon
// }}
