import React from "react";
import "./App.scss";
import { MenuTable } from "./components/menu-table";
function App() {
  return (
    <div className="container">
      <div className="menu">
        <MenuTable />
      </div>
      <div className="map">map</div>
    </div>
  );
}

export default App;
