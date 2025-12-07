"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import AttractionsViewSwitcher from "@/components/attractions/AttractionsViewSwitcher";
import FiltersSidebar from "@/components/filters/FiltersSidebar";
import CustomMapContainer from "@/components/map/MapContainer";
import MapMarker from "@/components/map/MapMarker";
import MapFlyTo from "@/components/map/MapFlyTo";

import AttractionMapCard from "@/components/attractions/AttractionMapCard";
import { attractionsMock } from "@/components/attractions/attractionsMock";

export default function AttractionsMapPage() {
  const [selected, setSelected] = useState(attractionsMock[0]);

  return (
    <Container>
      <div className="flex justify-between items-center mb-6 pt-4">
        <h1 className="text-3xl font-bold">Достопримечательности</h1>
        <AttractionsViewSwitcher current="map" />
      </div>

      <div className="flex gap-6">
        <div className="hidden md:block w-64">
          <FiltersSidebar />
        </div>

        {/* Карта */}
        <div className="flex-1 h-[700px] rounded-xl overflow-hidden relative">
          <CustomMapContainer center={[55.1599, 61.4026]} zoom={8}>

  {selected && <MapFlyTo position = {selected.position} />}

  {attractionsMock.map((item) => (
    <MapMarker key={item.id} item = {item} onSelect={setSelected} />
  ))}

</CustomMapContainer>
          {selected && (
            <div className="absolute top-6 right-6 z-[1000]">
              <AttractionMapCard
                title={selected.title}
                rating={selected.rating}
                distance={selected.distance}
                days={selected.days}
              />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
