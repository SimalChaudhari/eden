import { Route } from 'react-router-dom'
import AuthPage from '../pages/auth/index.jsx'

export default function PublicRoutes() {
  return (
    <>
      {/* Public routes WITHOUT layout */}
      <Route path="/auth" element={<AuthPage />} />
    </>
  )
}


