import { Attraction } from "../types/attraction";
import { attractionsMock } from "@/components/attractions/attractionsMock";

export async function getAttractions(params?: {
  page?: number;
  rating?: number;
  type?: string;
}): Promise<Attraction[]> {
  return attractionsMock;
}
