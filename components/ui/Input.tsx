"use client";

import clsx from "clsx";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export default function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm text-gray-700">{label}</label>}

      <input
        {...props}
        className={clsx(
          "w-full px-3 py-2 border rounded-md outline-none transition",
          "focus:border-blue-500",
          error ? "border-red-500" : "border-gray-300",
          className
        )}
      />

      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
