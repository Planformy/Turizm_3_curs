"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function IconButton({ children, className, ...props }: Props) {
  return (
    <button
      {...props}
      className={clsx(
        "w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition",
        className
      )}
    >
      {children}
    </button>
  );
}
