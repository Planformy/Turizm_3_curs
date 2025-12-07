export default function EventCard({ item }: any) {
  return (
    <div className="bg-white rounded-2xl border border-[#E5E5E5] shadow-sm p-6 flex gap-6 max-w-full">

      {/* ─── ЛЕВАЯ КАРТИНКА НА ВСЮ ВЫСОТУ ───────────────────────────── */}
      <div className="relative w-[190px] h-[240px] bg-[#D9D9D9] rounded-xl overflow-hidden flex-shrink-0">

        {/* ТЕГ СПРАВА СВЕРХУ */}
        <span className="absolute top-4 right-4 bg-white border border-[#D2D2D2] shadow-sm text-[#5B5B5B] rounded-full px-4 py-[3px] text-[12px]">
          {item.type}
        </span>

        {item.image && (
          <img src={item.image} className="w-full h-full object-cover" />
        )}
      </div>

      {/* ─── ОСНОВНОЙ КОНТЕНТ ───────────────────────────────────────── */}
      <div className="flex-1 flex flex-col justify-between">

        {/* ВЕРХНИЙ БЛОК */}
        <div>

          {/* ДАТА + РЕЙТИНГ В ОДИН РЯД */}
          <div className="flex justify-between items-center text-[13px] text-[#7A7A7A]">
            <span>{item.date}</span>

            <div className="flex items-center gap-1 text-[14px] text-[#363636]">
              <span>{item.rating}</span>
              <div className="w-[10px] h-[10px] bg-[#9B9B9B] rounded-sm"></div>
            </div>
          </div>

          {/* НАЗВАНИЕ */}
          <h3 className="text-[16px] font-semibold mt-1">
            {item.title}
          </h3>

          {/* ОПИСАНИЕ */}
          <p className="text-[13px] text-[#4A4A4A] mt-2 leading-snug max-w-[420px]">
            {item.description}
          </p>

          {/* ПАРАМЕТРЫ */}
          <div className="text-[13px] text-[#4A4A4A] mt-4 space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-[10px] h-[10px] bg-[#9B9B9B] rounded-sm"></div>
              <span>{item.distance}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[10px] h-[10px] bg-[#9B9B9B] rounded-sm"></div>
              <span>{item.time}</span>
            </div>
          </div>
        </div>

        {/* ─── КНОПКИ (точно как в макете) ───────────────────────────── */}
        <div className="flex gap-4 mt-6">

          <button className="flex-1 bg-[#D9D9D9] py-3 rounded-lg text-[14px] text-[#2F2F2F] shadow-sm">
            Подробнее
          </button>

          <button className="flex-1 bg-[#E4E4E4] py-3 rounded-lg text-[14px] text-[#2F2F2F] shadow-sm">
            Забронировать сейчас
          </button>

        </div>
      </div>
    </div>
  );
}
