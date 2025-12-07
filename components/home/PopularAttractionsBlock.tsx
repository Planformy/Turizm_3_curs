"use client";
import Link from "next/link";
import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AttractionCard from "@/components/attractions/AttractionCard";
import clsx from "clsx";
import HomeAttractionCard from "./HomeAttractionCard";

const attractionsMock = [
{
  id: 1,
  title: "Озеро Тургояк",
  type: "Озеро",
  distance: "117 км от Челябинска",
  days: 1, 
  rating: 4.9,
  description: "...",
  image: ""
},
  {
    id: 2,
    title: "Гора Иремель",
    type: "Средний",
    rating: 4.8,
    distance: "180 км от Челябинска",
      days: 1, 
    time: "1 день",
    description:
      "Популярная точка для хайкинга, живописные виды и мягкий подъём.",
    image: "",
  },
  {
    id: 3,
    title: "Зюраткуль",
    type: "Лёгкий",
    rating: 5.0,
    distance: "95 км от Челябинска",
      days: 1, 
    time: "1 день",
    description:
      "Живописное высокогорное озеро, расположенное среди горных хребтов.",
    image: "",
  },
  {
    id: 4,
    title: "Аркаим",
    type: "Лёгкий",
    rating: 4.7,
    distance: "450 км от Челябинска",
      days: 1, 
    time: "2 дня",
    description:
      "Древний город, место силы и уникальный археологический памятник.",
    image: "",
  },
  {
    id: 5,
    title: "Сугомакская пещера",
    type: "Средний",
    rating: 4.6,
    distance: "140 км от Челябинска",
      days: 1, 
    time: "1 день",
    description:
      "Единственная в Урале мраморная пещера, подходит для лёгкого спелеотура.",
    image: "",
  },
];

export default function PopularAttractionsBlock() {
  const [page, setPage] = useState(1);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(attractionsMock.length / itemsPerPage);

  const start = (page - 1) * itemsPerPage;
  const visibleItems = attractionsMock.slice(start, start + itemsPerPage);

return (
  <Container className="mt-16 mb-10">
    {/* Заголовок */}
    <div className="flex justify-between items-start mb-5">
      <div>
        <SectionTitle>Популярные достопримечательности</SectionTitle>

        {/* ← ДОБАВЛЕННЫЙ ТЕКСТ */}
        <p className="text-[13px] text-gray-500 mt-1">
          Откройте для себя самые популярные места в Челябинской области
        </p>
      </div>
   
  <Link
    href="/attractions"
    className="text-sm text-gray-500 hover:text-gray-700 transition flex items-center gap-1"
  >
    Все достопримечательности →
  </Link>
</div>

    {/* GRID */}
    <div className="grid md:grid-cols-4 grid-cols-1 gap-6 transition-all duration-500">
      {visibleItems.map((item) => {
  const homeItem = {
    id: item.id,
    title: item.title,
    type: item.type,
    distance: item.distance + " км",
    time: item.days + " дней",
    rating: item.rating,
    description: item.description || "",
    image: item.image
  };

  return (
    <div key={item.id} className="animate-fade">
      <HomeAttractionCard item={homeItem} />
    </div>
  );
})}



    </div>

    {/* Пагинация */}
    <div className="flex justify-center gap-2 mt-8">
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={page === 1}
        className="px-3 py-1 border rounded disabled:opacity-40"
      >
        &lt;
      </button>

      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={clsx(
            "px-3 py-1 border rounded",
            page === i + 1 ? "bg-blue-500 text-white" : "bg-white"
          )}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        disabled={page === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-40"
      >
        &gt;
      </button>
    </div>
  </Container>
);
}
