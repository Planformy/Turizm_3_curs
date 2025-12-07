import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2B2F3A] text-white mt-16">
      
      {/* Основные секции */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

        {/* О портале */}
        <div>
          <h3 className="font-semibold mb-3 text-white">О туристическом портале</h3>
          <p className="text-gray-300 text-xs leading-relaxed">
            Регион, демонстрирующий природную красоту и культурное наследие Уральских гор.
          </p>
        </div>

        {/* Ссылки */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Ссылки</h3>
          <ul className="space-y-2">
            <li><Link href="/attractions" className="text-gray-300 hover:text-white">Достопримечательности</Link></li>
            <li><Link href="/stays" className="text-gray-300 hover:text-white">Где остановиться</Link></li>
            <li><Link href="/events" className="text-gray-300 hover:text-white">Календарь событий</Link></li>
            <li><Link href="/news" className="text-gray-300 hover:text-white">Новости</Link></li>
          </ul>
        </div>

        {/* Контакты */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Контакты</h3>
          <ul className="space-y-2 text-gray-300">
            <li>📞 8 351 800 80-80</li>
            <li>✉️ info@tur.ru</li>
            <li>📍 Челябинск, Россия</li>
          </ul>
        </div>

        {/* Соцсети */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Подписывайтесь на нас</h3>
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-400/40"></div>
            <div className="w-8 h-8 rounded-full bg-gray-400/40"></div>
            <div className="w-8 h-8 rounded-full bg-gray-400/40"></div>
          </div>
        </div>

      </div>

      {/* Нижняя линия */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-gray-400">
          ©2025 Тур портал Челябинской области
        </div>
      </div>

    </footer>
  );
}
