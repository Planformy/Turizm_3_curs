export type Event = {
  id: number;
  title: string;
  date: string;       // ISO-дата: "2025-12-22"
  type: string;       // "Фестиваль", "Поход" и т.п.
  place: string;      // место проведения
  days: number;
  distance: number;   // км от Челябинска
  rating: number;
  description: string;
};
