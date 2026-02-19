import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const FAQ_DATA = [
  {
    question: 'Как зарегистрироваться на сайте?',
    answer:
      'Скачайте приложение Smena из App Store или Google Play, пройдите быструю регистрацию — укажите имя, телефон и город. Никакого резюме не нужно.',
  },
  {
    question: 'Какие требования к исполнителям?',
    answer:
      'Возраст от 18 лет, наличие документов (паспорт). Опыт работы не требуется — обучение проходит на месте.',
  },
  {
    question: 'Как быстро приходят выплаты за смену?',
    answer:
      'Выплаты производятся в течение 1-3 рабочих дней после завершения смены. Деньги приходят на банковскую карту.',
  },
  {
    question: 'Можно ли выбирать удобное время для работы?',
    answer:
      'Да! Вы сами выбираете смены из доступных. Гибкий график позволяет совмещать подработку с учёбой или основной работой.',
  },
  {
    question: 'Это легально? Будет ли официальное оформление?',
    answer:
      'Да, все партнёры Smena работают официально. Оформление происходит через приложение в соответствии с ТК РФ.',
  },
  {
    question: 'Что делать, если возникли проблемы на смене?',
    answer:
      'Свяжитесь с поддержкой Smena через приложение — мы работаем 24/7 и поможем решить любой вопрос.',
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-20 bg-smena-bg-container">
      <div className="max-w-[720px] mx-auto px-smena-base">
        <h2 className="text-smena-h2 font-bold text-smena-text mb-smena-xxs text-center">
          Отвечаем честно{' '}
          <span className="text-smena-primary">на важные вопросы</span>
        </h2>
        <p className="text-smena-lg text-smena-text-secondary mb-smena-xl text-center">
          Всё, что нужно знать о работе через Smena
        </p>

        <Accordion type="single" collapsible className="w-full">
          {FAQ_DATA.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-smena-base md:text-smena-lg text-smena-text font-medium text-left hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-smena-base text-smena-text-secondary leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
