import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-deep text-white/80" style={{ backgroundColor: 'hsl(var(--brand-deep))' }}>
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <Icon name="Droplet" size={20} className="text-white" />
              </div>
              <div>
                <div className="font-display font-700 text-white text-lg">Сочи Бур</div>
                <div className="text-[11px] text-white/60 -mt-0.5">Вода для дома под ключ</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/60 max-w-xs">
              Бурение и обустройство скважин на воду в Сочи и ближайших районах.
            </p>
          </div>

          <div>
            <div className="font-600 text-white mb-3 text-sm">Разделы</div>
            <ul className="space-y-2 text-sm">
              {['Услуги', 'Районы', 'Этапы', 'Цены', 'FAQ'].map((t, i) => (
                <li key={t}>
                  <a
                    href={['#services', '#regions', '#steps', '#prices', '#faq'][i]}
                    className="hover:text-white transition-colors"
                  >
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-600 text-white mb-3 text-sm">Контакты</div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={15} /> +7 (900) 000-00-00
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={15} /> Сочи и районы
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={15} /> 8:00 – 20:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-white/50 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Сочи Бур. Все права защищены.</span>
          <span>Бурение скважин на воду в Сочи</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
