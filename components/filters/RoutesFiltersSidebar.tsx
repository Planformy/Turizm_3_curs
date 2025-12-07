"use client";

import { useState } from "react";
import TimeRangeFilter from "./TimeRangeFilter";
import DifficultyFilter from "./DifficultyFilter";
import RouteTypeFilter from "./RouteTypeFilter";
import SeasonFilter from "./SeasonFilter";

export default function RoutesFiltersSidebar() {
  const [days, setDays] = useState([1, 7]);
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [season, setSeason] = useState("");

  return (
    <aside className="w-full md:w-64 border rounded-xl p-4 space-y-6 bg-white shadow-sm">
      <div>
        <h4 className="font-semibold mb-2">Продолжительность</h4>
        <TimeRangeFilter min={1} max={7} />
      </div>

      <div>
        <h4 className="font-semibold mb-2">Сложность</h4>
        <DifficultyFilter value={difficulty} onChange={setDifficulty} />
      </div>

      <div>
        <h4 className="font-semibold mb-2">Тип маршрута</h4>
        <RouteTypeFilter value={type} onChange={setType} />
      </div>

      <div>
        <h4 className="font-semibold mb-2">Сезон</h4>
        <SeasonFilter value={season} onChange={setSeason} />
      </div>
    </aside>
  );
}
