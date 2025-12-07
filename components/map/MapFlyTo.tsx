"use client";

import { useMap } from "react-leaflet";
import { useEffect } from "react";

export default function MapFlyTo({ position }: { position: [number, number] }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 12, { duration: 1.2 });
  }, [position, map]);

  return null;
}
