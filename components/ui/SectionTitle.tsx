"use client";

export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[26px] font-semibold text-[#1A1A1A] mb-8">
      {children}
    </h2>
  );
}
