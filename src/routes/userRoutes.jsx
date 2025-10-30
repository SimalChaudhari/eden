import { Route } from 'react-router-dom'
import { Layout } from '../components'
import HomePage from '../pages/home/index.jsx'
import AboutPage from '../pages/about/index.jsx'

export default function UserRoutes() {
  return (
    <>
      {/* User routes WITH layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </>
  )
}


