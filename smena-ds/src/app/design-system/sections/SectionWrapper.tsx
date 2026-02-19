import { cn } from '@/lib/utils'

export function SectionWrapper({ id, title, children, className }: {
  id: string
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn('py-10 scroll-mt-16', className)}>
      <h2
        className="font-bold mb-6 pb-2 border-b"
        style={{ fontSize: '24px', lineHeight: '32px', color: 'var(--smena-text)', borderColor: 'var(--smena-border)' }}
      >
        {title}
      </h2>
      {children}
    </section>
  )
}
