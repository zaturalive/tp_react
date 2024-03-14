import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

// Créez un nouveau composant pour gérer le changement de position de la carte
function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const Display = ({ dataCountry }) => {
  const [coordinates, setCoordinates] = useState([51.505, -0.09]); // Coordonnées par défaut pour Londres

  useEffect(() => {
    if (dataCountry && dataCountry.latlng) {
      setCoordinates([dataCountry.latlng[1], dataCountry.latlng[0]]);
    }
  }, [dataCountry]);

  return (
    <div className="display">
      <MapContainer
        center={coordinates}
        zoom={5}
        style={{ height: "300px", width: "300px" }}
      >
        <ChangeView center={coordinates} zoom={5} />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {coordinates && <Marker position={coordinates} />}
      </MapContainer>
    </div>
  );
};

export default Display;
