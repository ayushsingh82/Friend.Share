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
       
       
       
        <div className="hidden md:flex flex-1 justify-end space-x-6">
          <Link href="/group" className="text-white hover:text-yellow-300 transition-colors">
            Group
          </Link>
          <Link href="/event" className="text-white hover:text-yellow-300 transition-colors">
            Event
          </Link>
        
        </div>
      
      
      </div>
    </nav>
  );
};

export default Navbar;


