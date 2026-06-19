import Icon from '@/components/ui/icon';

const plans = [
  {
    title: 'Скважина «на песок»',
    range: 'от 2 200 ₽',
    unit: 'за метр',
    featured: false,
    points: ['Небольшая глубина', 'Для дачи и полива', 'Быстрый монтаж'],
  },
  {
    title: 'Скважина «на известняк»',
    range: 'от 2 800 ₽',
    unit: 'за метр',
    featured: true,
    points: ['Стабильный дебит', 'Для дома круглый год', 'Чистая питьевая вода'],
  },
  {
    title: 'Обустройство под ключ',
    range: 'от 60 000 ₽',
    unit: 'комплекс',
    featured: false,
    points: ['Кессон или адаптер', 'Насос и автоматика', 'Ввод воды в дом'],
  },
];

const Prices = () => {
  return (
    <section id="prices" className="py-16 sm:py-20 bg-soft">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-600 uppercase tracking-wide text-primary">Цены</span>
          <h2 className="mt-2 font-display font-700 text-deep text-2xl sm:text-3xl">
            Ориентиры по стоимости
          </h2>
          <p className="mt-3 text-muted-foreground">
            Это примерные цифры для понимания порядка цен. Точную стоимость
            считаем после осмотра участка.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((p) => (
            <div
              key={p.title}
              className={`rounded-2xl p-6 border transition-shadow ${
                p.featured
                  ? 'bg-primary text-white border-primary shadow-lg'
                  : 'bg-white border-border'
              }`}
            >
              {p.featured && (
                <span className="inline-block text-xs font-600 bg-white/20 rounded-full px-3 py-1 mb-3">
                  Чаще выбирают
                </span>
              )}
              <h3 className={`font-display font-600 text-lg ${p.featured ? 'text-white' : 'text-deep'}`}>
                {p.title}
              </h3>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className={`font-display font-800 text-3xl ${p.featured ? 'text-white' : 'text-deep'}`}>
                  {p.range}
                </span>
                <span className={`text-sm ${p.featured ? 'text-white/70' : 'text-muted-foreground'}`}>
                  {p.unit}
                </span>
              </div>
              <ul className="mt-5 space-y-2.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className={p.featured ? 'text-white' : 'text-accent'} />
                    <span className={p.featured ? 'text-white/90' : 'text-deep/80'}>{pt}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-6 flex items-center justify-center gap-2 rounded-full py-3 text-sm font-600 transition-opacity hover:opacity-90 ${
                  p.featured ? 'bg-white text-primary' : 'bg-primary text-white'
                }`}
              >
                Рассчитать стоимость
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
