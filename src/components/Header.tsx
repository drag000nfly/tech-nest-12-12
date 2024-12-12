import React from 'react';
import { Menu, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              TechNest
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/reviews" className="text-gray-300 hover:text-purple-400 transition">Reviews</Link>
            <Link to="/categories" className="text-gray-300 hover:text-purple-400 transition">Categories</Link>
            <Link to="/comparisons" className="text-gray-300 hover:text-purple-400 transition">Comparisons</Link>
            <Link to="/news" className="text-gray-300 hover:text-purple-400 transition">News</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-400 cursor-pointer hover:text-purple-400 transition" />
            <User className="w-5 h-5 text-gray-400 cursor-pointer hover:text-purple-400 transition" />
            <Menu className="w-5 h-5 text-gray-400 md:hidden cursor-pointer hover:text-purple-400 transition" />
          </div>
        </div>
      </div>
    </header>
  );
}