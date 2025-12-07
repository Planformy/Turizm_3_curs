import Container from "@/components/ui/Container";
import { getNewsBySlug } from "@/lib/api/news";

export default async function NewsDetailsPage({ params }: any) {
  const item = await getNewsBySlug(params.slug);

  if (!item) return <Container>Новость не найдена</Container>;

  return (
    <Container>
      <div className="mb-6">
        <span className="text-blue-600 text-sm">{item.category}</span>
        <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
        <p className="text-gray-400 text-sm">{item.date}</p>
      </div>

      <img
        src={item.image}
        alt={item.title}
        className="w-full h-72 object-cover rounded-xl mb-6"
      />

      <div className="prose max-w-none text-gray-800 whitespace-pre-line">
        {item.content}
      </div>
    </Container>
  );
}
