"use client";

import ChipsGroup from "@/components/ui/ChipsGroup";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function EventTypeFilter({ value, onChange }: Props) {
  return (
    <ChipsGroup
      items={[
        { label: "Все", value: "" },
        { label: "Фестиваль", value: "Фестиваль" },
        { label: "Поход", value: "Поход" },
        { label: "Марафон", value: "Марафон" },
      ]}
      value={value}
      onChange={onChange}
    />
  );
}
