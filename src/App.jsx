import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Layout } from './components'
import HomePage from './pages/home/index.jsx'
import AboutPage from './pages/about/index.jsx'
import AuthPage from './pages/auth/index.jsx'
import StepOne from './pages/auth/steps/stepOne.jsx'
import StepTwo from './pages/auth/steps/stepTwo.jsx'
import StepThree from './pages/auth/steps/stepThree.jsx'
import StepFour from './pages/auth/steps/stepFour.jsx'
import StepFive from './pages/auth/steps/stepFive.jsx'
import StepSix from './pages/auth/steps/stepSix.jsx'
import StepSeven from './pages/auth/steps/stepSeven.jsx'
import StepFinal from './pages/auth/steps/stepFinal.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes without layout */}
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/auth/step-1" element={<StepOne />} />
        <Route path="/auth/step-2" element={<StepTwo />} />
        <Route path="/auth/step-3" element={<StepThree />} />
        <Route path="/auth/step-4" element={<StepFour />} />
        <Route path="/auth/step-5" element={<StepFive />} />
        <Route path="/auth/step-6" element={<StepSix />} />
        <Route path="/auth/step-7" element={<StepSeven />} />
        <Route path="/auth/step-final" element={<StepFinal />} />

        {/* User routes with layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

