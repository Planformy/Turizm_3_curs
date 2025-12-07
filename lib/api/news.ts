import { News } from "../types/news";
import { newsMock } from "@/components/news/NewsMock";

export async function getNews(params?: { category?: string }): Promise<News[]> {
  const { category } = params || {};

  return newsMock.filter((n) =>
    category ? n.category === category : true
  );
}

export async function getNewsBySlug(slug: string): Promise<News | null> {
  return newsMock.find((n) => n.slug === slug) || null;
}
