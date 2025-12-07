"use client";

export default function Tag({
  children,
  color = "gray",
}: {
  children: React.ReactNode;
  color?: "gray" | "blue" | "green" | "orange";
}) {
  const colors = {
    gray: "bg-gray-200 text-gray-800",
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    orange: "bg-orange-100 text-orange-700",
  };

  return (
    <span className={`px-2 py-1 text-xs rounded-md ${colors[color]}`}>
      {children}
    </span>
  );
}
