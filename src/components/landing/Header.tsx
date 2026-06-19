import { useState } from 'react';
import Icon from '@/components/ui/icon';

const navItems = [
  { label: 'Главная', href: '#hero' },
  { label: 'Услуги', href: '#services' },
  { label: 'Районы', href: '#regions' },
  { label: 'Доступ', href: '#access' },
  { label: 'Этапы', href: '#steps' },
  { label: 'Цены', href: '#prices' },
  { label: 'Галерея', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
];

const WHATSAPP_URL = 'https://wa.me/79000000000';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <a href="#hero" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <Icon name="Droplet" size={20} className="text-white" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-700 text-deep text-lg">Сочи Бур</div>
              <div className="text-[11px] text-muted-foreground -mt-0.5">Вода для дома под ключ</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm text-deep/80 hover:text-primary transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-whatsapp text-white px-4 py-2.5 text-sm font-500 hover:opacity-90 transition-opacity"
            >
              <Icon name="MessageCircle" size={18} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <button
              className="lg:hidden p-2 text-deep"
              onClick={() => setOpen(!open)}
              aria-label="Меню"
            >
              <Icon name={open ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-white animate-fade-in">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-deep/80 hover:text-primary border-b border-border/60 last:border-0"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
