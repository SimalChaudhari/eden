import edenHero from '../../../assets/eden-hero.png'
import { Button, TopBar } from '../../../components'
import { FaPlay } from 'react-icons/fa6'

const Card = ({ title, kcal, grams, sessions }) => (
    <div className="rounded-xl border border-border bg-surface p-4 w-56">
        <div className="text-success text-sm">יעד קלורי</div>
        <div className="text-2xl font-extrabold">{kcal}</div>
        <div className="text-text-muted text-xs mt-1">ק"ג {grams} • אימונים {sessions} לשבוע</div>
    </div>
)

export default function StepFinal({ onBack, onNext }) {
    return (
        <div className="min-h-screen bg-surface text-text flex justify-center">
            <div className="w-full max-w-6xl px-4 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
                {/* Left celebratory image */}
                <div className="hidden md:flex items-end justify-center">
                    <div className="aspect-[4/5] w-full">
                        <img src={edenHero} alt="EDEN Assistant" />
                    </div>
                </div>

                <div className="flex flex-col md:justify-between justify-start items-center md:items-start h-full w-full max-w-md mx-auto">
                    <div className="w-full max-w-md">
                        <TopBar percent={100} onBack={onBack} />
                        <h2 className="text-xl md:text-2xl font-bold mt-2">התוכנית האישית שלך מוכנה!</h2>
                        <p className="text-sm text-text-muted">אם תשמרי על ההתקדמות באיים תוך <span className="font-semibold">שבועות 18</span> תגיעי למשקל היעד.</p>

                        <div className="mt-6 flex gap-4">
                            <Card title="מומלץ" kcal={1200} grams={200} sessions={3} />
                            <Card title="תוכנית" kcal={1200} grams={200} sessions={3} />
                        </div>

                        <div className="mt-6 flex items-center gap-3">
                            <button className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary text-success">
                                <FaPlay />
                            </button>
                            <span className="text-sm">לראות סרטון הסברה</span>
                        </div>
                    </div>

                    <div className="w-full max-w-md mt-8">
                        <Button onClick={onNext} className="w-full rounded-[28px] bg-primary text-success hover:bg-success hover:text-white py-3 shadow-sm">בואי נתחיל</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


