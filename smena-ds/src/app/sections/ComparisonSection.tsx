import { Check, X } from 'lucide-react'

const OLD_WAY = [
  'Долгий поиск вакансий на сайтах',
  'Нужно резюме и собеседования',
  'Непрозрачные условия оплаты',
  'Нет гарантий официального оформления',
  'Привязка к одному работодателю',
]

const SMENA_WAY = [
  'Смены рядом с домом за 2 минуты',
  'Без резюме — начни работать сразу',
  'Прозрачная оплата после каждой смены',
  'Официальное оформление по ТК РФ',
  'Гибкий график и выбор работодателей',
]

export function ComparisonSection() {
  return (
    <section className="py-16 md:py-20 bg-smena-bg-layout">
      <div className="max-w-[900px] mx-auto px-smena-base">
        <h2 className="text-smena-h2 font-bold text-smena-text mb-smena-xxs text-center">
          Забудьте о сложностях в{' '}
          <span className="text-smena-primary">поиске подработки</span>
        </h2>
        <p className="text-smena-lg text-smena-text-secondary mb-smena-xl text-center">
          Сравните старый подход с приложением Smena
        </p>

        <div className="grid md:grid-cols-2 gap-smena-base">
          {/* Old way */}
          <div className="bg-smena-bg-container rounded-smena-lg border border-smena-border p-smena-lg shadow-smena-card">
            <div className="flex items-center gap-smena-xs mb-smena-base">
              <div className="w-8 h-8 rounded-full bg-smena-error-bg flex items-center justify-center">
                <X size={16} className="text-smena-error" strokeWidth={3} />
              </div>
              <h3 className="text-smena-lg font-bold text-smena-text">Старый способ</h3>
            </div>
            <ul className="flex flex-col gap-smena-sm">
              {OLD_WAY.map((item) => (
                <li key={item} className="flex items-start gap-smena-xs">
                  <div className="w-5 h-5 rounded-full bg-smena-error-bg flex items-center justify-center shrink-0 mt-0.5">
                    <X size={12} className="text-smena-error" strokeWidth={3} />
                  </div>
                  <span className="text-smena-base text-smena-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Smena way */}
          <div className="bg-smena-bg-container rounded-smena-lg border-2 border-smena-primary p-smena-lg shadow-smena-card relative">
            <div className="absolute -top-3 right-smena-base">
              <span className="bg-smena-primary text-white text-smena-sm font-semibold px-3 py-1 rounded-full">
                Рекомендуем
              </span>
            </div>
            <div className="flex items-center gap-smena-xs mb-smena-base">
              <div className="w-8 h-8 rounded-full bg-smena-success-bg flex items-center justify-center">
                <Check size={16} className="text-smena-success" strokeWidth={3} />
              </div>
              <h3 className="text-smena-lg font-bold text-smena-primary">В приложении Smena app</h3>
            </div>
            <ul className="flex flex-col gap-smena-sm">
              {SMENA_WAY.map((item) => (
                <li key={item} className="flex items-start gap-smena-xs">
                  <div className="w-5 h-5 rounded-full bg-smena-success-bg flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-smena-success" strokeWidth={3} />
                  </div>
                  <span className="text-smena-base text-smena-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
