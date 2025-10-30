import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="border-b border-gray-800">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-6">
        <Link to="/" className="text-lg font-semibold">EDEN</Link>
        <div className="flex items-center gap-4">
          <Link to="/" className="hover:text-brand">Home</Link>
          <Link to="/about" className="hover:text-brand">About</Link>
        </div>
      </nav>
    </header>
  )
}


