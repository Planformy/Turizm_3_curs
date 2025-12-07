type HomeCardItem = {
  id: number;
  title: string;
  type: string;
  rating: number;
  distance: string;
  time: string;
  description: string;
  image?: string;
};

export default function HomeAttractionCard({ item }: { item: HomeCardItem }) {
  return (
    <div className="bg-white rounded-2xl border shadow p-0 overflow-hidden">

      <div className="relative w-full h-40 bg-gray-300">
        <span className="absolute right-3 top-3 bg-white rounded-full px-3 py-1 text-sm shadow">
          {item.type}
        </span>
      </div>

      <div className="p-4">
        <div className="flex justify-between text-sm text-gray-600">
          <b>{item.title}</b>
          <span>{item.rating}</span>
        </div>

        <div className="mt-2 text-sm text-gray-700">
          <div>• {item.distance}</div>
          <div>• {item.time}</div>
        </div>

        <p className="mt-2 line-clamp-3 text-sm text-gray-600">
          {item.description}
        </p>

        <button className="w-full bg-gray-200 text-gray-700 rounded-lg py-2 mt-4">
          Подробнее
        </button>
      </div>

    </div>
  );
}
