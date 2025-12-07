"use client";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function NewsFilters({ value, onChange }: Props) {
  const categories = ["Все", "Новости", "Туризм", "Отчёт"];

  return (
    <div className="flex gap-2 mb-6">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c === "Все" ? "" : c)}
          className={`px-3 py-1 border rounded-lg text-sm ${
            value === c || (value === "" && c === "Все")
              ? "bg-blue-600 text-white"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
