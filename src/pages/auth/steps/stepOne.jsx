import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import edenHero from '../../../assets/eden-hero.png'
import { Button, TopBar } from '../../../components'
import { FaCheck } from "react-icons/fa6";

export default function StepOne({ onNext, onBack, percent = 15 }) {
    const [gender, setGender] = useState('female')
    const navigate = useNavigate()
    const genderOptions = [
        { key: 'female', label: 'נקבה' },
        { key: 'male', label: 'זכר' },
    ]

    return (
        <div className="min-h-screen bg-surface text-text flex justify-center">
            <div className="w-full max-w-6xl px-4 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
                {/* Removed top bar from global grid; it will live inside the form column */}

                {/* Illustration */}
                <div className="hidden md:block">
                    <div className="aspect-[4/5] w-full flex items-end justify-center">
                        <img src={edenHero} alt="EDEN Assistant" />
                    </div>
                </div>

                {/* Form */}
                <div className="flex flex-col md:justify-between justify-start h-full md:items-start items-center">
                    <div className="w-full max-w-md">
                        {/* Top bar */}
                        <TopBar percent={percent} onBack={onBack ? onBack : () => navigate(-1)} />
                        {/* Title */}

                        <h2 className="text-lg md:text-2xl font-semibold mb-6">?מה המגדר שלך</h2>

                        <div className="space-y-3">
                            {genderOptions.map((opt) => {
                                const selected = gender === opt.key
                                const selectedClasses = 'border-primary'
                                return (
                                    <button
                                        key={opt.key}
                                        type="button"
                                        onClick={() => setGender(opt.key)}
                                        className={`w-full px-4 py-3 rounded-full border flex items-center justify-between bg-back text-text ${selected ? selectedClasses : 'border-border text-text'}`}
                                    >
                                        <span className="text-sm md:text-base">{opt.label}</span>
                                        <span className={`inline-flex h-6 w-6 items-center justify-center ${selected ? ' text-primary ' : ''}`}>
                                            {selected ? <FaCheck className="h-4 w-4" /> : <span className="" />}
                                        </span>
                                    </button>
                                )
                            })}
                        </div>
                        {/* Mobile illustration (below options) */}
                        <div className="md:hidden w-64 mx-auto mb-0 mt-6">
                            <img src={edenHero} alt="EDEN Assistant" className="w-full object-contain" />
                        </div>
                    </div>

                    <div className="w-full max-w-md mt-0 md:mt-8">
                        <Button onClick={onNext ? onNext : () => navigate('/auth/step-2')} className="w-full rounded-[28px] bg-primary text-success hover:bg-success hover:text-white py-3 shadow-sm">
                            להמשיך
                        </Button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}


