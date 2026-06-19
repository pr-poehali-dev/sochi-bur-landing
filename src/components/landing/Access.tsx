import Icon from '@/components/ui/icon';

const cases = [
  { icon: 'MoveHorizontal', title: 'Узкий подъезд', text: 'Подбираем технику и схему заезда, если к участку ведёт узкая дорога.' },
  { icon: 'TrendingUp', title: 'Участок на уклоне', text: 'Готовим площадку и фиксируем технику на склоне для безопасной работы.' },
  { icon: 'Minimize2', title: 'Мало места', text: 'Находим оптимальную точку бурения даже на компактном участке.' },
];

const Access = () => {
  return (
    <section id="access" className="py-16 sm:py-20 bg-soft">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-600 uppercase tracking-wide text-primary">Доступ техники</span>
          <h2 className="mt-2 font-display font-700 text-deep text-2xl sm:text-3xl">
            Доступ техники и подготовка участка
          </h2>
          <p className="mt-3 text-muted-foreground">
            Перед расчётом проверяем подъезд, место бурения, уклон и коммуникации —
            чтобы работа прошла без неожиданностей.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {cases.map((c) => (
            <div key={c.title} className="rounded-2xl bg-white border border-border p-6">
              <div className="w-11 h-11 rounded-xl bg-soft flex items-center justify-center">
                <Icon name={c.icon} size={22} className="text-primary" />
              </div>
              <h3 className="mt-4 font-display font-600 text-deep text-lg">{c.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Access;
