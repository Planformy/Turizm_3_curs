"use client";

import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Props {
  children?: React.ReactNode;
  center?: [number, number];
  zoom?: number;
}

export default function CustomMapContainer({
  children,
  center = [55.1599, 61.4026],
  zoom = 8,
}: Props) {
  return (
    <LeafletMap
      center={center}
      zoom={zoom}
      scrollWheelZoom={true}
      className="w-full h-full rounded-xl"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {children}
    </LeafletMap>
  );
}
