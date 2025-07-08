'use client';
import Link from 'next/link';
import { useState } from 'react';

import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Left: Logo */}
        <div className="flex-1 flex items-center">
          <Link href="/" className="text-white text-2xl font-bold hover:text-yellow-300 transition-colors">
            Friend.Share
          </Link>
        </div>
   
{/*        
          <ConnectButton /> */}
       
        {/* Center: Navigation Links with Yellow Background */}
        <div className="hidden md:flex justify-center space-x-2">
          <Link href="/group" className="bg-yellow-500 text-black px-2 py-1 rounded-lg hover:bg-yellow-400 transition-colors font-semibold">
            Group
          </Link>
          <Link href="/events" className="bg-yellow-500 text-black px-2 py-1 rounded-lg hover:bg-yellow-400 transition-colors font-semibold">
            Events
          </Link>
          <Link href="/invites" className="bg-yellow-500 text-black px-2 py-1 rounded-lg hover:bg-yellow-400 transition-colors font-semibold">
            Invites
          </Link>
        </div>
      
        {/* Right: Empty space for balance */}
        <div className="flex-1"></div>
      </div>
    </nav>
  );
};

export default Navbar;


