import Icon from '@/components/ui/icon';

const steps = [
  { icon: 'PhoneCall', title: 'Заявка', text: 'Оставляете заявку на сайте или в WhatsApp.' },
  { icon: 'MessageSquare', title: 'Консультация', text: 'Уточняем задачу и условия участка.' },
  { icon: 'Car', title: 'Выезд', text: 'Осматриваем участок и подъезд.' },
  { icon: 'Calculator', title: 'Смета', text: 'Фиксируем стоимость и сроки.' },
  { icon: 'Drill', title: 'Бурение', text: 'Бурим скважину и обустраиваем её.' },
  { icon: 'Droplets', title: 'Запуск', text: 'Подключаем насос и запускаем воду.' },
];

const Steps = () => {
  return (
    <section id="steps" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-xl">
          <span className="text-xs font-600 uppercase tracking-wide text-primary">Этапы работы</span>
          <h2 className="mt-2 font-display font-700 text-deep text-2xl sm:text-3xl">
            Как проходит работа
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-border p-6">
              <span className="absolute top-5 right-5 font-display font-800 text-3xl text-soft">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="w-11 h-11 rounded-xl bg-soft flex items-center justify-center">
                <Icon name={s.icon} size={22} className="text-primary" />
              </div>
              <h3 className="mt-4 font-display font-600 text-deep text-lg">{s.title}</h3>
              <p className="mt-1.5 text-muted-foreground text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
