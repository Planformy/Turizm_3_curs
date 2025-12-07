import Container from "../../../components/ui/Container";
import Breadcrumbs from "../../../components/layout/Breadcrumbs";
import Rating from "../../../components/ui/Rating";
import Tag from "../../../components/ui/Tag";

import attractionDetailsMock from "../../../components/attractions/attractionDetailsMock";


export default function AttractionDetailsPage({ params }: { params: { slug: string } }) {
  // В реальном проекте тут будет fetch / запрос в API
  const item = attractionDetailsMock.find((a) => a.slug === params.slug);

  if (!item) {
    return (
      <Container>
        <div className="py-20 text-center text-xl text-gray-600">
          Достопримечательность не найдена
        </div>
      </Container>
    );
  }

  return (
    <Container>
      {/* Хлебные крошки */}
      <Breadcrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Достопримечательности", href: "/attractions" },
          { label: item.title },
        ]}
      />

      {/* Фото */}
      <div className="w-full h-96 rounded-xl overflow-hidden mb-6">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Заголовок */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold">{item.title}</h1>
        <Rating value={item.rating} />
      </div>

      {/* Теги */}
      <div className="flex gap-2 mb-6">
        {item.tags?.map((t: string) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      {/* Описание */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">О месте</h2>
        <p className="text-gray-700 leading-relaxed">{item.description}</p>
      </section>

      {/* Что необходимо взять */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Что необходимо взять</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {item.toTake?.map((i: string) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </section>

      {/* Что есть на месте */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Что есть на месте</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {item.toHave?.map((i: string) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </section>

      {/* Как добраться */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Как добраться</h2>
        <p className="text-gray-700 mb-4">{item.route}</p>
      </section>

      {/* Карта */}
      <div className="w-full h-[400px] bg-gray-200 rounded-xl mb-10 flex items-center justify-center">
        <span className="text-gray-600">Карта будет здесь</span>
      </div>

      {/* Отзывы */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-3">Отзывы</h2>

        {item.reviews?.map((review: any) => (
          <div key={review.id} className="border p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="font-semibold">{review.author}</span>
              <Rating value={review.rating} size="sm" />
            </div>
            <p className="text-gray-700">{review.text}</p>
          </div>
        ))}
      </section>

      <div className="pb-20" />
    </Container>
  );
}
