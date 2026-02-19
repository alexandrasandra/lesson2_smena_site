import { VacancyCard } from '@/components/smena'
import { SectionWrapper } from './SectionWrapper'

export function VacancySection() {
  return (
    <SectionWrapper id="vacancy" title="09 Vacancy Cards">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <VacancyCard
          title="Кассир в гипермаркет"
          partner="auchan"
          profession="kassir"
          professionVariant={1}
          salary="55 000 ₽"
          location="Санкт-Петербург, Невский р-н"
          status="success"
          statusText="Активна"
          schedule="Сменный"
        />
        <VacancyCard
          title="Повар горячего цеха"
          partner="azbuka_vkusa"
          profession="povar"
          professionVariant={2}
          salary="65 000 ₽"
          location="Санкт-Петербург, Центр"
          status="processing"
          statusText="Новая"
          schedule="5/2"
        />
        <VacancyCard
          title="Комплектовщик склада"
          partner="magnit"
          profession="komplektovshik_sklad"
          professionVariant={1}
          salary="48 000 ₽"
          location="Санкт-Петербург, Мурино"
          status="warning"
          statusText="Скоро закроется"
          schedule="2/2"
        />
        <VacancyCard
          title="Пекарь в супермаркет"
          partner="lenta"
          profession="pecar"
          professionVariant={3}
          salary="52 000 ₽"
          location="Санкт-Петербург, Купчино"
          status="success"
          statusText="Активна"
          schedule="Сменный"
        />
        <VacancyCard
          title="Упаковщик"
          partner="spar"
          profession="upakivshik"
          professionVariant={1}
          salary="44 000 ₽"
          location="Санкт-Петербург, Пушкин"
          status="success"
          statusText="Активна"
          schedule="4/3"
        />
        <VacancyCard
          title="Комплектовщик"
          partner="lenta"
          profession="komplectovshik"
          professionVariant={1}
          salary="50 000 ₽"
          location="Санкт-Петербург, Шушары"
          status="error"
          statusText="Приостановлена"
          schedule="2/2"
        />
      </div>
    </SectionWrapper>
  )
}
