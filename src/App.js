import React from "react";
import "./App.scss";
import { MenuTable } from "./components/menu-table";
import { Map } from "./components/map";

function App() {
  return (
    <div className="container">
      <div className="menu">
        <MenuTable />
      </div>
      <div id="map" className="map_class">
        <Map />
      </div>
    </div>
  );
}

export default App;
