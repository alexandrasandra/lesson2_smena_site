import { SmenaInput } from '@/components/smena'
import { SectionWrapper } from './SectionWrapper'

export function InputsSection() {
  return (
    <SectionWrapper id="inputs" title="06 Inputs &amp; Forms">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        <SmenaInput label="Default" placeholder="Введите текст" />
        <SmenaInput label="With helper" placeholder="Поиск вакансий" helperText="Введите название профессии" />
        <SmenaInput label="Error state" placeholder="Ошибка" status="error" helperText="Это поле обязательно" defaultValue="неверный ввод" />
        <SmenaInput label="Warning state" placeholder="Предупреждение" status="warning" helperText="Проверьте данные" />
        <SmenaInput label="Success state" placeholder="Успех" status="success" helperText="Данные верны" defaultValue="kassir@smena.app" />
        <SmenaInput label="Disabled" placeholder="Недоступно" disabled />
        <SmenaInput label="With prefix" placeholder="Поиск" prefix={<span>🔍</span>} />
        <SmenaInput label="With addon" placeholder="Сумма" addonBefore="₽" addonAfter="в час" />
      </div>
    </SectionWrapper>
  )
}
