"use client";

import ChipsGroup from "../ui/ChipsGroup";

export default function RouteTypeFilter({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <ChipsGroup
      items={[
        { label: "Пеший", value: "Пеший" },
        { label: "Велосипедный", value: "Велосипедный" },
        { label: "Горный", value: "Горный" },
      ]}
      value={value}
      onChange={onChange}
    />
  );
}
