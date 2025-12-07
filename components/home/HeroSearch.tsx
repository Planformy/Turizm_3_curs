"use client";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function HeroSearch() {
  return (
    <div className="flex w-full max-w-2xl mx-auto">
      <div className="relative flex-1">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A0A0A0]">
          🔍
        </span>

        <Input
          placeholder="Поиск достопримечательностей, событий или мест"
          className="pl-12 rounded-r-none bg-white text-sm"
          style={{ height: "44px" }}
        />

      </div>

      <Button className="rounded-l-none px-6 text-sm">
        Поиск
      </Button>
    </div>
  );
}
