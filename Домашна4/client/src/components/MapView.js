import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapView({ data }) {
  const position = [data[0].latitude, data[0].longitude];


  return (

    <MapContainer style={{

      width: "100vw",
      height: "100vh",
      padding: "0",
    }} center={position} zoom={13} scrollWheelZoom={false} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {data.map((x, index) => {

        return (<Marker key={index} position={[x.latitude, x.longitude]}>
          <Popup>
            {x.name} <br /> {x.vicinity}.
      </Popup>
        </Marker>);
      })}
    </MapContainer>

  );
}
