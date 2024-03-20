import React, { useState } from 'react';
import logo from '../assets/profile-img.png';

function Navbar() {
  const [hoverIndex, setHoverIndex] = useState(null);

  // Navlinks
  const navLinks = [
    { text: 'Works', href: '#' },
    { text: 'About', href: '#' },
    { text: 'Contact', href: '#' },
  ];

  return (
    <header className="fixed top-3 left-3 right-3 rounded-md z-50 flex justify-between items-center p-2 backdrop-blur-md bg-white/30 border border-white/30">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Ali Sajad profile image"
          className="rounded-md"
          width={40}
          height={40}
        />
        <span className="hidden sm:block font-bold text-gray-800 uppercase">
          Ali Sajad
        </span>
      </div>

      <nav className="space-x-4">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className={`hover:text-gray-800 transition duration-500 sm:text-lg font-semibold antialiased lowercase ${
              hoverIndex !== null && hoverIndex !== index
                ? 'text-gray-300'
                : 'text-gray-600'
            }`}
          >
            {link.text}.
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
