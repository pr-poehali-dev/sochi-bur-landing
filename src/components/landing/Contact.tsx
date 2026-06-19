import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const WHATSAPP_URL = 'https://wa.me/79000000000';

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', phone: '', address: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена',
      description: 'Мы свяжемся с вами для расчёта стоимости скважины.',
    });
    setForm({ name: '', phone: '', address: '' });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-primary overflow-hidden grid lg:grid-cols-2">
          <div className="p-8 sm:p-10 text-white">
            <h2 className="font-display font-700 text-2xl sm:text-3xl">
              Рассчитаем скважину для вашего участка
            </h2>
            <p className="mt-3 text-white/85">
              Оставьте заявку — перезвоним, уточним условия и подготовим расчёт.
              Или напишите нам в WhatsApp прямо сейчас.
            </p>

            <div className="mt-7 space-y-3 text-sm">
              <a href="tel:+79000000000" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Icon name="Phone" size={18} /> +7 (900) 000-00-00
              </a>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={18} /> Сочи, Адлер, Хоста, Дагомыс, Красная Поляна
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" size={18} /> Ежедневно, 8:00 – 20:00
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-whatsapp text-white px-6 py-3 font-600 hover:opacity-90 transition-opacity"
            >
              <Icon name="MessageCircle" size={18} />
              Написать в WhatsApp
            </a>
          </div>

          <div className="bg-white p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-500 text-deep">Имя</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Как к вам обращаться"
                  className="mt-1.5 w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-500 text-deep">Телефон</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  className="mt-1.5 w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-500 text-deep">Участок / район</label>
                <input
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  placeholder="Например, Адлер, СНТ Виноградарь"
                  className="mt-1.5 w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-primary text-white py-3.5 font-600 hover:opacity-90 transition-opacity"
              >
                Получить расчёт
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
