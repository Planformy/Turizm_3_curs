"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";

type Props = {
  current: "list" | "map";
};

export default function AttractionsViewSwitcher({ current }: Props) {
  const btnBase =
    "w-10 h-10 flex items-center justify-center rounded-lg border transition";

  return (
    <div className="flex gap-3">

      <Link
        href="/attractions"
        className={clsx(
          btnBase,
          current === "list"
            ? "bg-[#8B8B8B] border-[#8B8B8B]"
            : "bg-[#E6E6E6] border-[#D0D0D0] hover:bg-[#DADADA]"
        )}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </svg>
      </Link>

      <Link
        href="/attractions/map"
        className={clsx(
          btnBase,
          current === "map"
            ? "bg-[#8B8B8B] border-[#8B8B8B]"
            : "bg-[#E6E6E6] border-[#D0D0D0] hover:bg-[#DADADA]"
        )}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={current === "map" ? "white" : "#6F6F6F"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 6l6-3 6 3 6-3v14l-6 3-6-3-6 3V6z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      </Link>
    </div>
  );
}
