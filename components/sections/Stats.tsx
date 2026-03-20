'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 30, suffix: '+', label: 'Années d\'expérience' },
  { value: 500, suffix: '+', label: 'Projets réalisés' },
  { value: 100, suffix: '%', label: 'Clients satisfaits' },
  { value: 8, suffix: '', label: 'Départements couverts' },
]

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const startTime = Date.now()
          const timer = setInterval(() => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOutQuad = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(easeOutQuad * end))

            if (progress === 1) {
              clearInterval(timer)
            }
          }, 16)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return <span ref={countRef}>{count}</span>
}

export default function Stats() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, var(--color-accent) 35px, var(--color-accent) 36px)',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center relative"
            >
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-24 bg-steel/30" />
              )}
              <div className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-accent mb-1 sm:mb-2">
                <CountUp end={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-text-muted text-[10px] xs:text-xs md:text-sm uppercase tracking-wide sm:tracking-widest font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
