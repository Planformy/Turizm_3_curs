import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Card({ children, className, onClick }: Props) {
  return (
    <div
      className={clsx(
        "rounded-2xl bg-white border border-[#E5E5E5] shadow-[0_1px_4px_rgba(0,0,0,0.08)]",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
