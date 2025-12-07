"use client";

import clsx from "clsx";

type Option = {
  value: string | number;
  label: string;
};

type Props = {
  label?: string;
  options: Option[];
  className?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({ label, options, className, ...props }: Props) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm text-gray-700">{label}</label>}

      <select
        {...props}
        className={clsx(
          "w-full px-3 py-2 border rounded-md bg-white outline-none transition",
          "focus:border-blue-500",
          "border-gray-300",
          className
        )}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
