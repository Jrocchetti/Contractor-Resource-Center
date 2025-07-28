'use client'

import { useState } from 'react'
import Link from 'next/link'
import PPGLogo from './PPGLogo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-800/90 backdrop-blur-md shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <PPGLogo className="w-16 h-10" />
            <Link href="/" className="text-xl font-bold text-gradient">
              Contractor Portal
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#resources" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
              Resources
            </Link>
            <Link href="#forms" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
              Forms
            </Link>
            <Link href="#support" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
              Support
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-primary-400 focus:outline-none transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link href="#resources" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                Resources
              </Link>
              <Link href="#forms" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                Forms
              </Link>
              <Link href="#support" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                Support
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
