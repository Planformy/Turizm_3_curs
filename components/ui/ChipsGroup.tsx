"use client";

import clsx from "clsx";

type Chip = {
  label: string;
  value: string;
};

type Props = {
  items: Chip[];
  value: string | null;
  onChange: (value: string) => void;
};

export default function ChipsGroup({ items, value, onChange }: Props) {
  return (
    <div className="flex gap-2 flex-wrap">
      {items.map((chip) => (
        <button
          key={chip.value}
          onClick={() => onChange(chip.value)}
          className={clsx(
            "px-3 py-1 rounded-full text-sm border transition",
            value === chip.value
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
          )}
        >
          {chip.label}
        </button>
      ))}
    </div>
  );
}
