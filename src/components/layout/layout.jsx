import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-8 w-full flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}


