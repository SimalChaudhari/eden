import { useState } from 'react'
import edenHero from '../../assets/eden-hero.png'
import { Button } from '../../components'
import StepOne from './steps/stepOne.jsx'
import StepTwo from './steps/stepTwo.jsx'
import StepThree from './steps/stepThree.jsx'
import StepFour from './steps/stepFour.jsx'
import StepFive from './steps/stepFive.jsx'
import StepSix from './steps/stepSix.jsx'
import StepSeven from './steps/stepSeven.jsx'
import StepFinal from './steps/stepFinal.jsx'

export default function AuthPage() {
    const [step, setStep] = useState(0)
    console.log("step is", step);
    
    if (step === 1) {
        return (
            <StepOne percent={15} onBack={() => setStep(0)} onNext={() => setStep(2)} />
        )
    }
    if (step === 2) {
        return (
            <StepTwo percent={24} onBack={() => setStep(1)} onNext={() => setStep(3)} />
        )
    }
    if (step === 3) {
        return (
            <StepThree percent={52} onBack={() => setStep(2)} onNext={() => setStep(4)} />
        )
    }
    if (step === 4) {
        return (
            <StepFour percent={72} onBack={() => setStep(3)} onNext={() => setStep(5)} />
        )
    }
    if (step === 5) {
        return (
            <StepFive percent={88} onBack={() => setStep(4)} onNext={() => setStep(6)} />
        )
    }
    if (step === 6) {
        return (
            <StepSix percent={92} onBack={() => setStep(5)} onNext={() => setStep(7)} />
        )
    }
    if (step === 7) {
        return (
            <StepSeven percent={96} onBack={() => setStep(6)} onNext={() => setStep(8)} />
        )
    }
    if (step === 8) {
        return (
            <StepFinal onBack={() => setStep(7)} onNext={() => setStep(0)} />
        )
    }
    return (
        <div className="min-h-screen bg-background-neutral text-text-primary">
            <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                
                    {/* right hero (hidden on small, large visual on desktop) */}
                    <div className="hidden md:block">
                        <div className="aspect-[4/5] w-full overflow-hidden flex items-end justify-center">
                            <img src={edenHero} alt="EDEN Assistant" className="" />
                        </div>
                    </div>


                    {/* left content (centered); on mobile this becomes the whole screen with image on top */}
                    <div className="flex flex-col items-center text-center md:items-center md:text-center">
                        {/* Mobile hero */}
                        <div className="md:hidden mb-8">
                            <div className="w-48 mx-auto">
                                <img src={edenHero} alt="EDEN Assistant" className="w-full object-contain" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h1 className="text-2xl md:text-3xl font-bold text-text">!EDEN את תכירי</h1>
                            <p className="text-text font-bold">העוזרת AI האישית שלך</p>
                        </div>

                        <Button onClick={() => setStep(1)} className="mt-8 px-[28px] py-[12px] md:w-1/2 w-full rounded-[28px] bg-primary hover:bg-success text-success hover:text-white hover:border-success">
                            כניסה
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}


