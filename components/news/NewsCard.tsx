import Link from "next/link";

export default function NewsCard({ item }: any) {
  return (
    <Link href={`/news/${item.slug}`} className="block">
      <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-44 object-cover"
        />

        <div className="p-4">
          <span className="text-xs text-blue-600">{item.category}</span>

          <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{item.short}</p>

          <p className="text-gray-400 text-xs">{item.date}</p>
        </div>
      </div>
    </Link>
  );
}
