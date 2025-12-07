import Link from "next/link";

export default function SectionHeader({
  title,
  subtitle,
  link,
}: {
  title: string;
  subtitle?: string;
  link?: { href: string; label: string };
}) {
  return (
    <div className="flex items-end justify-between mb-8">
      <div>
        <h2 className="text-[22px] font-semibold text-[#1A1A1A] mb-1">
          {title}
        </h2>

        {subtitle && <p className="text-[13px] text-[#818181]">{subtitle}</p>}
      </div>

      {link && (
        <Link href={link.href} className="text-[13px] text-[#818181]">
          {link.label} →
        </Link>
      )}
    </div>
  );
}
