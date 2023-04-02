import React from "react";

import "./App.css";

import coverage from "./coverage.png";

import { MapContainer, TileLayer, ImageOverlay } from "react-leaflet";

function App() {
  return (
    <>
      <MapContainer
        center={[63.4305, 10.3951]}
        zoom={6}
        scrollWheelZoom={false}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ImageOverlay
          url={coverage}
          bounds={[
            [54, -5],
            [72, 32.5],
          ]}
        />
      </MapContainer>
    </>
  );
}

export default App;
