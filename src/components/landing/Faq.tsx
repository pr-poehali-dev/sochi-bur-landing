import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Сколько стоит пробурить скважину?',
    a: 'Стоимость зависит от глубины, типа скважины и условий участка. Ориентир — от 2 200 ₽ за метр. Точную цену называем после осмотра.',
  },
  {
    q: 'Как узнать, на какую глубину бурить?',
    a: 'Глубину определяем по геологии района и соседним скважинам. На выезде уточняем условия именно вашего участка.',
  },
  {
    q: 'Заедет ли техника на мой участок?',
    a: 'Перед работой проверяем подъезд и место бурения. При узком заезде или уклоне подбираем подходящую технику и схему.',
  },
  {
    q: 'Сколько занимает бурение?',
    a: 'Чаще всего бурение скважины занимает 1–2 дня. Обустройство и запуск воды — ещё несколько дней в зависимости от объёма.',
  },
  {
    q: 'Вы работаете в моём районе?',
    a: 'Работаем в Сочи, Адлере, Хосте, Дагомысе, Красной Поляне и ближайших посёлках. Напишите адрес — подскажем по условиям.',
  },
];

const Faq = () => {
  return (
    <section id="faq" className="py-16 sm:py-20 bg-soft">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <span className="text-xs font-600 uppercase tracking-wide text-primary">FAQ</span>
            <h2 className="mt-2 font-display font-700 text-deep text-2xl sm:text-3xl">
              Частые вопросы
            </h2>
          </div>

          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white border border-border rounded-xl mb-3 px-5"
              >
                <AccordionTrigger className="text-left font-600 text-deep hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
