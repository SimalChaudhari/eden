import { useState } from 'react'
import edenHero from '../../../assets/eden-hero.png'
import { Button, TopBar } from '../../../components'
import { FaPlus, FaMinus } from 'react-icons/fa6'

export default function StepThree({ onBack, onNext, percent = 52 }) {
    const [targetLoss, setTargetLoss] = useState(10) // kg to lose

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
                <div className="flex flex-col md:justify-between justify-start items-center md:items-start h-full w-full max-w-md mx-auto">
                    <div className="w-full max-w-md">
                        <TopBar percent={percent} onBack={onBack} />
                        <h2 className="text-lg md:text-2xl font-bold mb-6 text-right">?כמה משקל את מעוניינת להוריד</h2>

                        {/* Target loss selector */}
                        <div className="items-center flex flex-col">

                            <div className="flex items-center gap-3">
                                <button type="button" onClick={() => setTargetLoss(clamp(targetLoss - 1, 0, 200))} className="h-8 w-8 rounded-full bg-primary flex items-center justify-center"><FaMinus className='text-success' /></button>
                                <span className="min-w-[4rem] text-center text-lg font-bold"> {targetLoss} <span className="text-sm text-text-muted font-semibold">ק״ג</span> </span>
                                <button type="button" onClick={() => setTargetLoss(clamp(targetLoss + 1, 0, 200))} className="h-8 w-8 rounded-full bg-primary flex items-center justify-center"><FaPlus className='text-success' /></button>
                            </div>
                        </div>

                        <h3 className="text-center font-semibold mb-3">BMI-ה</h3>
                        {/* BMI indicator */}
                        <div className="mt-8 w-full relative pt-28 h-96 ">
                            {/* --- Callouts and stems --- */}
                            <span
                                className="absolute"
                                style={{ left: '65%', bottom: '20%', height: '83px' }}
                            >
                                <span className="block w-[3px] h-full rounded-full mt-2" style={{ background: '#F2994A' }}></span>
                            </span>
                            <span
                                className="absolute"
                                style={{ left: '30%', bottom: '20%', height: '53px' }}
                            >
                                <span className="block w-[3px] h-full rounded-full mt-2" style={{ background: '#27AE60' }}></span>
                            </span>

                            {/* --- Callout boxes --- */}
                            <div className="absolute left-[65%] bottom-40 -translate-x-1/2">
                                <div className="rounded-xl border border-[#F2C094] bg-[#FFF5E9] px-4 py-3 shadow-sm text-center">
                                    <div className="text-xs text-text-muted">
                                        ק"ג
                                        <span className="font-extrabold md:text-xl text-sm text-text ml-1">75.0</span>
                                    </div>
                                    {/* <p className="text-sm text-success mt-1">text</p> */}
                                    <div className="md:text-xl text-sm font-extrabold text-text mt-1">27.4</div>
                                    <div className="md:text-sm text-xs text-text-muted">BMI נוכחי</div>
                                </div>

                                <span className="absolute" style={{ left: '48%', bottom: '-10%' }}>
                                    <span className="block h-2 w-2 rounded-full" style={{ background: '#F2994A' }} />
                                </span>

                            </div>

                            <div className="absolute left-[30%] bottom-32 -translate-x-1/2">
                                <div className="rounded-xl border border-[#BDE9B4] bg-[#EEFFE9] px-4 py-3 shadow-sm text-center">
                                    <div className="text-sm ">
                                        ק"ג
                                        <span className="font-bold md:text-xl text-sm ml-1">65.0</span>
                                    </div>
                                    {/* <span className="text-sm text-success mt-1">text</span> */}
                                    <div className="md:text-xl text-sm font-bold mt-1">24.2</div>
                                    <div className="md:text-sm text-xs text-[#27AE60]">BMI יעד</div>
                                </div>

                                <span className="absolute" style={{ left: '48%', bottom: '-10%' }}>
                                    <span className="block h-2 w-2 rounded-full" style={{ background: '#27AE60' }} />
                                </span>

                            </div>

                            {/* --- ✅ Bottom section (bar + legend) --- */}
                            <div className="absolute bottom-4 left-0 w-full">
                                {/* gradient bar */}
                                <div
                                    className="relative w-full h-5 rounded-full overflow-hidden"
                                    style={{
                                        background:
                                            'linear-gradient(90deg,#2D9CDB 0%,#27AE60 35%,#F2C94C 55%,#F2994A 70%,#EB5757 100%)',
                                    }}
                                >

                                </div>

                                {/* legend below bar */}
                                <div className="mt-2 grid grid-cols-5 md:gap-2 text-xs text-right">

                                    <div className="flex items-center gap-1 justify-center">
                                        תת משקל
                                        <span className="h-2 w-2 rounded-full" style={{ background: '#2D9CDB' }} />
                                    </div>
                                    <div className="flex items-center gap-1 justify-center">
                                        תקין
                                        <span className="h-2 w-2 rounded-full" style={{ background: '#27AE60' }} />
                                    </div>
                                    <div className="flex items-center gap-1 justify-center">
                                        עודף
                                        <span className="h-2 w-2 rounded-full" style={{ background: '#F2C94C' }} />
                                    </div>
                                    <div className="flex items-center gap-1 justify-center">
                                        השמנה
                                        <span className="h-2 w-2 rounded-full" style={{ background: '#F2994A' }} />
                                    </div>
                                    <div className="flex items-center gap-1 justify-center">
                                        השמנה חמורה
                                        <span className="h-2 w-2 rounded-full" style={{ background: '#EB5757' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Mobile illustration */}
                    <div className="hidden w-64 mx-auto mb-0 mt-6">
                        <img src={edenHero} alt="EDEN Assistant" className="w-full object-contain" />
                    </div>

                    {/* CTA */}
                    <div className="w-full max-w-md mt-0 md:mt-8">
                        <Button onClick={onNext} className="w-full rounded-[28px] bg-primary text-success hover:bg-success hover:text-white py-3 shadow-sm">להמשיך</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}


