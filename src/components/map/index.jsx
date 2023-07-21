import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { routes } from "../../constants";

import { getRoute } from "../../http-services";

export const Map = () => {
  const currentRoute = useSelector((state) => state.route);
  //useEffect(() => {
  //  getRoute(routes[0]).then((data) => console.log(data));
  //}, []);
  const firstCoords = currentRoute.selectedCoords?.length
    ? currentRoute.selectedCoords[0]
    : { lat: 50, lng: 50 };
  return (
    <MapContainer
      className="main"
      center={firstCoords}
      zoom={13}
      zoomControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};
