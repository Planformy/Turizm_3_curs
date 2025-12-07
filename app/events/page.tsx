"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import EventTypeFilter from "@/components/filters/EventTypeFilter";
import EventsSidebarCalendar from "@/components/events/EventsCalendar";
import EventCard from "@/components/events/EventCard";
import { getEvents } from "@/lib/api/events";
import { Event } from "@/lib/types/Event";

export default function EventsListPage() {
  const [type, setType] = useState<string>("");
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getEvents({ type });
      setEvents(data);
    }
    load();
  }, [type]);

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-4">Календарь событий</h1>
      <p className="text-gray-600 mb-6">
        Узнайте о предстоящих мероприятиях и фестивалях Челябинской области
      </p>

      {/* Фильтр типов */}
      <div className="mb-6">
        <EventTypeFilter value={type} onChange={setType} />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Левый список */}
        <div className="flex-1 space-y-4">
          {events.map((item) => (
            <EventCard key={item.id} item={item} />
          ))}
        </div>

        {/* Правый сайдбар — календарь */}
        <EventsSidebarCalendar />
      </div>
    </Container>
  );
}
