"use client";

import { useState } from "react";
import Container from "../../components/ui/Container";
import FiltersSidebar from "../../components/filters/FiltersSidebar";
import AttractionCard from "../../components/attractions/AttractionCard";
import AttractionsViewSwitcher from "../../components/attractions/AttractionsViewSwitcher";
import Pagination from "../../components/ui/Pagination";

import { attractionsMock } from "../../components/attractions/attractionsMock";

export default function AttractionsListPage() {
  const [rating, setRating] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<string | null>(null);
  const [features, setFeatures] = useState<string[]>([]);

  const [page, setPage] = useState(1);
  const perPage = 9;

  const handleFilters = (field: string, value: any) => {
    if (field === "rating") setRating(value);
    if (field === "difficulty") setDifficulty(value);

    if (field === "features") {
      setFeatures((prev) =>
        prev.includes(value)
          ? prev.filter((f) => f !== value)
          : [...prev, value]
      );
    }
  };

  const start = (page - 1) * perPage;
  const end = start + perPage;

  const paginatedItems = attractionsMock.slice(start, end);
  const totalPages = Math.ceil(attractionsMock.length / perPage);

  return (
    <Container>
      <div className="flex justify-between items-center mb-2 pt-4">
        <h1 className="text-[28px] font-bold text-[#1A1A1A]">
          Достопримечательности
        </h1>
        <AttractionsViewSwitcher current="list" />
      </div>

      <p className="text-[14px] text-gray-600 mb-8">
        Откройте для себя самые популярные места в Челябинской области
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        <FiltersSidebar
          rating={rating}
          difficulty={difficulty}
          features={features}
          onChange={handleFilters}
        />

        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedItems.map((item) => (
              <AttractionCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Pagination
        totalPages={10}
        currentPage={page}
        onPageChange={setPage}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
