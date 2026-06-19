import Icon from '@/components/ui/icon';

const items = [
  {
    icon: 'KeyRound',
    title: 'Работа под ключ',
    text: 'От первой консультации до запуска воды в доме. Вы получаете готовый результат, а не набор отдельных работ.',
  },
  {
    icon: 'UserCheck',
    title: 'Выезд специалиста',
    text: 'Осматриваем участок, проверяем подъезд и место бурения. Только после этого считаем реальную смету.',
  },
  {
    icon: 'FileText',
    title: 'Прозрачная смета',
    text: 'Фиксируем стоимость до начала работ. Без скрытых доплат и сюрпризов в процессе бурения.',
  },
];

const Advantages = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="font-display font-700 text-deep text-2xl sm:text-3xl max-w-xl">
          Сначала разбираемся в участке, потом считаем
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border p-6 hover:border-primary/40 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-soft flex items-center justify-center">
                <Icon name={item.icon} size={22} className="text-primary" />
              </div>
              <h3 className="mt-4 font-display font-600 text-deep text-lg">{item.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
