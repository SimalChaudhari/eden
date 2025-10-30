import { useEffect, useState } from 'react'
import edenHero from '../../../assets/eden-hero.png'
import { TopBar } from '../../../components'

export default function StepSeven({ onBack, onNext, percent = 96 }) {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        let rafId = 0
        const duration = 10000
        const start = performance.now()
        const tick = (t) => {
            const elapsed = t - start
            const p = Math.min(100, Math.round((elapsed / duration) * 100))
            setProgress(p)
            if (elapsed < duration) {
                rafId = requestAnimationFrame(tick)
            } else {
                // wait 3s then move to final
                const timeout = setTimeout(() => {
                    onNext && onNext()
                }, 3000)
                return () => clearTimeout(timeout)
            }
        }
        rafId = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(rafId)
    }, [onNext])
    return (
        <div className="min-h-screen bg-surface text-text flex justify-center">
            <div className="w-full max-w-6xl px-4 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
                {/* Left image (desktop) */}
                <div className="hidden md:flex items-end justify-center">
                    <div className="aspect-[4/5] w-full">
                        <img src={edenHero} alt="EDEN Assistant" />
                    </div>
                </div>

                {/* Center progress donut */}
                <div className="flex flex-col justify-center items-center h-full w-full max-w-md mx-auto">
                    <div className="w-full max-w-md">
                        <p className="text-center mb-4">אנחנו מעבדים את כל הנתונים שלך...</p>
                        <div className="flex items-center justify-center">
                            <div className="relative h-40 w-40">
                                <svg viewBox="0 0 36 36" className="h-full w-full">
                                    <circle cx="18" cy="18" r="16" className="text-primaryBack" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <circle cx="18" cy="18" r="16" className="text-primary" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" pathLength="100" strokeDasharray="100 100" strokeDashoffset={`${100 - progress}`} />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold">{progress}%</div>
                            </div>
                        </div>
                        {/* Mobile image */}
                        <div className="md:hidden mt-6 flex items-center justify-center">
                            <div className="w-48">
                                <img src={edenHero} alt="EDEN Assistant" className="w-full object-contain" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


