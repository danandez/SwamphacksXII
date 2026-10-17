import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./index.css";
import events from "./data/events";
import type { CampusEvent } from "./types";
import EventPopup from "./components/EventPopup";

const eventMarkerIcon = L.divIcon({
  className: "",
  html: '<div class="custom-marker"></div>',
  iconSize: [34, 34],
  iconAnchor: [17, 34],
  popupAnchor: [0, -34],
});

const userMarkerIcon = L.divIcon({
  className: "",
  html: '<div class="user-marker"></div>',
  iconSize: [34, 34],
  iconAnchor: [17, 34],
  popupAnchor: [0, -34],
});

export default function App() {
  const apiKey = import.meta.env.VITE_CARTO_API;
  const tileUrl = apiKey
    ? `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?key=${apiKey}`
    : "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";

  const [center, setCenter] = useState<[number, number]>([29.6436, -82.3549]);
  const [userPosition, setUserPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setUserPosition([lat, lng]);
        setCenter([lat, lng]);
      },
      () => {}
    );
  }, []);

  return (
    <MapContainer center={center} zoom={14} style={{ height: "100vh", width: "100%" }}>
      <TileLayer attribution='&copy; OpenStreetMap contributors &copy; CARTO' url={tileUrl} subdomains="abcd" />
      {userPosition && (
        <Marker position={userPosition} icon={userMarkerIcon}>
          <Popup>
            <div className="event-popup">
              <h3>You are here</h3>
            </div>
          </Popup>
        </Marker>
      )}
      {events.map((e: CampusEvent) => (
        <Marker key={e.id} position={[e.lat, e.lng]} icon={eventMarkerIcon}>
          <Popup>
            <EventPopup event={e} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
