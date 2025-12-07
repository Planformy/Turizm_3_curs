export type Stay = {
  id: number;
  title: string;
  image: string;
  rating: number;

  howToGet: string[];
  whatToTake: string[];
  whatIsThere: string[];

  reviews: {
    id: number;
    author: string;
    rating: number;
    text: string;
  }[];
};
