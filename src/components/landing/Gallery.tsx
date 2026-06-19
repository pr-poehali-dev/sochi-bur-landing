import Icon from '@/components/ui/icon';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/7c0d7491-af60-464e-9606-cec6243a53c1/files/377a4429-7fbe-493e-ab5b-26562682c7b7.jpg';

const items = [
  { img: HERO_IMG, label: 'Буровая у частного дома' },
  { img: HERO_IMG, label: 'Работа на участке' },
  { img: HERO_IMG, label: 'Обустройство скважины' },
  { img: HERO_IMG, label: 'Запуск воды в дом' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-xl">
          <span className="text-xs font-600 uppercase tracking-wide text-primary">Галерея</span>
          <h2 className="mt-2 font-display font-700 text-deep text-2xl sm:text-3xl">
            Наши работы
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={it.img}
                alt={it.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2a45]/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center gap-1.5 text-white text-xs sm:text-sm font-500">
                <Icon name="ImageIcon" size={14} />
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
