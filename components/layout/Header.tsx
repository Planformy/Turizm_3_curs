"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="mx-auto max-w-6xl px-4 py-4 flex justify-between items-center">

        {/* ЛОГО */}
        <Link href="/" className="font-bold text-lg">
          LOGO
        </Link>

        {/* Навигация */}
        <nav className="flex gap-6 text-sm text-gray-700">
          <Link href="/">Главная</Link>
          <Link href="/attractions">Достопримечательности</Link>
          <Link href="/routes">Маршруты</Link>
          <Link href="/stays">Где остановиться</Link>
          <Link href="/events">Календарь событий</Link>
          <Link href="/news">Новости</Link>
        </nav>

        {/* ИКОНКА ПЕРЕКЛЮЧЕНИЯ ТЕМЫ */}
        <button
          onClick={() => setDark(!dark)}
          className="
            w-8 h-8 flex items-center justify-center
            rounded-full border border-[#ccc]
            text-black hover:bg-gray-100 transition
          "
        >
          {/* Иконка как в макете */}
          <div
            className="
              w-4 h-4 rounded-full border-2 border-black
              relative
            "
          >
            {/* ЧЕРНОЕ ПОЛУКРУГЛОЕ ЗАПОЛНЕНИЕ */}
            <div
              className="
                absolute top-0 right-0 w-2 h-4 bg-black rounded-r-full
              "
            />
          </div>
        </button>
      </div>
    </header>
  );
}
