'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold hover:text-yellow-300 transition-colors">
          ZoraName Studio
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/create" className="text-white hover:text-yellow-300 transition-colors">
            Create
          </Link>
          <Link href="/explore" className="text-white hover:text-yellow-300 transition-colors">
            Explore
          </Link>
          <Link href="/dao" className="text-white hover:text-yellow-300 transition-colors">
            DAO
          </Link>
          <Link href="/connect" className="text-white hover:text-yellow-300 transition-colors">
            Connect Wallet
          </Link>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-blue-600 p-4 space-y-4">
            <Link href="/create" className="block text-white hover:text-yellow-300 transition-colors">
              Create
            </Link>
            <Link href="/explore" className="block text-white hover:text-yellow-300 transition-colors">
              Explore
            </Link>
            <Link href="/dao" className="block text-white hover:text-yellow-300 transition-colors">
              DAO
            </Link>
            <Link href="/connect" className="block text-white hover:text-yellow-300 transition-colors">
              Connect Wallet
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
