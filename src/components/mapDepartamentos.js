import React, { useState } from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const Map_depto = (props) => {
  const [depto, setDepto] = useState(null);

  return (
    <React.Fragment>
      <GoogleMap
        defaultZoom={5}
        defaultCenter={{
          lat: -34.603722,
          lng: -58.381592,
        }}
      >
        {props.id_nombre.map((marker) => {
          return (
            <Marker
              key={marker.id}
              title={marker.nombre}
              label={<p>{marker.nombre} </p>}
              position={{
                lat: parseFloat(marker.centroide.lat),
                lng: parseFloat(marker.centroide.lon),
              }}
              icon={{
                url: `https://freesvg.org/img/ts-map-pin.png`,
                scaledSize: new window.google.maps.Size(25, 25),
              }}
              clickable={true}
            ></Marker>
          );
        })}

        {depto && (
          <InfoWindow
            onCloseClick={() => {
              setDepto(null);
            }}
            position={{
              lat: parseFloat(depto.centroide.lat),
              lng: parseFloat(depto.centroide.lon),
            }}
          ></InfoWindow>
        )}
      </GoogleMap>
    </React.Fragment>
  );
};

export default withScriptjs(withGoogleMap(Map_depto));
