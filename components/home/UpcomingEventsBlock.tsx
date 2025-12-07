"use client";

import { useState } from "react";
import EventCardComponent from "@/components/events/EventCard"; // ← правильный импорт
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Link from "next/link";
import clsx from "clsx";

const eventsMock = [
  [
    {
      id: 1,
      type: "Кемпинг",
      date: "22 декабря 2025",
      title: "Зимний горный марафон",
      rating: 4.9,
      description:
        "Испытайте себя в живописном зимнем марафоне по Уральским горам.",
      distance: "117 км от Челябинска",
      time: "1 день",
    },
    {
      id: 2,
      type: "Кемпинг",
      date: "18 января 2026",
      title: "Поход к озеру Зюраткуль",
      rating: 4.8,
      description:
        "Захватывающий маршрут через зимний лес к живописному озеру.",
      distance: "95 км от Челябинска",
      time: "1 день",
    },
  ],
  [
    {
      id: 3,
      type: "Кемпинг",
      date: "5 февраля 2026",
      title: "Ночной поход со снегоступами",
      rating: 4.7,
      description:
        "Уникальный ночной маршрут по заснеженным склонам национального парка.",
      distance: "120 км от Челябинска",
      time: "1 день",
    },
    {
      id: 4,
      type: "Кемпинг",
      date: "10 марта 2026",
      title: "Ледяной треккинг по ущелью",
      rating: 4.9,
      description:
        "Невероятный маршрут по замёрзшему ущелью с гидом.",
      distance: "80 км от Челябинска",
      time: "1 день",
    },
  ],
];

export default function UpcomingEventsBlock() {
  const [page, setPage] = useState(0);

  return (
    <section className="mt-4 mb-20">

      {/* Заголовок */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="text-[28px] font-semibold text-[#1A1A1A]">События</h2>
          <p className="text-[13px] text-[#777] mt-1">
            Посетите интересные события в Челябинской области
          </p>
        </div>

        <Link
          href="/events"
          className="text-[13px] text-[#808080] hover:text-[#444] transition flex items-center gap-1"
        >
          Все события →
        </Link>
      </div>

      {/* Блок карточек */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 transition-all duration-500">
        {eventsMock[page].map((item) => (
          <EventCardLocal key={item.id} item={item} />
        ))}
      </div>

      {/* Пагинация */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          className="px-3 py-1 border rounded-md hover:bg-gray-100"
        >
          {"<"}
        </button>

        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={clsx(
              "px-3 py-1 border rounded-md",
              page === i ? "bg-blue-600 text-white" : "hover:bg-gray-100"
            )}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setPage((p) => Math.min(p + 1, eventsMock.length - 1))}
          className="px-3 py-1 border rounded-md hover:bg-gray-100"
        >
          {">"}
        </button>
      </div>

    </section>
  );
}

//
// ЛОКАЛЬНАЯ КАРТОЧКА (переименовано, чтобы не конфликтовало)
//
function EventCardLocal({ item }: any) {
  return (
    <div className="bg-white rounded-2xl border border-[#E6E6E6] shadow-[0_4px_12px_rgba(0,0,0,0.07)] overflow-hidden p-0">

      {/* Картинка */}
      <div className="relative w-full h-40 bg-[#D9D9D9]">
        <span className="absolute right-3 top-3 bg-white rounded-full px-3 py-[3px] text-[12px] text-[#5A5A5A] shadow">
          {item.type}
        </span>
      </div>

      {/* Контент */}
      <div className="p-5">
        <div className="flex justify-between items-center text-[12px] text-[#7A7A7A]">
          <span>{item.date}</span>

          <span className="flex items-center gap-1 text-[13px] text-[#4A4A4A]">
            {item.rating}
            <div className="w-2.5 h-2.5 bg-gray-400 rounded-sm"></div>
          </span>
        </div>

        <h3 className="text-[16px] font-semibold mt-1 text-[#1A1A1A] leading-tight">
          {item.title}
        </h3>

        <p className="text-[13px] text-[#444] mt-2">{item.description}</p>

        <div className="text-[13px] text-[#444] mt-3 space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
            <span>{item.distance}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
            <span>{item.time}</span>
          </div>
        </div>

        {/* Кнопки */}
        <div className="flex gap-3 mt-5">
          <button className="flex-1 bg-[#D9D9D9] py-2 rounded-lg text-[14px] text-[#333]">
            Подробнее
          </button>

          <button className="flex-1 bg-[#E4E4E4] py-2 rounded-lg text-[14px] text-[#333]">
            Забронировать сейчас
          </button>
        </div>
      </div>
    </div>
  );
}
