"use client";

import HeroSearch from "./HeroSearch";
import Container from "@/components/ui/Container";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#E4E4E4] h-[420px] flex items-center">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-[32px] font-semibold mb-4 text-[#1A1A1A]">
            Откройте для себя жемчужину Урала
          </h1>

          <p className="text-[15px] text-[#4C4C4C] mb-8 leading-relaxed">
            Насладитесь захватывающей природой, богатым культурным наследием
            и незабываемыми приключениями
          </p>

          <HeroSearch />
        </div>
      </Container>
    </section>
  );
}
