import { AttractionItem } from "./AttractionItem";

type Props = {
  item: AttractionItem;
};

export default function AttractionCard({ item }: Props) {
  return (
    <div className="bg-white border rounded-2xl shadow p-0 overflow-hidden">

      {/* КАРТИНКА */}
      <div className="relative h-40 bg-gray-200">
        <span className="absolute right-3 top-3 bg-white px-3 py-1 rounded-full text-sm shadow">
          {item.type}
        </span>
      </div>

      {/* КОНТЕНТ */}
      <div className="p-4">
        {/* Название + рейтинг */}
        <div className="flex justify-between items-center mb-2">
          <b className="text-[16px]">{item.title}</b>
          <span className="text-sm text-gray-700">
            {item.rating}
            <span className="inline-block w-2 h-2 bg-gray-400 ml-1 rounded-sm"></span>
          </span>
        </div>

        {/* Основная инфа */}
        <div className="text-sm text-gray-700 mb-3 space-y-1">
          <div className="flex gap-2 items-center">
            <span className="w-3 h-3 bg-gray-400 rounded-sm"></span>
            {item.distance} км от Челябинска
          </div>
          <div className="flex gap-2 items-center">
            <span className="w-3 h-3 bg-gray-400 rounded-sm"></span>
            {item.days} {item.days === 1 ? "день" : "дня"}
          </div>
        </div>

        {/* Описание */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {item.description}
        </p>

        {/* Кнопка */}
        <button className="w-full bg-gray-200 hover:bg-gray-300 py-2 rounded-lg text-gray-700">
          Подробнее
        </button>
      </div>
    </div>
  );
}
