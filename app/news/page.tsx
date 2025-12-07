"use client";

import Container from "@/components/ui/Container";
import NewsFilters from "@/components/news/NewsFilters";
import NewsCard from "@/components/news/NewsCard";
import { newsMock } from "@/components/news/NewsMock";
import { useState } from "react";

export default function NewsPage() {
  const [category, setCategory] = useState("");

  const filtered = newsMock.filter((n) =>
    category ? n.category === category : true
  );

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-4">Новости</h1>

      {/* Фильтр */}
      <NewsFilters value={category} onChange={setCategory} />

      {/* Список новостей */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
}
