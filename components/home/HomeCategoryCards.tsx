import Link from "next/link";
import Container from "@/components/ui/Container";

const items = [
  {
    title: "Достопримечательности",
    desc: "Исследуйте чудеса природы",
    href: "/attractions",
  },
  {
    title: "Где остановиться",
    desc: "Найдите жильё",
    href: "/stays",
  },
  {
    title: "События",
    desc: "Следите за мероприятиями",
    href: "/events",
  },
  {
    title: "Новости",
    desc: "Последние обновления",
    href: "/news",
  },
];

export default function HomeCategoryCards() {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="
              bg-white rounded-2xl border border-[#E6E6E6]
              shadow-[0_4px_14px_rgba(0,0,0,0.05)]
              hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)]
              transition
              p-6 flex flex-col items-start
            "
          >
            {/* квадрат сверху */}
            <div className="w-4 h-4 bg-[#AEB2BA] rounded-sm mb-3" />

            <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-1">
              {item.title}
            </h3>
            <p className="text-[13px] text-[#6F7073]">
              {item.desc}
            </p>
          </Link>
        ))}
      </div>
    </Container>
  );
}
