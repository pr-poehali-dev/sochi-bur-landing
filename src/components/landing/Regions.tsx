import { useState } from 'react';
import Icon from '@/components/ui/icon';

type Region = {
  id: string;
  name: string;
  note: string;
  x: number;
  y: number;
};

const regions: Region[] = [
  { id: 'dagomys', name: 'Дагомыс', note: 'Прибрежная зона, частный сектор и дачные участки.', x: 22, y: 30 },
  { id: 'sochi', name: 'Сочи', note: 'Центральный район, плотная застройка, важен подъезд техники.', x: 40, y: 46 },
  { id: 'hosta', name: 'Хоста', note: 'Холмистый рельеф, много участков на уклоне.', x: 56, y: 58 },
  { id: 'adler', name: 'Адлер', note: 'Равнинная часть, удобный заезд для буровой.', x: 70, y: 70 },
  { id: 'polyana', name: 'Красная Поляна', note: 'Горная местность, сложная геология и узкие подъезды.', x: 84, y: 38 },
];

const factors = [
  { icon: 'Route', title: 'Подъезд', text: 'Сможет ли техника заехать к месту бурения.' },
  { icon: 'Mountain', title: 'Рельеф', text: 'Уклон участка и расположение площадки.' },
  { icon: 'Plug', title: 'Подключение', text: 'Где дом, вода и электричество для запуска.' },
];

const Regions = () => {
  const [active, setActive] = useState<Region>(regions[1]);

  return (
    <section id="regions" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-600 uppercase tracking-wide text-primary">Районы и геология</span>
          <h2 className="mt-2 font-display font-700 text-deep text-2xl sm:text-3xl">
            Учитываем геологию и рельеф Сочи
          </h2>
          <p className="mt-3 text-muted-foreground">
            Район важен для понимания условий, но точная смета всегда считается
            по вашему конкретному участку. Выберите направление на карте.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6 items-stretch">
          <div className="relative rounded-2xl bg-soft border border-border overflow-hidden p-4 min-h-[280px] sm:min-h-[340px]">
            <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
            <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-xs text-deep/70 bg-white/70 rounded-full px-2.5 py-1">
              <Icon name="Map" size={13} /> Зона обслуживания
            </div>

            {regions.map((r) => {
              const isActive = active.id === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => setActive(r)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${r.x}%`, top: `${r.y}%` }}
                  aria-label={r.name}
                >
                  <span
                    className={`block rounded-full transition-all ${
                      isActive
                        ? 'w-5 h-5 bg-primary ring-4 ring-primary/25'
                        : 'w-3.5 h-3.5 bg-accent group-hover:scale-125'
                    }`}
                  />
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 mt-1.5 whitespace-nowrap text-xs font-500 transition-colors ${
                      isActive ? 'text-primary' : 'text-deep/70'
                    }`}
                  >
                    {r.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col">
            <div className="rounded-2xl border border-border p-6">
              <div className="flex items-center gap-2 text-primary">
                <Icon name="MapPin" size={18} />
                <span className="font-display font-700 text-deep text-lg">{active.name}</span>
              </div>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{active.note}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {regions.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setActive(r)}
                    className={`text-xs rounded-full px-3 py-1.5 border transition-colors ${
                      active.id === r.id
                        ? 'bg-primary text-white border-primary'
                        : 'border-border text-deep/70 hover:border-primary/40'
                    }`}
                  >
                    {r.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 grid sm:grid-cols-3 gap-3">
              {factors.map((f) => (
                <div key={f.title} className="rounded-xl bg-soft p-4">
                  <Icon name={f.icon} size={20} className="text-primary" />
                  <div className="mt-2 font-600 text-deep text-sm">{f.title}</div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-snug">{f.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Regions;
