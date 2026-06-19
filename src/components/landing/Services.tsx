import Icon from '@/components/ui/icon';

const services = [
  { icon: 'Drill', title: 'Бурение скважин', text: 'Подбираем глубину и диаметр под ваш участок и потребности в воде.' },
  { icon: 'Settings', title: 'Обустройство', text: 'Кессон или адаптер, оголовок, герметизация и подготовка к подключению.' },
  { icon: 'Gauge', title: 'Насосное оборудование', text: 'Подбор и установка насоса нужной производительности и напора.' },
  { icon: 'Home', title: 'Водоснабжение дома', text: 'Прокладка трассы, гидроаккумулятор, автоматика и ввод воды в дом.' },
  { icon: 'Search', title: 'Диагностика', text: 'Проверка существующих скважин, дебита и качества воды.' },
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-soft">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-xl">
          <span className="text-xs font-600 uppercase tracking-wide text-primary">Услуги</span>
          <h2 className="mt-2 font-display font-700 text-deep text-2xl sm:text-3xl">
            Полный цикл работ с водой
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl bg-white border border-border p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-soft flex items-center justify-center shrink-0">
                  <Icon name={s.icon} size={20} className="text-primary" />
                </div>
                <h3 className="font-display font-600 text-deep">{s.title}</h3>
              </div>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
