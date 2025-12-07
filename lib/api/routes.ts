import { Route } from "../types/route";
import { routesMock } from "@/components/routes/routesMock";

export async function getRoutes(params?: {
  difficulty?: Route["difficulty"]; // ✔ строго соответствует типу Route
  type?: string;
  season?: string;
}): Promise<Route[]> {
  return routesMock;
}
