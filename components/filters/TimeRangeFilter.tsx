type Props = {
  min: number;
  max: number;
};

export default function TimeRangeFilter({ min, max }: Props) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="number"
        min={min}
        max={max}
        defaultValue={min}
        className="w-20 p-1 border rounded"
      />
      <span>—</span>
      <input
        type="number"
        min={min}
        max={max}
        defaultValue={max}
        className="w-20 p-1 border rounded"
      />
    </div>
  );
}
