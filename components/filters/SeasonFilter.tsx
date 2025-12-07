"use client";

import ChipsGroup from "../ui/ChipsGroup";

export default function SeasonFilter({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <ChipsGroup
      items={[
        { label: "Лето", value: "Лето" },
        { label: "Зима", value: "Зима" },
        { label: "Всесезонный", value: "Всесезонный" },
      ]}
      value={value}
      onChange={onChange}
    />
  );
}
