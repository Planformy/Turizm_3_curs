"use client";

type Props = {
  label?: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
};

export default function RangeSlider({ label, min, max, value, onChange }: Props) {
  return (
    <div className="flex flex-col gap-1">
      {label && <span className="text-sm text-gray-700">{label}</span>}

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="cursor-pointer"
      />

      <span className="text-xs text-gray-500">{value}</span>
    </div>
  );
}
