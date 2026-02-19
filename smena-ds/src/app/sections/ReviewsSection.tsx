'use client'

import { SmenaCard } from '@/components/smena'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Star } from 'lucide-react'

const REVIEWS = [
  {
    name: 'Анна К.',
    initials: 'АК',
    role: 'Кассир, 25 лет',
    rating: 5,
    text: 'Удобное приложение! Нашла подработку рядом с домом за 10 минут. Выплаты приходят быстро, работодатели проверенные.',
  },
  {
    name: 'Дмитрий П.',
    initials: 'ДП',
    role: 'Комплектовщик, 32 года',
    rating: 5,
    text: 'Работаю через Смену уже полгода. Отличный выбор смен, можно планировать график под себя. Рекомендую!',
  },
  {
    name: 'Елена С.',
    initials: 'ЕС',
    role: 'Пекарь, 28 лет',
    rating: 4,
    text: 'Очень удобно выбирать смены на карте. Вижу, что рядом с моим домом, и сразу откликаюсь. Спасибо команде Smena!',
  },
  {
    name: 'Михаил Т.',
    initials: 'МТ',
    role: 'Упаковщик, 19 лет',
    rating: 5,
    text: 'Как студенту — идеально. Подрабатываю между парами, график гибкий, деньги на карту приходят сразу.',
  },
  {
    name: 'Ольга Н.',
    initials: 'ОН',
    role: 'Повар, 45 лет',
    rating: 5,
    text: 'Нашла подработку за один день. Всё официально, оформление через приложение. Очень довольна!',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < rating
              ? 'fill-[var(--smena-gold-5)] text-[var(--smena-gold-5)]'
              : 'text-smena-border'
          }
        />
      ))}
    </div>
  )
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 md:py-20 bg-smena-bg-container">
      <div className="max-w-[1120px] mx-auto px-smena-base">
        <h2 className="text-smena-h2 font-bold text-smena-text mb-smena-xxs text-center">
          Что говорят{' '}
          <span className="text-smena-primary">исполнители</span>{' '}
          о работе через Smena
        </h2>
        <p className="text-smena-lg text-smena-text-secondary mb-smena-xl text-center">
          Реальные отзывы наших исполнителей
        </p>

        <Carousel
          opts={{ align: 'start', loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {REVIEWS.map((review) => (
              <CarouselItem
                key={review.name}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <SmenaCard className="h-full" bordered>
                  <div className="flex items-center gap-smena-sm mb-smena-sm">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-smena-primary-bg text-smena-primary text-smena-sm font-semibold">
                        {review.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-smena-base font-semibold text-smena-text leading-tight">
                        {review.name}
                      </p>
                      <p className="text-smena-sm text-smena-text-secondary">
                        {review.role}
                      </p>
                    </div>
                  </div>
                  <StarRating rating={review.rating} />
                  <p className="text-smena-base text-smena-text-secondary mt-smena-sm leading-relaxed">
                    &laquo;{review.text}&raquo;
                  </p>
                </SmenaCard>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-5" />
            <CarouselNext className="-right-5" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
