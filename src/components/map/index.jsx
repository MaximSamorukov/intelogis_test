import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { routes } from "../../constants";

import { getRoute } from "../../http-services";

export const Map = () => {
  useEffect(() => {
    getRoute(routes[0]).then((data) => console.log(data));
  }, []);
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
