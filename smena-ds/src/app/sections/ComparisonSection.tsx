import { Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const CRITERIA = [
  { label: 'Моментальные выплаты', smena: true, others: false },
  { label: 'Официальное оформление', smena: true, others: true },
  { label: 'Гибкий посменный график', smena: true, others: false },
  { label: 'Карта смен рядом с домом', smena: true, others: false },
  { label: 'Проверенные работодатели', smena: true, others: true },
  { label: 'Без резюме и собеседований', smena: true, others: false },
  { label: 'Поддержка 24/7', smena: true, others: false },
]

function CellIcon({ value }: { value: boolean }) {
  return value ? (
    <div className="w-6 h-6 rounded-full bg-smena-success-bg flex items-center justify-center mx-auto">
      <Check size={14} className="text-smena-success" strokeWidth={3} />
    </div>
  ) : (
    <div className="w-6 h-6 rounded-full bg-smena-error-bg flex items-center justify-center mx-auto">
      <X size={14} className="text-smena-error" strokeWidth={3} />
    </div>
  )
}

export function ComparisonSection() {
  return (
    <section className="py-16 md:py-20 bg-smena-bg-layout">
      <div className="max-w-[720px] mx-auto px-smena-base">
        <h2 className="text-smena-h2 font-bold text-smena-text mb-smena-xxs text-center">
          Забудьте о сложностях с{' '}
          <span className="text-smena-primary">Навигатор подработки</span>
        </h2>
        <p className="text-smena-lg text-smena-text-secondary mb-smena-xl text-center">
          Сравните возможности Smena App с другими платформами
        </p>

        <div className="rounded-smena-lg border border-smena-border overflow-hidden bg-smena-bg-container">
          <table className="w-full">
            <thead>
              <tr className="bg-smena-primary-bg">
                <th className="text-left text-smena-base font-semibold text-smena-text px-smena-base py-smena-sm" />
                <th className="text-center text-smena-base font-bold text-smena-primary px-smena-sm py-smena-sm w-[100px]">
                  Smena App
                </th>
                <th className="text-center text-smena-base font-semibold text-smena-text-secondary px-smena-sm py-smena-sm w-[100px]">
                  Другие
                </th>
              </tr>
            </thead>
            <tbody>
              {CRITERIA.map((row, i) => (
                <tr
                  key={row.label}
                  className={cn(
                    'border-t border-smena-border-secondary',
                    i % 2 === 1 && 'bg-smena-fill-secondary'
                  )}
                >
                  <td className="text-smena-base text-smena-text px-smena-base py-smena-sm">
                    {row.label}
                  </td>
                  <td className="px-smena-sm py-smena-sm">
                    <CellIcon value={row.smena} />
                  </td>
                  <td className="px-smena-sm py-smena-sm">
                    <CellIcon value={row.others} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
