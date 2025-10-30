import { useState } from 'react'
import edenHero from '../../../assets/eden-hero.png'
import { Button, TopBar } from '../../../components'
import { FaPlus, FaMinus } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

export default function StepTwo({ onBack, onNext, percent = 24 }) {
    const navigate = useNavigate()
    const [age, setAge] = useState(37)
    const [height, setHeight] = useState(1.62) // meters
    const [weight, setWeight] = useState(85) // kg

    const clamp = (v, min, max) => Math.max(min, Math.min(max, v))

    return (
        <div className="min-h-screen bg-surface text-text flex justify-center">
            <div className="w-full max-w-6xl px-4 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">

                {/* Right column — desktop illustration */}
                <div className="hidden md:flex items-end justify-center">
                    <div className="aspect-[4/5] w-full">
                        <img src={edenHero} alt="EDEN Assistant" />
                    </div>
                </div>

                {/* Left column — form */}
                <div className="flex flex-col justify-start md:justify-between items-center md:items-start h-full w-full max-w-md mx-auto">
                    <div className="w-full max-w-md">
                        <TopBar percent={percent} onBack={onBack ? onBack : () => navigate(-1)} />
                        <h2 className="text-lg md:text-2xl font-semibold mb-6 text-right">
                            גיל, משקל וגובה נוכחיים
                        </h2>
                        <div className="space-y-6 w-full items-center flex flex-col">
                            <Counter
                                label="גיל"
                                value={age}
                                onInc={() => setAge(clamp(age + 1, 1, 120))}
                                onDec={() => setAge(clamp(age - 1, 1, 120))}
                                valueClass="min-w-[4rem]"
                            />
                            <Counter
                                label="גובה"
                                value={`${height.toFixed(2)}`}
                                valueLabel="מ׳"
                                onInc={() => setHeight(clamp(parseFloat((height + 0.01).toFixed(2)), 0.5, 2.5))}
                                onDec={() => setHeight(clamp(parseFloat((height - 0.01).toFixed(2)), 0.5, 2.5))}
                                valueClass="min-w-[6rem]"
                            />
                            <Counter
                                label="משקל"
                                value={`${weight}`}
                                valueLabel="ק״ג"
                                onInc={() => setWeight(clamp(weight + 1, 25, 400))}
                                onDec={() => setWeight(clamp(weight - 1, 25, 400))}
                                valueClass="min-w-[6rem]"
                            />
                        </div>
                    </div>

                    {/* Mobile illustration */}
                    <div className="md:hidden w-64 mx-auto mb-0 mt-6">
                        <img
                            src={edenHero}
                            alt="EDEN Assistant"
                            className="w-full object-contain"
                        />
                    </div>

                    {/* CTA */}
                    <div className="w-full max-w-md mt-0 md:mt-8">
                        <Button onClick={onNext} className="w-full rounded-[28px] bg-primary text-success hover:bg-success hover:text-white py-3 shadow-sm">
                            להמשיך
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

function Counter({ label, value, valueLabel, onInc, onDec, valueClass = '' }) {
    return (
        <div className="items-center flex flex-col">
            <p className="mb-2 font-bold">{label}</p>
            <div className="flex items-center gap-3">

                <button type="button" onClick={onDec} className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                    <FaMinus className='text-success' />
                </button>

                <span className={`${valueClass} text-center text-lg font-bold`}>{value} <span className="text-sm text-text-muted font-semibold">{valueLabel}</span></span>

                <button type="button" onClick={onInc} className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                    <FaPlus className='text-success' />
                </button>
            </div>
        </div>
    )
}
