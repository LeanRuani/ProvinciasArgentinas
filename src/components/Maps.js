import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const Map = props => {
  console.log(props.id_nombre);

  //   console.log(typeof parseFloat(props.coords));

  //   var myLatlng = {
  //     lat: parseFloat(props.coords.lat),
  //     lng: parseFloat(coords.lon)
  //   };

  return (
    <React.Fragment>
      <GoogleMap
        defaultZoom={5}
        defaultCenter={{ lat: -34.603722, lng: -58.381592 }}
      >
        {props.id_nombre.map(marker => {
          return (
            <Marker
              key={marker.id}
              title={marker.nombre}
              position={{
                lat: parseFloat(marker.centroide.lat),
                lng: parseFloat(marker.centroide.lon)
              }}
            ></Marker>
          );
        })}
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
