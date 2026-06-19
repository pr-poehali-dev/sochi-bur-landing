import { useState, useCallback, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const IMG_RIG =
  'https://cdn.poehali.dev/projects/7c0d7491-af60-464e-9606-cec6243a53c1/files/377a4429-7fbe-493e-ab5b-26562682c7b7.jpg';
const IMG_WELLHEAD =
  'https://cdn.poehali.dev/projects/7c0d7491-af60-464e-9606-cec6243a53c1/files/f78559f5-a016-4ff9-b807-b3e42cf1feec.jpg';
const IMG_PUMP =
  'https://cdn.poehali.dev/projects/7c0d7491-af60-464e-9606-cec6243a53c1/files/d1ab8d30-e25a-48f0-823c-5d56dda7f7bd.jpg';

const items = [
  { img: IMG_RIG, label: 'Буровая у частного дома' },
  { img: IMG_WELLHEAD, label: 'Оголовок скважины' },
  { img: IMG_PUMP, label: 'Насосное оборудование' },
  { img: IMG_RIG, label: 'Работа на участке' },
  { img: IMG_WELLHEAD, label: 'Обустройство скважины' },
  { img: IMG_PUMP, label: 'Запуск воды в дом' },
];

const Gallery = () => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const prev = useCallback(
    () => setActive((i) => (i - 1 + items.length) % items.length),
    [],
  );
  const next = useCallback(() => setActive((i) => (i + 1) % items.length), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, prev, next]);

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-xl">
          <span className="text-xs font-600 uppercase tracking-wide text-primary">Галерея</span>
          <h2 className="mt-2 font-display font-700 text-deep text-2xl sm:text-3xl">Наши работы</h2>
          <p className="mt-3 text-muted-foreground">
            Нажмите на фото, чтобы открыть его крупнее.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-[1.6fr_1fr] gap-4">
          <button
            onClick={() => setOpen(true)}
            className="group relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto"
          >
            <img
              src={items[active].img}
              alt={items[active].label}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2a45]/75 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between text-white">
              <span className="font-500 text-sm sm:text-base">{items[active].label}</span>
              <span className="inline-flex items-center gap-1.5 text-xs bg-white/20 backdrop-blur rounded-full px-3 py-1.5">
                <Icon name="Maximize2" size={14} /> Открыть
              </span>
            </div>
          </button>

          <div className="grid grid-cols-3 lg:grid-cols-2 gap-3 content-start">
            {items.map((it, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative rounded-xl overflow-hidden aspect-square transition-all ${
                  active === i ? 'ring-2 ring-primary ring-offset-2' : 'opacity-80 hover:opacity-100'
                }`}
              >
                <img src={it.img} alt={it.label} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
            onClick={() => setOpen(false)}
            aria-label="Закрыть"
          >
            <Icon name="X" size={22} />
          </button>

          <button
            className="absolute left-4 w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Назад"
          >
            <Icon name="ChevronLeft" size={24} />
          </button>

          <figure className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={items[active].img}
              alt={items[active].label}
              className="w-full max-h-[80vh] object-contain rounded-2xl"
            />
            <figcaption className="mt-3 text-center text-white/90 text-sm">
              {items[active].label} · {active + 1} / {items.length}
            </figcaption>
          </figure>

          <button
            className="absolute right-4 w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Вперёд"
          >
            <Icon name="ChevronRight" size={24} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
