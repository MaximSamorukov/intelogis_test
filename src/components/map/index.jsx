import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

export const Map = () => {
  return (
    <MapContainer
      className="main"
      center={[50.5, 50.5]}
      zoom={3}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};
