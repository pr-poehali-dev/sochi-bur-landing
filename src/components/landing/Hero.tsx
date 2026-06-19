import Icon from '@/components/ui/icon';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/7c0d7491-af60-464e-9606-cec6243a53c1/files/377a4429-7fbe-493e-ab5b-26562682c7b7.jpg';

const factors = [
  { icon: 'Layers', text: 'Глубина залегания воды' },
  { icon: 'Mountain', text: 'Геология и рельеф участка' },
  { icon: 'Truck', text: 'Подъезд для техники' },
];

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Бурение скважины в Сочи" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2a45]/85 via-[#0d2a45]/65 to-[#0d2a45]/35" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28">
        <div className="max-w-2xl animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1.5 text-xs sm:text-sm text-white border border-white/20">
            <Icon name="MapPin" size={14} />
            Сочи · Адлер · Хоста · Дагомыс · Красная Поляна
          </span>

          <h1 className="mt-5 font-display font-800 text-white text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Бурение скважин на воду в Сочи под ключ
          </h1>

          <p className="mt-4 text-white/85 text-base sm:text-lg max-w-xl">
            Оцениваем участок, подбираем глубину и оборудование, бурим скважину и
            запускаем воду для дома, дачи или небольшого объекта.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-6 py-3.5 font-600 hover:opacity-90 transition-opacity"
            >
              <Icon name="ClipboardList" size={18} />
              Оставить заявку
            </a>
            <a
              href="#steps"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur text-white border border-white/30 px-6 py-3.5 font-600 hover:bg-white/20 transition-colors"
            >
              Как проходит работа
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
            {['Под ключ', 'По участку', 'WhatsApp'].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Icon name="Check" size={16} className="text-accent" />
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 max-w-2xl rounded-2xl bg-white/95 backdrop-blur p-4 sm:p-5 shadow-lg">
          <div className="text-xs font-600 uppercase tracking-wide text-primary mb-3">
            Что влияет на расчёт
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {factors.map((f) => (
              <div key={f.text} className="flex items-center gap-2.5">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-soft flex items-center justify-center">
                  <Icon name={f.icon} size={18} className="text-primary" />
                </div>
                <span className="text-sm text-deep leading-snug">{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
