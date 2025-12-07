"use client";

import Container from "@/components/ui/Container";
import EventTypeFilter from "@/components/filters/EventTypeFilter";
import { eventsMock } from "@/components/events/EventsMock";
import { useState } from "react";

const daysInMonth = 31; // декабрь 2025

export default function EventsCalendarPage() {
  const [type, setType] = useState<string>("");

  // Фильтрация событий по типу
  const filtered = eventsMock.filter((e) =>
    type ? e.type === type : true
  );

  // Разложим события по дням месяца
  const eventsByDay: Record<number, typeof filtered> = {};
  filtered.forEach((e) => {
    const d = new Date(e.date).getDate();
    if (!eventsByDay[d]) eventsByDay[d] = [];
    eventsByDay[d].push(e);
  });

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-4">Календарь событий</h1>
      <p className="text-gray-600 mb-4">
        Выберите интересующие вас события в формате календаря
      </p>

      {/* Фильтр типов */}
      <div className="mb-6">
        <EventTypeFilter value={type} onChange={setType} />
      </div>

      {/* Переключатели режимов */}
      <div className="flex justify-end mb-4 text-sm">
        <button className="px-3 py-1 border rounded-l bg-gray-100">
          День
        </button>
        <button className="px-3 py-1 border-t border-b">
          Неделя
        </button>
        <button className="px-3 py-1 border rounded-r bg-blue-600 text-white">
          Месяц
        </button>
      </div>

      {/* Календарь */}
      <div className="border rounded-xl overflow-hidden bg-white">
        <div className="px-4 py-3 border-b font-semibold">Декабрь 2025</div>

        {/* Заголовки дней недели */}
        <div className="grid grid-cols-7 text-xs text-center border-b bg-gray-50">
          {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((d) => (
            <div key={d} className="py-2 font-medium">
              {d}
            </div>
          ))}
        </div>

        {/* Дни месяца */}
        <div className="grid grid-cols-7 text-xs">
          {daysArray.map((day) => (
            <div
              key={day}
              className="min-h-[80px] border-r border-b px-1 py-1 align-top"
            >
              <div className="text-right text-gray-500 text-[11px] mb-1">
                {day}
              </div>

              <div className="space-y-1">
                {eventsByDay[day]?.map((e) => (
                  <div
                    key={e.id}
                    className="bg-blue-100 text-blue-800 rounded px-1 py-[2px] text-[11px]"
                  >
                    {e.type}: {e.title}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
