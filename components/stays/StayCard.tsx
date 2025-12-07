"use client";

import Card from "@/components/ui/Card";
import Rating from "@/components/ui/Rating";

export default function StayCard({ item, onOpen }: any) {
  return (
    <Card
      className="overflow-hidden cursor-pointer hover:shadow-lg transition"
      onClick={() => onOpen(item)}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-cover"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{item.title}</h3>

        <p className="text-gray-600 text-sm">{item.location}</p>

        <Rating value={item.rating} />
      </div>
    </Card>
  );
}
