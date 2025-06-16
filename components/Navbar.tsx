'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-10 bg-slate-900 shadow-md backdrop-blur-md bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white font-mono">
              Dev<span className="text-blue-500">Temesgen</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium">
                Home
              </Link>
              <Link href="/projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium">
                Projects
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium">
                Blog
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium">
                About
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-900 hover:text-white">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
            <Link
              href="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md font-medium"
              onClick={toggleMenu}
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;