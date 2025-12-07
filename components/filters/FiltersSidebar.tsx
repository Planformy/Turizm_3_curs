import ChipsGroup from "../ui/ChipsGroup";
import Checkbox from "../ui/Checkbox";

type Props = {
  rating: string | null;
  difficulty: string | null;
  features?: string[];
  onChange: (field: string, value: any) => void;
};


export default function FiltersSidebar({
  rating,
  difficulty,
  features = [],
  onChange,
}: Props) {
  return (
    <aside className="w-full md:w-64 border rounded-xl p-5 h-fit bg-white shadow-sm">
      <h3 className="font-semibold mb-4 text-[16px]">Фильтры</h3>
      <div className="mb-5">
        <h4 className="font-medium text-sm mb-2">Средняя оценка</h4>
        <ChipsGroup
          items={[
            { label: "4.5+", value: "4.5" },
            { label: "4.0+", value: "4.0" },
            { label: "3.5+", value: "3.5" },
          ]}
          value={rating}
          onChange={(v) => onChange("rating", v)}
        />
      </div>
      <div className="mb-5">
        <h4 className="font-medium text-sm mb-2">Сложность</h4>
        <ChipsGroup
          items={[
            { label: "Лёгкий", value: "easy" },
            { label: "Средний", value: "medium" },
            { label: "Сложный", value: "hard" },
          ]}
          value={difficulty}
          onChange={(v) => onChange("difficulty", v)}
        />
      </div>
      <div>
        <h4 className="font-medium text-sm mb-2">Особенности</h4>

        <Checkbox
          label="Детям"
          checked={features?.includes("kids")}
          onChange={() => onChange("features", "kids")}
        />
        <Checkbox
          label="Подходит новичкам"
          checked={features?.includes("newbie")}
          onChange={() => onChange("features", "newbie")}
        />
        <Checkbox
          label="Требуется снаряжение"
          checked={features?.includes("gear")}
          onChange={() => onChange("features", "gear")}
        />
      </div>
    </aside>
  );
}
