import { VacancyCard } from '@/components/smena'
import { SmenaBadge } from '@/components/smena'

const VACANCY_DATA = [
  { title: 'Кассир', partner: 'auchan' as const, profession: 'kassir' as const, salary: '35 000 ₽', location: 'м. Купчино', schedule: '2/2' },
  { title: 'Комплектовщик', partner: 'magnit' as const, profession: 'komplectovshik' as const, salary: '42 000 ₽', location: 'м. Ладожская', schedule: 'Сменный' },
  { title: 'Пекарь', partner: 'lenta' as const, profession: 'pecar' as const, salary: '38 000 ₽', location: 'м. Пр. Просвещения', schedule: '5/2' },
  { title: 'Повар', partner: 'spar' as const, profession: 'povar' as const, salary: '45 000 ₽', location: 'м. Невский проспект', schedule: 'Сменный' },
  { title: 'Упаковщик', partner: 'azbuka_vkusa' as const, profession: 'upakivshik' as const, salary: '32 000 ₽', location: 'м. Московская', schedule: '2/2' },
  { title: 'Комплектовщик склада', partner: 'auchan' as const, profession: 'komplektovshik_sklad' as const, salary: '40 000 ₽', location: 'м. Дыбенко', schedule: '5/2' },
]

const FILTERS = ['Все', 'Кассир', 'Комплектовщик', 'Повар', 'Пекарь', 'Упаковщик']

export function VacanciesSection() {
  return (
    <section id="vacancies" className="py-16 md:py-20 bg-smena-bg-layout">
      <div className="max-w-[1120px] mx-auto px-smena-base">
        <h2 className="text-smena-h2 font-bold text-smena-text mb-smena-xxs">
          Доступные смены в{' '}
          <span className="text-smena-primary">Санкт-Петербурге</span>
        </h2>
        <p className="text-smena-lg text-smena-text-secondary mb-smena-lg">
          Выберите подходящую вакансию и откликнитесь прямо сейчас
        </p>

        {/* Filter tags */}
        <div className="flex flex-wrap gap-smena-xs mb-smena-lg">
          {FILTERS.map((filter, i) => (
            <SmenaBadge
              key={filter}
              status={i === 0 ? 'processing' : 'default'}
              variant="tag"
              text={filter}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            />
          ))}
        </div>

        {/* Vacancy grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-smena-base">
          {VACANCY_DATA.map((vacancy) => (
            <VacancyCard key={vacancy.title + vacancy.partner} {...vacancy} />
          ))}
        </div>
      </div>
    </section>
  )
}
