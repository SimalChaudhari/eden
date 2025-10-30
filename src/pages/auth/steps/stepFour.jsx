import edenHero from '../../../assets/eden-hero.png'
import { Button, TopBar } from '../../../components'
import { useState } from 'react'
import { FaCheck } from "react-icons/fa6";

const OPTIONS = [
    { id: 'none', title: 'אני לא עובדת', desc: '' },
    { id: 'sedentary', title: 'יושבת רוב היום', desc: 'עבודה משרדית כגון מחשב/טלפונים, נהיגה. כמעט ללא תנועה במהלך היום' },
    { id: 'light', title: 'פעילות קלה', desc: 'עבודה הכוללת מעט תנועה במהלך היום (הליכה קלה בין עמדות), ללא מאמץ' },
    { id: 'moderate', title: 'פעילות בינונית', desc: 'עבודה הכוללת עמידה והליכה מרובה, פעולות ידיים קלות, מאמץ קל' },
    { id: 'high', title: 'פעילות גבוהה', desc: 'עבודה פיזית: ניקיון, מחסן, מכירות שטח, שליחויות, עבודה ידנית' },
]

export default function StepFour({ onBack, onNext, percent = 72 }) {
    const [selected, setSelected] = useState('none')

    return (
        <div className="min-h-screen bg-surface text-text flex justify-center">
            <div className="w-full max-w-6xl px-4 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
                {/* Right image for desktop */}
                <div className="hidden md:flex items-end justify-center">
                    <div className="aspect-[4/5] w-full">
                        <img src={edenHero} alt="EDEN Assistant" />
                    </div>
                </div>

                {/* Form */}
                <div className="flex flex-col md:justify-between justify-start items-center md:items-start h-full w-full max-w-md mx-auto">
                    <div className="w-full max-w-md">
                        <TopBar percent={percent} onBack={onBack} />
                        <h2 className="text-lg md:text-2xl font-semibold mb-6">רמת הפעילות במהלך העבודה</h2>

                        <div className="space-y-3">
                            {OPTIONS.map(opt => (
                                <button
                                    key={opt.id}
                                    onClick={() => setSelected(opt.id)}
                                    className={`relative w-full text-right rounded-xl border p-4 transition ${selected === opt.id ? 'border-primary bg-back border-2' : 'border-border bg-surface'}`}
                                >
                                    {/* top-left checkmark */}
                                    <span className={`absolute top-2 left-2 flex items-center justify-center`}>
                                        {selected === opt.id && <FaCheck className="h-4 w-4 text-primary" />}
                                    </span>

                                    <div className="pr-6">
                                        <div className="font-semibold">{opt.title}</div>
                                        {opt.desc && <div className="text-xs text-text-muted mt-1 leading-snug">{opt.desc}</div>}
                                    </div>
                                </button>
                            ))}
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


