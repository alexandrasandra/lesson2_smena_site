'use client'

import Image from 'next/image'
import { APP_SCREENSHOTS } from '@/lib/assets'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function CalculatorCard() {
  return (
    <div className="bg-smena-bg-container rounded-smena-lg shadow-smena-modal p-smena-lg">
      <h3 className="text-smena-h4 font-bold text-smena-text mb-smena-base">
        Рассчитайте свой доход
      </h3>

      <div className="flex flex-col gap-smena-sm">
        {/* City dropdown */}
        <div>
          <label className="text-smena-sm text-smena-text-secondary mb-1 block">Город</label>
          <Select>
            <SelectTrigger className="w-full h-control-lg rounded-smena-default border-smena-border text-smena-base">
              <SelectValue placeholder="Выберите город" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="spb">Санкт-Петербург</SelectItem>
              <SelectItem value="msk">Москва</SelectItem>
              <SelectItem value="nsk">Новосибирск</SelectItem>
              <SelectItem value="ekb">Екатеринбург</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Profession dropdown */}
        <div>
          <label className="text-smena-sm text-smena-text-secondary mb-1 block">Профессия</label>
          <Select>
            <SelectTrigger className="w-full h-control-lg rounded-smena-default border-smena-border text-smena-base">
              <SelectValue placeholder="Выберите профессию" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="kassir">Кассир</SelectItem>
              <SelectItem value="komplektovshik">Комплектовщик</SelectItem>
              <SelectItem value="povar">Повар</SelectItem>
              <SelectItem value="pekar">Пекарь</SelectItem>
              <SelectItem value="upakovshik">Упаковщик</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tasks per month dropdown */}
        <div>
          <label className="text-smena-sm text-smena-text-secondary mb-1 block">
            Количество заданий в месяц
          </label>
          <Select>
            <SelectTrigger className="w-full h-control-lg rounded-smena-default border-smena-border text-smena-base">
              <SelectValue placeholder="Выберите количество" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10 заданий</SelectItem>
              <SelectItem value="20">20 заданий</SelectItem>
              <SelectItem value="30">30 заданий</SelectItem>
              <SelectItem value="40">40 заданий</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Income output */}
      <div className="mt-smena-base pt-smena-base border-t border-smena-border-secondary">
        <p className="text-smena-sm text-smena-text-secondary mb-1">Ваш доход</p>
        <p className="text-[36px] font-bold text-smena-primary leading-tight">
          54 000 &#8381;
        </p>
        <p className="text-smena-sm text-smena-text-tertiary">в месяц</p>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--smena-blue-5)] via-smena-primary to-[var(--smena-blue-7)] py-12 md:py-16">
      <div className="max-w-[1120px] mx-auto px-smena-base">
        <div className="grid md:grid-cols-2 gap-smena-xl items-start">
          {/* Left: text content + calculator */}
          <div>
            <div className="text-white mb-smena-lg">
              <h1 className="text-[32px] md:text-[42px] font-bold leading-[1.15] mb-smena-base tracking-tight">
                Подработка рядом:
                <br />
                ваш доход{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">начинается здесь</span>
                  <span className="absolute bottom-1 left-0 right-0 h-3 bg-[var(--smena-gold-4)]/40 rounded-sm -z-0" />
                </span>
              </h1>
              <p className="text-smena-lg text-white/80 max-w-[420px] leading-relaxed">
                Находите подработку рядом с домом. Гибкий график, быстрые выплаты, проверенные работодатели.
              </p>
            </div>

            <CalculatorCard />
          </div>

          {/* Right: phone screenshots */}
          <div className="relative flex justify-center items-end gap-4 mt-8 md:mt-12">
            <div className="relative w-[180px] h-[370px] md:w-[210px] md:h-[430px] rounded-[24px] overflow-hidden shadow-smena-modal border-[3px] border-white/20">
              <Image
                src={APP_SCREENSHOTS.searchList}
                alt="Smena — поиск смен"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative w-[180px] h-[370px] md:w-[210px] md:h-[430px] rounded-[24px] overflow-hidden shadow-smena-modal border-[3px] border-white/20 translate-y-6">
              <Image
                src={APP_SCREENSHOTS.vacancy}
                alt="Smena — карточка вакансии"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/[0.04]" />
      <div className="absolute top-1/2 -left-16 w-72 h-72 rounded-full bg-white/[0.04]" />
      <div className="absolute bottom-10 right-1/4 w-4 h-4 rounded-full bg-white/20" />
      <div className="absolute top-20 left-1/3 w-3 h-3 rounded-full bg-white/15" />
    </section>
  )
}
