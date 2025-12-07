import { Route } from "@/lib/types/route";

export const routesMock: Route[] = [
  {
    id: 1,
    slug: "turgoyak",
    title: "Маршрут озеро Тургояк",
    days: 2,
    difficulty: "Лёгкий",
    type: "Пеший",
    season: "Летний",
    rating: 4.8,
    description: "Прогулочный маршрут вокруг озера Тургояк.",
    image: "/routes/turgoyak.jpg"
  },
  {
    id: 2,
    slug: "zyuratkul",
    title: "Поход на Зюраткуль",
    days: 1,
    difficulty: "Средний",
    type: "Поход",
    season: "Зимний",
    rating: 4.6,
    description: "Поход на высокогорное озеро Зюраткуль.",
    image: "/routes/zyuratkul.jpg"
  },
  {
    id: 3,
    slug: "taganay",
    title: "Таганай – гора Откликной",
    days: 3,
    difficulty: "Сложный",
    type: "Горный",
    season: "Летний",
    rating: 4.9,
    description: "Сложный маршрут по хребту Таганай.",
    image: "/routes/taganay.jpg"
  }
];

