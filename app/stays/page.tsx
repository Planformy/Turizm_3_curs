"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import StayCard from "@/components/stays/StayCard";
import StayDetailsModal from "@/components/stays/StayDetailsModal";
import { staysMock } from "@/components/stays/staysMock";

export default function StaysPage() {
  const [selected, setSelected] = useState(null);

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6">Где остановиться</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {staysMock.map((item) => (
          <StayCard key={item.id} item={item} onOpen={setSelected} />
        ))}
      </div>

      <StayDetailsModal
        item={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </Container>
  );
}
