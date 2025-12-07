"use client";

import Container from "@/components/ui/Container";
import RoutesFiltersSidebar from "@/components/filters/RoutesFiltersSidebar";
import RouteCard from "@/components/routes/RouteCard";
import { routesMock } from "@/components/routes/routesMock";
import AttractionsViewSwitcher from "@/components/attractions/AttractionsViewSwitcher";

export default function RoutesListPage() {
  return (
    <Container>
      <div className="flex justify-between items-center mb-6 pt-4">
        <h1 className="text-3xl font-bold">Маршруты</h1>
        <AttractionsViewSwitcher current="list" />
      </div>

      <div className="flex gap-6 flex-col md:flex-row">
        <RoutesFiltersSidebar />

        <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {routesMock.map((item) => (
            <RouteCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
}
