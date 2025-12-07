import Card from "../ui/Card";
import Rating from "../ui/Rating";
import Tag from "../ui/Tag";

type Props = {
  title: string;
  rating: number;
  distance: number;
  days: number;
};

export default function AttractionMapCard({
  title,
  rating,
  distance,
  days,
}: Props) {
  return (
    <Card className="p-4 w-80">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>

      <div className="flex items-center gap-2 mb-2">
        <Rating value={rating} size="sm" />
        <span className="text-sm text-gray-500">{distance} км от Челябинска</span>
      </div>

      <div className="text-sm text-gray-600 mb-3">
        Продолжительность: {days} {days === 1 ? "день" : "дня"}
      </div>

      <div className="flex gap-2">
        <Tag>Популярное место</Tag>
        <Tag color="blue">Лёгкий маршрут</Tag>
      </div>
    </Card>
  );
}
