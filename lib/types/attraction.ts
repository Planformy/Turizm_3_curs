export type Attraction = {
  id: number;
  title: string;
  image: string;
  type: string; // гора, озеро, история и т.д.
  rating: number;
  description?: string;

  howToGet?: string[];
  whatToTake?: string[];
  whatIsThere?: string[];

  reviews?: {
    id: number;
    author: string;
    rating: number;
    text: string;
  }[];
};
