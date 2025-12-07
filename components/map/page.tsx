"use client";

import Container from "@/components/ui/Container";
import MapContainer from "@/components/map/MapContainer";
import MapMarker from "@/components/map/MapMarker";
import { attractionsMock } from "@/components/attractions/attractionsMock";
import AttractionsViewSwitcher from "@/components/attractions/AttractionsViewSwitcher";

export default function AttractionsMapPage() {
  return (
    <Container>
      <div className="flex justify-between items-center mb-6 pt-4">
        <h1 className="text-3xl font-bold">Карта достопримечательностей</h1>
        <AttractionsViewSwitcher current="map" />
      </div>

      <div className="w-full h-[600px] rounded-xl overflow-hidden">
        <MapContainer>
          {attractionsMock.map((item) => (
            <MapMarker key={item.id} item={item} />
          ))}
        </MapContainer>
      </div>
    </Container>
  );
}
