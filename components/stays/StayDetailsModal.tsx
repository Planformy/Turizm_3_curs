"use client";

import Modal from "@/components/ui/Modal";
import Rating from "@/components/ui/Rating";

export default function StayDetailsModal({ item, open, onClose }: any) {
  if (!item) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <div className="p-6 max-w-3xl mx-auto space-y-6">

        {/* Заголовок */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <Rating value={item.rating} size="sm" />
        </div>

        {/* Картинка */}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover rounded-xl"
        />

        {/* Описание */}
        <p className="text-gray-700">{item.description}</p>

        {/* Блоки */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Как добраться</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {item.howToGet.map((i: string) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Что необходимо взять?</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {item.whatToTake.map((i: string) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Что есть на месте</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {item.whatIsThere.map((i: string) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>

        {/* Отзывы */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Отзывы</h3>

          <div className="space-y-4">
            {item.reviews.map((r: any) => (
              <div key={r.id} className="border p-4 rounded-lg">
                <div className="flex justify-between">
                  <span className="font-semibold">{r.author}</span>
                  <Rating value={r.rating} size="sm" />
                </div>
                <p className="text-gray-700">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
