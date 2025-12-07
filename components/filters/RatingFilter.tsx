import Rating from "../ui/Rating";

type Props = {
  value?: number;
  onChange?: (value: number) => void;
};

export default function RatingFilter({ value = 4.5, onChange = () => {} }: Props) {
  return (
    <div className="flex flex-col gap-2">
      {[4.5, 4.0, 3.5].map((v) => (
        <button
          key={v}
          onClick={() => onChange(v)}
          className={`flex items-center gap-2 text-sm ${
            value === v ? "text-blue-600 font-medium" : "text-gray-700"
          }`}
        >
          <Rating value={v} size="sm" />
          {v}+
        </button>
      ))}
    </div>
  );
}
