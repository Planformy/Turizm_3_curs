"use client";

import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

interface Props {
  item: {
    id: number;
    title: string;
    rating: number;
    image: string;
    type: string;
    position: [number, number]; // ← обязательно кортеж
  };
  onSelect?: (item: any) => void; // ← добавили
}

const icon = L.icon({
  iconUrl: "/marker.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export default function MapMarker({ item, onSelect }: Props) {
  return (
    <Marker
      position={item.position}
      icon={icon}
      eventHandlers={{
        click: () => onSelect?.(item),
      }}
    >
      <Popup>
        <div className="text-sm">
          <img
            src={item.image}
            className="w-full h-20 object-cover rounded mb-2"
            alt={item.title}
          />
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-gray-500 text-xs">{item.type}</p>
          <p className="text-yellow-600 font-semibold">★ {item.rating}</p>
        </div>
      </Popup>
    </Marker>
  );
}
