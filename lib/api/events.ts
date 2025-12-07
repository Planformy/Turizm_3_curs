import { Event } from "../types/Event";
import { eventsMock } from "@/components/events/EventsMock";

export async function getEvents(params?: { type?: string }): Promise<Event[]> {
  const { type } = params || {};

  return eventsMock.filter((e) =>
    type ? e.type === type : true
  );
}
