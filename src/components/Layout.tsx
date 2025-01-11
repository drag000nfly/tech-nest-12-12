import { Search, Menu, X } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import NavMenu from './NavMenu'

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1E40AF] text-white">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold">Test Prep Insight</Link>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:text-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <NavMenu className="flex items-center space-x-6" />
              <form className="relative" role="search">
                <label htmlFor="desktop-search" className="sr-only">Search</label>
                <input
                  id="desktop-search"
                  type="search"
                  placeholder="Search"
                  className="pl-3 pr-10 py-2 rounded-lg text-black"
                />
                <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2" aria-label="Submit search">
                  <Search className="h-5 w-5 text-gray-500" />
                </button>
              </form>
            </div>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 space-y-4">
              <NavMenu className="flex flex-col space-y-4" />
              <form className="relative mt-4" role="search">
                <label htmlFor="mobile-search" className="sr-only">Search</label>
                <input
                  id="mobile-search"
                  type="search"
                  placeholder="Search"
                  className="w-full pl-3 pr-10 py-2 rounded-lg text-black"
                />
                <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2" aria-label="Submit search">
                  <Search className="h-5 w-5 text-gray-500" />
                </button>
              </form>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <Outlet />

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link to="/" className="text-2xl font-bold text-gray-800">Test Prep Insight</Link>
              <p className="mt-4">Unlike other review sites, the Test Prep Insight team actually examines and rates each educational product through detailed assessments.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/best" className="hover:text-gray-800">Guides</Link></li>
                <li><Link to="/resources" className="hover:text-gray-800">Resources</Link></li>
                <li><Link to="/reviews" className="hover:text-gray-800">Reviews</Link></li>
                <li><Link to="/comparisons" className="hover:text-gray-800">Comparisons</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Subscribe</h3>
              <form>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 mb-2"
                />
                <button
                  type="submit"
                  className="w-full bg-[#1E40AF] text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="text-center mt-8">
            © 2025 Test Prep Insight. All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  )
}
