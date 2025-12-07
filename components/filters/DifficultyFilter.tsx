"use client";

import ChipsGroup from "../ui/ChipsGroup";

export default function DifficultyFilter({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <ChipsGroup
      items={[
        { label: "Лёгкий", value: "Лёгкий" },
        { label: "Средний", value: "Средний" },
        { label: "Сложный", value: "Сложный" },
      ]}
      value={value}
      onChange={onChange}
    />
  );
}
