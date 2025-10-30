import { useMemo, useState } from 'react'
import edenHero from '../../../assets/eden-hero.png'
import { Button, TopBar } from '../../../components'

const MARKS = [100, 200, 300, 400, 500, 600]

export default function StepSix({ onBack, onNext, percent = 92 }) {
    const [value, setValue] = useState(200)

    const pct = useMemo(() => {
        const min = MARKS[0]
        const max = MARKS[MARKS.length - 1]
        const clamped = Math.max(min, Math.min(max, value))
        return ((clamped - min) / (max - min)) * 100
    }, [value])

    return (
        <div className="min-h-screen bg-surface text-text flex justify-center">
            <div className="w-full max-w-6xl px-4 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
                {/* Left image (desktop) */}
                <div className="hidden md:flex items-end justify-center">
                    <div className="aspect-[4/5] w-full">
                        <img src={edenHero} alt="EDEN Assistant" />
                    </div>
                </div>

                {/* Ruler UI */}
                <div className="flex flex-col md:justify-between justify-start items-center md:items-start h-full w-full max-w-md mx-auto">
                    <div className="w-full max-w-md">
                        <TopBar percent={percent} onBack={onBack} />
                        <h2 className="text-lg md:text-2xl font-semibold mb-6 text-center md:text-right">
                            ועכשיו בואי נחליט מה הקצב השבועי הכנון בשבילך להשגת המטרה לטווח הארוך
                        </h2>

                        <div className="mt-4 flex items-start gap-6">
                            {/* Recommended label */}
                            <div className="shrink-0 hidden md:block">
                                <div className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm">
                                    המלצת הצוות המקצועי
                                </div>
                            </div>

                            {/* Ruler column */}
                            <div className="relative">
                                <div className="rounded-xl bg-primaryBack p-3">
                                    {MARKS.map((m) => (
                                        <button
                                            key={m}
                                            onClick={() => setValue(m)}
                                            className={`block w-32 text-right rounded-md px-3 py-2 mb-2 last:mb-0 transition ${value === m ? 'bg-success text-white' : 'bg-surface text-text'}`}
                                        >
                                            גרם {m}
                                        </button>
                                    ))}
                                </div>

                                {/* center highlight box (value) */}
                                <div
                                    className="absolute inset-y-0 -left-40 hidden md:flex items-center"
                                    style={{ top: `${(MARKS.indexOf(value) / (MARKS.length - 1)) * 100}%`, transform: 'translateY(-50%)' }}
                                >
                                    <div className="rounded-lg border border-success bg-primary px-3 py-1 text-sm">
                                        בחירה שלי
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 text-center text-lg">
                            נשאר רק: <span className="font-extrabold text-2xl">18</span> שבועות להגעת היעד
                        </div>
                    </div>

                    <div className="w-full max-w-md mt-8">
                        <Button onClick={onNext} className="w-full rounded-[28px] bg-primary text-success hover:bg-success hover:text-white py-3 shadow-sm">להמשיך</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


