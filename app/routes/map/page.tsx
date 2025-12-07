"use client";

import Container from "@/components/ui/Container";
import RoutesFiltersSidebar from "@/components/filters/RoutesFiltersSidebar";
import AttractionsViewSwitcher from "@/components/attractions/AttractionsViewSwitcher";

export default function RoutesMapPage() {
  return (
    <Container>
      <div className="flex justify-between items-center mb-6 pt-4">
        <h1 className="text-3xl font-bold">Карта маршрутов</h1>
        <AttractionsViewSwitcher current="map" />
      </div>

      <div className="flex gap-6 flex-col md:flex-row">
        <RoutesFiltersSidebar />

        <div className="flex-1">
          <div className="w-full h-[600px] bg-gray-200 rounded-xl shadow-md flex items-center justify-center">
            <span className="text-gray-600 text-lg">Здесь будет карта маршрутов</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
