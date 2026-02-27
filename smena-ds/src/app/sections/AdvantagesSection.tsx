import { SmenaCard } from '@/components/smena'
import { Clock, Wallet, Shield, MapPin } from 'lucide-react'

const ADVANTAGES = [
  {
    icon: Clock,
    title: 'Гибкий график',
    description: 'Выбирайте смены, которые подходят именно вам. Работайте когда удобно.',
  },
  {
    icon: Wallet,
    title: 'Быстрые выплаты',
    description: 'Получайте оплату сразу после смены. Без задержек и бюрократии.',
  },
  {
    icon: Shield,
    title: 'Официальное оформление',
    description: 'Работайте легально. Все партнёры проверены и соблюдают ТК РФ.',
  },
  {
    icon: MapPin,
    title: 'Рядом с домом',
    description: 'Находите смены в пешей доступности. Экономьте время на дорогу.',
  },
]

export function AdvantagesSection() {
  return (
    <section id="advantages" className="py-16 md:py-20 bg-smena-bg-container">
      <div className="max-w-[1120px] mx-auto px-smena-base">
        <h2 className="text-smena-h2 font-bold text-smena-text mb-smena-xxs text-center">
          Подработка с комфортом,{' '}
          <span className="text-smena-primary">без подачи бумажек</span>
        </h2>
        <p className="text-smena-lg text-smena-text-secondary mb-smena-xl text-center max-w-xl mx-auto">
          Мы сделали процесс поиска подработки максимально простым и удобным
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-smena-base">
          {ADVANTAGES.map((item) => (
            <SmenaCard key={item.title} hoverable bordered={false} className="text-center shadow-none bg-smena-bg-layout">
              <div className="w-12 h-12 rounded-full bg-smena-primary-bg flex items-center justify-center mx-auto mb-smena-sm">
                <item.icon className="w-6 h-6 text-smena-primary" />
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
