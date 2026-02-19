import Image from 'next/image'
import { SmenaButton } from '@/components/smena'
import { QR_CODE } from '@/lib/assets'
import { Download, UserPlus, Search } from 'lucide-react'

const STEPS = [
  {
    number: 1,
    icon: Download,
    title: 'Скачайте приложение',
    description: 'Установите Smena из App Store или Google Play',
  },
  {
    number: 2,
    icon: UserPlus,
    title: 'Зарегистрируйтесь',
    description: 'Быстрая регистрация за 2 минуты. Без резюме.',
  },
  {
    number: 3,
    icon: Search,
    title: 'Выберите смену',
    description: 'Найдите подработку рядом с домом и откликнитесь',
  },
]

export function InstallSection() {
  return (
    <section className="py-16 md:py-20 bg-smena-primary-bg">
      <div className="max-w-[1120px] mx-auto px-smena-base">
        <h2 className="text-smena-h2 font-bold text-smena-text mb-smena-xxs text-center">
          Всего{' '}
          <span className="text-smena-primary">3 шага</span>{' '}
          до первых денег
        </h2>
        <p className="text-smena-lg text-smena-text-secondary mb-smena-xl text-center">
          Начните зарабатывать уже сегодня
        </p>

        <div className="grid md:grid-cols-2 gap-smena-xl items-center">
          {/* Steps */}
          <div className="flex flex-col gap-smena-lg">
            {STEPS.map((step) => (
              <div key={step.number} className="flex gap-smena-base items-start">
                <div className="w-12 h-12 rounded-full bg-smena-primary text-white flex items-center justify-center shrink-0 text-smena-h4 font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-smena-lg font-semibold text-smena-text mb-1">
                    {step.title}
                  </h3>
                  <p className="text-smena-base text-smena-text-secondary">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* QR Code + buttons */}
          <div className="flex flex-col items-center gap-smena-base">
            <div className="bg-smena-bg-container p-smena-base rounded-smena-lg shadow-smena-card">
              <Image
                src={QR_CODE}
                alt="QR код для скачивания Smena"
                width={180}
                height={180}
              />
            </div>
            <p className="text-smena-sm text-smena-text-tertiary">
              Наведите камеру на QR-код
            </p>
            <div className="flex gap-smena-sm">
              <SmenaButton smenaVariant="primary" smenaSize="lg">
                App Store
              </SmenaButton>
              <SmenaButton smenaVariant="primary" smenaSize="lg">
                Google Play
              </SmenaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
