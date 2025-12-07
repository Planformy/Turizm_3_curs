import { Event } from "@/types/event";

export type EventItem = {
  id: number;
  title: string;
  type: string;
  image: string;
  rating: number;
  date: string;
};

export const eventsMock = [
  {
    id: 1,
    title: "Фестиваль на Таганайе",
    type: "Фестиваль",
    image: "/ev1.jpg",
    rating: 4.9,
    date: "2025-12-05",
  },
  {
    id: 2,
    title: "Поход до Зюраткуля",
    type: "Поход",
    image: "/ev2.jpg",
    rating: 4.7,
    date: "2025-12-12",
  },
  {
    id: 3,
    title: "Экскурсия Аркаим",
    type: "Экскурсия",
    image: "/ev3.jpg",
    rating: 4.6,
    date: "2025-12-21",
  },
];

