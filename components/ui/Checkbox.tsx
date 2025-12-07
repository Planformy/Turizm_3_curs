"use client";

type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Checkbox({ label, ...props }: Props) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" {...props} className="w-4 h-4" />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
}
