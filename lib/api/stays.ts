import { Stay } from "../types/stay";
import { staysMock } from "@/components/stays/staysMock";

export async function getStays(): Promise<Stay[]> {
  return staysMock;
}
