import React from "react";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Marker } from "react-leaflet/Marker";
import { Polyline as PolylineComponent } from "react-leaflet/Polyline";
import { getSteps, getWaypoints } from "../../helpers";
import { Polyline } from "leaflet";
import { isEmpty } from "lodash";

function Control({ waypoints }) {
  const map = useMap();
  const bounds = new Polyline(waypoints).getBounds();
  !isEmpty(bounds) &&
    map.fitBounds(bounds, { padding: [200, 200], animate: true });
  return null;
}
export const Map = () => {
  const currentRoute = useSelector((state) => state.route);
  const waypoints = getWaypoints(
    currentRoute?.selectedPolyline?.waypoints || []
  );
  const steps = getSteps(currentRoute?.selectedPolyline?.routes || []);
  const firstCoord = waypoints[0] || { lat: 50, lng: 50 };
  return (
    <MapContainer
      className="main"
      center={firstCoord}
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
      {steps.map((step) => (
        <PolylineComponent
          positions={step}
          pathOptions={{ color: "blue", weight: 3 }}
          eventHandlers={{
            mouseover: (e) => e.target.setStyle({ color: "red", weight: 7 }),
            mouseout: (e) => e.target.setStyle({ color: "blue", weight: 3 }),
          }}
        />
      ))}
      <Control waypoints={waypoints} />
    </MapContainer>
  );
};
