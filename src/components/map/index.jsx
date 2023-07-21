import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Marker } from "react-leaflet/Marker";
import { Polyline } from "react-leaflet/Polyline";
import { getSteps, getWaypoints } from "../../helpers";

export const Map = () => {
  const currentRoute = useSelector((state) => state.route);
  const waypoints = getWaypoints(
    currentRoute?.selectedPolyline?.waypoints || []
  );
  const steps = getSteps(currentRoute?.selectedPolyline?.routes || []);

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
      {waypoints.map((i, ind) => {
        return <Marker key={ind} position={i} />;
      })}
      <Polyline positions={steps} />
    </MapContainer>
  );
};
