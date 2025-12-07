import Card from "../ui/Card";
import Rating from "../ui/Rating";
import Link from "next/link";

type RouteItem = {
  id: number;
  slug: string;
  title: string;
  days: number;
  difficulty: string;
  type: string;
  season: string;
  rating: number;
  description: string;
  image: string;
};

export default function RouteCard({ item }: { item: RouteItem }) {
  return (
    <Card className="overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-lg transition p-0">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-cover"
      />

      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg">{item.title}</h3>

        <div className="text-gray-600 text-sm">{item.days} дня</div>

        <Rating value={item.rating} size="sm" />

        <Link
          href={`/routes/${item.slug}`}
          className="text-blue-600 text-sm font-medium inline-block mt-2"
        >
          Подробнее →
        </Link>
      </div>
    </Card>
  );
}
