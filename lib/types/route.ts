export type Route = {
  id: number;
  slug: string;
  title: string;
  days: number;
  difficulty: "Лёгкий" | "Средний" | "Сложный";
  type: string;
  season: string;
  rating: number;
  description: string;
  image: string;
};
