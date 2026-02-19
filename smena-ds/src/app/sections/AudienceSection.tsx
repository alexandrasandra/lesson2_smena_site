import { SmenaCard } from '@/components/smena'
import { GraduationCap, Baby, Clock, Briefcase } from 'lucide-react'

const AUDIENCES = [
  {
    icon: GraduationCap,
    title: 'Студентам',
    description: 'Подработка между парами. Гибкий график, который подстраивается под учёбу.',
  },
  {
    icon: Baby,
    title: 'Мамам в декрете',
    description: 'Дополнительный доход без привязки к офису. Выбирайте удобные часы.',
  },
  {
    icon: Clock,
    title: 'Пенсионерам',
    description: 'Лёгкая подработка рядом с домом. Стабильный дополнительный заработок.',
  },
  {
    icon: Briefcase,
    title: 'Ищущим подработку',
    description: 'Найдите дополнительный источник дохода. Работайте в свободное время.',
  },
]

export function AudienceSection() {
  return (
    <section className="py-16 md:py-20 bg-smena-bg-layout">
      <div className="max-w-[1120px] mx-auto px-smena-base">
        <h2 className="text-smena-h2 font-bold text-smena-text mb-smena-lg text-center">
          Кому подходит{' '}
          <span className="text-smena-primary">Smena?</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-smena-base">
          {AUDIENCES.map((item) => (
            <SmenaCard key={item.title} bordered hoverable>
              <div className="w-10 h-10 rounded-smena-default bg-smena-primary-bg flex items-center justify-center mb-smena-sm">
                <item.icon className="w-5 h-5 text-smena-primary" />
              </div>
              <h3 className="text-smena-lg font-semibold text-smena-text mb-smena-xxs">
                {item.title}
              </h3>
              <p className="text-smena-base text-smena-text-secondary leading-relaxed">
                {item.description}
              </p>
            </SmenaCard>
          ))}
        </div>
      </div>
    </section>
  )
}
