"use client";

const years = [2025, 2024, 2023];
const months = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];

export default function EventsSidebarCalendar() {
  return (
    <aside className="w-full md:w-64 p-4 border rounded-xl bg-white shadow-sm">
      <h3 className="font-semibold mb-4">Календарь событий</h3>

      <div className="space-y-4">
        {years.map((year) => (
          <div key={year}>
            <div className="font-semibold">{year} год</div>

            <div className="grid grid-cols-4 gap-1 mt-2 text-xs">
              {months.map((m) => (
                <div
                  key={m}
                  className="px-2 py-1 rounded bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
                >
                  {m}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
